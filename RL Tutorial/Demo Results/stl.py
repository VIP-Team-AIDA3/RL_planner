"""STL order clause for the gate race, shaped with Bounded Horizon Nominal Robustness (BHNR).

Everything that implements the BHNR order reward lives in this one file, in four sections:

    1. Constants          H_t labels (H_NONE / H_NEG / H_POS), REWARD_MODES, STL_REWARDS
    2. BHNR math          until_robustness, h_label, n_h_classes, BHNRWindow, bhnr_series      (pure: no env, no gym)
    3. Weight scaling     HOVER_RHO_HAT, hover_gain_per_step, robustness_weight, calibrate_hover_rho   (hover-aware weights)
    4. Environment        STLOrderMonitor                                                      (wraps the race env)

Per stage, with q = gates crossed so far:   target = GATES[q] (G_k, k = q + 1),  avoid = GATES[q+1] (G_{k+1})
    rho_gate_k(t)        = r1 - d(p(t), G_k)       > 0  iff within r1 of gate k
    rho_not_gate_k+1(t)  = d(p(t), G_k+1) - r2     > 0  iff farther than r2 from gate k+1
    phi_order,k          = (not near G_k+1) U (near G_k)

Robustness of that clause over ONE bounded window of states s_a .. s_b (section 2):
    rho(window) = sup_{t' in [a, b]}  min( rho_gate_k(t'),  inf_{t'' in [a, t']} rho_not_gate_k+1(t'') )
The sup and inf only look inside the window -- the difference from the full-history formulation, where one early
good state pinned the sup for the rest of the stage.

Window schedule (lengths counted in ACTIONS, so a window spans window_len + 1 states):
    window_len = 3, overlap = 0  ->  windows over states [0..3], [3..6], [6..9], ...
    window_len = 3, overlap = 1  ->  windows over states [0..3], [2..5], [4..7], ...
    stride = window_len - overlap is how many actions pass between two window closings.

STLOrderMonitor runs two separate computations side by side:

  * REWARD / H_t  -- BHNR. The until-robustness is evaluated over short overlapping windows of the trajectory
    (window_len actions, `overlap` actions shared with the previous window) rather than over the whole stage
    history. Each time a window closes the agent is paid
        reward_mode="robustness":  w * rho(window)
        reward_mode="delta":       w * (rho(window) - rho(previous window of this stage))
    and the observation's H_t is that window's class (NONE / NEG / POS by default). Between window closings H_t is
    NONE and the STL reward is 0. Windows never cross a stage boundary: crossing a gate drops any half-filled window
    and anchors a new one on the crossing position. A window scheduled to close on the crossing step itself is
    still scored, against the stage it belongs to.

  * METRIC -- the original full-stage robustness (running W = inf, H = sup over the stage, and rho_order = min over
    stages). It is NOT rewarded and NOT observed; it stays in `info` so runs are scored against the real spec and
    remain comparable with the old cumulative-dH results.

Quick start:
    from stl import STLOrderMonitor, STL_REWARDS, robustness_weight
    w = robustness_weight(f=0.5, window_len=1, overlap=0)                 # hover-safe weight for robustness mode
    env = STLOrderMonitor(race_env, REWARDS={**STL_REWARDS, "stl_order": w}, r1=3.0, r2=9.5,
                          window_len=1, overlap=0, reward_mode="robustness")
Tests: test_stl_bhnr.ipynb.
"""

from collections import deque

import numpy as np
from gymnasium import spaces

from race_env import GateSequenceMonitor, RaceEnv, point_segment_distance, segment_intersection

__all__ = ["H_NONE", "H_NEG", "H_POS", "REWARD_MODES", "STL_REWARDS",
           "until_robustness", "h_label", "n_h_classes", "BHNRWindow", "bhnr_series",
           "HOVER_RHO_HAT", "hover_gain_per_step", "robustness_weight", "calibrate_hover_rho",
           "STLOrderMonitor"]

# =====================================================================================================================
# 1. CONSTANTS
# =====================================================================================================================

# Classes of the discretised H_t observation (default 3-class version, H_BINS = (0.0,)).
H_NONE = 0  # no window closed on this step
H_NEG = 1   # a window closed with rho <= 0  (boundary counts as not satisfied)
H_POS = 2   # a window closed with rho  > 0

REWARD_MODES = ("robustness", "delta")

# "stl_order" is the weight on the BHNR term. With reward_mode="robustness" the term is w * rho, and rho
# is roughly -(distance to gate k - r1) while far from gate k, so useful weights are much smaller than
# for the old w * dH reward. Tune it (see tune-weights.ipynb) or derive it with robustness_weight().
STL_REWARDS = {"neutral": -1, "midpoint": 1000, "endpoint": 1000, "pylon_field": -300, "stl_order": 1.0}


# =====================================================================================================================
# 2. BHNR MATH  (pure functions and classes: no env, no gym; safe to test and reuse offline)
# =====================================================================================================================

def until_robustness(rho_target, rho_avoid):
    """Robustness of (not G_{k+1}) U G_k over the given sequence of per-state robustness values."""
    rho_target = np.asarray(rho_target, dtype=float)
    rho_avoid = np.asarray(rho_avoid, dtype=float)
    if rho_target.ndim != 1 or rho_target.shape != rho_avoid.shape or rho_target.size == 0:
        raise ValueError("rho_target and rho_avoid must be equal-length, non-empty 1-D sequences")
    running_avoid = np.minimum.accumulate(rho_avoid)  # inf_{t'' <= t'} rho_avoid(t'')
    return float(np.max(np.minimum(rho_target, running_avoid)))


def h_label(rho, h_bins=(0.0,)):
    """Class of a closed window's robustness: 1 + digitize(rho). Class 0 (H_NONE) is reserved for
    'no window closed', so it can never collide with a real robustness class."""
    return 1 + int(np.digitize(rho, h_bins, right=True))


def n_h_classes(h_bins=(0.0,)):
    """Size of the H_t observation: NONE + (len(h_bins) + 1) robustness classes."""
    return len(h_bins) + 2


class BHNRWindow:
    """Sliding bounded-horizon window over ONE stage's order clause.

    start() anchors the window on the stage's first state; push() feeds each following state and
    returns the window robustness on the steps where an interval closes, else None.
    """

    def __init__(self, window_len=3, overlap=0):
        window_len, overlap = int(window_len), int(overlap)
        if window_len < 1:
            raise ValueError(f"window_len must be >= 1, got {window_len}")
        if not 0 <= overlap < window_len:
            raise ValueError(f"overlap must satisfy 0 <= overlap < window_len, got overlap={overlap}, window_len={window_len}")
        self.window_len = window_len
        self.overlap = overlap
        self.stride = window_len - overlap
        self.stop()

    def stop(self):
        """Deactivate (no order clause is live)."""
        self.active = False
        self.n = 0  # actions taken since start()
        self._target = deque(maxlen=self.window_len + 1)
        self._avoid = deque(maxlen=self.window_len + 1)

    def start(self, rho_target, rho_avoid):
        """Begin a fresh window sequence anchored on the stage's first state."""
        self.stop()
        self.active = True
        self._target.append(float(rho_target))
        self._avoid.append(float(rho_avoid))

    def push(self, rho_target, rho_avoid):
        """Add the next state. Returns rho(window) if an interval closes on this state, else None."""
        if not self.active:
            return None
        self._target.append(float(rho_target))
        self._avoid.append(float(rho_avoid))
        self.n += 1
        if self.n >= self.window_len and (self.n - self.window_len) % self.stride == 0:
            return until_robustness(self._target, self._avoid)
        return None


def bhnr_series(rho_target, rho_avoid, window_len=3, overlap=0):
    """Offline helper: windowed robustness over a recorded stage.

    Returns [(t_end, rho_window), ...] where t_end is the index of the state at which each window
    closes. Handy for replaying logged trajectories and for scenario checks.
    """
    rho_target = np.asarray(rho_target, dtype=float)
    rho_avoid = np.asarray(rho_avoid, dtype=float)
    if rho_target.shape != rho_avoid.shape or rho_target.ndim != 1 or rho_target.size == 0:
        raise ValueError("rho_target and rho_avoid must be equal-length, non-empty 1-D sequences")
    window = BHNRWindow(window_len, overlap)
    window.start(rho_target[0], rho_avoid[0])
    out = []
    for t in range(1, rho_target.size):
        rho = window.push(rho_target[t], rho_avoid[t])
        if rho is not None:
            out.append((t, rho))
    return out


# =====================================================================================================================
# 3. WEIGHT SCALING  (how big can the robustness-mode weight be before hovering pays?)
# =====================================================================================================================

# Best STL reward a non-crossing hover can earn per window, measured on purt_course.yaml by calibrate_hover_rho() below.
# It is the same for every (window_len, overlap): any window of >= 2 states contains both oscillation cells.
HOVER_RHO_HAT = 2.58


def hover_gain_per_step(w, window_len, overlap, mode, rho_hat=HOVER_RHO_HAT):
    """STL reward per step an agent can farm by oscillating next to the target gate without crossing it."""
    return w * rho_hat / (window_len - overlap) if mode == "robustness" else 0.0   # delta telescopes to ~0


def robustness_weight(f, window_len, overlap, rho_hat=HOVER_RHO_HAT):
    """Weight giving hover gain = f per step, i.e. hovering nets (f - 1) against the -1 neutral step cost.
    f < 1 keeps hovering a net cost; f = 1 is exactly break-even."""
    return f * (window_len - overlap) / rho_hat


def calibrate_hover_rho(course_path, window_len=1, overlap=0, r1=3.0, r2=9.5, target=1, avoid=2):
    """Measure HOVER_RHO_HAT on a course: the best window robustness an agent can sustain by oscillating between two
    adjacent grid cells that are clear of the pylon field and whose move does NOT cross the target gate.

    Returns (rho_hat, (xy_a, xy_b)): the robustness per window and the two cells that achieve it. Any window of >= 2
    states contains both cells, so the result is the same for every (window_len, overlap) with window_len >= 1.
    """
    env = RaceEnv(course_path, CELL_SIZE_M=1.0, MAX_STEPS=400, NOISE=0)
    monitor = STLOrderMonitor(env, REWARDS=STL_REWARDS, r1=r1, r2=r2, first_stage=1)
    gate = env.GATES[target]
    cells = {}
    for idx in range(env.GRID_NX * env.GRID_NY):
        xy = env.grid_to_xy(idx)
        cells[idx] = (monitor.rho_gate(xy, target), monitor.rho_not_gate(xy, avoid), xy,
                      min(np.linalg.norm(xy - p["xy"]) for p in env.PYLONS))

    def legal(a, b):
        return (cells[a][3] > env.PYLON_FIELD_R_M and cells[b][3] > env.PYLON_FIELD_R_M
                and segment_intersection(cells[a][2], cells[b][2], gate["p1"], gate["p2"]) is None)

    nx, best = env.GRID_NX, (-np.inf, None)
    for a in cells:
        for b in (a + 1 if a % nx + 1 < nx else None, a + nx if a + nx in cells else None):   # right and up neighbours
            if b is not None and legal(a, b):
                seq = [a, b] * 30
                series = bhnr_series([cells[i][0] for i in seq], [cells[i][1] for i in seq], window_len, overlap)
                rho = float(np.mean([r for _, r in series[len(series) // 2:]]))                # steady state only
                if rho > best[0]:
                    best = (rho, (cells[a][2], cells[b][2]))
    return best


# =====================================================================================================================
# 4. ENVIRONMENT MONITOR  (wraps the race env: per-stage windows, reward, H_t observation, full-trajectory metric)
# =====================================================================================================================

class STLOrderMonitor(GateSequenceMonitor):
    def __init__(self, env, REWARDS=STL_REWARDS, r1=3.0, r2=3.0, first_stage=1,
                 window_len=3, overlap=1, reward_mode="robustness", H_BINS=None, observe_label=True):
        if r1 <= 0 or r2 <= 0:
            raise ValueError(f"r1 and r2 must be positive, got r1={r1}, r2={r2}")
        if reward_mode not in REWARD_MODES:
            raise ValueError(f"reward_mode must be one of {REWARD_MODES}, got {reward_mode!r}")
        super().__init__(env, REWARDS)
        self.r1 = float(r1)
        self.r2 = float(r2)
        # Stage 0 (target G1) starts on G1 itself, so its distance to G2 is fixed by the start position,
        # not the policy. Order clauses are scored from first_stage on (default 1: skip stage 0).
        self.first_stage = int(first_stage)
        self.reward_mode = reward_mode
        self.observe_label = bool(observe_label)   # False: H_t is never shown (plain-Q-learning control; reward unchanged)
        self.window = BHNRWindow(window_len, overlap)
        # H_BINS are thresholds on rho(window). Default (0.0,): NONE / NEG (rho <= 0) / POS (rho > 0).
        self.h_bins = (0.0,) if H_BINS is None else tuple(sorted(float(b) for b in H_BINS))

        self.observation_space = spaces.Tuple((
            env.observation_space,
            spaces.Discrete(env.n_gates + 1),
            spaces.Discrete(n_h_classes(self.h_bins)),
        ))

        self.rho_avoidance = np.inf
        self.reset_order()
        self.observe()

    # ---- STL predicates -------------------------------------------------------------------------
    def gate_distance(self, xy, gate_index):
        gate = self.env.GATES[gate_index]
        return float(point_segment_distance(xy, gate["p1"], gate["p2"]))

    def rho_gate(self, xy, gate_index):
        return self.r1 - self.gate_distance(xy, gate_index)

    def rho_not_gate(self, xy, gate_index):
        return self.gate_distance(xy, gate_index) - self.r2

    def targets(self):
        # phi_order (Eq. 21) only has pairs i = 1..N_G-1: target G_k, avoid G_k+1.
        # Stages q >= N_G-1 (target G_NG, then the return to G1) carry no order clause,
        # and stages q < first_stage are skipped.
        if self.first_stage <= self.q < self.env.n_gates - 1:
            return self.q, self.q + 1
        return None, None

    def current_xy(self):
        return self.env.grid_to_xy(self.env.state)

    # ---- stage / episode bookkeeping --------------------------------------------------------------
    def reset_stage(self):
        # Called when a stage begins (episode start or a gate crossing), with env and q already updated.
        self.W = np.inf   # metric: inf of rho_not_gate over the stage so far
        self.H = -np.inf  # metric: sup of min(rho_gate, W) over the stage so far
        self._prev_window_rho = None
        target, nxt = self.targets()
        if target is None:
            self.window.stop()
        else:
            xy = self.current_xy()
            self.window.start(self.rho_gate(xy, target), self.rho_not_gate(xy, nxt))

    def reset_order(self):
        self.rho_final = []
        self.order_history = []
        self.h_label = H_NONE
        self.reset_stage()

    def order_robustness(self):
        # Full-trajectory robustness of the order spec (metric only; never rewarded or observed)
        values = self.rho_final + ([self.H] if np.isfinite(self.H) else [])
        return float(min(values)) if values else -np.inf

    def order_reward(self, window_rho):
        weight = float(self.REWARDS["stl_order"])
        prev, self._prev_window_rho = self._prev_window_rho, window_rho
        if self.reward_mode == "delta":
            return 0.0 if prev is None else weight * (window_rho - prev)
        return weight * window_rho

    # ---- gym API ---------
    def reset(self):
        self.rho_avoidance = np.inf
        _, info = super().reset()
        self.reset_order()  # after super().reset(): needs q = 0 and the start position
        return self.observe(), info

    def step(self, action, ignore_truncation=False):
        target, nxt = self.targets()
        q_before = self.q
        _, reward, done, truncated, info = super().step(action, ignore_truncation)
        xy = info["new_xy"]
        self.rho_avoidance = min(self.rho_avoidance, info["pylon_robustness"])

        self.h_label = H_NONE
        window_rho = np.nan
        r_order = 0.0
        if target is not None:
            rho_target = self.rho_gate(xy, target)
            rho_not_next = self.rho_not_gate(xy, nxt)
            # Metric: full-stage robustness, exactly as before, but no longer rewarded.
            self.W = min(self.W, rho_not_next)
            self.H = max(self.H, min(rho_target, self.W))
            # BHNR: a closing window pays out and sets H_t; every other step leaves both at NONE / 0.
            closed = self.window.push(rho_target, rho_not_next)
            if closed is not None:
                window_rho = closed
                self.h_label = h_label(window_rho, self.h_bins)
                r_order = self.order_reward(window_rho)
        else:
            # No order clause is active: no window, H_t stays NONE
            rho_target = rho_not_next = np.nan

        info["reward_parts"]["stl_order"] = r_order
        reward += r_order
        self.reward_history[-1] = reward
        W, H = self.W, self.H
        if self.q != q_before:
            if target is not None:
                self.rho_final.append(self.H)
            self.reset_stage()  # fresh trackers + a window anchored on the crossing position
        rho_order = self.order_robustness()

        self.order_history.append({"W": W, "H": H, "rho_order": rho_order,
                                   "window_rho": window_rho, "h_label": self.h_label})
        info.update({"W": W, "H": H, "rho_target": rho_target, "rho_not_next": rho_not_next,
                     "rho_order": rho_order, "rho_final": list(self.rho_final),
                     "window_rho": window_rho, "window_closed": self.h_label != H_NONE,
                     "h_label": self.h_label,
                     "order_history": self.order_history, "rho_avoidance": self.rho_avoidance})
        return self.observe(), reward, done, truncated, info

    def get_info(self):
        return {**super().get_info(), "rho_avoidance": self.rho_avoidance}

    def observe(self):
        self.state = (int(self.env.state), int(self.q), int(self.h_label if self.observe_label else H_NONE))
        self.state_history[-1] = self.state
        return self.state

"""DubinsGateMDP -- choose where along each gate, and at what heading, to cross it.

Layers k = 0..n (n gates): layer k < n is "crossing gate k", layer n is "crossing G1 again" (finish).
A state is (k, pose_index) flattened as k * P + pose_index; an action is the pose_index to cross the
next gate at. Consecutive crossings are joined by the shortest Dubins path, so no arc in a lap is
tighter than the configured turn radius.

Leg cost (meters) = path length + lambda * pylon violation + OOB penalty per exit, where the pylon
violation is the STL robustness integral  int max(0, R_field - d(s)) ds  over the leg, with d the
distance to the nearest pylon (as in race_env.py). Touching a pylon makes the leg invalid (cost inf).
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from .config import turn_radius_from_cfg
from .course import Course, CrossingPose, crossing_poses, heading_count
from .dubins import DubinsPath, shortest_path

CRASH_REWARD = -1000.0


@dataclass
class LegMetrics:
    length_m: float
    min_pylon_dist_m: float
    collision: bool
    pylon_violation_m2: float
    oob_exits: int


def leg_metrics(path: DubinsPath, course: Course, field_radius: float, ds: float) -> LegMetrics:
    """Sample a leg every ``ds`` meters and measure pylon clearance, violation and bounds exits."""
    pts = path.sample(ds)[:, :2]
    d = np.linalg.norm(pts[:, None, :] - course.pylon_xy[None, :, :], axis=-1)   # (N, n_pylons)
    collision = bool(np.any(d < course.pylon_r[None, :]))
    nearest = d.min(axis=1)

    # Trapezoid rule over the evenly spaced samples.
    violation = np.maximum(0.0, field_radius - nearest)
    step = path.length / (len(pts) - 1) if len(pts) > 1 else 0.0
    violation_m2 = float(step * (violation.sum() - 0.5 * (violation[0] + violation[-1])))

    x_lo, x_hi, y_lo, y_hi = course.bounds
    inside = (pts[:, 0] >= x_lo) & (pts[:, 0] <= x_hi) & (pts[:, 1] >= y_lo) & (pts[:, 1] <= y_hi)
    inside = np.concatenate([[True], inside])  # the start counts as inside
    exits = int(np.sum(inside[:-1] & ~inside[1:]))

    return LegMetrics(path.length, float(nearest.min()), collision, violation_m2, exits)


class DubinsGateMDP:
    """Layered gate-crossing MDP with a precomputed transition table.

    Table arrays have shape (n, P, P): entry [k, i, j] is the leg from pose i on gate k to pose j on
    gate (k + 1) % n. Layer n-1 -> n (Gn -> G1) reuses the same geometry as any other leg.
    """

    def __init__(self, course: Course, cfg: dict, rng: np.random.Generator | None = None):
        self.course = course
        self.cfg = cfg
        self.rng = rng if rng is not None else np.random.default_rng(cfg.get("rl", {}).get("seed", 0))

        costs = cfg["costs"]
        self.radius = turn_radius_from_cfg(cfg)
        self.field_radius = float(costs["pylon_field_radius_m"]
                                  if costs.get("pylon_field_radius_m") is not None else course.gate_margin_m)
        self.pylon_weight = float(costs["pylon_penalty_m_per_m2"])
        self.oob_penalty = float(costs["oob_penalty_m"])
        self.oob_mode = costs.get("oob_mode", "penalty")
        if self.oob_mode not in ("penalty", "forbid"):
            raise ValueError(f"oob_mode must be 'penalty' or 'forbid', got {self.oob_mode!r}")
        self.p_slip = float(cfg.get("rl", {}).get("p_slip", 0.0))
        self.ds = float(cfg["discretization"]["sample_ds_m"])

        self.n_gates = len(course.gates)
        self.poses: list[list[CrossingPose]] = [crossing_poses(course, g, cfg) for g in range(self.n_gates)]
        self.P = len(self.poses[0])
        self.n_theta = heading_count(cfg)
        self.n_offsets = len(cfg["discretization"]["heading_offsets_deg"])
        self.n_u = self.P // self.n_theta
        self.n_layers = self.n_gates + 1
        self.n_states = self.n_layers * self.P
        self.n_actions = self.P

        self._precompute()
        self.state: int | None = None

    # ----- transition table -------------------------------------------------------------------
    def _precompute(self) -> None:
        n, P = self.n_gates, self.P
        shape = (n, P, P)
        self.length_m = np.zeros(shape)
        self.min_pylon_dist_m = np.zeros(shape)
        self.collision = np.zeros(shape, dtype=bool)
        self.pylon_violation_m2 = np.zeros(shape)
        self.oob_exits = np.zeros(shape, dtype=int)
        self.words = np.empty(shape, dtype="<U3")

        for k in range(n):
            src, dst = self.poses[k], self.poses[(k + 1) % n]
            for i, a in enumerate(src):
                for j, b in enumerate(dst):
                    path = shortest_path(a.pose, b.pose, self.radius)
                    m = leg_metrics(path, self.course, self.field_radius, self.ds)
                    self.length_m[k, i, j] = m.length_m
                    self.min_pylon_dist_m[k, i, j] = m.min_pylon_dist_m
                    self.collision[k, i, j] = m.collision
                    self.pylon_violation_m2[k, i, j] = m.pylon_violation_m2
                    self.oob_exits[k, i, j] = m.oob_exits
                    self.words[k, i, j] = path.word

        self.cost = self.costs(self.oob_mode)
        self.valid = np.isfinite(self.cost)

    def costs(self, oob_mode: str) -> np.ndarray:
        """Leg cost table (n, P, P) under the given OOB mode; ``inf`` marks invalid legs."""
        valid = ~self.collision
        if oob_mode == "forbid":
            valid &= self.oob_exits == 0
        cost = self.length_m + self.pylon_weight * self.pylon_violation_m2 + self.oob_penalty * self.oob_exits
        return np.where(valid, cost, np.inf)

    def leg_path(self, k: int, i: int, j: int) -> DubinsPath:
        """Re-create the Dubins path for the leg from pose i on layer k to pose j on layer k + 1."""
        a = self.poses[k % self.n_gates][i].pose
        b = self.poses[(k + 1) % self.n_gates][j].pose
        return shortest_path(a, b, self.radius)

    def crossing(self, layer: int, pose_index: int) -> CrossingPose:
        return self.poses[layer % self.n_gates][pose_index]

    # ----- state helpers ----------------------------------------------------------------------
    def decode(self, state: int) -> tuple[int, int]:
        return divmod(int(state), self.P)

    def encode(self, layer: int, pose_index: int) -> int:
        return layer * self.P + pose_index

    def is_terminal(self, state: int) -> bool:
        return self.decode(state)[0] >= self.n_gates

    def valid_actions(self, state: int) -> np.ndarray:
        """Actions with finite cost from ``state`` (empty at the terminal layer)."""
        k, i = self.decode(state)
        if k >= self.n_gates:
            return np.array([], dtype=int)
        return np.flatnonzero(self.valid[k, i])

    def neighbors(self, pose_index: int) -> list[int]:
        """Pose indices one step away: +-1 in u, or +-1 in heading within the same normal direction."""
        u, h = divmod(pose_index, self.n_theta)
        block, off = divmod(h, self.n_offsets)
        out = []
        for du, doff in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            uu, oo = u + du, off + doff
            if 0 <= uu < self.n_u and 0 <= oo < self.n_offsets:
                out.append(uu * self.n_theta + block * self.n_offsets + oo)
        return out

    # ----- gym-style interface ----------------------------------------------------------------
    def reset(self, start_pose_index: int | None = None) -> int:
        """Start at a G1 crossing pose (uniform random when ``start_pose_index`` is None)."""
        if start_pose_index is None:
            start_pose_index = int(self.rng.integers(self.P))
        self.state = self.encode(0, start_pose_index)
        return self.state

    def step(self, action: int) -> tuple[int, float, bool, dict]:
        k, i = self.decode(self.state)
        if k >= self.n_gates:
            raise RuntimeError("step() called on a finished episode; call reset()")
        intended = int(action)
        realized = intended
        if self.p_slip > 0 and self.rng.random() < self.p_slip:
            nbrs = self.neighbors(intended)
            if nbrs:
                realized = int(nbrs[self.rng.integers(len(nbrs))])

        cost = self.cost[k, i, realized]
        info = {
            "intended": intended,
            "realized": realized,
            "cost": float(cost),
            "length_m": float(self.length_m[k, i, realized]),
            "oob_exits": int(self.oob_exits[k, i, realized]),
            "min_pylon_dist_m": float(self.min_pylon_dist_m[k, i, realized]),
            "crashed": False,
        }
        self.state = self.encode(k + 1, realized)
        if not (np.isfinite(self.cost[k, i, intended]) and np.isfinite(cost)):
            info["crashed"] = True
            return self.state, CRASH_REWARD, True, info
        return self.state, -float(cost), k + 1 == self.n_gates, info

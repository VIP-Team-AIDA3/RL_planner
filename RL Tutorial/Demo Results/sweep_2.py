"""sweep.py for the continuous-kinematics course: the STL order-reward sweep on PureKinematicGrid (purt_course2.yaml).

sweep.py trains on the grid RaceEnv through stl.STLOrderMonitor, which needs the grid's integer state and grid_to_xy.
This module keeps the same workflow (jobs -> train -> evaluate -> one JSON line per job -> analysis) but runs it on
the kinematics stack from kinematics_agents.ipynb:

    STLKinematicMonitor( GateRelativeObservation( RaceRewards( PureKinematicGrid ) ) )
      ^ BHNR reward + H_t    ^ discrete tuple obs        ^ race reward, advances q    ^ physics (purt_course2.yaml)

    1. Environment   COURSE_OFFSET, START, RaceRewards, GateRelativeObservation (copied from kinematics_agents.ipynb,
                     cells 3 and 5: process pools on Windows cannot use functions defined in a notebook),
                     STLKinematicMonitor (the env glue of stl.STLOrderMonitor; the BHNR math is imported from stl.py)
    2. Run           SETTINGS, job_id, make_env, train, greedy_flight, evaluate, run_job, run_jobs
    3. Jobs          PLAIN / LABEL_ONLY / rob, phases (edit them before running)
    4. Analysis      load_results, summarize, compare, welch_t, stage_distance_table
    5. Command line

A "job" is one training run: {"mode", "window_len", "overlap", "w", "seed",
                              ["episodes", "first_stage", "label", "r2", "method"]}.
Optional keys fall back to SETTINGS. "label": false hides H_t (plain Q-learning control). Results are appended to a
.jsonl file, one line per finished job; finished jobs are skipped, so a run can be interrupted and rerun.

Differences from sweep.py, all coming from the kinematics env:
  * Q is a dense numpy table over GateRelativeObservation's bins (+ H_t), trained as in kinematics_agents.ipynb:
    rewards x 1e-3, epsilon decaying over the first half, exploration only turns, exploring starts.
  * The greedy policy swings between checkpoints, so (as in the notebook) the best checkpoint is kept and evaluated.
  * Lap quality is lap time in seconds (lap_time), not grid steps.
  * Every run also records, per stage k, the closest distance of its greedy laps to G_k+1 (stage_min_d). On the
    plain runs this is the baseline min distance used to check r2 (Note 1), so no separate baseline is needed.

Command line (from this folder):
    python sweep_2.py run screen results_kinematics.jsonl --workers 8
    python sweep_2.py analyze results_kinematics.jsonl --min-seeds 2
From a notebook:
    from sweep_2 import train, run_jobs, load_results, summarize, compare, stage_distance_table
"""

import importlib.util
import json
import os
import sys
import time
from pathlib import Path
from typing import NamedTuple

import gymnasium as gym
import numpy as np
import pandas as pd
from gymnasium import spaces

HERE = Path(__file__).resolve().parent
if str(HERE) not in sys.path:
    sys.path.insert(0, str(HERE))

from race_env import point_segment_distance
from stl import H_NONE, REWARD_MODES, BHNRWindow, h_label, n_h_classes

_spec = importlib.util.spec_from_file_location("kinematics_demo", HERE / "2D_Kinematics_Demo.py")
kinematics_demo = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(kinematics_demo)

__all__ = ["COURSE_OFFSET", "START", "CRASH_PENALTY", "RaceRewards", "GateRelativeObservation", "STLKinematicMonitor",
           "SETTINGS", "job_id", "make_env", "Trained", "train", "greedy_flight", "evaluate", "run_job", "run_jobs",
           "rob", "delta", "PLAIN", "LABEL_ONLY", "EXPERIMENTS", "experiment_jobs",
           "KEYS", "METRICS", "load_results", "summarize", "welch_t", "control_for", "compare", "stage_distance_table"]


COURSE_OFFSET = np.array([45.0, 65.0])
START = dict(x=30.0, y=57.5, speed=4.83, psi_deg=180.0)
CRASH_PENALTY = -20000.0


def segment_distances(path, centers):
    """Closest distance from each center to a polyline (vectorized race_env.pylon_distances)."""
    path = np.asarray(path, dtype=float)
    a, ab = path[:-1, None, :], np.diff(path, axis=0)[:, None, :]
    t = np.clip(np.sum((centers - a) * ab, axis=-1) / np.maximum(np.sum(ab * ab, axis=-1), 1e-12), 0.0, 1.0)
    return np.linalg.norm(centers - (a + t[..., None] * ab), axis=-1).min(axis=0)


class RaceRewards(gym.Wrapper):
    """As in the notebook, plus info["reward_parts"] (the env's reward parts and "crash") for reward accounting."""

    def step(self, action):
        obs, _, terminated, truncated, info = self.env.step(action)
        base = self.env.unwrapped
        path = base._last_step_path
        distances = segment_distances(path, np.array([p["xy"] for p in base.PYLONS]))
        hit = bool(np.any(distances <= [p["r"] for p in base.PYLONS]))
        reward, parts, event = base.calculate_reward(None, info["prev_xy"], info["new_xy"],
                                                     base.race_env.pylon_robustness(distances),
                                                     hit, info["out_of_bounds"], path=path)
        crash = CRASH_PENALTY if (hit or info["stalled"] or info["overspeed"]) else 0.0
        reward += crash
        obs[4] = base.q
        info.update(hit_pylon=hit, q=base.q, min_pylon_m=float(distances.min()),
                    reward_parts={**parts, "crash": crash}, **event)
        return obs, reward, terminated or hit or event["lap_finished"], truncated, info


class GateRelativeObservation(gym.ObservationWrapper):
    DIST_EDGES = np.array([5.0, 10.0, 20.0, 40.0])
    SPEED_EDGES = np.arange(5.0, 8.0, 0.5)
    N_BEARING, N_NEXT_BEARING = 12, 6

    def __init__(self, env):
        super().__init__(env)
        self.observation_space = spaces.MultiDiscrete([
            env.unwrapped.n_gates + 1, self.N_BEARING, len(self.DIST_EDGES) + 1,
            len(self.SPEED_EDGES) + 1, self.N_NEXT_BEARING])
        self.explore_prob = 0.0

    def reset(self, *, seed=None, options=None):
        base, rng = self.env.unwrapped, np.random.default_rng(seed)
        if rng.random() < self.explore_prob:
            start = dict(x=rng.uniform(10, base.grid_size - 11), y=rng.uniform(10, base.grid_size - 11),
                         speed=rng.uniform(base.v_cruise, 7.5), psi_deg=rng.uniform(-180, 180))
            q = int(rng.integers(base.n_gates + 1))
        else:
            start, q = START, 0
        obs, info = base.reset(seed=seed, **start)
        base.q = obs[4] = q
        return self.observation(obs), info

    @staticmethod
    def relative_bearing(target, x, y, psi, n_bins):
        d = target - np.array([x, y])
        rel = (np.arctan2(d[1], d[0]) - psi + np.pi) % (2 * np.pi) - np.pi
        return int((rel + np.pi) / (2 * np.pi) * n_bins) % n_bins, float(np.hypot(*d))

    def observation(self, obs):
        x, y, speed, psi, q = obs[:5]
        gates = self.env.unwrapped.GATES
        midpoint = lambda k: (gates[k % len(gates)]["p1"] + gates[k % len(gates)]["p2"]) / 2
        bearing, distance = self.relative_bearing(midpoint(int(q)), x, y, psi, self.N_BEARING)
        next_bearing, _ = self.relative_bearing(midpoint(int(q) + 1), x, y, psi, self.N_NEXT_BEARING)
        return (int(q), bearing, int(np.digitize(distance, self.DIST_EDGES)),
                int(np.digitize(speed, self.SPEED_EDGES)), next_bearing)


class STLKinematicMonitor(gym.Wrapper):
    """stl.STLOrderMonitor's env glue for the kinematics stack; the BHNR math (BHNRWindow, h_label) is stl.py's.

    Per stage q (gates crossed so far), scored for first_stage <= q <= n_gates - 2:
        target = GATES[q]    rho_gate     = r1 - d(p, G_k)
        avoid  = GATES[q+1]  rho_not_gate = d(p, G_k+1) - r2
    p is the true (noise-free) position after each RL action (every dt = 0.1 s). Windows are counted in actions.
    A closing window pays w * rho(window) ("robustness") or w * (rho - previous rho) ("delta") and sets H_t, which is
    appended to the observation (always NONE when observe_label=False). The full-stage robustness rho_order is in
    info as a metric only, as in stl.py.
    """

    def __init__(self, env, w, r1, r2, window_len, overlap, reward_mode, first_stage, h_bins=(0.0,),
                 observe_label=True):
        super().__init__(env)
        if r1 <= 0 or r2 <= 0:
            raise ValueError(f"r1 and r2 must be positive, got r1={r1}, r2={r2}")
        if reward_mode not in REWARD_MODES:
            raise ValueError(f"reward_mode must be one of {REWARD_MODES}, got {reward_mode!r}")
        self.w, self.r1, self.r2 = float(w), float(r1), float(r2)
        self.reward_mode = reward_mode
        self.first_stage = int(first_stage)
        self.h_bins = tuple(sorted(float(b) for b in h_bins))
        self.observe_label = bool(observe_label)
        self.window = BHNRWindow(window_len, overlap)
        self.observation_space = spaces.MultiDiscrete([*env.observation_space.nvec, n_h_classes(self.h_bins)])
        self.h = H_NONE
        self.rho_final = []

    @property
    def explore_prob(self):
        return self.env.explore_prob

    @explore_prob.setter
    def explore_prob(self, value):
        self.env.explore_prob = value

    def _base(self):
        return self.env.unwrapped

    def gate_distance(self, xy, k):
        gate = self._base().GATES[k]
        return float(point_segment_distance(xy, gate["p1"], gate["p2"]))

    def _targets(self, q):
        if self.first_stage <= q < self._base().n_gates - 1:
            return q, q + 1
        return None, None

    def _xy(self):
        return np.asarray(self._base().state[:2], dtype=float)

    def _rho(self, xy, target, nxt):
        return self.r1 - self.gate_distance(xy, target), self.gate_distance(xy, nxt) - self.r2

    def _reset_stage(self):
        self.W, self.H, self._prev_rho = np.inf, -np.inf, None
        target, nxt = self._targets(int(self._base().q))
        if target is None:
            self.window.stop()
        else:
            self.window.start(*self._rho(self._xy(), target, nxt))

    def order_robustness(self):
        values = self.rho_final + ([self.H] if np.isfinite(self.H) else [])
        return float(min(values)) if values else -np.inf

    def _observe(self, obs):
        return tuple(int(v) for v in obs) + (int(self.h if self.observe_label else H_NONE),)

    def reset(self, **kwargs):
        obs, info = self.env.reset(**kwargs)
        self.rho_final, self.h = [], H_NONE
        self._reset_stage()
        return self._observe(obs), info

    def step(self, action):
        q_before = int(self._base().q)
        target, nxt = self._targets(q_before)
        obs, reward, terminated, truncated, info = self.env.step(action)

        self.h, window_rho, r_order = H_NONE, np.nan, 0.0
        if target is not None:
            rho_target, rho_not_next = self._rho(self._xy(), target, nxt)
            self.W = min(self.W, rho_not_next)
            self.H = max(self.H, min(rho_target, self.W))
            closed = self.window.push(rho_target, rho_not_next)
            if closed is not None:
                window_rho = closed
                self.h = h_label(closed, self.h_bins)
                prev, self._prev_rho = self._prev_rho, closed
                if self.reward_mode == "delta":
                    r_order = 0.0 if prev is None else self.w * (closed - prev)
                else:
                    r_order = self.w * closed
        else:
            rho_target = rho_not_next = np.nan

        if int(self._base().q) != q_before:
            if target is not None:
                self.rho_final.append(self.H)
            self._reset_stage()

        info["reward_parts"]["stl_order"] = r_order
        info.update(window_rho=window_rho, h_label=self.h, rho_target=rho_target, rho_not_next=rho_not_next,
                    rho_order=self.order_robustness())
        return self._observe(obs), reward + r_order, terminated, truncated, info


SETTINGS = {
    "episodes": 40_000, "ALPHA": 0.1, "GAMMA": 0.995, "EPS_END": 0.05, "REWARD_SCALE": 1e-3, "EXPLORE_PROB": 0.5,
    "METHOD": "q_learning",
    "eval_every": 1000, "eval_seed_start": 1000, "eval_seeds": 20,
    "test_seed_start": 5000, "test_seeds": 50,
    "R1": 3.0, "R2": 10.0, "FIRST_STAGE": 0, "H_BINS": [0.0],
}

OPTIONAL_KEYS = ("episodes", "first_stage", "label", "r2", "method")

FROZEN_SETTINGS = ("ALPHA", "GAMMA", "EPS_END", "REWARD_SCALE", "EXPLORE_PROB", "eval_every", "eval_seed_start",
                   "eval_seeds", "test_seed_start", "test_seeds", "R1", "H_BINS")


def frozen_config(settings=SETTINGS):
    """The frozen part of the setup: race rewards, physics, start, observation bins, course and training settings."""
    import hashlib
    base = kinematics_demo.PureKinematicGrid(grid_size=101)
    course = Path(kinematics_demo.__file__).resolve().parents[2] / "ros2_ws/src/pylon_2026_world/purt_course2.yaml"
    return {
        "REWARDS": dict(base.REWARDS), "CRASH_PENALTY": CRASH_PENALTY,
        "physics": {"dt": base.dt, "MAX_TIME": base.MAX_TIME, "v_min": base.v_min, "v_max": base.v_max,
                    "a_max": base.a_max, "n_actions": base.action_space.n,
                    "max_turn_rate_deg_s": float(np.rad2deg(base.max_turn_rate_rad_s))},
        "START": START, "COURSE_OFFSET": COURSE_OFFSET.tolist(),
        "obs_bins": {"DIST_EDGES": GateRelativeObservation.DIST_EDGES.tolist(),
                     "SPEED_EDGES": GateRelativeObservation.SPEED_EDGES.tolist(),
                     "N_BEARING": GateRelativeObservation.N_BEARING,
                     "N_NEXT_BEARING": GateRelativeObservation.N_NEXT_BEARING},
        "course_sha1": hashlib.sha1(course.read_bytes()).hexdigest()[:12],
        "train": {k: settings[k] for k in FROZEN_SETTINGS},
    }


def config_hash(settings=SETTINGS):
    """Short fingerprint of frozen_config(); stored in every result line and checked by run_jobs()."""
    import hashlib
    return hashlib.sha1(json.dumps(frozen_config(settings), sort_keys=True, default=float).encode()).hexdigest()[:10]


def _get(job, key, settings):
    """A job's value for an optional key, falling back to SETTINGS."""
    default = {"episodes": settings["episodes"], "first_stage": settings["FIRST_STAGE"], "label": True,
               "r2": settings["R2"], "method": settings["METHOD"]}[key]
    return job.get(key, default)


def job_id(job, settings=SETTINGS):
    """Stable id of a job, with its optional keys resolved against settings (so changing SETTINGS reruns jobs)."""
    return (f"{job['mode']}|L{job['window_len']}|ov{job['overlap']}|w{float(job['w']):.4g}|s{job['seed']}"
            f"|ep{_get(job, 'episodes', settings)}|fs{_get(job, 'first_stage', settings)}"
            f"|r2{float(_get(job, 'r2', settings)):g}|{_get(job, 'method', settings)}"
            + ("" if _get(job, "label", settings) else "|nolabel"))


def make_env(job, settings=SETTINGS):
    """The full kinematics stack for one job."""
    env = kinematics_demo.PureKinematicGrid(grid_size=101)
    for pylon in env.PYLONS:
        pylon["xy"] += COURSE_OFFSET
    return STLKinematicMonitor(
        GateRelativeObservation(RaceRewards(env)),
        w=float(job["w"]), r1=settings["R1"], r2=float(_get(job, "r2", settings)),
        window_len=int(job["window_len"]), overlap=int(job["overlap"]), reward_mode=job["mode"],
        first_stage=int(_get(job, "first_stage", settings)), h_bins=settings["H_BINS"],
        observe_label=bool(_get(job, "label", settings)))


def epsilon_greedy(Q, s, eps, rng, explore_actions=None):
    if rng.random() < eps:
        if explore_actions is None:
            return int(rng.integers(Q.shape[-1]))
        return int(explore_actions[int(rng.integers(len(explore_actions)))])
    q = Q[s]
    return int(rng.choice(np.flatnonzero(q == q.max())))


def greedy_flight(env, Q, seed):
    """One greedy flight from the real start. Besides the outcome it records the STL sum, rho_order, the closest
    pylon pass and, per stage k, the closest distance to G_k+1 (for every stage, whatever first_stage is)."""
    env.explore_prob = 0.0
    rng = np.random.default_rng(seed)
    base = env.unwrapped
    s, _ = env.reset(seed=seed)
    stl, min_pylon, stage_d, done = 0.0, np.inf, {}, False
    while not done:
        q = int(base.q)
        s, _, terminated, truncated, info = env.step(epsilon_greedy(Q, s, 0.0, rng))
        stl += info["reward_parts"]["stl_order"]
        min_pylon = min(min_pylon, info["min_pylon_m"])
        if q < base.n_gates - 1:
            stage_d[q] = min(stage_d.get(q, np.inf), env.gate_distance(info["new_xy"], q + 1))
        done = terminated or truncated
    outcome = next((k for k in ("lap_finished", "hit_pylon", "out_of_bounds", "stalled", "overspeed") if info[k]),
                   "timeout")
    return dict(outcome=outcome, time=float(info["elapsed_time"]), stl=stl, rho_order=info["rho_order"],
                min_pylon=float(min_pylon), stage_d=stage_d)


def _seeds(settings, kind):
    return range(settings[f"{kind}_seed_start"], settings[f"{kind}_seed_start"] + settings[f"{kind}_seeds"])


class Trained(NamedTuple):
    """What train() returns."""
    env: STLKinematicMonitor
    Q: np.ndarray
    best_episode: int
    curve: list
    visited: int
    train_s: float
    ep: dict


def train(job, settings=SETTINGS):
    """Tabular Q-learning (or SARSA) on the kinematics stack, as in kinematics_agents.ipynb. Reproducible per seed."""
    seed, method = int(job["seed"]), _get(job, "method", settings)
    if method not in ("q_learning", "sarsa"):
        raise ValueError(f"method must be 'q_learning' or 'sarsa', got {method!r}")
    episodes = int(_get(job, "episodes", settings))
    env = make_env(job, settings)
    rng = np.random.default_rng(seed)
    Q = np.zeros((*env.observation_space.nvec, env.action_space.n), dtype=np.float32)
    visited = np.zeros(tuple(env.observation_space.nvec), dtype=bool)
    coast_actions = [i for i, (a, _) in env.unwrapped.action_to_control.items() if a == 0.0]
    eval_seeds = _seeds(settings, "eval")
    best_Q, best_score, best_episode, curve = Q.copy(), (-1, 0.0), 0, []
    ep = {k: np.zeros(episodes) for k in ("total", "stl", "gate", "progress", "pylon", "neutral", "crash", "steps", "lap")}
    scale, alpha, gamma = settings["REWARD_SCALE"], settings["ALPHA"], settings["GAMMA"]

    eval_time, t0 = 0.0, time.perf_counter()
    for e in range(episodes):
        env.explore_prob = settings["EXPLORE_PROB"]
        eps = max(settings["EPS_END"], 1.0 - (1.0 - settings["EPS_END"]) * e / (0.5 * episodes))
        s, _ = env.reset(seed=int(rng.integers(2**31)))
        visited[s] = True
        a = epsilon_greedy(Q, s, eps, rng, coast_actions)
        done = False
        while not done:
            s2, r, terminated, truncated, info = env.step(a)
            a2 = epsilon_greedy(Q, s2, eps, rng, coast_actions)
            next_value = Q[s2].max() if method == "q_learning" else Q[s2 + (a2,)]
            Q[s + (a,)] += alpha * (r * scale + gamma * next_value * (not terminated) - Q[s + (a,)])
            visited[s2] = True
            parts = info["reward_parts"]
            ep["total"][e] += r
            ep["stl"][e] += parts["stl_order"]
            ep["gate"][e] += parts["midpoint"] + parts["endpoint"]
            ep["progress"][e] += parts["progress"]
            ep["pylon"][e] += parts["pylon_field"]
            ep["neutral"][e] += parts["neutral"]
            ep["crash"][e] += parts["crash"] + parts["out_of_bounds"] + parts["overspeed"]
            ep["steps"][e] += 1
            s, a, done = s2, a2, terminated or truncated
        ep["lap"][e] = float(info["lap_finished"])

        if (e + 1) % settings["eval_every"] == 0:
            t_eval = time.perf_counter()
            flights = [greedy_flight(env, Q, sd) for sd in eval_seeds]
            times = [f["time"] for f in flights if f["outcome"] == "lap_finished"]
            score = (len(times), -np.mean(times) if times else 0.0)
            curve.append((e + 1, len(times) / len(eval_seeds)))
            if score > best_score:
                best_score, best_Q, best_episode = score, Q.copy(), e + 1
            eval_time += time.perf_counter() - t_eval
    train_s = time.perf_counter() - t0 - eval_time
    if best_score[0] <= 0:
        best_Q, best_episode = Q, 0
    return Trained(env, best_Q, best_episode, curve, int(visited.sum()), train_s, ep)


def evaluate(trained, settings=SETTINGS):
    """Greedy flights of the best checkpoint on the held-out test seeds."""
    return [greedy_flight(trained.env, trained.Q, sd) for sd in _seeds(settings, "test")]


def _first(curve, rate):
    return next((e for e, r in curve if r >= rate), np.nan)


def run_job(job, settings=SETTINGS):
    """train() + evaluate() for one job, flattened into the record stored in the results file."""
    tr = train(job, settings)
    flights = evaluate(tr, settings)
    laps = [f for f in flights if f["outcome"] == "lap_finished"]
    times = [f["time"] for f in laps]
    n_stages = tr.env.unwrapped.n_gates - 1
    stage_d = {k: [f["stage_d"][k] for f in laps if k in f["stage_d"]] for k in range(n_stages)}
    last = slice(-max(1, len(tr.ep["steps"]) // 10), None)
    mean = lambda xs, fn=np.mean: float(fn(xs)) if len(xs) else np.nan
    outcomes = pd.Series([f["outcome"] for f in flights]).value_counts().to_dict()
    return {
        **{k: job[k] for k in ("mode", "window_len", "overlap", "w", "seed")},
        **{k: _get(job, k, settings) for k in OPTIONAL_KEYS},
        "id": job_id(job, settings), "config": config_hash(settings),
        "stride": int(job["window_len"]) - int(job["overlap"]),
        "lap_rate": len(laps) / len(flights),
        "lap_time": mean(times), "lap_time_min": mean(times, np.min), "lap_time_median": mean(times, np.median),
        "rho_order": mean([f["rho_order"] for f in laps]), "rho_order_min": mean([f["rho_order"] for f in laps], np.min),
        "min_pylon": mean([f["min_pylon"] for f in laps]),
        "greedy_stl_per_lap": mean([f["stl"] for f in laps]),
        "outcomes": outcomes,
        "stage_min_d": {str(k): mean(v, np.min) for k, v in stage_d.items()},
        "stage_mean_d": {str(k): mean(v) for k, v in stage_d.items()},
        "train_s": tr.train_s, "train_steps": int(tr.ep["steps"].sum()), "states": tr.visited,
        "best_episode": tr.best_episode, "curve": tr.curve,
        "ep_to_50": _first(tr.curve, 0.5), "ep_to_90": _first(tr.curve, 0.9),
        "auc": mean([r for _, r in tr.curve]),
        **{f"tr_{k}": float(v[last].mean()) for k, v in tr.ep.items()},
    }


def run_jobs(jobs, out_path, workers=1, log=print, settings=SETTINGS):
    """Run jobs not already in out_path, appending one JSON line per finished job (safe to interrupt and rerun).
    workers > 1 runs jobs in parallel processes; keep it <= physical cores so train_s stays comparable.
    Refuses to append to a file whose runs used different frozen settings (see frozen_config): use a new file then."""
    cfg = config_hash(settings)
    done_ids = set()
    if os.path.exists(out_path):
        with open(out_path) as f:
            lines = [json.loads(line) for line in f if line.strip()]
        other = sorted({r.get("config", "missing") for r in lines} - {cfg})
        if other:
            raise RuntimeError(f"{out_path} holds runs made with different frozen settings (config {other}, now {cfg}). "
                               "Rewards, physics, start, observation bins, course or training settings changed; "
                               "write to a new results file.")
        done_ids = {r["id"] for r in lines}
    with open(Path(out_path).with_suffix(".config.json"), "w") as f:
        json.dump({"config": cfg, **frozen_config(settings)}, f, indent=1, default=float)
    todo = list({job_id(j, settings): j for j in jobs if job_id(j, settings) not in done_ids}.values())
    log(f"{len(jobs)} jobs, {len(done_ids)} results already in {out_path}, {len(todo)} to run on {workers} worker(s)")
    start = time.perf_counter()

    def finish(i, job, res):
        with open(out_path, "a") as f:
            f.write(json.dumps(res, default=float) + "\n")
        log(f"[{i}/{len(todo)}] {time.perf_counter() - start:>6.0f}s  {res['id']}: lap {res['lap_rate']:.0%}, "
            f"time {res['lap_time']:.1f}s, best ep {res['best_episode']}, train {res['train_s']:.0f}s")

    if workers <= 1:
        for i, job in enumerate(todo, start=1):
            finish(i, job, run_job(job, settings))
        return
    from concurrent.futures import ProcessPoolExecutor, as_completed
    with ProcessPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(run_job, job, settings): job for job in todo}
        for i, fut in enumerate(as_completed(futures), start=1):
            finish(i, futures[fut], fut.result())


SEEDS_2 = (67, 123)
SEEDS_3 = (67, 123, 42)
SEEDS_5 = (67, 123, 42, 7, 99)


def rob(L, ov, w):
    return dict(mode="robustness", window_len=L, overlap=ov, w=w)


def delta(L, ov, w):
    return dict(mode="delta", window_len=L, overlap=ov, w=w)


PLAIN = dict(mode="robustness", window_len=1, overlap=0, w=0, label=False)
LABEL_ONLY = lambda L, ov: dict(mode="robustness", window_len=L, overlap=ov, w=0)

R2_CONFIG = rob(5, 0, 0.1)
CONFIRM = [PLAIN, LABEL_ONLY(5, 0), rob(5, 0, 0.1)]


def screen():
    jobs = []
    for seed in SEEDS_2:
        jobs += [dict(PLAIN, seed=seed, episodes=15_000)]
        for L in (2, 5):
            jobs.append(dict(LABEL_ONLY(L, 0), seed=seed, episodes=15_000))
            jobs += [dict(rob(L, 0, w), seed=seed, episodes=15_000) for w in (0.05, 0.1, 0.2, 0.4)]
    return jobs


def r2():
    return [dict(R2_CONFIG, r2=r, seed=s) for s in SEEDS_3 for r in (7.0, 10.0, 13.0)] + \
           [dict(PLAIN, seed=s) for s in SEEDS_3]


def confirm():
    return [dict(c, seed=s) for s in SEEDS_5 for c in CONFIRM]


EXPERIMENTS = {f.__name__: f for f in (screen, r2, confirm)}


def experiment_jobs(name):
    if name not in EXPERIMENTS:
        raise ValueError(f"unknown experiment {name!r}; choose one of {sorted(EXPERIMENTS)}")
    return EXPERIMENTS[name]()


KEYS = ["cond", "mode", "window_len", "overlap", "w", "r2", "first_stage", "episodes", "method"]
METRICS = ["lap_rate", "lap_time", "lap_time_min", "rho_order", "min_pylon", "auc", "ep_to_50", "ep_to_90",
           "best_episode", "train_s", "train_steps", "states", "greedy_stl_per_lap",
           "tr_total", "tr_stl", "tr_gate", "tr_progress", "tr_pylon", "tr_neutral", "tr_crash", "tr_steps", "tr_lap"]


def load_results(path):
    with open(path) as f:
        df = pd.DataFrame([json.loads(line) for line in f if line.strip()])

    def name(r):
        if not r.label:
            return "plain"
        return "STL" if r.w != 0 else "label-only"
    df["cond"] = df.apply(name, axis=1)
    return df


def summarize(df):
    g = df.groupby(KEYS)
    out = g[METRICS].mean()
    out["n_seeds"] = g.size()
    for m in ("lap_rate", "lap_time", "auc", "train_s"):
        out[m + "_sd"] = g[m].std()
    comp = out[["tr_stl", "tr_gate", "tr_progress", "tr_pylon", "tr_neutral"]].abs()
    out["stl_share"] = comp["tr_stl"] / comp.sum(axis=1)
    return out.reset_index()


def welch_t(a, b):
    a, b = np.asarray(a, float), np.asarray(b, float)
    if len(a) < 2 or len(b) < 2:
        return np.nan
    se = np.sqrt(a.var(ddof=1) / len(a) + b.var(ddof=1) / len(b))
    return (a.mean() - b.mean()) / se if se > 0 else np.nan


def _select(df, cond, **match):
    m = df["cond"] == cond
    for k, v in match.items():
        m &= df[k] == v
    return df[m]


def control_for(df, row):
    """label-only control for an STL condition: same window, r2, first_stage and episodes if available,
    else the same stride."""
    same = dict(r2=row["r2"], first_stage=row["first_stage"], episodes=row["episodes"])
    ctrl = _select(df, "label-only", window_len=row["window_len"], overlap=row["overlap"], **same)
    if len(ctrl) >= 2:
        return ctrl
    ctrl = _select(df, "label-only", **same)
    return ctrl[(ctrl["window_len"] - ctrl["overlap"]) == row["window_len"] - row["overlap"]]


def compare(df, metric, min_seeds=2):
    """One row per STL condition: mean, difference and t vs plain (same episodes), and vs its label-only control."""
    rows = []
    for key, grp in df[df["cond"] == "STL"].groupby(KEYS):
        vals = grp[metric].dropna()
        if len(vals) < min_seeds:
            continue
        row = dict(zip(KEYS, key))
        plain = _select(df, "plain", episodes=row["episodes"])[metric].dropna()
        ctrl = control_for(df, row)[metric].dropna()
        rows.append({**{k: row[k] for k in KEYS[1:]}, "n": len(vals), "mean": vals.mean(),
                     "d_vs_plain": vals.mean() - plain.mean() if len(plain) else np.nan, "t_plain": welch_t(vals, plain),
                     "d_vs_label": vals.mean() - ctrl.mean() if len(ctrl) else np.nan, "t_label": welch_t(vals, ctrl)})
    cols = KEYS[1:] + ["n", "mean", "d_vs_plain", "t_plain", "d_vs_label", "t_label"]
    return pd.DataFrame(rows, columns=cols).sort_values(["mode", "window_len", "overlap", "w", "r2"])


def stage_distance_table(df, cond="plain"):
    """Note 1 check from the saved runs: per stage, the closest distance to G_k+1 of the greedy laps
    (min over runs and laps, and the mean of each run's min). r2 must be above the min to bind."""
    rows = []
    for _, r in df[df["cond"] == cond].iterrows():
        for k, d in r["stage_min_d"].items():
            rows.append({"stage": int(k), "min_d": d, "seed": r["seed"], "episodes": r["episodes"]})
    if not rows:
        return pd.DataFrame(columns=["stage", "min over runs (m)", "mean over runs (m)", "runs"])
    t = pd.DataFrame(rows).dropna(subset=["min_d"])
    return (t.groupby("stage")["min_d"].agg(["min", "mean", "count"])
             .rename(columns={"min": "min over runs (m)", "mean": "mean over runs (m)", "count": "runs"})
             .reset_index())


def _print_analysis(df, min_seeds, csv_path=None):
    s = summarize(df)
    if csv_path:
        s.to_csv(csv_path, index=False)
    pd.set_option("display.width", 260, "display.max_columns", 40)
    cols = ["cond", "mode", "window_len", "overlap", "w", "r2", "first_stage", "episodes", "n_seeds", "lap_rate",
            "lap_time", "lap_time_sd", "rho_order", "auc", "ep_to_90", "train_s", "tr_stl", "stl_share"]
    print(f"=== per condition (means over seeds; conditions with >= {min_seeds} seeds) ===")
    print(s[s.n_seeds >= min_seeds].sort_values(KEYS)[cols].round(3).to_string(index=False))
    for metric, note in [("lap_time", "lower = better"), ("lap_rate", "higher = better"),
                         ("auc", "higher = learns faster")]:
        out = compare(df, metric, min_seeds)
        if len(out):
            print(f"\n=== {metric} ({note}); t > 2 in magnitude is roughly significant ===")
            print(out.round(3).to_string(index=False))
    print("\n=== Note 1: closest distance to G_k+1 per stage on the plain runs ===")
    print(stage_distance_table(df).round(2).to_string(index=False))


def main(argv=None):
    import argparse
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    p_run = sub.add_parser("run", help="run a phase (or a jobs .json file); results are appended and finished jobs skipped")
    p_run.add_argument("jobs", help=f"one of {sorted(EXPERIMENTS)}, or the path of a jobs .json file")
    p_run.add_argument("results", help="results .jsonl file")
    p_run.add_argument("--workers", type=int, default=1, help="parallel processes (default 1); keep <= physical cores")
    p_an = sub.add_parser("analyze", help="per-condition table, comparisons and the Note 1 distance table")
    p_an.add_argument("results", help="results .jsonl file")
    p_an.add_argument("--min-seeds", type=int, default=2)
    p_an.add_argument("--csv", help="also write the per-condition table to this csv file")
    args = ap.parse_args(argv)
    if args.cmd == "run":
        if args.jobs in EXPERIMENTS:
            jobs = experiment_jobs(args.jobs)
        elif os.path.exists(args.jobs):
            with open(args.jobs) as f:
                jobs = json.load(f)
        else:
            ap.error(f"{args.jobs!r} is neither a phase ({', '.join(sorted(EXPERIMENTS))}) nor an existing jobs .json file")
        run_jobs(jobs, args.results, workers=args.workers, log=lambda m: print(m, flush=True))
    else:
        _print_analysis(load_results(args.results), args.min_seeds, args.csv)


if __name__ == "__main__":
    main()

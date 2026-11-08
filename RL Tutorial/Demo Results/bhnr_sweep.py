"""Sweep harness for the BHNR order reward: window_len x overlap x reward_mode x weight x seed.

Same Q-learning loop and greedy evaluation as tune-weights.ipynb, plus what the sweep needs to compare configs:
  * reward accounting     per-episode sums of every reward part (neutral / gates / pylon field / STL), so the STL
                          contribution can be compared with everything else it competes against
  * learning curve        greedy lap rate at fixed episode checkpoints (their cost is excluded from train_s)
  * noise-free lap length greedy rollout with NOISE = 0: the length of the path the policy actually learned
  * hover-aware weights   robustness_weight(): scale w with the stride so hovering never reaches break-even

Usage (resumable; one JSON line per finished job; finished jobs are skipped, so reruns just continue):
    python bhnr_sweep.py jobs.json results.jsonl --workers 8
where jobs.json is a list of {"mode", "window_len", "overlap", "w", "seed", ["episodes", "first_stage", "label"]}
(make_jobs.py writes the job lists). "label": false hides H_t from the agent (plain Q-learning control).
"""

import json
import os
import sys
import time
from collections import defaultdict

import numpy as np

from race_env import RaceEnv
# hover_gain_per_step / robustness_weight / HOVER_RHO_HAT now live in stl.py (re-imported so old imports keep working)
from stl import HOVER_RHO_HAT, STL_REWARDS, STLOrderMonitor, hover_gain_per_step, robustness_weight  # noqa: F401

COURSE_PATH = "purt_course.yaml"
SETTINGS = {"MAX_STEPS": 400, "NOISE": 0.25, "DISCOUNT_FACTOR": 0.99, "ALPHA": 0.1, "EPSILON": 0.3,
            "test_rollouts": 200, "episodes": 3000, "checkpoint_every": 250, "checkpoint_rollouts": 30,
            "CELL_SIZE": 1.0, "FIRST_STAGE": 1, "R1": 3.0, "R2": 9.5, "H_BINS": [0.0]}

# Optional job keys. They are written to the result (and to job_id) only when the job sets them, so results saved
# before these existed keep the same ids and a resumed sweep does not rerun them.
OPTIONAL_KEYS = ("first_stage", "label")


def job_id(job, default_episodes=SETTINGS["episodes"]):
    """Stable id of a job. `default_episodes` is the episode count of jobs that don't set their own."""
    base = (f"{job['mode']}|L{job['window_len']}|ov{job['overlap']}|w{job['w']:.4g}|s{job['seed']}"
            f"|ep{job.get('episodes', default_episodes)}")
    if "first_stage" in job:
        base += f"|fs{job['first_stage']}"
    if "label" in job and not job["label"]:
        base += "|nolabel"
    return base


def _greedy(Q, state, n_actions):
    return int(np.argmax(Q[state])) if state in Q else np.random.randint(n_actions)


def _rollouts(monitor, Q, n):
    """n greedy rollouts under the monitor's current noise setting; returns per-lap stats for finished laps."""
    laps, rho_order, rho_avoid, stl_sums = [], [], [], []
    for _ in range(n):
        state, _ = monitor.reset()
        stl = 0.0
        while True:
            state, _, done, truncated, info = monitor.step(_greedy(Q, state, monitor.action_space.n))
            stl += info["reward_parts"]["stl_order"]
            if done or truncated:
                break
        if info["lap_finished"]:
            laps.append(len(monitor.reward_history))
            rho_order.append(info["rho_order"])
            rho_avoid.append(info["rho_avoidance"])
            stl_sums.append(stl)
    return laps, rho_order, rho_avoid, stl_sums


def _isolated(fn):
    """Run fn() without disturbing the training RNG stream, so checkpoints don't change what gets trained."""
    state = np.random.get_state()
    try:
        return fn()
    finally:
        np.random.set_state(state)


def run_job(job, course_path=COURSE_PATH, settings=SETTINGS):
    mode, L, ov, w, seed = job["mode"], int(job["window_len"]), int(job["overlap"]), float(job["w"]), int(job["seed"])
    episodes = int(job.get("episodes", settings["episodes"]))
    np.random.seed(seed)
    env = RaceEnv(course_path, CELL_SIZE_M=settings["CELL_SIZE"], MAX_STEPS=settings["MAX_STEPS"], NOISE=settings["NOISE"])
    # default: the notebook's convention (w = 0 includes stage 0 so the metric covers it); jobs may override
    stages_from = int(job.get("first_stage", 0 if w == 0 else settings["FIRST_STAGE"]))
    monitor = STLOrderMonitor(env, REWARDS={**STL_REWARDS, "stl_order": w}, r1=settings["R1"], r2=settings["R2"], first_stage=stages_from,
                              window_len=L, overlap=ov, reward_mode=mode, H_BINS=settings["H_BINS"],
                              observe_label=bool(job.get("label", True)))
    n_actions = monitor.action_space.n
    Q = defaultdict(lambda: np.random.random(n_actions))
    visited = set()

    ep_total, ep_stl, ep_gate, ep_pylon, ep_steps, ep_lap = (np.zeros(episodes) for _ in range(6))
    curve, eval_time, t0 = [], 0.0, time.perf_counter()
    for ep in range(episodes):
        state, _ = monitor.reset()
        visited.add(state)
        while True:
            action = np.random.randint(n_actions) if np.random.random() < settings["EPSILON"] else int(np.argmax(Q[state]))
            nxt, reward, done, truncated, info = monitor.step(action)
            Q[state][action] += settings["ALPHA"] * (reward + settings["DISCOUNT_FACTOR"] * np.max(Q[nxt]) * (1 - done) - Q[state][action])
            visited.add(nxt)
            parts = info["reward_parts"]
            ep_total[ep] += reward
            ep_stl[ep] += parts["stl_order"]
            ep_gate[ep] += parts["midpoint"] + parts["endpoint"]
            ep_pylon[ep] += parts["pylon_field"]
            ep_steps[ep] += 1
            state = nxt
            if done or truncated:
                break
        ep_lap[ep] = float(info["lap_finished"])
        if (ep + 1) % settings["checkpoint_every"] == 0:
            t_eval = time.perf_counter()
            laps = _isolated(lambda: _rollouts(monitor, Q, settings["checkpoint_rollouts"])[0])
            curve.append((ep + 1, len(laps) / settings["checkpoint_rollouts"]))
            eval_time += time.perf_counter() - t_eval
    train_s = time.perf_counter() - t0 - eval_time

    # ---- final evaluation: same protocol as the notebook (noisy env, greedy policy) ------------------------
    laps, rho_order, rho_avoid, stl_sums = _isolated(lambda: _rollouts(monitor, Q, settings["test_rollouts"]))
    # ---- noise-free greedy rollout: length of the path the policy actually learned ---------------------------
    monitor.env.NOISE = 0
    nf_laps, *_ = _isolated(lambda: _rollouts(monitor, Q, 1))
    monitor.env.NOISE = settings["NOISE"]

    last = slice(-500, None)
    stride = L - ov
    ep90 = next((e for e, rate in curve if rate >= 0.9), np.nan)
    finished = bool(laps)
    return {
        **{k: job[k] for k in ("mode", "window_len", "overlap", "w", "seed") + OPTIONAL_KEYS if k in job},
        "episodes": episodes, "stride": stride,
        "hover_gain_per_step": hover_gain_per_step(w, L, ov, mode),
        # outcome
        "lap_rate": len(laps) / settings["test_rollouts"],
        "lap_steps": float(np.mean(laps)) if finished else np.nan,
        "lap_steps_min": int(np.min(laps)) if finished else np.nan,
        "lap_steps_median": float(np.median(laps)) if finished else np.nan,
        "noisefree_lap_steps": int(nf_laps[0]) if nf_laps else np.nan,
        "rho_order": float(np.mean(rho_order)) if finished else np.nan,
        "rho_order_min": float(np.min(rho_order)) if finished else np.nan,
        "rho_avoidance": float(np.mean(rho_avoid)) if finished else np.nan,
        "rho_avoidance_min": float(np.min(rho_avoid)) if finished else np.nan,
        "greedy_stl_per_lap": float(np.mean(stl_sums)) if finished else np.nan,
        # cost / learning speed
        "train_s": train_s, "train_steps": int(ep_steps.sum()), "states": len(visited),
        "ep_to_90": ep90, "curve": curve,
        # reward contribution during the last 500 training episodes (per-episode means)
        "tr_total": float(ep_total[last].mean()), "tr_stl": float(ep_stl[last].mean()),
        "tr_gate": float(ep_gate[last].mean()), "tr_pylon": float(ep_pylon[last].mean()),
        "tr_neutral": float(-ep_steps[last].mean()), "tr_steps": float(ep_steps[last].mean()),
        "tr_lap_rate": float(ep_lap[last].mean()),
    }


def run_jobs(jobs, out_path, workers=1, log=print, course_path=COURSE_PATH, settings=SETTINGS):
    """Run jobs not already in out_path, appending one JSON line per finished job (safe to interrupt and rerun).
    workers > 1 runs jobs in parallel processes; keep it <= physical cores so train_s stays comparable."""
    done_ids = set()
    if os.path.exists(out_path):
        with open(out_path) as f:
            done_ids = {job_id(json.loads(line)) for line in f if line.strip()}
    todo = [j for j in jobs if job_id(j, settings["episodes"]) not in done_ids]
    log(f"{len(jobs)} jobs, {len(done_ids)} results already in {out_path}, {len(todo)} to run on {workers} worker(s)")
    start = time.perf_counter()

    def finish(i, job, res):
        with open(out_path, "a") as f:          # only the main process writes, so lines never interleave
            f.write(json.dumps(res) + "\n")
        log(f"[{i}/{len(todo)}] {time.perf_counter() - start:>6.0f}s  {job_id(job, settings['episodes'])}: lap {res['lap_rate']:.0%}, "
            f"steps {res['lap_steps']:.1f} (nf {res['noisefree_lap_steps']}), train {res['train_s']:.0f}s")

    if workers <= 1:
        for i, job in enumerate(todo, start=1):
            finish(i, job, run_job(job, course_path, settings))
        return
    from concurrent.futures import ProcessPoolExecutor, as_completed
    with ProcessPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(run_job, job, course_path, settings): job for job in todo}
        for i, fut in enumerate(as_completed(futures), start=1):
            finish(i, futures[fut], fut.result())


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("jobs_json")
    ap.add_argument("results_jsonl")
    ap.add_argument("--workers", type=int, default=1, help="parallel processes (default 1)")
    args = ap.parse_args()
    run_jobs(json.load(open(args.jobs_json)), args.results_jsonl, workers=args.workers, log=lambda m: print(m, flush=True))

"""Run, organize and analyze the STL sweep experiments: everything around stl.py in one module.

    1. Run        SETTINGS, job_id, greedy_action, train, evaluate, run_job, run_jobs
    2. Jobs       rob, delta, BASELINE / PLAIN / LABEL_ONLY, phase1..phase5, EXPERIMENTS
    3. Analysis   load_results, summarize, compare, welch_t
    4. Command line

A "job" is one training run: {"mode", "window_len", "overlap", "w", "seed", ["episodes", "first_stage", "label"]}.
Results are appended to a .jsonl file, one line per finished job; finished jobs are skipped, so any run can be
interrupted and rerun and it just continues. "label": false hides H_t from the agent (plain Q-learning control).

Command line (from the folder that holds stl.py, race_env.py and purt_course.yaml):
    python sweep.py run phase3 results.jsonl --workers 8        # a phase name (see EXPERIMENTS) or a jobs .json file
    python sweep.py analyze results.jsonl --min-seeds 5 [--csv summary.csv]

From a notebook:
    from sweep import train, run_jobs, load_results, summarize, compare

What train() / run_job() add on top of a plain Q-learning loop, because the sweep needs them to compare configs:
  * reward accounting      per-episode sums of every reward part (neutral / gates / pylon field / STL), so the STL
                           contribution can be compared with everything else it competes against
  * learning curve         greedy lap rate at fixed episode checkpoints (their cost is excluded from train_s)
  * noise-free lap length  greedy rollout with NOISE = 0: the length of the path the policy actually learned

Conditions in the analysis:
    plain          no STL reward and no H_t label (state = position, q)
    label-only     H_t shown, zero STL reward, same state space as the STL runs (first_stage = 1)
    baseline(fs0)  the notebook's original w = 0 run (label shown, stage 0 included)
    STL            STL reward runs
Comparisons use Welch's t on per-seed values (|t| < 2 is roughly "within seed noise"):
    vs plain          everything the STL setup changes at once (reward + label + state space)
    vs label-only     the reward alone: same window config if a control exists, else the same stride
Metrics:
    lap_steps / noisefree_lap_steps   final path length (lower = better); noisefree = greedy rollout with NOISE = 0
    lap_rate                          fraction of the final greedy rollouts that finish a lap (a lap = every gate in
                                      order, then G1 again; hitting a pylon, leaving the bounds or running out of steps fails)
    auc_1500                          mean greedy lap rate at checkpoints 250 ... 1500 (higher = learns faster)
    lap@500/1000/1500                 greedy lap rate at those training episodes
"""

import json
import os
import time
from collections import defaultdict
from typing import NamedTuple

import numpy as np
import pandas as pd

from race_env import RaceEnv
from stl import STL_REWARDS, STLOrderMonitor, hover_gain_per_step, robustness_weight

__all__ = ["COURSE_PATH", "SETTINGS", "job_id", "greedy_action", "Trained", "train", "evaluate", "run_job", "run_jobs",
           "rob", "delta", "BASELINE", "PLAIN", "LABEL_ONLY", "EXPERIMENTS", "experiment_jobs",
           "KEYS", "METRICS", "load_results", "summarize", "welch_t", "control_for", "compare"]


# =====================================================================================================================
# 1. RUN
# =====================================================================================================================

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


def greedy_action(Q, state, n_actions):
    """Best known action in `state`, or a random one for states the Q-table has never seen."""
    return int(np.argmax(Q[state])) if state in Q else np.random.randint(n_actions)


def _rollouts(monitor, Q, n):
    """n greedy rollouts under the monitor's current noise setting; returns per-lap stats for finished laps."""
    laps, rho_order, rho_avoid, stl_sums = [], [], [], []
    for _ in range(n):
        state, _ = monitor.reset()
        stl = 0.0
        while True:
            state, _, done, truncated, info = monitor.step(greedy_action(Q, state, monitor.action_space.n))
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


def _isolated(fn):
    """Run fn() without disturbing the training RNG stream, so checkpoints don't change what gets trained."""
    state = np.random.get_state()
    try:
        return fn()
    finally:
        np.random.set_state(state)


class Trained(NamedTuple):
    """What train() returns."""
    monitor: STLOrderMonitor    # still wrapping the env: keep evaluating with it
    Q: dict
    visited: set                # every (position, q, H_t) state the agent saw
    curve: list                 # [(episode, greedy lap rate)] every settings["checkpoint_every"] episodes
    train_s: float              # wall time of training, checkpoint evaluations excluded
    ep_total: np.ndarray        # per-episode reward sums: everything / the STL term / gates / pylon field,
    ep_stl: np.ndarray          # plus steps taken and whether the episode finished a lap
    ep_gate: np.ndarray
    ep_pylon: np.ndarray
    ep_steps: np.ndarray
    ep_lap: np.ndarray


def train(job, course_path=COURSE_PATH, settings=SETTINGS):
    """Epsilon-greedy Q-learning for one job; returns a Trained. Seeded by job["seed"], so it is reproducible.
    For a plain baseline use dict(BASELINE, label=False, seed=...); see section 2."""
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
    return Trained(monitor, Q, visited, curve, train_s, ep_total, ep_stl, ep_gate, ep_pylon, ep_steps, ep_lap)


def evaluate(trained, settings=SETTINGS):
    """Final evaluation of a trained policy: settings["test_rollouts"] greedy rollouts in the noisy env, plus one
    noise-free rollout (the length of the path the policy actually learned). Does not disturb the RNG stream.
    Returns a dict of per-finished-lap lists: laps (steps), rho_order, rho_avoid, stl_sums; nf_laps has 0 or 1 entry."""
    monitor, Q = trained.monitor, trained.Q
    laps, rho_order, rho_avoid, stl_sums = _isolated(lambda: _rollouts(monitor, Q, settings["test_rollouts"]))
    monitor.env.NOISE = 0
    nf_laps, *_ = _isolated(lambda: _rollouts(monitor, Q, 1))
    monitor.env.NOISE = settings["NOISE"]
    return {"laps": laps, "rho_order": rho_order, "rho_avoid": rho_avoid, "stl_sums": stl_sums, "nf_laps": nf_laps}


def run_job(job, course_path=COURSE_PATH, settings=SETTINGS):
    """train() + evaluate() for one job, flattened into the record that is stored in the results file."""
    mode, L, ov, w = job["mode"], int(job["window_len"]), int(job["overlap"]), float(job["w"])
    tr = train(job, course_path, settings)
    ev = evaluate(tr, settings)
    laps, rho_order, rho_avoid, stl_sums, nf_laps = ev["laps"], ev["rho_order"], ev["rho_avoid"], ev["stl_sums"], ev["nf_laps"]

    last = slice(-500, None)
    stride = L - ov
    ep90 = next((e for e, rate in tr.curve if rate >= 0.9), np.nan)
    finished = bool(laps)
    return {
        **{k: job[k] for k in ("mode", "window_len", "overlap", "w", "seed") + OPTIONAL_KEYS if k in job},
        "episodes": len(tr.ep_steps), "stride": stride,
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
        "train_s": tr.train_s, "train_steps": int(tr.ep_steps.sum()), "states": len(tr.visited),
        "ep_to_90": ep90, "curve": tr.curve,
        # reward contribution during the last 500 training episodes (per-episode means)
        "tr_total": float(tr.ep_total[last].mean()), "tr_stl": float(tr.ep_stl[last].mean()),
        "tr_gate": float(tr.ep_gate[last].mean()), "tr_pylon": float(tr.ep_pylon[last].mean()),
        "tr_neutral": float(-tr.ep_steps[last].mean()), "tr_steps": float(tr.ep_steps[last].mean()),
        "tr_lap_rate": float(tr.ep_lap[last].mean()),
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


# =====================================================================================================================
# 2. JOBS  (the experiment history: which runs produced results.jsonl)
# =====================================================================================================================
#
# phase1  screen: 10 (window_len, overlap) configs x {robustness (hover-scaled f=0.5), delta w=3} x seeds 67, 123
#         + the w=0 baseline.                                                                          (43 jobs)
# phase2  controls (plain Q-learning; label-only) + weight sweeps (robustness f = 0.25 / 0.9 / 2.0, delta w = 1 / 10 / 30)
#         on robustness (1,0), (3,1) and delta (2,1), (3,1).                                           (32 jobs)
# phase3  CONFIRM: the contenders and the controls at 10 seeds each, so differences can be separated from seed noise
#         (edit CONFIRM below to confirm something else).                                              (90 jobs)
# phase4  window_len trend at fixed stride 1 (robustness (2,1), (3,2); delta (1,0), (3,2), (6,5)) and weight scaling
#         (robustness (1,0) f = 0.25 / 0.9 / 2.0; delta (2,1) w = 1 / 10), 6 seeds each.             (60 jobs)
# phase5  where does hovering actually start? robustness (1,0) at f = 4 / 8 / 16 / 32 (6 seeds), plus the two leading
#         candidates (delta (3,2) w=3, robustness (1,0) f=2) topped up to 10 seeds.                   (32 jobs)
# (The notebook builds its own list from PLAIN / BASELINE / LABEL_ONLY plus its `arms`; these phases are what is in the saved results.)

SEEDS_2 = (67, 123)
SEEDS_6 = (67, 123, 42, 7, 99, 2024)
SEEDS_10 = (67, 123, 42, 7, 99, 2024, 11, 31, 58, 76)


def rob(L, ov, f):
    return dict(mode="robustness", window_len=L, overlap=ov, w=round(robustness_weight(f, L, ov), 4))


def delta(L, ov, w):
    return dict(mode="delta", window_len=L, overlap=ov, w=w)


BASELINE = dict(mode="robustness", window_len=3, overlap=1, w=0)                     # the notebook's w = 0 baseline (first_stage 0)
PLAIN = dict(BASELINE, first_stage=1, label=False)                                    # no STL, no H_t: plain Q-learning on (pos, q)
LABEL_ONLY = lambda L, ov: dict(mode="robustness", window_len=L, overlap=ov, w=0, first_stage=1)  # H_t shown, zero reward

CONFIRM = [PLAIN, LABEL_ONLY(3, 1), LABEL_ONLY(1, 0),
           rob(1, 0, 0.5), rob(3, 1, 0.5), rob(6, 5, 0.5),
           delta(2, 1, 3), delta(3, 1, 3), delta(2, 1, 30)]


def phase1():
    configs = [(1, 0), (2, 1), (3, 2), (6, 5), (2, 0), (3, 1), (4, 2), (3, 0), (6, 3), (6, 0)]
    jobs = []
    for seed in SEEDS_2:
        jobs.append(dict(BASELINE, seed=seed))
        for L, ov in configs:
            jobs += [dict(rob(L, ov, 0.5), seed=seed), dict(delta(L, ov, 3), seed=seed)]
    jobs.append(dict(BASELINE, seed=42))
    return jobs


def phase2():
    jobs = [dict(c, seed=s) for s in (67, 123, 42) for c in (PLAIN, LABEL_ONLY(3, 1))]
    jobs += [dict(LABEL_ONLY(1, 0), seed=s) for s in SEEDS_2]
    for seed in SEEDS_2:
        for L, ov in [(1, 0), (3, 1)]:
            jobs += [dict(rob(L, ov, f), seed=seed) for f in (0.25, 0.9, 2.0)]
        for L, ov in [(2, 1), (3, 1)]:
            jobs += [dict(delta(L, ov, w), seed=seed) for w in (1, 10, 30)]
    return jobs


def phase4():
    trend = [rob(2, 1, 0.5), rob(3, 2, 0.5), delta(1, 0, 3), delta(3, 2, 3), delta(6, 5, 3)]
    weights = [rob(1, 0, f) for f in (0.25, 0.9, 2.0)] + [delta(2, 1, w) for w in (1, 10)]
    return [dict(c, seed=s) for s in SEEDS_6 for c in trend + weights]


def phase5():
    hover = [rob(1, 0, f) for f in (4, 8, 16, 32)]
    finalists = [delta(3, 2, 3), rob(1, 0, 2.0)]
    return ([dict(c, seed=s) for s in SEEDS_6 for c in hover] +
            [dict(c, seed=s) for s in SEEDS_10[6:] for c in finalists])


def phase3():
    return [dict(c, seed=s) for s in SEEDS_10 for c in CONFIRM]


EXPERIMENTS = {f.__name__: f for f in (phase1, phase2, phase3, phase4, phase5)}


def experiment_jobs(name):
    """The job list of one phase, e.g. experiment_jobs("phase3")."""
    if name not in EXPERIMENTS:
        raise ValueError(f"unknown experiment {name!r}; choose one of {sorted(EXPERIMENTS)}")
    return EXPERIMENTS[name]()


# =====================================================================================================================
# 3. ANALYSIS  (pandas: aggregate results over seeds and test every STL condition against the two controls)
# =====================================================================================================================

KEYS = ["cond", "mode", "window_len", "overlap", "w"]
METRICS = ["lap_rate", "lap_steps", "lap_steps_min", "noisefree_lap_steps", "rho_order", "rho_avoidance", "ep_to_90", "auc_1500",
           "lap@500", "lap@1000", "lap@1500", "train_s", "train_steps", "states", "tr_stl", "tr_gate", "tr_pylon",
           "tr_neutral", "tr_total", "tr_lap_rate", "greedy_stl_per_lap", "hover_gain_per_step"]


def _curve_features(curve):
    c = {int(e): r for e, r in curve}
    early = [c[e] for e in (250, 500, 750, 1000, 1250, 1500) if e in c]
    return pd.Series({"auc_1500": np.mean(early) if early else np.nan,
                      "lap@500": c.get(500), "lap@1000": c.get(1000), "lap@1500": c.get(1500)})


def load_results(path):
    with open(path) as f:
        df = pd.DataFrame([json.loads(line) for line in f if line.strip()])
    # jobs only record first_stage / label when they override the defaults; fill the defaults back in
    for col in ("first_stage", "label"):
        if col not in df:
            df[col] = np.nan
    df["first_stage"] = df["first_stage"].fillna(pd.Series(np.where(df["w"] == 0, 0, 1), index=df.index)).astype(int)
    df["label"] = df["label"].fillna(True).astype(bool)

    def name(r):
        if not r.label:
            return "plain"
        return "STL" if r.w != 0 else ("label-only" if r.first_stage == 1 else "baseline(fs0)")
    df["cond"] = df.apply(name, axis=1)
    return pd.concat([df, df["curve"].apply(_curve_features)], axis=1)


def summarize(df):
    g = df.groupby(KEYS)
    out = g[METRICS].mean()
    out["n_seeds"] = g.size()
    for m in ("lap_rate", "lap_steps", "noisefree_lap_steps", "auc_1500", "train_s"):
        out[m + "_sd"] = g[m].std()
    out["stride"] = out.index.get_level_values("window_len") - out.index.get_level_values("overlap")
    comp = out[["tr_stl", "tr_gate", "tr_pylon", "tr_neutral"]].abs()
    out["stl_share"] = comp["tr_stl"] / comp.sum(axis=1)   # |STL| relative to everything it competes with
    return out.reset_index()


def welch_t(a, b):
    a, b = np.asarray(a, float), np.asarray(b, float)
    if len(a) < 2 or len(b) < 2:
        return np.nan
    se = np.sqrt(a.var(ddof=1) / len(a) + b.var(ddof=1) / len(b))
    return (a.mean() - b.mean()) / se if se > 0 else np.nan


def _select(df, cond, L=None, ov=None, stride=None):
    m = df["cond"] == cond
    if L is not None:
        m &= (df["window_len"] == L) & (df["overlap"] == ov)
    if stride is not None:
        m &= (df["window_len"] - df["overlap"]) == stride
    return df[m]


def control_for(df, row):
    """label-only control for an STL condition: same (window_len, overlap) if available, else same stride."""
    same = _select(df, "label-only", row["window_len"], row["overlap"])
    return same if len(same) >= 2 else _select(df, "label-only", stride=row["window_len"] - row["overlap"])


def compare(df, metric, min_seeds=5):
    """One row per STL condition: mean, difference and t vs plain, and vs its label-only control."""
    plain = _select(df, "plain")[metric].dropna()
    rows = []
    for key, grp in df[df["cond"] == "STL"].groupby(KEYS):
        vals = grp[metric].dropna()
        if len(vals) < min_seeds:
            continue
        row = dict(zip(KEYS, key))
        ctrl = control_for(df, row)[metric].dropna()
        rows.append({**{k: row[k] for k in ("mode", "window_len", "overlap", "w")}, "n": len(vals), "mean": vals.mean(),
                     "d_vs_plain": vals.mean() - plain.mean() if len(plain) else np.nan, "t_plain": welch_t(vals, plain),
                     "d_vs_label": vals.mean() - ctrl.mean() if len(ctrl) else np.nan, "t_label": welch_t(vals, ctrl)})
    cols = ["mode", "window_len", "overlap", "w", "n", "mean", "d_vs_plain", "t_plain", "d_vs_label", "t_label"]
    out = pd.DataFrame(rows, columns=cols)
    return out.sort_values(["mode", "window_len", "overlap", "w"])


# =====================================================================================================================
# 4. COMMAND LINE
# =====================================================================================================================

def _print_analysis(df, min_seeds, csv_path=None):
    s = summarize(df)
    if csv_path:
        s.to_csv(csv_path, index=False)
    pd.set_option("display.width", 260, "display.max_columns", 40)
    cols = ["cond", "mode", "window_len", "overlap", "stride", "w", "n_seeds", "lap_rate", "lap_steps", "lap_steps_sd",
            "noisefree_lap_steps", "auc_1500", "lap@1000", "ep_to_90", "train_s", "tr_stl", "stl_share"]
    print(f"=== per condition (means over seeds; conditions with >= {min_seeds} seeds) ===")
    print(s[s.n_seeds >= min_seeds].sort_values(["cond", "mode", "window_len", "overlap", "w"])[cols].round(2).to_string(index=False))
    for metric, note in [("lap_steps", "lower = better"), ("noisefree_lap_steps", "lower = better"),
                         ("lap_rate", "higher = better"), ("auc_1500", "higher = learns faster")]:
        out = compare(df, metric, min_seeds)
        if len(out):
            print(f"\n=== {metric} ({note}); t > 2 in magnitude is roughly significant ===")
            print(out.round(3).to_string(index=False))


def main(argv=None):
    import argparse
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    p_run = sub.add_parser("run", help="run a phase (or a jobs .json file); results are appended and finished jobs skipped")
    p_run.add_argument("jobs", help=f"one of {sorted(EXPERIMENTS)}, or the path of a jobs .json file")
    p_run.add_argument("results", help="results .jsonl file")
    p_run.add_argument("--workers", type=int, default=1, help="parallel processes (default 1); keep <= physical cores")
    p_an = sub.add_parser("analyze", help="per-condition table and comparisons against the plain / label-only controls")
    p_an.add_argument("results", help="results .jsonl file")
    p_an.add_argument("--min-seeds", type=int, default=5)
    p_an.add_argument("--csv", help="also write the per-condition table to this csv file")
    args = ap.parse_args(argv)
    if args.cmd == "run":
        if args.jobs in EXPERIMENTS:
            jobs = experiment_jobs(args.jobs)
        elif os.path.exists(args.jobs):
            jobs = json.load(open(args.jobs))
        else:
            ap.error(f"{args.jobs!r} is neither a phase ({', '.join(sorted(EXPERIMENTS))}) nor an existing jobs .json file")
        run_jobs(jobs, args.results, workers=args.workers, log=lambda m: print(m, flush=True))
    else:
        _print_analysis(load_results(args.results), args.min_seeds, args.csv)


if __name__ == "__main__":
    main()

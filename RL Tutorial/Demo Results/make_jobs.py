"""Write job lists for bhnr_sweep.py.

    python make_jobs.py phase1|phase2|phase3     ->  jobs_<phase>.json

phase1  screen: 10 (window_len, overlap) configs x {robustness (hover-scaled f=0.5), delta w=3} x seeds 67, 123
        + the w=0 baseline.                                                                          (43 jobs)
phase2  controls (plain Q-learning; label-only) + weight sweeps (robustness f = 0.25 / 0.9 / 2.0, delta w = 1 / 10 / 30)
        on robustness (1,0), (3,1) and delta (2,1), (3,1).                                           (32 jobs)
phase3  CONFIRM: the contenders and the controls at 10 seeds each, so differences can be separated from seed noise
        (edit CONFIRM below to add whatever phase 2 shows is worth confirming).                      (90 jobs)
phase4  window_len trend at fixed stride 1 (robustness (2,1), (3,2); delta (1,0), (3,2), (6,5)) and weight scaling
        (robustness (1,0) f = 0.25 / 0.9 / 2.0; delta (2,1) w = 1 / 10), 6 seeds each.             (60 jobs)
"""
import json
import sys

from stl import robustness_weight

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


if __name__ == "__main__":
    name = sys.argv[1] if len(sys.argv) > 1 else ""
    if name not in ("phase1", "phase2", "phase3", "phase4", "phase5"):
        sys.exit(__doc__)
    jobs = globals()[name]()
    json.dump(jobs, open(f"jobs_{name}.json", "w"), indent=0)
    print(f"jobs_{name}.json: {len(jobs)} jobs")

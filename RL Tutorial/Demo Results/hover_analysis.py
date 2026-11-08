"""Hover-safety analysis of the BHNR order reward on a real course (no training).

Question: can the agent farm STL reward by dawdling next to the target gate WITHOUT crossing it, and what weight
makes that exactly cancel the neutral step cost?

For each (window_len, overlap) this finds the pair of adjacent grid cells (clear of the pylon field, move does not
cross the target gate) whose back-and-forth oscillation earns the most window robustness, then reports
    hover gain per step = w * rho_hat / stride      (robustness mode)
    break-even weight   = stride / rho_hat          (hover gain == 1 == neutral step cost)
Delta mode is checked with pendulums of several amplitudes: its hover gain telescopes to ~0.

    python hover_analysis.py [course.yaml]
"""
import sys

import numpy as np

from race_env import RaceEnv, segment_intersection
from stl import STL_REWARDS, STLOrderMonitor, bhnr_series

COURSE = sys.argv[1] if len(sys.argv) > 1 else "purt_course.yaml"
R1, R2 = 3.0, 9.5
TARGET, AVOID = 1, 2                  # stage 1: target G2, avoid G3  (k = q + 1 = 2)
CONFIGS = [(1, 0), (2, 0), (2, 1), (3, 0), (3, 1), (3, 2), (4, 0), (4, 2), (4, 3), (6, 0), (6, 3), (6, 5)]

env = RaceEnv(COURSE, CELL_SIZE_M=1.0, MAX_STEPS=400, NOISE=0.25)
monitor = STLOrderMonitor(env, REWARDS=STL_REWARDS, r1=R1, r2=R2, first_stage=1)
gate = env.GATES[TARGET]
FIELD = env.PYLON_FIELD_R_M           # inside this the pylon-field penalty (-300/m) applies, so hovering there isn't free

cells = {}
for idx in range(env.GRID_NX * env.GRID_NY):
    xy = env.grid_to_xy(idx)
    cells[idx] = {"xy": xy, "rho_t": monitor.rho_gate(xy, TARGET), "rho_a": monitor.rho_not_gate(xy, AVOID),
                  "pylon_m": min(np.linalg.norm(xy - p["xy"]) for p in env.PYLONS)}


def step_to(idx, dc, dr):
    nx = env.GRID_NX
    c, r = idx % nx + dc, idx // nx + dr
    return c + r * nx if 0 <= c < nx and 0 <= r < env.GRID_NY else None


def crosses_target(a, b):
    return segment_intersection(cells[a]["xy"], cells[b]["xy"], gate["p1"], gate["p2"]) is not None


def legal(a, b):
    return cells[a]["pylon_m"] > FIELD and cells[b]["pylon_m"] > FIELD and not crosses_target(a, b)


def window_rhos(cycle, L, ov, n_states=80):
    seq = (list(cycle) * (n_states // len(cycle) + 2))[:n_states]
    series = bhnr_series([cells[i]["rho_t"] for i in seq], [cells[i]["rho_a"] for i in seq], L, ov)
    return np.array([rho for _, rho in series])[-(len(series) // 2):]     # steady state only


pairs = [(a, b) for a in cells for b in filter(None, (step_to(a, 1, 0), step_to(a, 0, 1))) if legal(a, b)]

rows = []
for L, ov in CONFIGS:
    best = max(pairs, key=lambda p: window_rhos(p, L, ov).mean())
    rho_hat = float(window_rhos(best, L, ov).mean())
    rows.append({"L": L, "ov": ov, "stride": L - ov, "pair": best, "rho_hat": rho_hat,
                 "gain_per_w": rho_hat / (L - ov), "w_star": (L - ov) / rho_hat if rho_hat > 0 else np.inf})

a, b = rows[0]["pair"]
print(f"best hover cells: {np.round(cells[a]['xy'], 1)} <-> {np.round(cells[b]['xy'], 1)}; "
      f"d(target)={R1 - cells[a]['rho_t']:.2f} / {R1 - cells[b]['rho_t']:.2f} m; rho_avoid={cells[a]['rho_a']:+.2f} / {cells[b]['rho_a']:+.2f}")
print(f"{'L':>2} {'ov':>2} {'stride':>6} {'rho_hat':>8} {'hover gain/step per unit w':>27} {'break-even w*':>14}")
for r in rows:
    print(f"{r['L']:>2} {r['ov']:>2} {r['stride']:>6} {r['rho_hat']:>+8.2f} {r['gain_per_w']:>27.3f} {r['w_star']:>14.2f}")


def pendulum(start, amp):
    """Cells of a walk from `start` straight away from the gate (the legal axis direction that gains the most distance)
    for `amp` cells, then back; returns one period (without repeating its first cell), or None if none is legal."""
    best = None
    for dc, dr in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        path, cur = [start], start
        for _ in range(amp):
            nxt = step_to(cur, dc, dr)
            if nxt is None or not legal(cur, nxt):
                break
            path.append(nxt)
            cur = nxt
        if len(path) == amp + 1 and (best is None or cells[path[-1]]["rho_t"] < cells[best[-1]]["rho_t"]):
            best = path
    return None if best is None else best + best[-2:0:-1]


print("\nPendulum around the best hover cell, STL reward per step at w = 1 (robustness / delta):")
print(f"{'L':>2} {'ov':>2} | " + " | ".join(f"amp {k}" .center(13) for k in (1, 2, 3, 4)))
for L, ov in [(1, 0), (3, 1), (4, 2), (6, 3), (6, 5)]:
    start = next(r["pair"][0] for r in rows if (r["L"], r["ov"]) == (L, ov))
    out = []
    for amp in (1, 2, 3, 4):
        cyc = pendulum(start, amp)
        if cyc is None:
            out.append("n/a".center(13))
            continue
        w_ = window_rhos(cyc, L, ov)
        out.append(f"{w_.mean() / (L - ov):+5.2f}/{np.diff(w_).mean() / (L - ov):+5.2f}".center(13))
    print(f"{L:>2} {ov:>2} | " + " | ".join(out))

# Dubins gate pre-planner (2D)

A separate copy of the 2D pre-planner (`../preplanner/` is left untouched) that builds laps out of
**Dubins curves** instead of grid steps. At each gate the planner chooses **where along the gate and at
what heading to cross it**. Consecutive crossings are joined by the shortest Dubins path (straight lines
and arcs no tighter than a configured turn radius), and the lap is exported as line/arc segments
(`out/nominal_path.yaml`).

This package is geometry only: there is no aircraft model. The turn radius is a single config value, and
costs are in **meters**. Physics (speed, bank, tracking) lives in the separate physics environment used by
the kinematics pre-planner branch.

## Setup and running

All commands run from the **repo root**. Dependencies: `pip install -r dubins_preplanner/requirements.txt`.

| Command | What it does |
|---|---|
| `python -m pytest dubins_preplanner/tests -q` | Full test suite (~20 s) |
| `python -m dubins_preplanner.dp` | Shortest lap by DP: prints a per-leg table, writes `out/nominal_path.yaml` and `out/dp_path.png` |
| `python -m dubins_preplanner.dp --mode periodic` | Same, with the finish pose forced equal to the start pose (closed loop) |
| `python -m dubins_preplanner.dp --sweep-radius 3 12 0.5 [--course PATH]` | DP at each turn radius; writes `out/radius_sweep_<course>.png` |
| `python -m dubins_preplanner.q_learning [--p-slip 0.0] [--episodes N]` | Tabular Q-learning, compared with DP; writes a learning curve, path plot and nominal path |
| `python -m dubins_preplanner.sarsa [--p-slip 0.0] [--episodes N]` | Same, with SARSA |

Every script takes `--config` (default `dubins_preplanner/dubins_config.yaml`), and `dp`/RL take
`--course` to switch courses. `--episodes` also scales `epsilon_decay_episodes`, so the exploration
schedule keeps its shape.

## Method

| Module | Role |
|---|---|
| `dubins.py` | Shortest Dubins path between two poses (all six words LSL, RSR, LSR, RSL, RLR, LRL), pure NumPy |
| `path.py` | `Segment` / `Path`: arc-length parameterization, sampling, projection with signed cross-track (+ = left), optional `s_hint` window |
| `course.py` | Loads the course YAML (bounds sorted), builds crossing poses: 5 points across each gate's usable width x 10 headings (gate normal +-0/30/60 deg, both directions) = 50 poses per gate |
| `environment.py` | `DubinsGateMDP`: state = (layer, pose), action = next gate's pose. Precomputes every leg (n x 50 x 50 Dubins solves, ~2 s) |
| `dp.py` | Backward induction over the layered graph (exact in one pass) |
| `q_learning.py`, `sarsa.py`, `rl_common.py` | Tabular TD control with invalid actions masked to -inf, slip noise, race_env-style logging |
| `export.py` | `nominal_path.yaml` writer/reader |
| `plotting.py` | Course, plan, learning-curve and radius-sweep plots (race_env.py style) |
| `config.py` | Config loading and repo-relative paths |

**Leg cost (m)** = path length + 7 x int max(0, R_field - d(s)) ds + 35 per out-of-bounds exit.

- The integral is the STL pylon-robustness penalty: d is the distance to the nearest pylon, and
  R_field = `gate_margin_m` (2.5 m).
- Touching a pylon makes a leg invalid.
- The two weights (`pylon_penalty_m_per_m2`, `oob_penalty_m`) are what the earlier seconds-based weights
  (1 s/m^2, 5 s per exit) come to at 7 m/s. With them, DP picks exactly the same laps as before.

**Turn radius:** `turn_radius_m` (default 10.71 m) is the minimum radius of every arc.

## Results (default config)

**DP, `purt_course2.yaml`:** **135.03 m** (`single`), 136.64 m (`periodic`). Zero OOB exits, zero pylon
violation, min pylon clearance 2.50 m.

**DP, `purt_course.yaml`:** 72.33 m, cost 81.59 m (1.32 m^2 of pylon-field violation, min clearance 2.16 m), zero OOB exits.

**RL on course 2** (gap vs the DP noise-free optimum of 135.03 m; 100 noisy evaluation laps):

| Setting | Q-learning | SARSA |
|---|---|---|
| p_slip = 0, alpha = 0.1, 20k episodes (config default) | +89% to +245% (seeds 0-4) | +177% |
| p_slip = 0, alpha = 0.1, 150k episodes | **0.00%** (seeds 0-4) | +13.8% |
| p_slip = 0, alpha = 0.5, 20k episodes | **0.00%** (seeds 0-4) | +37.7% |
| p_slip = 0.2, 20k: noisy mean cost / pylon clearance mean (worst) | 354 m / 0.97 m (0.31 m) | 330 m / 1.70 m (0.40 m) |
| p_slip = 0.2, 150k: noisy mean cost / pylon clearance mean (worst) | 171.5 m / 3.28 m (1.01 m) | **167.9 m / 3.53 m** (0.31 m) |

- **The config default (alpha = 0.1, 20k episodes) leaves both learners badly under-trained.** Each state
  has 50 actions and Q starts at 0, so rarely tried actions still look cheap. Use about 150k episodes,
  or alpha = 0.5 when there's no noise. The test uses 150k.
- **SARSA keeps larger average pylon clearance under slip at both budgets** (1.70 vs 0.97 m at 20k, 3.53
  vs 3.28 m at 150k). At 150k it also has a slightly lower mean cost, though its single worst lap came closer to a pylon.
- **Without noise, SARSA stays above the optimum.** That's expected: it learns the value of the
  ε-greedy policy, and a 5% chance of a random action among 50 is costly.
- **The DP policy averages 178.2 m under p_slip = 0.2.** Both learners beat it at 150k, because DP solves
  the noise-free problem.
- Moving the costs to meters multiplies every reward by 7 relative to the fixed -1000 crash reward. DP is
  unaffected, but the RL numbers differ from the earlier seconds-based runs.

## Radius sweep

`python -m dubins_preplanner.dp --sweep-radius ...`. "Largest clean radius" is the largest turn radius
whose DP lap is valid with **zero OOB exits** (0.1 m resolution for course 1, 0.5 m for course 2).

| Course | Largest clean radius | Lap length there | First radius with OOB |
|---|---|---|---|
| `purt_course.yaml` (37 x 28 m) | **11.2 m** | 74.42 m | 11.3 m (1 exit) |
| `purt_course2.yaml` (110 x 90 m) | **21.0 m** | 202.90 m | 21.5 m (1 exit) |

- The small course has a valid zero-OOB lap at the default 10.71 m radius. 94% of its individual legs
  leave bounds, but DP finds a lap that never does.
- Lap length is not monotone in radius, because the crossing poses are discretized: a different radius
  can make a different discrete pose sequence optimal.

## Notes

- Gates are the polygon's own edges and may be crossed in either direction, so laps weave in and out of
  the polygon. Consecutive gates share a pylon, and optimal laps often hug that shared pylon at the
  `gate_margin_m` crossing limit.
- `single` lap mode ends at a G1 pose different from the start; use `periodic` for a closed loop.
- Laps can switch from a left arc straight into a right arc at a gate. A physics model with roll lag will
  show its largest tracking error there.
- Out of scope here: aircraft dynamics and tracking, wind, 3D/altitude, and the dynamic planner.

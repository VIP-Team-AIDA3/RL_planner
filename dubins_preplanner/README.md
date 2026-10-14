# Dubins gate pre-planner (2D)

A separate copy of the 2D pre-planner (`../preplanner/` is left untouched) that plans laps out of
**Dubins curves** instead of grid steps. The agent chooses **where along each gate and at what heading to
cross it**; consecutive crossings are joined by the shortest Dubins path (straight lines + arcs of a fixed
minimum turn radius), so every planned lap is flyable by a fixed-wing aircraft by construction. The solved
lap is exported as line/arc segments (`out/nominal_path.yaml`) for the dynamic planner.

## Setup and running

All commands run from the **repo root**. Dependencies: `pip install -r dubins_preplanner/requirements.txt`.

| Command | What it does |
|---|---|
| `python -m pytest dubins_preplanner/tests -q` | Full test suite (~25 s) |
| `python -m dubins_preplanner.dp` | Exact DP lap: prints a per-leg table, writes `out/nominal_path.yaml` and `out/dp_path.png` |
| `python -m dubins_preplanner.dp --mode periodic` | Same, with the finish pose forced equal to the start pose |
| `python -m dubins_preplanner.dp --sweep-radius 3 12 0.5 [--course PATH]` | DP at each turn radius; writes `out/radius_sweep_<course>.png` |
| `python -m dubins_preplanner.q_learning [--p-slip 0.0] [--episodes N]` | Tabular Q-learning, evaluated against DP; writes a learning curve, path plot and nominal path |
| `python -m dubins_preplanner.sarsa [--p-slip 0.0] [--episodes N]` | Same, with SARSA |
| `python -m dubins_preplanner.flyability [--nominal PATH]` | Flies the nominal path with a point mass + L1 tracker; writes `out/flyability.png` |

Every script takes `--config` (default `dubins_preplanner/dubins_config.yaml`); all tunables live there.
`--episodes` also scales `epsilon_decay_episodes` so the exploration schedule keeps its shape.

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
| `plotting.py` | Course, plan, learning-curve, radius-sweep and flyability plots (race_env.py style) |
| `flyability.py` | Point mass with first-order roll (tau = 0.2 s, 30 deg limit) + L1 guidance (L1 = 0.6 R) |

**Leg cost (s)** = flight time + 1.0 x int max(0, R_field - d(s)) ds (STL pylon robustness, d = distance to
the nearest pylon, R_field = `gate_margin_m`) + 5 s per out-of-bounds exit. Touching a pylon makes a leg invalid.

**Turn radius:** V^2 / (g tan 25 deg) = **10.71 m** at 7 m/s. (The plan quoted 10.68 m; with g = 9.81 the formula gives 10.71 m.)

## Results (default config)

**DP, `purt_course2.yaml`:** 135.0 m, **19.29 s** (`single`), 19.52 s (`periodic`), zero OOB exits, zero
pylon violation, min pylon clearance 2.50 m.

**Flyability of that lap:** max |cross-track| **0.475 m**, RMS 0.154 m (first 2 s excluded), all gates
crossed in order. The worst error comes right after a crossing where a right arc flips straight into a
left arc. Dubins legs can reverse curvature at a gate, and the 0.2 s roll lag can't follow that instantly.
Expect the dynamic planner's largest corrections at those reversals. Reference check against the plan's
prototype path: 0.259 / 0.097 m at R = 10.68, 0.572 / 0.234 m at R = 8.65, 11.4 / 5.8 m at R = 3 (infeasible).

**RL on course 2** (seed 0; gap vs the DP noise-free optimum of 19.29 s; 100 noisy evaluation laps):

| Setting | Q-learning | SARSA |
|---|---|---|
| p_slip = 0, alpha = 0.1, 20k episodes (config default) | +249% | +85% |
| p_slip = 0, alpha = 0.1, 150k episodes | **0.00%** (seeds 0-9) | - |
| p_slip = 0, alpha = 0.5 or 1.0, 20k episodes | **0.00%** (seeds 0-9) | +24% / +54% |
| p_slip = 0.2, 20k: noisy mean cost / pylon clearance mean (worst) | 58.0 s / 0.72 m (0.26 m) | 59.4 s / 1.64 m (0.58 m) |
| p_slip = 0.2, 150k: noisy mean cost / pylon clearance mean (worst) | **24.1 s** / **2.69 m** (1.01 m) | 31.8 s / 2.31 m (1.01 m) |

* The config default (alpha = 0.1, 20k episodes) leaves Q-learning badly under-trained. Each state has 50
  actions and Q starts at 0, so rarely tried actions still look cheap. Use about 150k episodes, or
  alpha = 0.5 when there's no noise. The test uses 150k.
* **Which keeps larger pylon clearance under slip depends on the training budget:** at 20k episodes SARSA
  does (1.64 m vs 0.72 m, the textbook "safer on-policy" result), but neither has converged. At 150k,
  Q-learning is both faster and clearer (2.69 m vs 2.31 m), because SARSA converges more slowly with 50 actions.
* For reference, the DP policy (optimal for the noise-free problem) averages 25.5 s under p_slip = 0.2.
  Q-learning at 150k beats it (24.1 s) because it learns the noisy problem itself.

## Radius sweep

`python -m dubins_preplanner.dp --sweep-radius ...` at V = 7 m/s. "Largest clean radius" is the largest
turn radius whose DP lap is valid with **zero OOB exits** (0.1 m resolution for course 1, 0.5 m for course 2).

| Course | Largest clean radius | Bank at 7 m/s | Lap at that radius | First radius with OOB |
|---|---|---|---|---|
| `purt_course.yaml` (37 x 28 m) | **11.2 m** | 24.0 deg | 10.63 s | 11.3 m (1 exit) |
| `purt_course2.yaml` (110 x 90 m) | **21.0 m** | 13.4 deg | 28.99 s | 21.5 m (1 exit) |

Airspeed/bank combinations giving those radii (R = V^2 / (g tan phi)):

| Radius | 6 m/s | 7 m/s | 8 m/s | 9 m/s |
|---|---|---|---|---|
| 11.2 m (course 1 limit) | 18.1 deg | 24.0 deg | 30.2 deg | 36.4 deg |
| 21.0 m (course 2 limit) | 9.9 deg | 13.4 deg | 17.3 deg | 21.5 deg |

Findings:

* **The small course is not out of reach at the default radius.** Contrary to the plan's expectation,
  `purt_course.yaml` has a valid zero-OOB lap at 10.71 m (10.33 s, 72.3 m). 94% of its individual legs do
  leave bounds, but DP finds a lap that never does. That lap wraps tightly around shared pylons
  (min clearance 2.17 m, 1.31 m^2 of field violation, cost 11.65 s). Above 11.2 m the lap must leave bounds once.
* The default 25 deg / 10.71 m works on both courses. Planning at the full 30 deg (8.65 m) is legal everywhere but doubles tracking error (see above).
* Radii below 8.65 m need more than 30 deg of bank at 7 m/s, so they aren't flyable at that speed.
* Lap time is not monotone in radius (e.g. course 1: 10.94 s at 10.5 m, 10.50 s at 11.0 m), because the
  crossing poses are discretized: a different radius can make a different discrete pose sequence optimal.

## Notes

* Gates are the polygon's own edges and may be crossed in either direction, so laps weave in and out of
  the polygon. Consecutive gates share a pylon, and the optimal laps often hug that shared pylon at the
  `gate_margin_m` crossing limit.
* `single` lap mode ends at a G1 pose different from the start; use `periodic` for a closed loop.
* Out of scope for now: wind, 3D/altitude, the dynamic planner itself.

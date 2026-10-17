# Dubins gate pre-planner (2D)

Plans a lap of the pylon course out of **Dubins curves**: straight lines and arcs no tighter than a set
turn radius. Each step, the agent picks **where along the next gate and at what heading to cross it**.
The leg to that crossing is the shortest Dubins path.

It's built on the team's existing code:

- Course loading, the pylon safety radius and the course plot come from `RaceEnv`
  (`RL Tutorial/Demo Results/race_env.py`).
- Q-learning is `race_env.q_learning_with_logging`.
- DP is the team's `value_iteration` from `comparisons.ipynb`.

Geometry only: there is no aircraft model, and costs are in meters. `../preplanner/` is untouched.

## Files

| File | What it does |
|---|---|
| `dubins.py` | Dubins math. `shortest_path(start, end, radius)` tries the six words (LSL, RSR, LSR, RSL, RLR, LRL) and returns the shortest as line/arc `Segment`s, with `.length`, `.word`, `.sample(ds)`. |
| `dubins_env.py` | `DubinsGateEnv`, a `gym.Env` in the team's style (`MultiDiscrete` state, 5-tuple `step`, `NOISE`, `state_history`). It builds 50 crossing poses per gate, precomputes every leg's Dubins path and cost, exposes `get_possible_next_states` for value iteration, and `render()` draws the lap on `RaceEnv`'s course plot. |
| `train.py` | Runs DP (value iteration), Q-learning and SARSA. It evaluates them, saves plots and exports the lap as segments (`<algo>_nominal_path.yaml`). |
| `config.yaml` | Every setting. |
| `test_dubins.py` | Core checks: Dubins endpoints and shapes, cost tables, value iteration against brute force, Q-learning against DP, export contiguity. |

## Running

From the repo root (needs `numpy matplotlib pyyaml gymnasium pytest`; `/usr/local/bin/python3` has them):

```bash
python dubins_preplanner/train.py --algo dp           # or q_learning | sarsa | all
python dubins_preplanner/train.py --algo all --noise 0
python dubins_preplanner/train.py --course ros2_ws/src/pylon_2026_world/purt_course.yaml
python -m pytest dubins_preplanner -q                 # 6 tests, ~5 s
```

Outputs go to `dubins_preplanner/out/`: `<algo>_path.png`, `<algo>_nominal_path.yaml` and
`<algo>_learning_curve.png`.

## How it works

1. **Crossings:** each gate gets 5 positions across its usable width (`gate_margin_m` clear of each
   pylon) x 10 headings (gate normal +-0/30/60 deg, both directions) = 50 poses.
2. **Legs:** every pose on gate k is joined to every pose on gate k+1 by the shortest Dubins path. That's
   15,000 paths on course 2, in about 2 s.
3. **Cost (m)** = length + 7 x int max(0, R_field - d) ds + 35 per bounds exit. The integral is
   `race_env`'s pylon robustness. Clipping a pylon ends the episode with -1000.
4. **State** = (layer, pose), where layer n is crossing G1 again. **Action** = pose on the next gate.
   `NOISE` slips the crossing to a neighboring pose.
5. **Solving:**
   - Value iteration gives the exact lap. With `NOISE > 0` it is the noise-aware optimum, because it
     reads the slip probabilities.
   - RL trains from the DP-optimal G1 start pose, with the team's random Q initialization and constant ε.

## Results (course 2, defaults: radius 10.71 m, 60k episodes)

| Solver | Noise-free lap | Mean cost, 20% slip | Mean min pylon distance, 20% slip |
|---|---|---|---|
| DP (value iteration) | **135.03 m** | **162.0 m** (noise-aware policy) | 3.61 m |
| Q-learning | 144.87 m (+7.3%) | 170.1 m | 2.27 m |
| SARSA | 153.47 m (+13.7%) | 182.4 m | 3.15 m |

- **Without noise,** Q-learning reaches the exact DP lap at 60k episodes (seeds 0-4).
- **With slip,** SARSA keeps more pylon clearance than Q-learning; that's the on-policy effect.
- **Course 1** (`purt_course.yaml`): DP lap 72.33 m (cost 81.59 m, min pylon 2.16 m).
- **Largest turn radius with a zero-OOB lap** (from earlier sweeps): 11.2 m on course 1, 21.0 m on course 2.

## Notes

- Laps weave in and out of the pylon polygon, because gates can be crossed either way.
- The lap ends at a G1 crossing that may differ from the start one.
- The tracking/projection code, closed-loop (`periodic`) laps, radius sweeps and the flight
  simulation were removed to keep this minimal. They are in git history (commit `192c6a2`).

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

## Turn radius

`turn_radius_m: 5.0` is the Sport Cub S2 (HobbyZone, about 57 g) flown in SAFE **Experienced** mode,
which has no bank limit. At about 7 m/s and a 45 deg bank, R = V^2 / (g tan 45) = 5.0 m. The plane's
speed isn't published, so replace this with a measured value (e.g. a circle fitted to motion-capture
data of a steady turn) when you have one.

## Results (defaults: radius 5.0 m, 60k episodes, 20% slip)

| | Course 2 (`purt_course2.yaml`) | Course 1 (`purt_course.yaml`) |
|---|---|---|
| DP lap (noise-free) | **123.47 m** | **46.31 m** (cost 46.69 m) |
| DP, noise-aware, mean cost with slip | 128.5 m | 55.7 m |
| Q-learning lap (noise-free) | 128.46 m (+4.0%) | 48.56 m (+4.0%) |
| Q-learning, mean cost with slip | 141.4 m | 58.0 m |
| SARSA lap (noise-free) | 211.45 m (+81.9%) | 49.66 m (cost 71.86 m, +53.9%) |
| SARSA, mean cost with slip | 202.9 m | 76.3 m |

- **Neither DP lap leaves the bounds.**
- **Q-learning:** trained with slip, it gets within about 4% of DP. Without noise it reaches the
  exact DP lap (the test checks this).
- **SARSA lags well behind at 60k episodes.** With constant ε = 0.1 over 50 actions, its on-policy
  values stay pessimistic.
- **At the previous 10.7 m radius,** laps on course 1 needed big loops outside the bounds: the turn
  circle (21 m) was wider than the gates. 5 m removes that.

## Notes

- Laps weave in and out of the pylon polygon, because gates can be crossed either way.
- The lap ends at a G1 crossing that may differ from the start one.
- The tracking/projection code, closed-loop (`periodic`) laps, radius sweeps and the flight
  simulation were removed to keep this minimal. They are in git history (commit `192c6a2`).

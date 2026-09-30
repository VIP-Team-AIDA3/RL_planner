"""Shared race-course RL code for the Demo Results notebooks (gaussian-gates.ipynb, replay.ipynb).

The spec is "cross G1..Gn in order, return through G1, stay clear of the pylons, as fast as
possible". Two of its clauses are scored as STL robustness rather than as yes/no events:

  * gates pay a flat reward for a valid crossing -- where along the gate you cross does not matter
  * pylons carry a safety predicate, always(d >= PYLON_FIELD_R_M), whose robustness
    rho = d - PYLON_FIELD_R_M is negative by exactly how many meters inside the radius the step
    came. Each step is charged REWARDS["pylon_field"] per meter of violation, so the penalty grows
    continuously as the agent closes on a pylon instead of arriving all at once on contact.

d is the distance from the step's movement segment to the *nearest* pylon: the predicate is a
conjunction over pylons, and the robustness of a conjunction is the min of its terms.

Touching a pylon still ends the episode, but carries no separate penalty -- a collision is simply
the deepest violation the field can score, and the forfeited rest of the lap does the rest.
"""

# RaceEnv -- a generic gates-and-pylons race course environment, loaded from a course definition
# (course.yaml), in meters. Modeled after PURT (Pylon Racing), but the environment itself isn't
# drone-specific -- anything that must pass through ordered gates while avoiding pylons fits here.
# Geometry (pylons, gates, bounds) is continuous and independent of the grid resolution used to
# discretize agent state: CELL_SIZE_M only controls how finely position is discretized for the Q-table.

import gymnasium as gym
from gymnasium import spaces
import numpy as np
import yaml
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.patches import Circle
from matplotlib.lines import Line2D
from enum import Enum

class Action(Enum):
    Right = 0
    Up = 1
    Left = 2
    Down = 3

def segment_intersection(a1, a2, b1, b2):
    # Returns (t, u) if segment (a1,a2) crosses segment (b1,b2): t is the fraction along a1->a2,
    # u is the fraction along b1->b2 where they meet. Returns None if they don't cross (or are parallel).
    a1 = np.asarray(a1, dtype=float); a2 = np.asarray(a2, dtype=float)
    b1 = np.asarray(b1, dtype=float); b2 = np.asarray(b2, dtype=float)
    d1 = a2 - a1
    d2 = b2 - b1
    denom = d1[0] * d2[1] - d1[1] * d2[0]
    if abs(denom) < 1e-9:
        return None
    diff = b1 - a1
    t = (diff[0] * d2[1] - diff[1] * d2[0]) / denom
    u = (diff[0] * d1[1] - diff[1] * d1[0]) / denom
    if 0.0 <= t <= 1.0 and 0.0 <= u <= 1.0:
        return t, u
    return None

def point_segment_distance(p, a, b):
    # Shortest distance from point p to the segment (a,b).
    p = np.asarray(p, dtype=float); a = np.asarray(a, dtype=float); b = np.asarray(b, dtype=float)
    ab = b - a
    ab_len_sq = np.dot(ab, ab)
    if ab_len_sq < 1e-12:
        return np.linalg.norm(p - a)
    t = np.clip(np.dot(p - a, ab) / ab_len_sq, 0.0, 1.0)
    return np.linalg.norm(p - (a + t * ab))

class RaceEnv(gym.Env):
    # RaceEnv models only the physical course (movement, pylon collisions, bounds) and measures the
    # signals a spec can be written over. It knows nothing about gate order or rewards -- that spec
    # lives in GateSequenceMonitor below.
    def __init__(self, course_path, CELL_SIZE_M=0.5, MAX_STEPS=400, NOISE=0, PYLON_FIELD_R_M=None):
        super(RaceEnv, self).__init__()

        with open(course_path) as f:
            course = yaml.safe_load(f)

        self.CELL_SIZE_M = CELL_SIZE_M
        self.MAX_STEPS = MAX_STEPS
        self.NOISE = NOISE # [0,1] -- 0: No Noise, 1: 100% Noise
        # PYLON_FIELD_R_M is the threshold of the safety predicate always(d >= R): how close to a
        # pylon still counts as safe. It defaults to the course's own declared safety margin, so the
        # spec starts out asking for exactly what the real course asks for.
        self.GATE_MARGIN_M = course.get("gate_margin_m", 1.0)
        self.PYLON_FIELD_R_M = PYLON_FIELD_R_M if PYLON_FIELD_R_M is not None else self.GATE_MARGIN_M
        
        self.PYLONS = [{"xy": np.array([p["x"], p["y"]]), "r": p["r"], "name": p["name"]} for p in course["pylons"]]

        self.GATES = []
        for g in course["gates"]:
            p1 = self.PYLONS[g["p1"]]["xy"]
            p2 = self.PYLONS[g["p2"]]["xy"]
            self.GATES.append({"p1": p1, "p2": p2, "length": float(np.linalg.norm(p2 - p1)), "name": g["name"]})
        self.n_gates = len(self.GATES) # GATES[0] is also the finish, by course convention

        x_lo, x_hi = sorted((course["bounds_rect"]["min_x"], course["bounds_rect"]["max_x"]))
        y_lo, y_hi = sorted((course["bounds_rect"]["min_y"], course["bounds_rect"]["max_y"]))
        self.ORIGIN = np.array([x_lo, y_lo])
        self.GRID_NX = int(np.ceil((x_hi - x_lo) / CELL_SIZE_M)) + 1
        self.GRID_NY = int(np.ceil((y_hi - y_lo) / CELL_SIZE_M)) + 1

        # start_on_finish_cross: begin right at the finish gate's (G1's) true midpoint
        start_xy = 0.5 * (self.GATES[0]["p1"] + self.GATES[0]["p2"])
        self.INIT_STATE = self.xy_to_grid(*start_xy)

        self.observation_space = spaces.Discrete(self.GRID_NX * self.GRID_NY) # Grid index number
        self.action_space = spaces.Discrete(4) # Action space
        self.state = self.INIT_STATE
        self.n_steps = 0
        self.state_history = [self.INIT_STATE]
        self.action_history = []

    def grid_to_xy(self, index):
        col, row = index % self.GRID_NX, index // self.GRID_NX
        return self.ORIGIN + np.array([col, row]) * self.CELL_SIZE_M

    def xy_to_grid(self, x, y):
        col = int(np.clip(round((x - self.ORIGIN[0]) / self.CELL_SIZE_M), 0, self.GRID_NX - 1))
        row = int(np.clip(round((y - self.ORIGIN[1]) / self.CELL_SIZE_M), 0, self.GRID_NY - 1))
        return col + row * self.GRID_NX

    def pylon_distances(self, a, b):
        # Distance from the movement segment (a -> b) to each pylon's center, in meters. Measuring
        # against the segment rather than the endpoint is what makes this exact at any grid
        # resolution: a step that passes close to a pylon is scored on how close it actually came.
        return np.array([point_segment_distance(p["xy"], a, b) for p in self.PYLONS])

    def pylon_robustness(self, distances):
        # Robustness of always(d >= R) for one step: positive = clear by that many meters,
        # negative = inside the radius by that many meters. A conjunction over pylons, so: the min.
        return float(np.min(distances)) - self.PYLON_FIELD_R_M

    def reset(self):
        self.state = self.INIT_STATE
        self.n_steps = 0
        self.state_history = [self.state]
        self.action_history = []
        return self.get_observation(), self.get_info()

    def step(self, action, ignore_truncation=False):
        # Returns reward 0: rewards come from the spec monitor wrapping this env. The step's geometry
        # (movement segment, pylon hit, out-of-bounds) is reported in info so the monitor can use it.
        done = False
        truncated = False

        prev_xy = self.grid_to_xy(self.state)
        new_state = self.get_new_position(action)
        new_xy = self.grid_to_xy(new_state)

        # One pass of pylon distances serves both the collision test and the robustness signal:
        # a hit is "inside a pylon's physical radius", and rho measures the nearest approach.
        out_of_bounds = new_state == self.state
        distances = self.pylon_distances(prev_xy, new_xy)
        nearest_pylon_m = float(np.min(distances))
        pylon_robustness = self.pylon_robustness(distances)
        hit_pylon = (not out_of_bounds) and bool(np.any(distances <= [p["r"] for p in self.PYLONS]))
        if out_of_bounds or hit_pylon:
            done = True # If the agent clips a pylon or tries to move out of bounds, end the episode

        self.state = new_state
        self.state_history.append(new_state)
        self.action_history.append(action)

        if not ignore_truncation:
            self.n_steps += 1
            truncated = self.n_steps >= self.MAX_STEPS # Truncate the episode after MAX_STEPS

        info = self.get_info()
        info.update({"prev_xy": prev_xy, "new_xy": new_xy, "hit_pylon": hit_pylon,
                     "out_of_bounds": out_of_bounds, "nearest_pylon_m": nearest_pylon_m,
                     "pylon_robustness": pylon_robustness})
        return self.get_observation(), 0, done, truncated, info

    def get_observation(self):
        return self.state

    def get_info(self):
        return {"state_history": self.state_history, "action_history": self.action_history}

    def get_new_position(self, action):
        p_dev = self.NOISE / 3.0
        tendency = np.random.choice([-1, 0, 1], p=[p_dev, 1 - 2 * p_dev, p_dev])

        transition = Action(action)
        if tendency != 0:
            match transition:
                case Action.Up:
                    transition = Action.Right if tendency == 1 else Action.Left
                case Action.Down:
                    transition = Action.Left if tendency == 1 else Action.Right
                case Action.Left:
                    transition = Action.Up if tendency == 1 else Action.Down
                case Action.Right:
                    transition = Action.Down if tendency == 1 else Action.Up

        curr_pos = self.state
        col, row = curr_pos % self.GRID_NX, curr_pos // self.GRID_NX
        match transition:
            case Action.Up:
                return curr_pos + self.GRID_NX if row < self.GRID_NY - 1 else curr_pos
            case Action.Down:
                return curr_pos - self.GRID_NX if row > 0 else curr_pos
            case Action.Left:
                return curr_pos - 1 if col > 0 else curr_pos
            case Action.Right:
                return curr_pos + 1 if col < self.GRID_NX - 1 else curr_pos

    def render(self, ax=None, title=None, legend_outside=True, show_path=True, show_field=True):
        # 1. Initialize the plot (in real meters, proportioned to the course's true aspect ratio)
        standalone = ax is None
        if standalone:
            x_span = self.GRID_NX * self.CELL_SIZE_M
            y_span = self.GRID_NY * self.CELL_SIZE_M
            fig_w = 9.0
            fig, ax = plt.subplots(figsize=(fig_w, max(4.0, fig_w * y_span / x_span)))

        x_lo, y_lo = self.ORIGIN
        x_hi = x_lo + (self.GRID_NX - 1) * self.CELL_SIZE_M
        y_hi = y_lo + (self.GRID_NY - 1) * self.CELL_SIZE_M
        pad = self.CELL_SIZE_M * 4
        ax.set_xlim(x_lo - pad, x_hi + pad)
        ax.set_ylim(y_lo - pad, y_hi + pad)
        ax.grid(True, color='gainsboro', linestyle='-', linewidth=0.5, alpha=0.6)

        # 2. Extract and Plot Gates (the full crossable edge between each pair of consecutive pylons)
        for i, gate in enumerate(self.GATES):
            ax.plot([gate["p1"][0], gate["p2"][0]], [gate["p1"][1], gate["p2"][1]], color='darkorange',
                     alpha=0.3, linewidth=6, solid_capstyle='round', zorder=0, label='Gate' if i == 0 else None)
            mid = 0.5 * (gate["p1"] + gate["p2"])
            ax.scatter(*mid, color='darkorange', marker='o', s=90, facecolors='none', edgecolors='darkorange',
                        linewidths=2, zorder=1, label='Midpoint' if i == 0 else None)

        # 3. Extract and Plot Pylons -- true collision radius (shaded disk) plus a visible center
        # marker, ringed by the safety predicate's threshold R: inside that ring the spec is
        # violated, and the monitor charges per meter of depth.
        for i, pylon in enumerate(self.PYLONS):
            # show_field=False leaves the ring to the caller -- the replay dashboard draws its own,
            # because there R changes with the run being replayed and is previewed while you drag it.
            if show_field:
                ax.add_patch(Circle(pylon["xy"], self.PYLON_FIELD_R_M, facecolor='firebrick', alpha=0.10,
                                    edgecolor='firebrick', linestyle='--', linewidth=1.0, zorder=1,
                                    label='Safety radius R' if i == 0 else None))
            ax.add_patch(Circle(pylon["xy"], pylon["r"], color='firebrick', alpha=0.5, zorder=1))
            ax.scatter(*pylon["xy"], color='firebrick', marker='x', s=50, linewidths=2, zorder=2, label='Pylon' if i == 0 else None)

        # 4. Process and Plot Agent Path Line (With Smooth Continuous Gradient)
        # show_path=False draws the course alone (gates, pylons, grid) -- the replay dashboard uses
        # that as a static backdrop and animates the agent's path on top of it itself.
        if show_path and self.state_history:
            path_xy = np.array([self.grid_to_xy(s) for s in self.state_history])
            path_x, path_y = path_xy[:, 0], path_xy[:, 1]

            if len(path_x) > 1:
                num_interp_points = (len(path_x) - 1) * 100
                t_original = np.arange(len(path_x))
                t_fine = np.linspace(0, len(path_x) - 1, num_interp_points)
                fine_x = np.interp(t_fine, t_original, path_x)
                fine_y = np.interp(t_fine, t_original, path_y)
                points = np.array([fine_x, fine_y]).T.reshape(-1, 1, 2)
                segments = np.concatenate([points[:-1], points[1:]], axis=1)
                path_progression = np.linspace(0, 1, len(segments))

                lc = LineCollection(segments, cmap='plasma', linewidths=3, alpha=0.9, zorder=2)
                lc.set_array(path_progression)
                lc.set_clim(0, 1)
                ax.add_collection(lc)
                legend_dummy = Line2D([0], [0], color=plt.get_cmap('plasma')(0.5), lw=3, label='Agent Path')

            # Overlay directional action markers at each step along the line
            action_markers = {Action.Up.value: '^', Action.Down.value: 'v', Action.Left.value: '<', Action.Right.value: '>'}
            for i, action in enumerate(self.action_history):
                if action in action_markers:
                    ax.scatter(path_x[i], path_y[i], color='dodgerblue', marker=action_markers[action], s=60, zorder=3)

            ax.scatter(path_x[0], path_y[0], color='forestgreen', marker='s', s=120, label='Start', zorder=4)
            ax.scatter(path_x[-1], path_y[-1], color='gold', marker='*', s=250, edgecolor='black', label='Finish', zorder=4)

        # 5. Labels and Legends
        ax.set_title(title or "Race Course Visualization", fontsize=14, fontweight='bold', pad=15)
        ax.set_xlabel("X (m)")
        ax.set_ylabel("Y (m)")
        ax.set_aspect('equal')

        handles, labels = ax.get_legend_handles_labels()
        if show_path and self.state_history and len(path_x) > 1:
            handles.append(legend_dummy)
            labels.append('Agent Path')
        if legend_outside:
            ax.legend(handles, labels, loc='upper left', bbox_to_anchor=(1.02, 1), borderaxespad=0)
        else:
            ax.legend(handles, labels, loc='upper right', fontsize=8, framealpha=0.9)

        if standalone:
            plt.tight_layout()
            plt.show()

# GateSequenceMonitor -- the STL spec "cross G1..Gn in order, then return through G1, stay at least
# PYLON_FIELD_R_M from every pylon, as fast as possible", applied as a wrapper around RaceEnv. It
# computes every reward. The gate clauses score as events (a crossing either happened or it did not);
# the pylon clause scores as robustness, charged per meter of violation on every step.
# q (gates crossed so far) is the spec's automaton state. It can't be folded into the reward alone:
# the lap starts and ends at G1, so the same cell needs different actions at different stages of the
# lap, and a policy over position only can't express that. So q is appended to the observation,
# giving the product state [grid index, q].
class GateSequenceMonitor(gym.Wrapper):
    def __init__(self, env, REWARDS={"neutral": -1, "midpoint": 1000, "endpoint": 1000, "pylon_field": -300}):
        super().__init__(env)
        self.REWARDS = REWARDS
        self.observation_space = spaces.MultiDiscrete([
            env.observation_space.n, # Grid index number
            env.n_gates + 1 # Number of gates crossed
        ])
        self.q = 0
        self.state = np.array([env.state, self.q])
        self.state_history = [self.state.copy()]
        self.reward_history = []
        self.parts_history = []

    def reset(self):
        pos, _ = self.env.reset()
        self.q = 0
        self.state = np.array([pos, self.q])
        self.state_history = [self.state.copy()]
        self.reward_history = []
        self.parts_history = []
        return self.get_observation(), self.get_info()

    def step(self, action, ignore_truncation=False):
        pos, _, done, truncated, info = self.env.step(action, ignore_truncation)
        # The step's reward is the sum of these named terms. Keeping them broken out (rather than
        # accumulating into one scalar) costs nothing and lets a caller show *which* clause of the
        # spec paid out on a given step -- that's what the replay dashboard's breakdown reads.
        parts = {"neutral": float(self.REWARDS["neutral"]), "pylon_field": 0.0, "midpoint": 0.0, "endpoint": 0.0}
        event = {"gate_index": None, "gate_name": None, "gate_u": None, "lap_finished": False}

        # The safety clause is charged every step, from the step's own robustness: nothing while the
        # step stays clear of every pylon's radius, then lambda per meter of violation once inside.
        # A collision adds no term of its own -- it is just the deepest violation available, and it
        # ends the episode, which forfeits the rest of the lap.
        violation_m = max(0.0, -info["pylon_robustness"])
        parts["pylon_field"] = float(self.REWARDS["pylon_field"]) * violation_m

        if not info["hit_pylon"] and not info["out_of_bounds"]:
            # Only the next gate in the sequence counts; after all n gates, the finish is G1 again
            gate_index = self.q if self.q < self.env.n_gates else 0
            gate = self.env.GATES[gate_index]
            crossing = segment_intersection(info["prev_xy"], info["new_xy"], gate["p1"], gate["p2"])
            if crossing is not None:
                _, u = crossing
                # u (where along the gate the crossing happened) no longer scales the reward -- any
                # valid crossing pays the same. It is still reported, because the pylon field now
                # shapes crossings toward the middle on its own, and u is how you see that happen.
                event.update({"gate_index": gate_index, "gate_name": gate["name"], "gate_u": float(u)})
                if self.q < self.env.n_gates:
                    parts["midpoint"] = float(self.REWARDS["midpoint"]) # Reward for crossing gates in order
                    self.q += 1 # Advance the automaton to the next gate
                else:
                    parts["endpoint"] = float(self.REWARDS["endpoint"]) # Reward for completing the lap
                    event["lap_finished"] = True
                    done = True

        reward = sum(parts.values())
        self.state = np.array([pos, self.q])
        self.state_history.append(self.state.copy())
        self.reward_history.append(reward)
        self.parts_history.append(parts)

        step_info = self.get_info()
        step_info.update({"reward_parts": parts, "hit_pylon": info["hit_pylon"],
                          "out_of_bounds": info["out_of_bounds"], "prev_xy": info["prev_xy"],
                          "new_xy": info["new_xy"], "nearest_pylon_m": info["nearest_pylon_m"],
                          "pylon_robustness": info["pylon_robustness"], **event})
        return self.get_observation(), reward, done, truncated, step_info

    def get_observation(self):
        return self.state

    def get_info(self):
        return {"state_history": self.state_history, "action_history": self.env.action_history,
                "reward_history": self.reward_history, "parts_history": self.parts_history}

    def render(self, **kwargs):
        return self.env.render(**kwargs)


def sample_action(policy, state):
    action_probs = policy[*state] # Action probabilities (must sum to 1)
    return np.random.choice(np.size(action_probs,0), p=action_probs) # Action sampling

def run_episode(env, policy, render_result=False):
    while True:
        action = sample_action(policy, env.state)
        observation, reward, done, truncated, info = env.step(action)
        if done or truncated:
            break
    if render_result:
        env.render()
    return env.get_info()

def epsilon_greedy_action(Q, state, epsilon):
    # Choose an action epsilon-greedily with respect to Q(state, .); used by TD control,
    # which acts directly off a Q-table instead of an explicit policy array
    if np.random.random() < epsilon:
        return np.random.randint(Q.shape[-1])
    return np.argmax(Q[*state])


def q_learning_with_logging(env, discount_factor, alpha, epsilon, n_episodes, policy_snapshot_every, progress_callback=None):
    # Initialize Q arbitrarily
    Q = np.random.random([*env.observation_space.nvec, env.action_space.n])

    step_rewards = []       # reward at every step, across all episodes, in order
    trajectory_rewards = [] # total reward per episode (trajectory)
    policy_history = []     # greedy policy (argmax Q) snapshots over the course of training

    for i in range(n_episodes):
        state, _ = env.reset()
        episode_reward = 0.0

        while True:
            # Behavior policy: epsilon-greedy with respect to Q
            action = epsilon_greedy_action(Q, state, epsilon)
            next_state, reward, done, truncated, info = env.step(action)

            # Q-Learning update -- bootstraps off max_a Q(S', a), the greedy action,
            # regardless of which action the behavior policy actually selects next
            Q[*state, action] += alpha * (reward + discount_factor * np.max(Q[*next_state]) * (1 - done) - Q[*state, action])

            step_rewards.append(reward)
            episode_reward += reward
            state = next_state
            if done or truncated:
                break

        trajectory_rewards.append(episode_reward)

        if (i + 1) % policy_snapshot_every == 0 or i == n_episodes - 1:
            policy_history.append({"episode": i + 1, "policy": np.argmax(Q, axis=-1).copy()})

        # Optional progress reporting, so a long training run can drive a status line
        if progress_callback is not None and ((i + 1) % max(1, n_episodes // 100) == 0 or i == n_episodes - 1):
            progress_callback(i + 1, n_episodes)

    return Q, step_rewards, trajectory_rewards, policy_history

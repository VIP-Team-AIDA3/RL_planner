import gymnasium as gym
from gymnasium import spaces
import numpy as np
import yaml
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.patches import Circle
from matplotlib.lines import Line2D
from enum import Enum
from typing import Optional
from race_env import RaceEnv, segment_intersection
from pathlib import Path
class PureKinematicGrid(gym.Env):
    def __init__(self, grid_size=38, v_max=20, a_max=100, grid_density=20, lambda_accel=0.0001,
    lambda_smooth=0.0003, num_a_values =11, MAX_TIME=200.0, course_path= None, rewards=None, dt=1,
    reward_field_exponent=0.5):
        super().__init__()
        self.grid_size = grid_size
        self.v_max = v_max
        self.v_min = 3.0  # m/s: underspeed penalty applies at or below this speed.
        self.a_max = a_max
        self.grid_density = grid_density # how many sub lines appear between whole integer valu---es
        self.dt = float(dt) # Seconds per action, independent of spatial resolution.
        self.plot_dt = self.dt / 2
        self.agent_circle = None
        self.trajectory_line = None
        self.plot_path = []
        self.lambda_accel = lambda_accel
        self.lambda_smooth = lambda_smooth
        self.num_a_values = num_a_values
        self.MAX_TIME = float(MAX_TIME)
        self.n_steps = 0
        self.elapsed_time = 0.0
        self.INIT_STATE = np.array(
        [grid_size / 2, grid_size / 2, 0.0, 0.0],
        dtype=np.float32,
        )
        self.state = self.INIT_STATE.copy()
        self.n_steps = 0
        self.state_history = [self.state.copy()]
        self.action_history = []
        self.n_steps = 0
        self.state_history = [self.INIT_STATE]
        self.action_history = []

        if course_path is None:
            course_path = (
            Path(__file__).resolve().parents[2]
            / "ros2_ws/src/pylon_2026_world/purt_course_3.yaml"
        )
        self.race_env = RaceEnv(course_path)
        # Inside PureKinematicGrid.__init__()
        

        self.PYLONS = self.race_env.PYLONS
        self.GATES = self.race_env.GATES
        self.n_gates = self.race_env.n_gates
        self.GATE_MARGIN_M = self.race_env.GATE_MARGIN_M
        self.PYLON_FIELD_R_M = self.race_env.PYLON_FIELD_R_M
        self.REWARDS = {
            "neutral": -2.0,
            "midpoint": 9000.0,
            "endpoint": 24000.0,
            "pylon_field": -500.0,
            "overspeed": -1500.0,
            "underspeed": -5.0,
            "out_of_bounds": -20000.0,
            "reward_field": 1.0,
            "progress": 50.0,
        }
        if rewards is not None:
            self.REWARDS.update(rewards)
        self.q = 0

        #TODO: Gym implementation

        lower_bounds = np.array([0.0, 0.0, -self.v_max, -self.v_max, 0.0, -self.a_max, -self.a_max], dtype=np.float32)
        upper_bounds = np.array([self.grid_size - 1, self.grid_size - 1, self.v_max, self.v_max, self.n_gates, self.a_max, self.a_max], dtype=np.float32)
        # tells the agent what the state space is bounded to
        self.observation_space = spaces.Box(low=lower_bounds, high=upper_bounds, shape=(7,), dtype=np.float32)

        accel_values = np.linspace(-self.a_max, self.a_max, self.num_a_values)

        self._action_to_accel = {}

        for ax in accel_values:
            for ay in accel_values:
                if np.hypot(ax, ay) <= self.a_max:        
                    self._action_to_accel[len(self._action_to_accel)] = np.array([ax, ay], dtype=np.float32)

        self.action_space = spaces.Discrete(len(self._action_to_accel))

        self.prev_accel = np.zeros(2, dtype=np.float32)
        self.state = np.array([self.grid_size / 2, self.grid_size / 2, 0.0, 0.0], dtype=np.float32)
        
        self.fig = None
        self.ax = None

    def reset(self, seed: Optional[int] = None, x=None, y=None, vx=None, vy=None, options=None):
        super().reset(seed=seed)
        self.q = 0
        self.state = np.array([
        self.INIT_STATE[0] if x is None else x,
        self.INIT_STATE[1] if y is None else y,
        self.INIT_STATE[2] if vx is None else vx,
        self.INIT_STATE[3] if vy is None else vy,
        ], dtype=np.float32)

        self.prev_accel = np.zeros(2, dtype=np.float32) # needed for acceleration constraint reward
        self.n_steps = 0
        self.elapsed_time = 0.0
        self.state_history = [self.state.copy()]
        self.action_history = []
        self.plot_path = []
        return self.get_observation(), self.get_info()  

    def step(self, action, ignore_truncation=False): # transition function
        px, py, vx, vy = self.state
        accel = self._action_to_accel[action]
        ax, ay = accel

        previous_accel = self.prev_accel

        A = np.array([
            [1, 0, self.dt, 0],
            [0, 1, 0 , self.dt],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ])

        B = np.array([
            [0.5 * (self.dt ** 2), 0],
            [0, 0.5 * (self.dt ** 2)],
            [self.dt, 0],
            [0, self.dt]
        ])
        prev_xy = self.state[:2].copy()
        self.state = A @ self.state + B @ accel
        # Check the actual position; preserve boundary violations in the physical state.
        out_of_bounds = bool(
            np.any(self.state[:2] < 0.0)
            or np.any(self.state[:2] > self.grid_size - 1)
        )

        # new_vx = vx + (ax * self.dt)
        # new_vy = vy + (ay * self.dt)
        
        # new_px = np.clip(px + (vx * self.dt) + (0.5 * ax * (self.dt ** 2)), 0.0, self.grid_size - 1)
        # new_py = np.clip(py + (vy * self.dt) + (0.5 * ay * (self.dt ** 2)), 0.0, self.grid_size - 1)

        # self.state = np.array([new_px, new_py, new_vx, new_vy], dtype=np.float32)

        

        truncated = False # True if max episode steps are reached

        # One pass of pylon distances serves both the collision test and the robustness signal:
                # a hit is "inside a pylon's physical radius", and rho measures the nearest approach.
        new_xy = self.state[:2].copy()
        distances = self.race_env.pylon_distances(prev_xy, new_xy)
        nearest_pylon_m = float(np.min(distances))
        pylon_robustness = self.race_env.pylon_robustness(distances)
        hit_pylon = (not out_of_bounds) and bool(np.any(distances <= [p["r"] for p in self.PYLONS]))
        reward, reward_parts, event = self.calculate_reward(
            accel, prev_xy, new_xy, pylon_robustness, hit_pylon, out_of_bounds
        )
        self.prev_accel = accel.copy()
        terminated = bool(out_of_bounds or hit_pylon or event["lap_finished"] or np.linalg.norm(self.state[2:]) > self.v_max)

        self.n_steps += 1
        self.elapsed_time = self.n_steps * self.dt

        if not ignore_truncation:
            truncated = self.elapsed_time >= self.MAX_TIME
        self.state_history.append(self.state.copy())
        self.action_history.append(action)

        info = self.get_info()
        info.update({
            "prev_xy": prev_xy,
            "new_xy": new_xy,
            "out_of_bounds": out_of_bounds,
            "hit_pylon": hit_pylon,
            "nearest_pylon_m": nearest_pylon_m,
            "pylon_robustness": pylon_robustness,
            "reward_parts": reward_parts,
            **event,
        })
        return self.get_observation(), reward, terminated, truncated, info

    def get_observation(self):
        noisy_state = self.noise(self.state)
        physical_observation = self.discretize_state(noisy_state)
        return np.concatenate((physical_observation,np.array([self.q], dtype=np.float32),self.prev_accel,))

    def get_info(self):
        return {"state_history": self.state_history, "action_history": self.action_history,
                "q": self.q, "elapsed_time": self.elapsed_time}

    def plot_step(self, start_state, action):
        """Animate the continuous motion for one step without changing env.state."""
        if self.ax is None or self.agent_circle is None:
            raise RuntimeError("Call render() once before plot_step().")

        px, py, vx, vy = start_state
        accel = self._action_to_accel[action]
        ax, ay = accel
        frame_count = max(1, int(np.ceil(self.dt / self.plot_dt)))
        frame_times = np.linspace(0.0, self.dt, frame_count + 1)[1:]

        for t in frame_times:
            x = px + vx * t + 0.5 * ax * t**2
            y = py + vy * t + 0.5 * ay * t**2
            self.agent_circle.set_center((x, y))
            self.plot_path.append((x, y))
            path = np.asarray(self.plot_path)
            self.trajectory_line.set_data(path[:, 0], path[:, 1])

            self.fig.canvas.draw_idle()
            self.fig.canvas.flush_events()
            plt.pause(self.plot_dt)

    def shortest_distance_vec(self, agent_pos, pylon1_pos, pylon2_pos, Pylon_R):
        # Returns the shortest distance from the agent to the gate
        agent_pos = np.asarray(agent_pos, dtype=float)
        pylon1_pos = np.asarray(pylon1_pos, dtype=float)
        pylon2_pos = np.asarray(pylon2_pos, dtype=float)
        d1 = pylon2_pos - pylon1_pos
        d2 = agent_pos - pylon1_pos
        d3 = agent_pos - pylon2_pos
        if np.linalg.norm(d1) <= 2 * Pylon_R:
            raise ValueError("Pylons must leave a nonzero gate opening.")
        t = np.dot(d2, d1)/np.dot(d1, d1)
        margin = Pylon_R/np.linalg.norm(d1)
        match t:
            case t if t<margin:
                vec = d2 - margin*d1
            case t if t>1-margin:
                vec = d3 + margin * d1
            case _:
                vec = d2 - t*d1
        return vec

    def segment_proportion(self, r, agent_pos, p1, p2 ,p3, p4, Pylon_R):
        # Proportion of segment in the pylon circle compared to total segment length
        r = np.asarray(r, dtype=float)
        agent_pos = np.asarray(agent_pos, dtype=float)
        start = agent_pos - r
        centers = np.asarray([p1, p2, p3, p4], dtype=float)
        intervals = []
        a = np.dot(r, r)
        if a == 0:
            return 0.0, 0.0
        for center in centers:
            offset = start - center
            # Solve ||start + t*r - center||² <= Pylon_R².
            b = 2.0 * np.dot(offset, r)
            c = np.dot(offset, offset) - Pylon_R**2
            discriminant = b*b - 4.0*a*c
            if discriminant < 0:
                continue  # No intersection
            root = np.sqrt(discriminant)
            enter = max(0.0, (-b - root) / (2.0*a))
            leave = min(1.0, (-b + root) / (2.0*a))

            if enter < leave:
                intervals.append((enter, leave))

        # Merge overlaps so each portion is counted once.
        proportion1 = 0.0
        covered_until = 0.0
        proportion2 = 0.0
        midpoint_sum = 0.0
        for enter, leave in sorted(intervals):
            effective_enter = max(enter, covered_until)
            length = max(0.0, leave - effective_enter)

            proportion1 += length
            midpoint_sum += length * (effective_enter + leave) / 2.0
            covered_until = max(covered_until, leave)

        proportion2 = midpoint_sum / proportion1 if proportion1 > 0 else 0.0

        return float(np.clip(proportion1, 0.0, 1.0)), float(np.clip(proportion2, 0.0, 1.0))

    def gate_order(self):
        """Return the active gate; after all gates, target G1 again to finish."""
        if not self.GATES:
            return None
        gate_index = self.q if self.q < self.n_gates else 0
        return self.GATES[gate_index]

    def reward_field(self, state, pylons, gate_segment=None):
        """Inverse fractional power of gate distance, reduced by pylon obstruction."""
        if gate_segment is None:
            gate = self.gate_order()
            if gate is None:
                return 0.0
            gate_segment = (gate["p1"], gate["p2"])
        r = self.shortest_distance_vec(state[:2], gate_segment[0], gate_segment[1], self.PYLON_FIELD_R_M)
        proportion1, proportion2 = self.segment_proportion(r, state[:2], pylons[0]['xy'], pylons[1]['xy'], pylons[2]['xy'], pylons[3]['xy'], self.PYLON_FIELD_R_M)
        # Keep the inverse finite when the agent is on the gate.
        distance = max(float(np.linalg.norm(r)), 1e-6)
        return float((1.0 - proportion1) * (1.0 - proportion2)
                     / distance ** self.reward_field_exponent)

    def calculate_reward(self, accel, start_pos, end_pos, pylon_robustness,
                       hit_pylon, out_of_bounds):
        """Combine kinematic penalties and race rewards, advancing gate progress."""
        # add reward for accelerating too much as a penalty as it requires more energy for the drone 
        # add reward for continousness of acceleration rather than abrupt discrete changes in acceleration
        # as it is unrealistic to accelerate with a_max forward and suddenly go backward with -a_max 
        # Temporarily disable acceleration and smoothness penalties during reward tuning.
        # accel_penalty = np.sum(accel ** 2)

        # delta_accel = accel - self.prev_accel
        # smoothness_penalty = np.sum(delta_accel ** 2)
        # Physical speed: reward is evaluated before observation discretization.
        speed = float(np.linalg.norm(self.state[2:]))
        field_reward = float(self.REWARDS["reward_field"]
                             * self.reward_field(self.state, self.PYLONS))

        parts = {
            "neutral": float(self.REWARDS["neutral"]),
            # "acceleration": float(-self.lambda_accel * accel_penalty),
            # "smoothness": float(-self.lambda_smooth * smoothness_penalty),
            "pylon_field": float(self.REWARDS["pylon_field"] * max(0.0, -pylon_robustness)),
            "progress": 0.0,
            "midpoint": 0.0,
            "endpoint": 0.0,
            "overspeed": float(self.REWARDS["overspeed"]) if speed > self.v_max else 0.0,
            "underspeed": float(self.REWARDS["underspeed"]) if speed <= self.v_min else 0.0,
            "out_of_bounds": float(self.REWARDS["out_of_bounds"]) if out_of_bounds else 0.0,
            "reward_field": field_reward,
        }
        event = {"gate_index": None, "gate_name": None, "gate_u": None,
                 "lap_finished": False}

        if (
            not hit_pylon
            and not out_of_bounds
            and speed <= self.v_max
            and self.GATES
            ):
            gate = self.gate_order()
            gate_index = self.q if self.q < self.n_gates else 0
            # Reward progress toward the current gate before advancing self.q.
            target = (gate["p1"] + gate["p2"]) / 2
            parts["progress"] = float(self.REWARDS["progress"] * (
                np.linalg.norm(start_pos - target) - np.linalg.norm(end_pos - target)
            ))
            crossing = segment_intersection(start_pos, end_pos, gate["p1"], gate["p2"])
            if crossing is not None:
                _, u = crossing
                event.update({"gate_index": gate_index, "gate_name": gate["name"],
                              "gate_u": float(u)})
                if self.q < self.n_gates:
                    parts["midpoint"] = float(self.REWARDS["midpoint"])
                    self.q += 1
                else:
                    parts["endpoint"] = float(self.REWARDS["endpoint"])
                    event["lap_finished"] = True

        return float(sum(parts.values())), parts, event
        

    def discretize_state(self, state):
        """Return a rounded, bounded observation without changing the physical state."""

        lower = np.array([0, 0, -self.v_max, -self.v_max])
        upper = np.array([
            self.grid_size - 1, self.grid_size - 1,
            self.v_max, self.v_max,
        ])

        return np.clip(
            np.round(state * self.grid_density) / self.grid_density,
            lower,
            upper,
        ).astype(np.float32)

    def noise(self, state, pos_noise_std=0.1, vel_noise_std=0.1):
        """Add measurement noise to a copy of the supplied state."""
        noisy_state = state.copy()
        noisy_state[:2] += self.np_random.normal(0, pos_noise_std, size=2)
        noisy_state[2:] += self.np_random.normal(0, vel_noise_std, size=2)
        return noisy_state

    def render(self, discrete_state):
        """Draw the discrete position and velocity supplied by the caller."""
        position, velocity = discrete_state[:2], discrete_state[2:4]
        if self.fig is None or self.ax is None:
            self.fig, self.ax = plt.subplots()
            self.ax.set_xlim(0, self.grid_size)
            self.ax.set_ylim(0, self.grid_size)
            self.ax.set_aspect('equal')
            self.ax.set_title('Pure Kinematic Grid')
            self.ax.set_xlabel('X Position')
            self.ax.set_ylabel('Y Position')

        self.ax.clear()
        self.ax.set_xlim(0, self.grid_size)
        self.ax.set_ylim(0, self.grid_size)
        self.ax.set_aspect('equal')
        self.ax.set_title('Pure Kinematic Grid')
        self.ax.set_xlabel('X Position')
        self.ax.set_ylabel('Y Position')

        num_lines = (self.grid_size * self.grid_density) + 1
        grid_points = np.linspace(0, self.grid_size, num_lines)

        # Draw the dense grid
        for x in grid_points:
            self.ax.plot([x, x], [0, self.grid_size], color='lightgray', linewidth=0.5)
        for y in grid_points:
            self.ax.plot([0, self.grid_size], [y, y], color='lightgray', linewidth=0.5)

        self.ax.add_patch(plt.Rectangle(
            (0, 0), self.grid_size - 1, self.grid_size - 1,
            fill=False, edgecolor='black', linestyle='--', label='Boundary', zorder=2,
        ))
        for index, gate in enumerate(self.GATES):
            endpoints = np.array([gate['p1'], gate['p2']])
            self.ax.plot(endpoints[:, 0], endpoints[:, 1], color='darkorange',
                         linewidth=2, label='Gates' if index == 0 else None, zorder=3)
            midpoint = endpoints.mean(axis=0)
            self.ax.text(*midpoint, gate['name'], color='darkorange', zorder=5)
        for index, pylon in enumerate(self.PYLONS):
            self.ax.add_patch(Circle(
                pylon['xy'], self.PYLON_FIELD_R_M, fill=False,
                edgecolor='firebrick', linestyle=':', alpha=0.5,
                label='Safety radius' if index == 0 else None, zorder=2,
            ))
            self.ax.add_patch(Circle(
                pylon['xy'], pylon['r'], color='firebrick',
                label='Pylons' if index == 0 else None, zorder=4,
            ))
            self.ax.annotate(pylon['name'], pylon['xy'], xytext=(5, 5),
                             textcoords='offset points', color='firebrick', zorder=5)
        self.ax.legend(loc='upper right')

        self.agent_circle = plt.Circle((position[0], position[1]), 0.3, color='black', alpha=0.7, zorder=5)
        self.ax.add_patch(self.agent_circle)
        self.plot_path = [np.asarray(position, dtype=float).copy()]
        self.trajectory_line, = self.ax.plot(
            [position[0]], [position[1]], color='tab:blue', linewidth=1.5
        )
        
        plt.pause(0.01)

    def close(self):
        if self.fig is not None:
            plt.close(self.fig)
            self.fig = None
            self.ax = Nonedis

if __name__ == "__main__":
    env = PureKinematicGrid()
    state, _ = env.reset()
    env.render(state)

    for _ in range(1000):
        action = np.random.choice(list(env._action_to_accel.keys()))
        start_state = env.state.copy()
        discrete_state, reward, terminated, truncated, info = env.step(action)
        env.plot_step(start_state, action)
        if terminated or truncated:
            break

    plt.show()
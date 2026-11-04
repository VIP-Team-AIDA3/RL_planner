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
    def __init__(self, grid_size=38, v_max=8.0, a_max=4.92, grid_density=20, lambda_accel=0.0001,
    lambda_smooth=0.0003, MAX_TIME=200.0, course_path= None, rewards=None, dt=0.1,
    reward_field_exponent=0.5, num_a_values=4, num_angle_values=12):
        super().__init__()
        self.grid_size = grid_size
        self.grid_density = grid_density # how many sub lines appear between whole integer values

        self.v_max = v_max
        self.v_min = 3.39  # m/s: underspeed penalty applies at or below this speed. Stall Speed
        self.v_cruise = 4.83 # airborne starting speed m/s
        self.max_turn_rate_rad_s = np.deg2rad(30.0)

        self.a_max = a_max
        self.num_a_values = int(num_a_values)
        self.num_angle_values = int(num_angle_values)

        self.reward_field_exponent = reward_field_exponent # Postponing this for now

        self.integration_dt = 0.01 # internal max integration substep -> the physics is eval every 0.01 seconds but the agent chooses an action every 0.1 seconds
        self.dt = float(dt) # Seconds per action, independent of spatial resolution.
        self.plot_dt = min(self.dt / 10.0, 0.01)

        self.agent_circle = None
        self.trajectory_line = None
        self.plot_path = []
        self.lambda_accel = lambda_accel
        self.lambda_smooth = lambda_smooth # postpone this for now

        self.MAX_TIME = float(MAX_TIME)
        self.n_steps = 0
        self.elapsed_time = 0.0

        # the state includes [x, y, velocity, direction of velocity (angle in radians, psi)]
        self.INIT_STATE = np.array(
        [grid_size / 2, grid_size / 2, self.v_cruise, 0.0],
        dtype=np.float32,
        )

        self.state = self.INIT_STATE.copy()
        self.state_history = [self.state.copy()]
        self.action_history = []
        self._last_step_path = [self.state[:2].copy()] # stores immediate positions when turning

        # Selecting course yaml file
        if course_path is None:
            course_path = (
            Path(__file__).resolve().parents[2]
            / "ros2_ws/src/pylon_2026_world/purt_course2.yaml"
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

        # Observation space, [x, y, speed, psi, gate_progress (q)]
        lower_bounds = np.array(
            [0.0, 0.0, self.v_min, -np.pi, 0.0], 
            dtype=np.float32)
        upper_bounds = np.array(
            [self.grid_size - 1, self.grid_size - 1, self.v_max, np.pi, self.n_gates], 
            dtype=np.float32)
        self.observation_space = spaces.Box(
            low=lower_bounds, high=upper_bounds, shape=(5,), dtype=np.float32) # observation space with bounds specified above

        #tangential acceleration values and turning rate values for the action space
        accel_values = np.array([
            -4.92, -2.46, 0.0, 2.46, 4.92
        ])

        turn_values = np.deg2rad([
            -30, -20, -10, 0, 10, 20, 30
        ])

        #Creates every possible combination of acceleration and turning rate
        self.action_to_control = {
            i * len(turn_values) + j: (float(a), float(w))
            for i, a in enumerate(accel_values)
            for j, w in enumerate(turn_values)
        }

        self.action_space = spaces.Discrete(len(self.action_to_control))

        self.prev_accel = np.zeros(2, dtype=np.float32)
        
        self.fig = None
        self.ax = None

    def reset(self, seed: Optional[int] = None, x=None, y=None, speed=None, psi_deg=None, options=None): # resets the environment to the default starting state
        super().reset(seed=seed)
        self.q = 0

        initial_speed = self.v_cruise if speed is None else float(speed)

        if not (self.v_min <= initial_speed <= self.v_max):
            raise ValueError("Initial airborne speed must lie in [v_min, v_max]")

        initial_angle = 0.0 if psi_deg is None else np.deg2rad(psi_deg)

        self.state = np.array([self.INIT_STATE[0] if x is None else x, 
                               self.INIT_STATE[1] if y is None else y, 
                               initial_speed, 
                               self.wrap_angle(initial_angle)], dtype=np.float32)

        self.prev_accel = np.zeros(2, dtype=np.float32)
        self.n_steps = 0
        self.elapsed_time = 0.0
        self.state_history = [self.state.copy()]
        self.action_history = []
        self.plot_path = []
        self._last_step_path = [self.state[:2].copy()]

        return self.get_observation(), self.get_info()

    @staticmethod
    def wrap_angle(angle): # wraps all angles into the [-pi, pi) range, eg. 2pi -> 0
        """Wrap a course angle [-pi, pi)"""
        return (float(angle) + np.pi) % (2.0 * np.pi) - np.pi

    def integrate_control_action(self, action): #TODO: need to verify geometrically that the math works out
        """Move a 2D point using polar acceleration and velocity."""

        # RL chooses tangential acceleration and turning rate
        a, omega = self.action_to_control[int(action)]
        x, y, v, psi = map(float, self.state)
        
        # Physics integration substeps
    
        # Multi rate simulation: the RL agent selects a new action every
        # self.dt seconds (10 Hz by default), while the physics updates
        # at a higher frequency (100 Hz by default).
        # Hold the agent's action constant during these physics substeps.
        # Calculate enough substeps to cover the full control interval (stored in n_substeps),
        # with at least 10 substeps for accuracy.
        # sub_dt makes sure their durations sum to exactly self.dt.
        # The RL agent selects actions at 10 Hz, while the physics
        # integrates at 100 Hz using the same held command.
        # This does not introduce noise, but limits how quickly
        # the agent can respond to disturbances or changing conditions.
        # Actual disturbances and sensor noise must be modeled separately.
        n_substeps = max(10, int(np.ceil(self.dt / self.integration_dt)))

        sub_dt = self.dt / n_substeps
        path = [np.array([x, y])]

        for _ in range(n_substeps):
            #Midpoint values between each substep
            v_mid = v + 0.5 * a * sub_dt
            psi_mid = psi + 0.5 * omega * sub_dt

            #Update Position Values
            x += v_mid * np.cos(psi_mid) * sub_dt
            y += v_mid * np.sin(psi_mid) * sub_dt

            #update speed and heading
            v += a * sub_dt
            psi = self.wrap_angle(psi + omega * sub_dt)

            path.append(np.array([x, y]))

        self.state = np.array([x, y, v, psi], dtype=np.float32)

        return path, {
        "applied_a_m_s2": float(a),
        "applied_omega_deg_s": float(np.rad2deg(omega)), }

    #TODO: Needs to calculate and return the rewards
    def step(self, action, ignore_truncation=False):
        # Store prev state
        start_state = self.state.copy()
        prev_xy = start_state[:2].copy()

        # Update pos and vel
        path, control_info = self.integrate_control_action(action)

        # Save calculated trajectory for plotting
        self._last_step_path = path
        new_xy = self.state[:2].copy()

        # Get the commanded accel
        a, omega = self.action_to_control[int(action)]

        # Converting init vel to cartesian
        prev_velocity_xy = start_state[2] * np.array([
            np.cos(start_state[3]),
            np.sin(start_state[3])
        ])

        # Converting final vel to cartesian
        new_velocity_xy = self.state[2] * np.array([
            np.cos(self.state[3]),
            np.sin(self.state[3])
        ])

        # Calculate actual average Cartesian acceleration
        accel_xy = (new_velocity_xy - prev_velocity_xy) / self.dt

        # Check if the aircraft left the boundaries
        out_of_bounds = any(
            np.any(xy < 0.0)
            or np.any(xy > self.grid_size - 1)
            for xy in path
        )

        # Speed constraints
        speed = float(self.state[2])

        stalled = speed < self.v_min
        overspeed = speed > self.v_max

        # Store previous commanded acceleration
        self.prev_accel = np.array(
            [a, omega],
            dtype=np.float32
        )

        # Episode termination conditions
        terminated = bool(
            out_of_bounds
            or stalled
            or overspeed
        )

        # Preserve the new time based episode tracking
        self.n_steps += 1
        self.elapsed_time = self.n_steps * self.dt

        truncated = (
            not ignore_truncation
            and self.elapsed_time >= self.MAX_TIME
        )

        # Save histories
        self.state_history.append(self.state.copy())
        self.action_history.append(int(action))

        # Return diagnostic information
        info = self.get_info()

        info.update({
            "prev_xy": prev_xy,
            "new_xy": new_xy,
            "out_of_bounds": out_of_bounds,
            "stalled": stalled,
            "overspeed": overspeed,
            "speed_m_s": speed,
            "course_deg": float(np.rad2deg(self.state[3])),
            **control_info,
        })

        return self.get_observation(), 0.0, terminated, truncated, info

    def get_observation(self):
        noisy_state = self.noise(self.state)
        physical_observation = self.discretize_state(noisy_state)
        return np.concatenate((physical_observation,np.array([self.q], dtype=np.float32)))

    def get_info(self):
        return {"state_history": self.state_history, "action_history": self.action_history,
                "q": self.q, "elapsed_time": self.elapsed_time}

    def plot_step(self, start_state, action):
        """Animate the trajectory calculated by integrate_control_action()."""

        if self.ax is None or self.agent_circle is None:
            raise RuntimeError(
                "Call render() once before plot_step()."
            )

        # Use the already-calculated intermediate positions
        for xy in self._last_step_path[1:]:

            self.agent_circle.set_center(
                (float(xy[0]), float(xy[1]))
            )

            self.plot_path.append(
                np.asarray(xy, dtype=float).copy()
            )

            path = np.asarray(self.plot_path)

            self.trajectory_line.set_data(
                path[:, 0],
                path[:, 1]
            )

            self.fig.canvas.draw_idle()
            self.fig.canvas.flush_events()

            plt.pause(
                self.dt / (len(self._last_step_path) - 1)
            )

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
                       hit_pylon, out_of_bounds, path=None):
        """Combine kinematic penalties and race rewards, advancing gate progress."""
        # add reward for accelerating too much as a penalty as it requires more energy for the drone 
        # add reward for continousness of acceleration rather than abrupt discrete changes in acceleration
        # as it is unrealistic to accelerate with a_max forward and suddenly go backward with -a_max 
        # Temporarily disable acceleration and smoothness penalties during reward tuning.
        # accel_penalty = np.sum(accel ** 2)

        # delta_accel = accel - self.prev_accel
        # smoothness_penalty = np.sum(delta_accel ** 2)
        # Physical speed: reward is evaluated before observation discretization.
        speed = float(self.state[2])
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
            and self.v_min <= speed <= self.v_max # checking both speed limits before awarding a gate crossing
            and self.GATES
            ):
            gate = self.gate_order()
            gate_index = self.q if self.q < self.n_gates else 0
            # Reward progress toward the current gate before advancing self.q.
            target = (gate["p1"] + gate["p2"]) / 2
            parts["progress"] = float(self.REWARDS["progress"] * (
                np.linalg.norm(start_pos - target) - np.linalg.norm(end_pos - target)
            ))

            # Check each intermediate segment of the trajectory
            crossing = None

            segments = (
                zip(path[:-1], path[1:])
                if path is not None
                else [(start_pos, end_pos)]
            )

            for p0, p1 in segments:

                crossing = segment_intersection(
                    p0,
                    p1,
                    gate["p1"],
                    gate["p2"]
                )

                if crossing is not None:
                    break

            # above block of code used to be crossing = segment_intersection(start_pos, end_pos, gate["p1"], gate["p2"])
            
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
        """Discretize position, speed, and course angle independently."""

        obs = np.asarray(state, dtype=float).copy()

        # Discretize x/y pos using the grid density
        obs[:2] = np.clip(np.round(obs[:2] * self.grid_density) / self.grid_density,
            0.0,
            self.grid_size - 1)

        # Discretize speed into 0.25 m/s intervals
        obs[2] = np.clip(np.round(obs[2] / 0.25) * 0.25,
            self.v_min,
            self.v_max)
        
        # Discretize angle into 10-degree intervals
        heading_bin = np.deg2rad(10.0)
        obs[3] = self.wrap_angle(np.round(self.wrap_angle(obs[3]) / heading_bin) * heading_bin)

        return obs.astype(np.float32)

    def noise(self, state, pos_noise_std=0.1, speed_noise_std=0.1, heading_noise_deg=0.1):
        """Add measurement noise without changing the physical state."""

        # Pos measurement noise
        noisy_state = state.astype(float).copy()
        noisy_state[:2] += self.np_random.normal(0.0, pos_noise_std, size=2)

        # Speed measurement noise
        noisy_state[2] += self.np_random.normal(0.0, speed_noise_std)

        # Angle measurement noise
        noisy_state[3] = self.wrap_angle(
            noisy_state[3] + self.np_random.normal(0.0, np.deg2rad(heading_noise_deg))
        )

        return noisy_state

    def render(self, discrete_state):
        """Draw the discrete position and velocity supplied by the caller."""
        position = discrete_state[:2]
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
            self.ax = None

if __name__ == "__main__":
    env = PureKinematicGrid()

    def control_action(acceleration, turn_deg_s):
        """Select a deterministic command instead of sampling a random action."""
        return next(
            i for i, (a, omega) in env.action_to_control.items()
            if np.isclose(a, acceleration)
            and np.isclose(omega, np.deg2rad(turn_deg_s))
        )

    def check_close(actual, expected, atol=3e-6):
        # Physical state is float32; allow rounding and midpoint integration error.
        np.testing.assert_allclose(actual, expected, rtol=0.0, atol=atol)

    # TEST 1: Verify all 35 acceleration/heading-rate combinations and reset API.
    expected_controls = {
        (a, w)
        for a in (-4.92, -2.46, 0.0, 2.46, 4.92)
        for w in (-30, -20, -10, 0, 10, 20, 30)
    }
    actual_controls = {
        (round(a, 2), round(float(np.rad2deg(w))))
        for a, w in env.action_to_control.values()
    }
    assert env.action_space.n == 35
    assert set(env.action_to_control) == set(range(35))
    assert actual_controls == expected_controls
    observation, info = env.reset(seed=42)
    assert isinstance(info, dict), "reset() must return an info dictionary"
    assert observation.shape == (5,)
    assert observation.dtype == np.float32
    assert env.observation_space.contains(observation)
    print("TEST 1 PASSED: 35 controls, five-value observation, reset API")

    # TEST 2: Straight acceleration/braking at multiple headings.
    # Exact solution: displacement = (v0*t + 0.5*a*t**2) along the heading.
    for a in (-4.92, -2.46, 0.0, 2.46, 4.92):
        for heading_deg in (0, 90, -135):
            env.reset(seed=42, speed=4.83, psi_deg=heading_deg)
            start = env.state.astype(float).copy()
            _, _, terminated, truncated, info = env.step(control_action(a, 0))
            distance = start[2] * env.dt + 0.5 * a * env.dt**2
            expected_xy = start[:2] + distance * np.array([
                np.cos(start[3]), np.sin(start[3])
            ])
            check_close(env.state[:2], expected_xy)
            check_close(env.state[2], start[2] + a * env.dt)
            check_close(env.wrap_angle(env.state[3] - start[3]), 0.0)
            assert not terminated and not truncated
            check_close(info["applied_a_m_s2"], a)
    print("TEST 2 PASSED: exact straight-line position and speed for acceleration/braking")

    # TEST 3: Constant-speed left/right circles, checked against the exact arc.
    # Radius = v/abs(omega). Check every intermediate position, not just the endpoint.
    for turn_deg_s in (-30, 30):
        env.reset(seed=42, speed=4.83, psi_deg=25)
        start = env.state.astype(float).copy()
        omega = np.deg2rad(turn_deg_s)
        env.step(control_action(0.0, turn_deg_s))
        path = np.asarray(env._last_step_path)
        times = np.linspace(0.0, env.dt, len(path))
        headings = start[3] + omega * times
        expected_path = start[:2] + np.column_stack((
            start[2] / omega * (np.sin(headings) - np.sin(start[3])),
            start[2] / omega * (np.cos(start[3]) - np.cos(headings)),
        ))
        check_close(path, expected_path, atol=2e-6)
        check_close(env.state[2], start[2])
        assert len(path) >= 11
        print(f"TEST 3 PASSED: {turn_deg_s:+d} deg/s circle, radius {start[2]/abs(omega):.4f} m")

    # TEST 4: All nominal controls respect the signed heading-rate constraint.
    # Derive the achieved rate from the physical state, independently of info.
    for action, (a, omega) in env.action_to_control.items():
        env.reset(seed=42, speed=4.83, psi_deg=0)
        start_heading = float(env.state[3])
        _, _, terminated, truncated, info = env.step(action)
        delta = env.wrap_angle(float(env.state[3]) - start_heading)
        check_close(delta, omega * env.dt)
        assert abs(delta) <= env.max_turn_rate_rad_s * env.dt + 1e-7
        check_close(info["applied_omega_deg_s"], np.rad2deg(omega))
        assert not terminated and not truncated
    print("TEST 4 PASSED: all 35 controls respect +/-3 degrees per 0.1-second step")

    # TEST 5: Turning across +/-180 degrees wraps without reversing the turn.
    for heading_deg, turn_deg_s in ((179, 30), (-179, -30)):
        env.reset(seed=42, psi_deg=heading_deg)
        start_heading = float(env.state[3])
        env.step(control_action(0.0, turn_deg_s))
        assert -np.pi <= float(env.state[3]) < np.pi
        check_close(
            env.wrap_angle(float(env.state[3]) - start_heading),
            np.deg2rad(turn_deg_s) * env.dt,
        )
    print("TEST 5 PASSED: heading wrap for left and right turns")

    # TEST 6: Speed violations terminate without clamping the physical speed.
    for initial_speed, a, flag in (
        (env.v_max - 0.01, 4.92, "overspeed"),
        (env.v_min + 0.01, -4.92, "stalled"),
    ):
        env.reset(seed=42, speed=initial_speed)
        start_speed = float(env.state[2])
        _, _, terminated, truncated, info = env.step(control_action(a, 0))
        check_close(env.state[2], start_speed + a * env.dt)
        assert terminated and not truncated and info[flag]
        assert not info["out_of_bounds"]
    print("TEST 6 PASSED: overspeed and stall termination, physical speed remains unclamped")

    # TEST 7: Leaving the course terminates and preserves the intermediate path.
    env.reset(seed=42, x=env.grid_size - 1 - 0.01, y=19, psi_deg=0)
    _, _, terminated, truncated, info = env.step(control_action(0.0, 0))
    assert terminated and not truncated and info["out_of_bounds"]
    assert any(xy[0] > env.grid_size - 1 for xy in env._last_step_path)
    print("TEST 7 PASSED: out-of-bounds termination")

    # TEST 8: Time-limit truncation and reset of episode bookkeeping.
    original_max_time = env.MAX_TIME
    env.MAX_TIME = 2 * env.dt
    env.reset(seed=42)
    _, _, terminated, truncated, _ = env.step(control_action(0.0, 0))
    assert not terminated and not truncated
    _, _, terminated, truncated, _ = env.step(control_action(0.0, 0))
    assert not terminated and truncated
    check_close(env.elapsed_time, 2 * env.dt)
    assert len(env.state_history) == 3 and len(env.action_history) == 2
    observation, info = env.reset(seed=42)
    assert env.n_steps == 0 and env.elapsed_time == 0.0 and env.q == 0
    assert len(env.state_history) == 1 and env.action_history == []
    env.MAX_TIME = original_max_time
    print("TEST 8 PASSED: time-limit truncation and history reset")

    env.close()
    print("All 8 kinematics checks passed. Race rewards and gate progression are not tested here.")

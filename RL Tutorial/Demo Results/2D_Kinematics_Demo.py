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

class PureKinematicGrid(gym.Env):
    def __init__(self, grid_size=20, v_max=3.0, a_max=1.0, grid_density=10, lambda_accel=0.01,
    lambda_smooth=0.05, num_a_values =10):
        self.grid_size = grid_size
        self.v_max = v_max
        self.a_max = a_max
        self.grid_density = grid_density # how many sub lines appear between whol integer values
        self.dt = 1 / self.grid_density #time step changes based on the grid density
        self.lambda_accel = lambda_accel
        self.lambda_smooth = lambda_smooth
        self.num_a_values = num_a_values
        #TODO: Gym implementation

        lower_bounds = np.array([0.0, 0.0, -self.v_max, -self.v_max], dtype=np.float32)
        upper_bounds = np.array([self.grid_size - 1, self.grid_size - 1, self.v_max, self.v_max], dtype=np.float32)
        # tells the agent what the state space is bounded to
        self.observation_space = spaces.Box(low=lower_bounds, high=upper_bounds, shape=(4,), dtype=np.float32)

        accel_values = np.linspace(-self.a_max, self.a_max, self.num_a_values)

        self._action_to_accel = {}

        for ax in accel_values:
                for ay in accel_values:
                        self._action_to_accel[len(self._action_to_accel)] = np.array([ax, ay], dtype=np.float32)

        self.action_space = spaces.Discrete(len(self._action_to_accel))

        self.prev_accel = np.zeros(2, dtype=np.float32)
        self.state = np.array([self.grid_size / 2, self.grid_size / 2, 0.0, 0.0], dtype=np.float32)
        
        self.fig = None
        self.ax = None

    def reset(self, seed: Optional[int] = None, x=None, y=None, vx=None, vy=None):
        super().reset(seed=seed)
        if x == None and y == None:
            self.pos = np.array([self.grid_size / 2, self.grid_size / 2])
        else: 
            self.pos = np.array([x, y])
        if vx == None and vy == None:
            self.velocity = np.array([0.0, 0.0])  
        else:
            self.velocity = np.array([vx, vy])

        self.state = np.concatenate((self.pos, self.velocity))

        self.prev_accel = np.zeros(2, dtype=np.float32)

        return (self.state.copy(), {}) 

    def step(self, action): # transition function
        #TODO: Gym implementation
        px, py, vx, vy = self.state
        accel = self._action_to_accel[action]

        # previous_accel is now the value of the previous acceleration for the #TODO: reward function
        previous_accel = self.prev_accel

        new_vx = np.clip(vx + (accel * self.dt), -self.v_max, self.v_max)
        new_vy = np.clip(vy + (accel * self.dt), -self.v_max, self.v_max)
        
        new_px = np.clip(px + (vx * self.dt) + (0.5 * accel * (self.dt ** 2)), 0.0, self.grid_size - 1)
        new_py = np.clip(py + (vy * self.dt) + (0.5 * accel * (self.dt ** 2)), 0.0, self.grid_size - 1)

        if new_px in (0.0, self.grid_size - 1):
            new_vx = 0.0
        if new_py in (0.0, self.grid_size - 1):
            new_vy = 0.0

        self.state = np.array([new_px, new_py, new_vx, new_vy], dtype=np.float32)

        # gets the previous acceleration for #TODO: the reward function
        noisy_pos = self.noise(self.state[:2])
        discrete_state = self.discretize_state(noisy_pos, self.state[2:])

        reward = self.compute_reward(accel)

        self.prev_accel = accel.copy()
        terminated = False # True if agent reaches a goal or crashes
        truncated = False # True if max episode steps are reached

        return discrete_state, reward, terminated, truncated, {}

    def compute_reward(self, accel: np.ndarray) -> float:
        px, py, vx, vy = self.state
        current_pos = np.array([px, py], dtype=np.float32)
        # add reward for accelerating too much as a penalty as it requires more energy for the drone 
        # add reward for continousness of acceleration rather than abrupt discrete changes in acceleration
        # as it is unrealistic to accelerate with a_max forward and suddenly go backward with -a_max 
        accel_penalty = np.sum(accel ** 2)

        delta_accel = accel - self.prev_accel
        smoothness_penalty = np.sum(delta_accel ** 2)

        reward = (
            - self.lambda_accel * accel_penalty
            - self.lambda_smooth * smoothness_penalty
        )

        return reward
        

    def discretize_state(self, pos, velocity):
        quantized_pos = np.round(pos * self.grid_density) / self.grid_density
        quantized_vel = np.round(velocity * self.grid_density) / self.grid_density
        
        self.pos_discrete = np.clip(quantized_pos, 0.0, self.grid_size - 1)
        self.velocity_discrete = np.clip(quantized_vel, -self.v_max, self.v_max)
        return (self.pos_discrete.copy(), self.velocity_discrete.copy())

    def noise(self, pos, pos_noise_std=0.1):
        self.noisy_pos = pos + np.random.normal(0, pos_noise_std, size=pos.shape)
        return (self.noisy_pos.copy())

    def render(self, discrete_state):
        """Draw the discrete position and velocity supplied by the caller."""
        position, velocity = discrete_state
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

        agent_circle = plt.Circle((position[0], position[1]), 0.3, color='blue', alpha=0.7)
        self.ax.add_artist(agent_circle)
        
        plt.pause(0.1)

if __name__ == "__main__":
    env = PureKinematicGrid(grid_size=20, v_max=50, a_max=50)
    state = env.reset()
    discrete_state = env.discretize_state(*state)
    env.render(discrete_state)

    for _ in range(50):
        action = np.random.choice(list(env._action_to_accel.keys()))
        position, velocity = env.step(action, discrete_state)
        noisy_position = env.noise(position, pos_noise_std=0.1)
        discrete_state = env.discretize_state(noisy_position, velocity)
        env.render(discrete_state)

    plt.show()
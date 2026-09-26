import numpy as np
import matplotlib.pyplot as plt

class PureKinematicGrid:
    def __init__(self, grid_size=20, v_max=3.0, a_max=1.0):
        self.grid_size = grid_size
        self.v_max = v_max
        self.a_max = a_max
        self.dt = 1.0
        
        self._action_to_accel = {
            0: np.array([0.0, self.a_max]),
            1: np.array([self.a_max, 0.0]),
            2: np.array([0.0, -self.a_max]),
            3: np.array([-self.a_max, 0.0]),
            4: np.array([0.0, 0.0])
        }
        
        self.pos = np.array([grid_size / 2, grid_size / 2])
        self.velocity = np.array([0.0, 0.0])
        self.fig = None
        self.ax = None

    def reset(self):
        self.pos = np.array([self.grid_size / 2, self.grid_size / 2])
        self.velocity = np.array([0.0, 0.0])
        return (self.pos.copy(), self.velocity.copy())

    def step(self, action):
        accel = self._action_to_accel[action]

        # equations from integration
        self.velocity = np.clip(self.velocity + (accel * self.dt), -self.v_max, self.v_max)
        self.pos = np.clip(self.pos + (self.velocity * self.dt) + (0.5 * accel * (self.dt ** 2)), 0.0, self.grid_size - 1)
        
        if self.pos[0] in (0.0, self.grid_size - 1):
            self.velocity[0] = 0.0
        if self.pos[1] in (0.0, self.grid_size - 1):
            self.velocity[1] = 0.0
            
        return (self.pos.copy(), self.velocity.copy())

    def discretize_state(self, pos):
        self.pos_discrete = np.clip(np.round(pos).astype(int), 0, self.grid_size - 1)
        self.velocity_discrete = np.clip(np.round(self.velocity).astype(int), -self.v_max, self.v_max)
        return (self.pos_discrete.copy(), self.velocity_discrete.copy())

    def noise(self, pos, pos_noise_std=0.1):
        self.noisy_pos = pos + np.random.normal(0, pos_noise_std, size=pos.shape)
        return (self.noisy_pos.copy())

    def render(self):
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

        # Draw the grid
        for x in range(self.grid_size + 1):
            self.ax.plot([x, x], [0, self.grid_size], color='lightgray', linewidth=0.5)
        for y in range(self.grid_size + 1):
            self.ax.plot([0, self.grid_size], [y, y], color='lightgray', linewidth=0.5)

        # Draw the agent
        agent_circle = plt.Circle((self.pos[0], self.pos[1]), 0.3, color='blue', alpha=0.7)
        self.ax.add_artist(agent_circle)
        arrow_scale = 0.5
        self.ax.arrow(self.pos[0], self.pos[1], self.velocity[0] * arrow_scale, self.velocity[1] * arrow_scale, head_width=0.2, head_length=0.3, fc='red', ec='red')

        plt.pause(0.1)
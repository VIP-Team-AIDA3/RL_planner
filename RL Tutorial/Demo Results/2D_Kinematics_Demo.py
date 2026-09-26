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

    def step(self, action, discrete_state):
        accel = self._action_to_accel[action]
        pos, velocity = discrete_state

        # equations from integration
        self.velocity = np.clip(velocity + (accel * self.dt), -self.v_max, self.v_max)
        self.pos = np.clip(pos + (velocity * self.dt) + (0.5 * accel * (self.dt ** 2)), 0.0, self.grid_size - 1)
        
        if self.pos[0] in (0.0, self.grid_size - 1):
            self.velocity[0] = 0.0
        if self.pos[1] in (0.0, self.grid_size - 1):
            self.velocity[1] = 0.0
            
        return (self.pos.copy(), self.velocity.copy())

    def discretize_state(self, pos, velocity):
        self.pos_discrete = np.clip(np.round(pos).astype(int), 0, self.grid_size - 1)
        self.velocity_discrete = np.clip(np.round(velocity).astype(int), -self.v_max, self.v_max)
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

        for x in range(self.grid_size + 1):
            self.ax.plot([x, x], [0, self.grid_size], color='lightgray', linewidth=0.5)
        for y in range(self.grid_size + 1):
            self.ax.plot([0, self.grid_size], [y, y], color='lightgray', linewidth=0.5)

        agent_circle = plt.Circle((position[0], position[1]), 0.3, color='blue', alpha=0.7)
        self.ax.add_artist(agent_circle)
        
        plt.pause(0.1)

if __name__ == "__main__":
    env = PureKinematicGrid(grid_size=20, v_max=3.0, a_max=1.0)
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
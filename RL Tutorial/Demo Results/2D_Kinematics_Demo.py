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
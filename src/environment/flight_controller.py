from abc import ABC, abstractmethod
import gymnasium as gym
from pid_controller import PIDController
import math

class FlightController(ABC):
    @abstractmethod
    def step(self, observation, action, dt: float) -> dict[str, float]:
        pass
    
    @abstractmethod
    def reset(self):
        pass

import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from environment.rumoca_env import RumocaEnv
from environment.flight_controller import FlightController
from environment.pid_controller import PIDController

class CustomEnv(RumocaEnv):
    def get_fc_observation(self):
            return {
                "v_est": self.v_est,
                "vdot_est": self.vdot_est,
                "psidot_est": self.psidot_est,
                "beta_est": self.beta_est,
                "gamma_est": self.gamma_est,
                "roll_est": self.roll_est
            }
            
    def get_agent_observation(self):
        return {
            "v_est": self.v_est,
            "gamma_est": self.gamma_est,
            "yaw_est": self.yaw_est
        }
    
    def get_reward(self, observation, action, new_observation):
        return 0.0
    
class CustomTECS(FlightController):
    def __init__(
        self,
        k_tp=10.0,
        k_ti=5.0,
        k_ep=4.0,
        k_ei=3.0,
        k_r2t=0.15,
        k_rp=1.0,
        k_ri=0.0,
        k_rd=0.1,
        k_yp=1.0,
        k_yi=0.0,
        k_yd=0.1,
        trim_throttle=0,
        g=9.81
    ):
        self.K_R2T = k_r2t
        self.trim_th = trim_throttle
        self.g = g

        # PID Control
        self.ThrottlePID = PIDController(k_tp, k_ti, 0, (0,1))
        self.ElevatorPID = PIDController(k_ep, k_ei, 0, (-1,1))
        self.AileronPID = PIDController(k_rp, k_ri, k_rd, (-1,1))
        self.RudderPID = PIDController(k_yp, k_yi, k_yd, (-1,1))
    
    def step(self, observation: dict[str, float], action: dict[str, float], dt: float) -> dict[str, float]:        
        # Total Energy Rate Error (Throttle Loop)
        edot_curr = observation.get("gamma_est") + (observation.get("v_est") * action.get("vdot_des")) / self.g
        edot_cmd = action.get("gamma_des") + (observation.get("v_est") * action.get("vdot_des")) / self.g

        # Bank angle load factor compensation (n = 1 / cos(phi))
        load_factor = 1.0 / max(0.01, math.cos(observation.get("roll_est")))
        roll_drag_boost = self.K_R2T * (load_factor - 1.0)
        
        # Total Throttle Command
        throttle_cmd = self.ThrottlePID.step(edot_cmd, edot_curr, dt) + self.trim_th + roll_drag_boost
        
        # 2. Energy Distribution Rate Error (Elevator Loop)
        # Account for the vertical component reduction due to bank angle
        dist_curr = (observation.get("gamma_est") / max(0.01, math.cos(observation.get("roll_est")))) - (observation.get("vdot_est") / self.g)
        dist_cmd = action.get("gamma_des") - (action.get("vdot_des") / self.g)
        
        # Elevator Command
        elevator_cmd = self.ElevatorPID.step(dist_cmd, dist_curr, dt)
        
        # Aileron Command
        aileron_cmd = self.AileronPID.step(action.get("psidot_des"), observation.get("psidot_est"), dt)
        
        # Rudder Command
        rudder_cmd = self.RudderPID.step(0, observation.get("beta_est"), dt)
        
        # Output clamping (Normalized: Throttle [0, 1], Elevator [-1, 1])
        return {"throttle": throttle_cmd, "elevator": elevator_cmd, "aileron": aileron_cmd, "rudder": rudder_cmd}
        
    def reset(self):
        self.ThrottlePID.reset()
        self.ElevatorPID.reset()
        self.AileronPID.reset()
        self.RudderPID.reset()

def main():
    demo_env = CustomEnv(CustomTECS())
    while demo_env.prev_t < 10:
        demo_env.step({"vdot_des":0, "psidot_des":math.pi/6, "gamma_des":0}, realtime=True)
    demo_env.cleanup_sim()
    
if __name__ == "__main__":
    main()
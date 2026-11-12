import math
import random
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
        trim_throttle=0.0,
        g=9.81
    ):
        self.K_R2T = k_r2t
        self.trim_th = trim_throttle
        self.g = g

        # PID Control
        self.ThrottlePID = PIDController(k_tp, k_ti, 0, (0.0,1.0))
        self.ElevatorPID = PIDController(k_ep, k_ei, 0, (-1.0,1.0))
        self.AileronPID = PIDController(k_rp, k_ri, k_rd, (-1.0,1.0))
        self.RudderPID = PIDController(k_yp, k_yi, k_yd, (-1.0,1.0))
    
    def step(self, observation: dict[str, float], action: dict[str, float], dt: float) -> dict[str, float]:        
        # Total Energy Rate Error (Throttle Loop)
        edot_curr = observation.get("gamma_est") + (observation.get("v_est") * observation.get("vdot_est")) / self.g
        edot_cmd = action.get("gamma_des") + (observation.get("v_est") * action.get("vdot_des")) / self.g

        # Bank angle load factor compensation (n = 1 / cos(phi))
        load_factor = 1.0 / max(0.01, math.cos(observation.get("roll_est")))
        roll_drag_boost = self.K_R2T * (load_factor - 1.0)
        
        # Total Throttle Command
        throttle_cmd = min(max(self.ThrottlePID.step(edot_cmd, edot_curr, dt) + self.trim_th + roll_drag_boost, 0.0), 1.0)
        
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
        
        return {"throttle": throttle_cmd, "elevator": elevator_cmd, "aileron": aileron_cmd, "rudder": rudder_cmd}
        
    def reset(self):
        self.ThrottlePID.reset()
        self.ElevatorPID.reset()
        self.AileronPID.reset()
        self.RudderPID.reset()

def random_start_state() -> dict[str, float]:
    roll = random.uniform(-0.12, 0.12)
    pitch = random.uniform(-0.06, 0.06)
    yaw = random.uniform(-math.pi, math.pi)
    cr, sr = math.cos(roll / 2), math.sin(roll / 2)
    cp, sp = math.cos(pitch / 2), math.sin(pitch / 2)
    cy, sy = math.cos(yaw / 2), math.sin(yaw / 2)

    return {
        "p_n": random.uniform(-5.0, 5.0),
        "p_e": random.uniform(-5.0, 5.0),
        "p_d": -random.uniform(15.0, 25.0),
        "u": random.uniform(4.0, 5.5),
        "v": random.uniform(-0.2, 0.2),
        "w": random.uniform(-0.2, 0.2),
        "q_w": cr * cp * cy + sr * sp * sy,
        "q_x": sr * cp * cy - cr * sp * sy,
        "q_y": cr * sp * cy + sr * cp * sy,
        "q_z": cr * cp * sy - sr * sp * cy,
        "rate_p": random.uniform(-0.02, 0.02),
        "rate_q": random.uniform(-0.02, 0.02),
        "rate_r": random.uniform(-0.02, 0.02),
    }

def main():
    demo_env = CustomEnv(
        CustomTECS(),
        http_port=8080,
        websocket_port=8081,
        initial_state=random_start_state(),
    )
    try:
        while True:
            print(f"Starting 10-second run with state: {demo_env.initial_state}")
            while demo_env.prev_t < 10.0:
                demo_env.step(
                    {"vdot_des": 0.0, "psidot_des": math.pi / 6, "gamma_des": 0.0},
                    realtime=True,
                )
            demo_env.restart_sim(random_start_state())
    finally:
        demo_env.close()
    
if __name__ == "__main__":
    main()
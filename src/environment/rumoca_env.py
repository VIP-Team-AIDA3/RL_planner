from pathlib import Path
import os
import atexit
import math
import socket
import time
import flatbuffers
from fixedwing_sil import PlantState, StickCommand  # noqa: E402
import subprocess
from abc import ABC, abstractmethod

# rumoca drops any received datagram whose length differs from the size its own
# packer would produce for the root table (printed at startup as "Expecting
# 56-byte receive packets"). The Python builder emits an equally valid but more
# compact layout, so pad it; trailing bytes are ignored because rumoca reads
# fields through the root offset and vtable.
STICK_COMMAND_BYTES = 56

import gymnasium as gym
from flight_controller import FlightController

class RumocaEnv(gym.Env, ABC):
    rum_proc = None
    FC: FlightController = None
    wall_start = None
    ticks = 0
    prev_t = 0
    started = False
    
    def __init__(self, FC: FlightController, filter_cutoff_hz: float = 10.0, listen:str="127.0.0.1:4251", rumoca:str="127.0.0.1:4250"):
        super().__init__()
        atexit.register(self.cleanup_sim)
        self.FC = FC
        self.filter_cutoff_hz = filter_cutoff_hz
        self.host, self.port = listen.rsplit(":", 1)
        self.rhost, self.rport = rumoca.rsplit(":", 1)
        self.rumoca_addr = (self.rhost, int(self.rport))
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.sock.bind((self.host, int(self.port)))
        
        self.start_sim()
        
        self.builder = flatbuffers.Builder(128)
        self.builder.ForceDefaults(True)  # always send every field, even exact zeros
        self.update_state()
        
    def reset(self):
        self.ticks = 0
        self.update_state()
        self.prev_t = 0
        self.started = False
        self.wall_start = None
    
    def update_state(self, dt: float = 0):
        data, _ = self.sock.recvfrom(4096)
        self.state = PlantState.PlantState.GetRootAs(data, 0)
        (x, y, z), (roll, pitch, yaw) = RumocaEnv.enu_pose(self.state) # (x, y, z) -> (E, N, U)
        
        alpha = math.exp(-2.0 * math.pi * self.filter_cutoff_hz * dt)
        
        if not self.started:
            # first step: seed the estimator from the current pose, zero the rates
            self.prev_x, self.prev_y, self.prev_z = x, y, z
            self.prev_roll, self.prev_pitch, self.prev_yaw = roll, pitch, yaw
            self.prev_speed = 0.0
            self.x_est, self.y_est, self.z_est = x, y, z
            self.roll_est, self.pitch_est, self.yaw_est = roll, pitch, yaw
            self.vx_est = self.vy_est = self.vz_est = self.v_est = 0.0
            self.gamma_est = self.vdot_est = 0.0
            self.beta_est = 0.0  # Initialize sideslip estimator
            self.p_est = self.q_est = self.r_est = 0.0
            self.psidot_est = 0.0
            self.started = True
        else:
            # state estimation: finite diff + exponential low-pass (pose_cb)
            vx_new = (x - self.prev_x) / dt
            vy_new = (y - self.prev_y) / dt
            vz_new = (z - self.prev_z) / dt
            speed_new = math.sqrt(vx_new * vx_new + vy_new * vy_new + vz_new * vz_new)
            p_new = RumocaEnv.wrap_pi(roll - self.prev_roll) / dt
            q_new = RumocaEnv.wrap_pi(pitch - self.prev_pitch) / dt
            r_new = RumocaEnv.wrap_pi(yaw - self.prev_yaw) / dt
            gamma_new = math.asin(min(max(vz_new / max(speed_new, 1e-5), -1.0), 1.0))
            
            # --- Sideslip angle (beta) calculation ---
            cp, sp = math.cos(roll), math.sin(roll)
            ct, st = math.cos(pitch), math.sin(pitch)
            cy, sy = math.cos(yaw), math.sin(yaw)
            
            # Transform ENU velocity vector to body-frame lateral velocity (v)
            v_body = (sp * st * cy - cp * sy) * vx_new + (sp * st * sy + cp * cy) * vy_new + sp * ct * vz_new
            beta_new = math.asin(min(max(v_body / max(speed_new, 1e-5), -1.0), 1.0))
            # -----------------------------------------

            vdot_new = speed_new - self.prev_speed # prev_speed is the previous v_est
            psidot_new = yaw - self.prev_yaw

            a, b = alpha, 1.0 - alpha
            self.x_est = a * x + b * self.x_est
            self.y_est = a * y + b * self.y_est
            self.z_est = a * z + b * self.z_est
            self.roll_est = a * roll + b * self.roll_est
            self.pitch_est = a * pitch + b * self.pitch_est
            self.yaw_est = a * yaw + b * self.yaw_est
            self.vx_est = a * vx_new + b * self.vx_est
            self.vy_est = a * vy_new + b * self.vy_est
            self.vz_est = a * vz_new + b * self.vz_est
            self.v_est = a * speed_new + b * self.v_est
            self.gamma_est = a * gamma_new + b * self.gamma_est
            self.beta_est = a * beta_new + b * self.beta_est  # Filtered beta estimate
            self.vdot_est = a * vdot_new + b * self.vdot_est
            self.p_est = a * p_new + b * self.p_est
            self.q_est = a * q_new + b * self.q_est
            self.r_est = a * r_new + b * self.r_est
            self.psidot_est = a * psidot_new + b * self.psidot_est
                
        # history for next sample's finite differences
        self.prev_x, self.prev_y, self.prev_z = x, y, z
        self.prev_roll, self.prev_pitch, self.prev_yaw = roll, pitch, yaw
        self.prev_speed = self.v_est
        
    @abstractmethod
    def get_agent_observation(self):
        pass
    
    @abstractmethod
    def get_fc_observation(self):
        pass
    
    @abstractmethod
    def get_reward(self, observation, action, new_observation) -> float:
        pass
        
    def step(self, action, realtime=False) -> float:
        observation = self.get_agent_observation()
        self.ticks += 1
        t = self.state.T()
        dt = t - self.prev_t
        self.prev_t = t
        ctrl = self.FC.step(self.get_fc_observation(), action, dt)
        # rumoca's lockstep scheduler never sleeps, so the reply paces the
        # whole loop; hold it back to keep sim time on wall-clock time.
        if realtime:
            if self.wall_start is None:
                self.wall_start = time.monotonic() - t
            ahead = t - (time.monotonic() - self.wall_start)
            if ahead > 0:
                time.sleep(ahead)
        # app.js: plantStick = [thr, elev, -ail, rud]
        self.sock.sendto(RumocaEnv.pack_command(self.builder, ctrl.get("throttle"), ctrl.get("elevator"), -ctrl.get("aileron"), ctrl.get("rudder")), self.rumoca_addr)
        self.update_state(dt)
        new_observation = self.get_agent_observation()
        return self.get_reward(observation, action, new_observation)
        
    def start_sim(self):
        env_dir = Path(__file__).resolve().parent
        # Determine correct binary name based on OS
        bin_name = "rumoca.exe" if os.name == "nt" else "./rumoca"
        
        self.rum_proc = subprocess.Popen(
            [str(env_dir / bin_name), "sim", "-c", str(env_dir / "rum.sil.toml")],
            cwd=env_dir,
            # Let rumoca print errors straight to your terminal so you can see them:
            stdout=None, 
            stderr=None
        )

    def cleanup_sim(self):
        for p in [self.rum_proc]:
            if p and p.poll() is None:
                try:
                    p.terminate()
                    p.wait(timeout=1)
                except subprocess.TimeoutExpired:
                    p.kill()
                except Exception:
                    pass
        self.rum_proc = None
            
    def enu_pose(state):
        """Port of ``enuStateFromStepper`` (rumoca_flight.js): NED/FRD -> ENU pose.

        Returns (east, north, up), (roll, pitch, yaw_enu). Like the browser, pitch
        is the NED Euler pitch and yaw is re-referenced to ENU (CCW from east).
        """
        qw, qx, qy, qz = state.QW(), state.QX(), state.QY(), state.QZ()
        n = math.sqrt(qw * qw + qx * qx + qy * qy + qz * qz) or 1.0
        w, x, y, z = qw / n, qx / n, qy / n, qz / n
        roll = math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y))
        pitch = math.asin(min(max(2 * (w * y - z * x), -1.0), 1.0))
        yaw_ned = math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z))
        position = (state.PE(), state.PN(), -state.PD())
        return position, (roll, pitch, RumocaEnv.wrap_pi(math.pi / 2 - yaw_ned))

    def pack_command(builder, throttle, elevator, aileron, rudder):
        builder.Clear()
        StickCommand.Start(builder)
        StickCommand.AddThrottle(builder, throttle)
        StickCommand.AddElevator(builder, elevator)
        StickCommand.AddAileron(builder, aileron)
        StickCommand.AddRudder(builder, rudder)
        builder.Finish(StickCommand.End(builder))
        packet = bytes(builder.Output())
        if len(packet) > STICK_COMMAND_BYTES:
            raise ValueError(f"StickCommand is {len(packet)} bytes, rumoca expects {STICK_COMMAND_BYTES}")
        return packet.ljust(STICK_COMMAND_BYTES, b"\0")
    
    def wrap_pi(angle):
        """Wrap an angle to (-pi, pi]."""
        return math.atan2(math.sin(angle), math.cos(angle))

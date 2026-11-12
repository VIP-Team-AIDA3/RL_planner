from pathlib import Path
import os
import atexit
import json
import math
import re
import socket
import tempfile
import time
from collections.abc import Mapping
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
INITIAL_STATE_PARAMETERS = {
    "p_n": "p0_n",
    "p_e": "p0_e",
    "p_d": "p0_d",
    "u": "u0",
    "v": "v0",
    "w": "w0",
    "q_w": "q0_w",
    "q_x": "q0_x",
    "q_y": "q0_y",
    "q_z": "q0_z",
    "rate_p": "rate0_p",
    "rate_q": "rate0_q",
    "rate_r": "rate0_r",
}
QUATERNION_STATE_KEYS = ("q_w", "q_x", "q_y", "q_z")

import gymnasium as gym
from flight_controller import FlightController

class RumocaEnv(gym.Env, ABC):
    rum_proc = None
    FC: FlightController = None
    wall_start = None
    ticks = 0
    prev_t = 0
    started = False

    def __init__(
        self,
        FC: FlightController,
        filter_cutoff_hz: float = 10.0,
        listen: str = "127.0.0.1:4251",
        rumoca: str = "127.0.0.1:4250",
        *,
        http_port: int | None = 8080,
        websocket_port: int | None = 8081,
        initial_state: Mapping[str, float] | None = None,
        state_timeout: float = 5.0,
    ):
        """Create a lockstep environment with optional web ports and NED/FRD starts.

        Set either web port to None to request an OS-assigned ephemeral port.
        Rumoca currently starts its web transports regardless of whether the
        transport sections are omitted, so this avoids fixed ports but does not
        fully disable the web servers.

        ``initial_state`` uses ``p_n/p_e/p_d`` in NED metres, ``u/v/w`` in FRD
        m/s, ``q_w/q_x/q_y/q_z`` as a scalar-first quaternion, and ``rate_p``,
        ``rate_q``, and ``rate_r`` in FRD rad/s. ``state_timeout`` bounds how
        long the environment waits for the next UDP state packet.
        """
        super().__init__()
        self.FC = FC
        self.filter_cutoff_hz = filter_cutoff_hz
        self.env_dir = Path(__file__).resolve().parent
        self.listen_addr = listen
        self.rumoca_listen_addr = rumoca
        self.http_port = self._validate_port(http_port, "http_port")
        self.websocket_port = self._validate_port(websocket_port, "websocket_port")
        if self.http_port is not None and self.http_port == self.websocket_port:
            raise ValueError("HTTP and WebSocket ports must be different")
        if (
            isinstance(state_timeout, bool)
            or not isinstance(state_timeout, (int, float))
            or not math.isfinite(state_timeout)
            or state_timeout <= 0
        ):
            raise ValueError("state_timeout must be a positive finite number")
        self.state_timeout = float(state_timeout)
        self.initial_state = self._validate_initial_state(
            {} if initial_state is None else initial_state
        )
        self.rum_proc = None
        self._temp_dir = tempfile.TemporaryDirectory(
            prefix="rumoca-env-",
            dir=self.env_dir,
        )
        self._scenario_path = Path(self._temp_dir.name) / "rumoca_env.toml"
        self._model_path = Path(self._temp_dir.name) / "FixedWingPythonSILConfigured.mo"
        self.host, self.port = listen.rsplit(":", 1)
        self.rhost, self.rport = rumoca.rsplit(":", 1)
        self.rumoca_addr = (self.rhost, int(self.rport))
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.sock.settimeout(self.state_timeout)
        try:
            self.sock.bind((self.host, int(self.port)))
            self._write_temporary_scenario()
            self.start_sim()

            self.builder = flatbuffers.Builder(128)
            self.builder.ForceDefaults(True)  # always send every field, even exact zeros
            self.update_state()
        except BaseException:
            self._stop_sim()
            self.sock.close()
            self._temp_dir.cleanup()
            self._temp_dir = None
            raise
        atexit.register(self.cleanup_sim)

    @staticmethod
    def _validate_port(port: int | None, name: str) -> int | None:
        if port is None:
            return None
        if isinstance(port, bool) or not isinstance(port, int) or not 1 <= port <= 65535:
            raise ValueError(f"{name} must be a port from 1 to 65535 or None")
        return port

    @staticmethod
    def _validate_initial_state(state: Mapping[str, float]) -> dict[str, float]:
        if not isinstance(state, Mapping):
            raise TypeError("initial_state must be a mapping of state names to numbers")
        unknown = set(state) - set(INITIAL_STATE_PARAMETERS)
        if unknown:
            names = ", ".join(sorted(str(key) for key in unknown))
            raise ValueError(f"Unknown initial state field(s): {names}")

        validated = {}
        for key, value in state.items():
            if isinstance(value, bool) or not isinstance(value, (int, float)):
                raise TypeError(f"Initial state field {key!r} must be a number")
            value = float(value)
            if not math.isfinite(value):
                raise ValueError(f"Initial state field {key!r} must be finite")
            validated[key] = value

        supplied_quaternion = set(validated).intersection(QUATERNION_STATE_KEYS)
        if supplied_quaternion and supplied_quaternion != set(QUATERNION_STATE_KEYS):
            raise ValueError("Provide all four quaternion fields q_w, q_x, q_y, and q_z")
        if supplied_quaternion:
            norm = math.sqrt(sum(validated[key] ** 2 for key in QUATERNION_STATE_KEYS))
            if norm == 0:
                raise ValueError("The initial-state quaternion must be non-zero")
            for key in QUATERNION_STATE_KEYS:
                validated[key] /= norm
        return validated

    @staticmethod
    def _toml_string(value: str) -> str:
        return json.dumps(value)

    @staticmethod
    def _replace_toml_values(text: str, updates: dict[str, dict[str, str]]) -> str:
        section_header = re.compile(r"^\s*\[\[?([^\]\[]+)\]\]?\s*(?:#.*)?$")
        current_section = ""
        updated = set()
        output = []
        for line in text.splitlines():
            match = section_header.match(line)
            if match:
                current_section = match.group(1).strip()
                output.append(line)
                continue
            for key, value in updates.get(current_section, {}).items():
                if re.match(rf"^\s*{re.escape(key)}\s*=", line):
                    output.append(f"{key} = {value}")
                    updated.add((current_section, key))
                    break
            else:
                output.append(line)
        expected = {
            (section, key)
            for section, values in updates.items()
            for key in values
        }
        missing = expected - updated
        if missing:
            missing_values = ", ".join(f"{section or '<root>'}.{key}" for section, key in sorted(missing))
            raise ValueError(f"Scenario template is missing setting(s): {missing_values}")
        return "\n".join(output) + "\n"

    def _write_temporary_scenario(self):
        state_parameters = {
            INITIAL_STATE_PARAMETERS[key]: value
            for key, value in self.initial_state.items()
        }
        if state_parameters:
            modifications = ",\n".join(
                f"    {name} = {value!r}"
                for name, value in sorted(state_parameters.items())
            )
            model_source = (
                "model FixedWingPythonSILConfigured\n"
                "  extends FixedWingPythonSIL(\n"
                f"{modifications}\n"
                "  );\n"
                "end FixedWingPythonSILConfigured;\n"
            )
        else:
            model_source = (
                "model FixedWingPythonSILConfigured\n"
                "  extends FixedWingPythonSIL;\n"
                "end FixedWingPythonSILConfigured;\n"
            )
        self._model_path.write_text(model_source, encoding="utf-8")

        source_roots = [
            str((self.env_dir / "FixedWingPlantGA.mo").resolve()),
            str((self.env_dir / "FixedWingPythonSIL.mo").resolve()),
        ]
        updates = {
            "": {
                "source_roots": "[" + ", ".join(self._toml_string(path) for path in source_roots) + "]",
            },
            "model": {
                "file": self._toml_string(str(self._model_path.resolve())),
                "name": self._toml_string("FixedWingPythonSILConfigured"),
            },
            "transport.udp": {
                "listen": self._toml_string(self.rumoca_listen_addr),
                "send": self._toml_string(self.listen_addr),
            },
            "schema": {
                "bfbs": "[" + self._toml_string(str((self.env_dir / "schema" / "fixedwing_sil.bfbs").resolve())) + "]",
            },
        }
        updates["transport.http"] = {
            # Rumoca resolves scene and asset paths relative to the scenario.
            "port": str(self.http_port or 0),
            "scene": self._toml_string("../fixedwing_scene.js"),
            "asset_dir": self._toml_string("../assets"),
        }
        updates["transport.websocket"] = {
            "port": str(self.websocket_port or 0),
        }

        template_path = self.env_dir / "rum.sil.toml"
        config = template_path.read_text(encoding="utf-8")
        config = self._replace_toml_values(config, updates)
        self._scenario_path.write_text(config, encoding="utf-8")

    def reset(self):
        self.ticks = 0
        self.update_state()
        self.prev_t = 0
        self.started = False
        self.wall_start = None

    def restart_sim(self, initial_state: Mapping[str, float] | None = None):
        """Restart Rumoca, optionally overriding its initial NED/FRD state.

        Position is in NED metres, velocity in FRD m/s, attitude is the
        scalar-first quaternion, and angular rates are in FRD rad/s. The
        simulator restarts at t=0; unspecified fields retain their current
        initial-state overrides, while model defaults remain unchanged.
        """
        if self._temp_dir is None:
            raise RuntimeError("The simulator environment has already been closed")
        if initial_state is not None:
            if not isinstance(initial_state, Mapping):
                raise TypeError("initial_state must be a mapping of state names to numbers")
            merged_state = {**self.initial_state, **dict(initial_state)}
            self.initial_state = self._validate_initial_state(merged_state)

        self._stop_sim()
        self._discard_pending_packets()
        self._write_temporary_scenario()
        self.FC.reset()
        self.ticks = 0
        self.prev_t = 0
        self.started = False
        self.wall_start = None
        self.builder = flatbuffers.Builder(128)
        self.builder.ForceDefaults(True)
        self.start_sim()
        self.update_state()

    def _discard_pending_packets(self):
        self.sock.settimeout(0.0)
        try:
            while True:
                self.sock.recvfrom(4096)
        except BlockingIOError:
            pass
        finally:
            self.sock.settimeout(self.state_timeout)
    
    def update_state(self, dt: float = 0):
        try:
            data, _ = self.sock.recvfrom(4096)
        except socket.timeout as error:
            return_code = self.rum_proc.poll() if self.rum_proc else None
            if return_code is not None:
                raise RuntimeError(
                    f"Rumoca exited with status {return_code} before sending state"
                ) from error
            raise TimeoutError(
                f"Rumoca did not send state within {self.state_timeout:g} seconds"
            ) from error
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
        # Determine correct binary name based on OS
        bin_name = "rumoca.exe" if os.name == "nt" else "./rumoca"
        
        self.rum_proc = subprocess.Popen(
            [str(self.env_dir / bin_name), "sim", "-c", str(self._scenario_path)],
            cwd=self.env_dir,
            # Let rumoca print errors straight to your terminal so you can see them:
            stdout=None, 
            stderr=None
        )

    def _stop_sim(self):
        process = self.rum_proc
        if process and process.poll() is None:
            try:
                process.terminate()
            except ProcessLookupError:
                pass
            try:
                process.wait(timeout=1)
            except subprocess.TimeoutExpired:
                try:
                    process.kill()
                except ProcessLookupError:
                    pass
                process.wait()
        self.rum_proc = None

    def cleanup_sim(self):
        self._stop_sim()
        if self.sock and self.sock.fileno() != -1:
            self.sock.close()
        if self._temp_dir is not None:
            self._temp_dir.cleanup()
            self._temp_dir = None

    def close(self):
        self.cleanup_sim()
        super().close()
            
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

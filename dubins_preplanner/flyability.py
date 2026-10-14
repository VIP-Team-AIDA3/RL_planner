"""Does a plane actually follow the plan? A 2D point-mass with first-order roll, flown by L1 guidance.

Plant (no wind):
    x' = V cos(psi),  y' = V sin(psi),  psi' = g tan(phi) / V,  phi' = (phi_cmd - phi) / tau,  |phi| <= max bank
Tracker (L1 guidance, Park, Deyst & How 2004): aim at the path point L1 ahead (in arc length) of the
closest point; with eta the angle from the velocity to that point,
    a_cmd = 2 V^2 / L1 * sin(eta),   phi_cmd = clip(atan(a_cmd / g), +-max bank).
The segment feed-forward bank (bank_ff_deg) is deliberately NOT added: L1 already produces the turn.

    python -m dubins_preplanner.flyability --config dubins_preplanner/dubins_config.yaml [--nominal PATH]
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass

import numpy as np

from .config import load_config, resolve_repo_path, turn_radius_from_cfg
from .course import Course, load_course
from .path import Path


@dataclass
class FlightResult:
    t: np.ndarray               # (N,)
    states: np.ndarray          # (N, 4): x, y, psi, phi
    cross_track: np.ndarray     # (N,) signed, + = left of path
    s: np.ndarray               # (N,) projected arc length
    skip_initial_s: float
    gate_events: list[str]      # gate names in the order the flight crossed them
    gates_in_order: bool | None
    min_pylon_dist_m: float | None

    @property
    def _scored(self) -> np.ndarray:
        e = np.abs(self.cross_track[self.t >= self.skip_initial_s])
        return e if len(e) else np.abs(self.cross_track)

    @property
    def max_abs_e(self) -> float:
        return float(self._scored.max())

    @property
    def rms_abs_e(self) -> float:
        return float(np.sqrt(np.mean(self._scored**2)))


def _segments_cross(a1, a2, b1, b2) -> bool:
    d1, d2 = a2 - a1, b2 - b1
    denom = d1[0] * d2[1] - d1[1] * d2[0]
    if abs(denom) < 1e-12:
        return False
    diff = b1 - a1
    t = (diff[0] * d2[1] - diff[1] * d2[0]) / denom
    u = (diff[0] * d1[1] - diff[1] * d1[0]) / denom
    return 0.0 < t <= 1.0 and 0.0 <= u <= 1.0


def _lookahead(path: Path, s: float) -> np.ndarray:
    """Point at arc length s; past the end, continue straight along the final heading."""
    if s <= path.length:
        return path.pose_at(s)[:2]
    end = path.segments[-1].end
    return end[:2] + (s - path.length) * np.array([np.cos(end[2]), np.sin(end[2])])


def simulate(path: Path, airspeed: float, l1: float, max_bank_rad: float, tau: float = 0.2, dt: float = 0.01,
             g: float = 9.81, skip_initial_s: float = 2.0, course: Course | None = None) -> FlightResult:
    """Fly ``path`` from its start pose (wings level) until the projection reaches its end."""
    V = airspeed

    def f(state, phi_cmd):
        x, y, psi, phi = state
        return np.array([V * np.cos(psi), V * np.sin(psi), g * np.tan(phi) / V, (phi_cmd - phi) / tau])

    state = np.array([*path.segments[0].start[:2], path.segments[0].start[2], 0.0])
    window = max(2.0 * l1, 5.0)
    s_prev = 0.0
    t_max = 2.0 * path.length / V + 10.0
    ts, states, errs, ss = [], [], [], []
    t = 0.0
    while True:
        proj = path.project(state[:2], s_hint=s_prev, window=window)
        s_prev = proj.s
        ts.append(t); states.append(state.copy()); errs.append(proj.cross_track); ss.append(proj.s)
        if proj.s >= path.length - 1e-6 or t > t_max:
            break

        target = _lookahead(path, proj.s + l1)
        to_target = target - state[:2]
        eta = np.arctan2(to_target[1], to_target[0]) - state[2]
        eta = (eta + np.pi) % (2 * np.pi) - np.pi
        a_cmd = 2.0 * V**2 / l1 * np.sin(eta)
        phi_cmd = float(np.clip(np.arctan(a_cmd / g), -max_bank_rad, max_bank_rad))

        k1 = f(state, phi_cmd)
        k2 = f(state + 0.5 * dt * k1, phi_cmd)
        k3 = f(state + 0.5 * dt * k2, phi_cmd)
        k4 = f(state + dt * k3, phi_cmd)
        state = state + dt / 6.0 * (k1 + 2 * k2 + 2 * k3 + k4)
        state[3] = np.clip(state[3], -max_bank_rad, max_bank_rad)
        t += dt

    states = np.array(states)
    gate_events, in_order, min_d = [], None, None
    if course is not None:
        xy = states[:, :2]
        for a, b in zip(xy[:-1], xy[1:]):
            for gate in course.gates:
                if _segments_cross(a, b, gate.p1, gate.p2):
                    gate_events.append(gate.name)
        required = [g_.name for g_ in course.gates[1:]] + [course.gates[0].name]
        it = iter(gate_events)
        in_order = all(name in it for name in required)  # required is a subsequence of the events
        min_d = float(np.min(np.linalg.norm(xy[:, None, :] - course.pylon_xy[None], axis=-1)))

    return FlightResult(np.array(ts), states, np.array(errs), np.array(ss), skip_initial_s, gate_events, in_order, min_d)


def check(path: Path, cfg: dict, course: Course | None = None, radius: float | None = None) -> FlightResult:
    """Run ``simulate`` with the config's aircraft and flyability settings."""
    ac, fly = cfg["aircraft"], cfg["flyability"]
    radius = turn_radius_from_cfg(cfg) if radius is None else radius
    return simulate(path, ac["airspeed_mps"], fly["l1_over_r"] * radius, np.radians(ac["max_bank_deg"]),
                    tau=fly["roll_time_constant_s"], dt=fly["dt_s"], g=ac.get("g", 9.81),
                    skip_initial_s=fly["skip_initial_s"], course=course)


def main(argv: list[str] | None = None) -> FlightResult:
    parser = argparse.ArgumentParser(description="Fly a nominal path with a point-mass + L1 tracker")
    parser.add_argument("--config", default=None)
    parser.add_argument("--nominal", default=None, help="nominal_path.yaml (default: <output_dir>/nominal_path.yaml)")
    args = parser.parse_args(argv)

    import matplotlib
    matplotlib.use("Agg")
    from . import plotting
    from .export import load_nominal_path

    cfg = load_config(args.config)
    out_dir = resolve_repo_path(cfg["output_dir"])
    nominal = resolve_repo_path(args.nominal) if args.nominal else out_dir / "nominal_path.yaml"
    if not nominal.exists():
        from .dp import main as dp_main
        print(f"{nominal} not found; running DP first")
        dp_main(["--config", args.config] if args.config else [])
    meta, _, path = load_nominal_path(nominal)
    course = load_course(meta["course_path"])

    res = check(path, cfg, course, radius=meta["turn_radius_m"])
    print(f"Flew {nominal} ({meta['solver']}, R = {meta['turn_radius_m']:.2f} m, V = {meta['airspeed_mps']} m/s)")
    print(f"  max |cross-track| {res.max_abs_e:.3f} m, RMS {res.rms_abs_e:.3f} m (after the first {res.skip_initial_s} s)")
    print(f"  gates crossed in order: {res.gates_in_order}  (events: {' '.join(res.gate_events)})")
    print(f"  min pylon distance flown: {res.min_pylon_dist_m:.2f} m")
    png = out_dir / "flyability.png"
    plotting.plot_flyability(course, path, res.states[:, :2], field_radius=course.gate_margin_m, save=png,
                             title=f"Flyability: max |e| {res.max_abs_e:.2f} m, RMS {res.rms_abs_e:.2f} m")
    print(f"wrote {png}")
    return res


if __name__ == "__main__":
    main()

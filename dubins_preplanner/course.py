"""Course loading and gate crossing poses.

The course YAML (``ros2_ws/src/pylon_2026_world/purt_course*.yaml``) lists pylons, gates (pairs of
pylon indices) and an axis-aligned bounds rectangle. Gates are the edges of the pylon polygon, so a
lap weaves in and out of it and a gate may be crossed in either direction.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np
import yaml

from .config import resolve_repo_path
from .path import wrap_2pi


@dataclass
class Gate:
    name: str
    p1: np.ndarray             # (2,)
    p2: np.ndarray             # (2,)
    length: float
    direction: np.ndarray      # unit vector p1 -> p2
    normal: np.ndarray         # unit, = rotate(direction, +90 deg)


@dataclass
class Course:
    pylons: list[dict]         # {"xy": (2,), "r": float, "name": str}
    gates: list[Gate]          # gates[0] is G1 = finish
    bounds: tuple[float, float, float, float]   # x_lo, x_hi, y_lo, y_hi (sorted)
    gate_margin_m: float
    oob_penalty_s: float
    path: str = ""

    @property
    def pylon_xy(self) -> np.ndarray:
        return np.array([p["xy"] for p in self.pylons])

    @property
    def pylon_r(self) -> np.ndarray:
        return np.array([p["r"] for p in self.pylons])


def load_course(path: str) -> Course:
    """Load a course YAML. Bounds are sorted (``purt_course.yaml`` has min_x/max_x swapped)."""
    with open(resolve_repo_path(path)) as f:
        raw = yaml.safe_load(f)

    pylons = [{"xy": np.array([p["x"], p["y"]], dtype=float), "r": float(p["r"]), "name": p["name"]}
              for p in raw["pylons"]]
    gates = []
    for g in raw["gates"]:
        p1, p2 = pylons[g["p1"]]["xy"], pylons[g["p2"]]["xy"]
        length = float(np.linalg.norm(p2 - p1))
        direction = (p2 - p1) / length
        gates.append(Gate(g["name"], p1, p2, length, direction, np.array([-direction[1], direction[0]])))

    b = raw["bounds_rect"]
    x_lo, x_hi = sorted((float(b["min_x"]), float(b["max_x"])))
    y_lo, y_hi = sorted((float(b["min_y"]), float(b["max_y"])))
    return Course(
        pylons=pylons,
        gates=gates,
        bounds=(x_lo, x_hi, y_lo, y_hi),
        gate_margin_m=float(raw.get("gate_margin_m", 1.0)),
        oob_penalty_s=float(raw.get("out_of_bounds_penalty_s", 0.0)),
        path=str(path),
    )


@dataclass(frozen=True)
class CrossingPose:
    gate_index: int
    u_index: int
    heading_index: int
    u: float                   # fraction along gate, 0 at p1, 1 at p2
    pose: np.ndarray           # (3,)


def heading_count(cfg: dict) -> int:
    disc = cfg["discretization"]
    return len(disc["heading_offsets_deg"]) * (2 if disc["both_directions"] else 1)


def crossing_poses(course: Course, gate_index: int, cfg: dict) -> list[CrossingPose]:
    """All crossing poses of one gate, ordered by ``pose_index = u_index * n_theta + heading_index``.

    Crossing points are spread evenly over the usable width (``gate_margin_m`` clear of each pylon).
    Headings are the gate normal plus each offset; with ``both_directions`` the reversed normal too,
    so ``heading_index = direction_index * n_offsets + offset_index``.
    """
    gate = course.gates[gate_index]
    disc = cfg["discretization"]
    margin = course.gate_margin_m
    if gate.length - 2 * margin <= 0:
        raise ValueError(f"Gate {gate.name} ({gate.length:.2f} m) has no usable width with a "
                         f"{margin} m margin at each pylon")

    dists = np.linspace(margin, gate.length - margin, disc["n_crossing_points"])
    offsets = np.radians(disc["heading_offsets_deg"])
    normals = [gate.normal, -gate.normal] if disc["both_directions"] else [gate.normal]
    headings = [np.arctan2(n[1], n[0]) + off for n in normals for off in offsets]

    poses = []
    for ui, dist in enumerate(dists):
        xy = gate.p1 + dist * gate.direction
        for hi, th in enumerate(headings):
            poses.append(CrossingPose(gate_index, ui, hi, float(dist / gate.length),
                                      np.array([xy[0], xy[1], float(wrap_2pi(th))])))
    return poses

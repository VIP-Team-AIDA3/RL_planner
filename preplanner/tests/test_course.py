import numpy as np
import pytest

from preplanner.config import load_config
from preplanner.course import crossing_poses, heading_count, load_course

COURSE1 = "ros2_ws/src/pylon_2026_world/purt_course.yaml"
COURSE2 = "ros2_ws/src/pylon_2026_world/purt_course2.yaml"


@pytest.mark.parametrize("path, n_gates", [(COURSE1, 4), (COURSE2, 6)])
def test_load(path, n_gates):
    course = load_course(path)
    x_lo, x_hi, y_lo, y_hi = course.bounds
    assert x_lo < x_hi and y_lo < y_hi
    assert len(course.gates) == n_gates
    assert course.gates[0].name == "G1"
    assert course.gate_margin_m == 2.5 and course.oob_penalty_s == 5.0


@pytest.mark.parametrize("path", [COURSE1, COURSE2])
def test_crossing_poses(path):
    cfg = load_config()
    course = load_course(path)
    margin = course.gate_margin_m
    n_theta = heading_count(cfg)
    for g, gate in enumerate(course.gates):
        poses = crossing_poses(course, g, cfg)
        assert len(poses) == cfg["discretization"]["n_crossing_points"] * n_theta == 50
        for i, cp in enumerate(poses):
            assert i == cp.u_index * n_theta + cp.heading_index
            xy = cp.pose[:2]
            # On the gate segment.
            rel = xy - gate.p1
            along = np.dot(rel, gate.direction)
            assert abs(gate.direction[0] * rel[1] - gate.direction[1] * rel[0]) < 1e-9
            assert -1e-9 <= along <= gate.length + 1e-9
            # Clear of both pylons by the margin.
            assert np.linalg.norm(xy - gate.p1) >= margin - 1e-9
            assert np.linalg.norm(xy - gate.p2) >= margin - 1e-9
            # Really crosses: at least 30 deg from the gate line.
            t = np.array([np.cos(cp.pose[2]), np.sin(cp.pose[2])])
            angle_to_line = np.degrees(np.arcsin(min(1.0, abs(np.dot(t, gate.normal)))))
            assert angle_to_line >= 30 - 1e-6


def test_no_usable_width_raises():
    cfg = load_config()
    course = load_course(COURSE1)
    course.gate_margin_m = 10.0
    with pytest.raises(ValueError, match="usable width"):
        crossing_poses(course, 0, cfg)

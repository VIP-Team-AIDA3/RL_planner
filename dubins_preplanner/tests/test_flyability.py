import numpy as np
import pytest

from dubins_preplanner.config import load_config
from dubins_preplanner.course import load_course
from dubins_preplanner.dp import solve_dp
from dubins_preplanner.environment import DubinsGateMDP
from dubins_preplanner.flyability import check, simulate
from dubins_preplanner.path import Path, arc_segment, line_segment

COURSE2 = "ros2_ws/src/pylon_2026_world/purt_course2.yaml"


def _prototype(radius):
    """line -> 180 deg left arc -> line -> 90 deg right arc -> line (the plan's reference path)."""
    segs = [line_segment((0.0, 0.0, 0.0), 30.0)]
    segs.append(arc_segment(segs[-1].end, np.pi * radius, radius, +1))
    segs.append(line_segment(segs[-1].end, 30.0))
    segs.append(arc_segment(segs[-1].end, 0.5 * np.pi * radius, radius, -1))
    segs.append(line_segment(segs[-1].end, 30.0))
    return Path(segs)


def test_dp_plan_is_flyable():
    cfg = load_config()
    course = load_course(COURSE2)
    env = DubinsGateMDP(course, cfg)
    res = check(solve_dp(env).path(), cfg, course)
    assert res.max_abs_e < 0.5
    assert res.gates_in_order


@pytest.mark.parametrize("radius, max_e, rms_e", [(10.68, 0.26, 0.11), (8.65, 0.53, 0.23)])
def test_matches_prototype_reference(radius, max_e, rms_e):
    res = simulate(_prototype(radius), 7.0, 0.6 * radius, np.radians(30))
    assert res.max_abs_e == pytest.approx(max_e, abs=0.06)
    assert res.rms_abs_e == pytest.approx(rms_e, abs=0.03)


def test_infeasible_radius_fails():
    res = simulate(_prototype(3.0), 7.0, 0.6 * 3.0, np.radians(30))
    assert res.max_abs_e > 5.0

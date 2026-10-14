import itertools

import numpy as np
import pytest

from preplanner.config import load_config
from preplanner.course import load_course
from preplanner.dp import NoFeasibleLapError, solve_dp
from preplanner.environment import DubinsGateMDP

COURSE1 = "ros2_ws/src/pylon_2026_world/purt_course.yaml"
COURSE2 = "ros2_ws/src/pylon_2026_world/purt_course2.yaml"
TINY = {"discretization": {"n_crossing_points": 2, "heading_offsets_deg": [0], "both_directions": True}}


@pytest.fixture(scope="module")
def tiny_env():
    env = DubinsGateMDP(load_course(COURSE1), load_config(overrides=TINY))
    assert env.P == 4
    return env


def _brute_force(env, periodic=False):
    n, P = env.n_gates, env.P
    best = np.inf
    for seq in itertools.product(range(P), repeat=n + 1):
        if periodic and seq[-1] != seq[0]:
            continue
        best = min(best, sum(env.cost_s[k, seq[k], seq[k + 1]] for k in range(n)))
    return best


def test_dp_matches_brute_force(tiny_env):
    plan = solve_dp(tiny_env, mode="single")
    assert plan.total_cost_s == pytest.approx(_brute_force(tiny_env), abs=1e-12)


def test_dp_matches_brute_force_periodic(tiny_env):
    plan = solve_dp(tiny_env, mode="periodic")
    assert plan.total_cost_s == pytest.approx(_brute_force(tiny_env, periodic=True), abs=1e-12)


def test_fixed_start_pose(tiny_env):
    for start in range(tiny_env.P):
        plan = solve_dp(tiny_env, mode="single", start_pose_index=start)
        assert plan.pose_indices[0] == start


def test_periodic_closes_the_lap():
    env = DubinsGateMDP(load_course(COURSE2), load_config())
    plan = solve_dp(env, mode="periodic")
    assert plan.pose_indices[0] == plan.pose_indices[-1]
    assert np.allclose(plan.crossings[0].pose, plan.crossings[-1].pose)
    assert plan.total_cost_s >= solve_dp(env, mode="single").total_cost_s - 1e-9


def test_plan_is_feasible_and_contiguous():
    env = DubinsGateMDP(load_course(COURSE2), load_config())
    plan = solve_dp(env)
    assert plan.feasible and len(plan.legs) == env.n_gates and len(plan.crossings) == env.n_gates + 1
    for leg, a, b in zip(plan.legs, plan.crossings[:-1], plan.crossings[1:]):
        assert np.allclose(leg.start, a.pose) and np.allclose(leg.end, b.pose)
    for seg in plan.path().segments:
        if seg.kind == "arc":
            assert seg.radius >= env.radius - 1e-9


def test_no_feasible_lap_raises():
    cfg = load_config(overrides={"course_path": COURSE1, "aircraft": {"turn_radius_m": 1000.0},
                                 "costs": {"oob_mode": "forbid"}, **TINY})
    env = DubinsGateMDP(load_course(COURSE1), cfg)
    with pytest.raises(NoFeasibleLapError):
        solve_dp(env)

import numpy as np
import pytest

from dubins_preplanner.config import load_config
from dubins_preplanner.course import load_course
from dubins_preplanner.dp import solve_dp
from dubins_preplanner.environment import DubinsGateMDP
from dubins_preplanner.export import load_nominal_path, write_nominal_path
from dubins_preplanner.path import angle_diff

COURSE2 = "ros2_ws/src/pylon_2026_world/purt_course2.yaml"


@pytest.fixture(scope="module")
def roundtrip(tmp_path_factory):
    env = DubinsGateMDP(load_course(COURSE2), load_config())
    plan = solve_dp(env)
    out = tmp_path_factory.mktemp("export") / "nominal_path.yaml"
    write_nominal_path(out, plan, env)
    return plan, env, load_nominal_path(out)


def test_roundtrip(roundtrip):
    plan, env, (meta, crossings, path) = roundtrip
    original = plan.path()
    assert len(path.segments) == len(original.segments)
    assert path.length == pytest.approx(original.length, abs=1e-6)
    assert meta["total_length_m"] == pytest.approx(original.length, abs=1e-6)
    assert meta["turn_radius_m"] == pytest.approx(env.radius, abs=1e-6)
    assert len(crossings) == env.n_gates + 1
    for a, b in zip(path.segments[:-1], path.segments[1:]):
        assert np.hypot(*(a.end[:2] - b.start[:2])) < 1e-6
        assert abs(angle_diff(a.end[2], b.start[2])) < 1e-6


def test_s_start_cumulative(tmp_path):
    import yaml
    env = DubinsGateMDP(load_course(COURSE2), load_config())
    data = write_nominal_path(tmp_path / "p.yaml", solve_dp(env), env)
    segs = data["segments"]
    assert segs[0]["s_start_m"] == 0.0
    for a, b in zip(segs[:-1], segs[1:]):
        assert b["s_start_m"] == pytest.approx(a["s_start_m"] + a["length_m"], abs=1e-6)
    for seg in segs:
        if seg["kind"] == "arc":
            assert seg["radius"] >= env.radius - 1e-6
            assert seg["direction"] in (-1, 1)
        else:
            assert "radius" not in seg and "direction" not in seg
    assert yaml.safe_load(open(tmp_path / "p.yaml"))["meta"]["solver"] == "dp"


def test_crossings_lie_on_path(roundtrip):
    _, _, (_, crossings, path) = roundtrip
    for c in crossings:
        res = path.project((c["x"], c["y"]))
        assert abs(res.cross_track) < 1e-6
        assert res.s == pytest.approx(c["s_m"], abs=1e-6)

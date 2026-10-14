import numpy as np
import pytest

from dubins_preplanner.config import load_config
from dubins_preplanner.course import Course, load_course
from dubins_preplanner.dubins import shortest_path
from dubins_preplanner.environment import CRASH_REWARD, DubinsGateMDP, leg_metrics

COURSE2 = "ros2_ws/src/pylon_2026_world/purt_course2.yaml"


@pytest.fixture(scope="module")
def env2():
    return DubinsGateMDP(load_course(COURSE2), load_config(overrides={"rl": {"p_slip": 0.0}}))


def _toy_course():
    pylons = [{"xy": np.array([5.0, 0.0]), "r": 0.25, "name": "P1"}]
    return Course(pylons=pylons, gates=[], bounds=(-10.0, 10.0, -10.0, 10.0), gate_margin_m=2.5, oob_penalty_s=5.0)


def test_shapes(env2):
    n, P = env2.n_gates, env2.P
    assert (n, P) == (6, 50)
    for arr in (env2.length_m, env2.cost_s, env2.collision, env2.oob_exits, env2.min_pylon_dist_m):
        assert arr.shape == (n, P, P)
    assert env2.n_states == (n + 1) * P == 350
    assert env2.n_actions == P


def test_collision_through_pylon_center():
    course = _toy_course()
    m = leg_metrics(shortest_path((0, 0, 0), (9, 0, 0), 5.0), course, 2.5, 0.1)
    assert m.collision and m.min_pylon_dist_m < 0.25
    # Passing 1 m off the pylon: no collision, but inside the 2.5 m field.
    m = leg_metrics(shortest_path((0, 1, 0), (9, 1, 0), 5.0), course, 2.5, 0.1)
    assert not m.collision
    assert m.pylon_violation_m2 > 0
    assert m.min_pylon_dist_m == pytest.approx(1.0, abs=1e-6)


def test_collision_leg_costs_inf(env2):
    # Any leg flagged as a collision in the table must be priced at inf.
    assert env2.collision.any()
    assert np.all(np.isinf(env2.cost_s[env2.collision]))
    assert np.all(np.isfinite(env2.cost_s[~env2.collision]))


def test_single_oob_exit():
    course = _toy_course()
    # Straight east from x=5 (y=5, clear of the pylon) to x=15: leaves the x<=10 box once.
    m = leg_metrics(shortest_path((5, 5, 0), (15, 5, 0), 5.0), course, 2.5, 0.1)
    assert m.oob_exits == 1
    # Out and back in again is still one exit.
    m = leg_metrics(shortest_path((5, 5, 0), (5, -5, np.pi), 7.0), course, 2.5, 0.1)  # U-turn reaches x = 12
    assert m.oob_exits == 1


def test_forbid_mode_masks_oob():
    cfg = load_config(overrides={"costs": {"oob_mode": "forbid"}})
    env = DubinsGateMDP(load_course(COURSE2), cfg)
    assert np.all(np.isinf(env.cost_s[env.oob_exits > 0]))


def test_deterministic_step(env2):
    rng = np.random.default_rng(0)
    s = env2.reset(start_pose_index=7)
    for k in range(env2.n_gates):
        _, i = env2.decode(s)
        a = int(rng.choice(env2.valid_actions(s)))
        s2, r, done, info = env2.step(a)
        assert info["realized"] == a and not info["crashed"]
        assert r == pytest.approx(-env2.cost_s[k, i, a])
        assert done == (k == env2.n_gates - 1)
        s = s2
    assert env2.is_terminal(s)


def test_slip_stays_in_neighborhood():
    cfg = load_config(overrides={"rl": {"p_slip": 0.5}})
    env = DubinsGateMDP(load_course(COURSE2), cfg, rng=np.random.default_rng(1))
    slipped = 0
    for _ in range(300):
        s = env.reset()
        done = False
        while not done:
            a = int(env.rng.choice(env.valid_actions(s)))
            s, _, done, info = env.step(a)
            assert info["realized"] == a or info["realized"] in env.neighbors(a)
            slipped += info["realized"] != a
    assert slipped > 0


def test_neighbors(env2):
    # pose 0 = u 0, first offset of the +normal block: neighbors are u+1 and offset+1 only.
    assert sorted(env2.neighbors(0)) == [1, env2.n_theta]
    # Offsets never wrap from the +normal block into the -normal block.
    last_plus = env2.n_offsets - 1
    assert env2.n_offsets not in env2.neighbors(last_plus)


def test_episode_length(env2):
    rng = np.random.default_rng(2)
    for _ in range(50):
        s, steps, done = env2.reset(), 0, False
        while not done:
            s, _, done, info = env2.step(int(rng.choice(env2.valid_actions(s))))
            steps += 1
        assert steps == env2.n_gates and not info["crashed"]


def test_invalid_action_crashes(env2):
    k, i, j = map(int, np.argwhere(env2.collision)[0])
    env2.reset(start_pose_index=i)
    if k > 0:  # walk to layer k along valid legs
        pytest.skip("first collision leg is not on layer 0")
    _, r, done, info = env2.step(j)
    assert r == CRASH_REWARD and done and info["crashed"]

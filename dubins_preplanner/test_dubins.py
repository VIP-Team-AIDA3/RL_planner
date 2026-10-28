import itertools

import matplotlib
import numpy as np
import pytest
import yaml

matplotlib.use("Agg")

from dubins import dubins_words, shortest_path  # noqa: E402
from train import export_nominal_path, greedy_rollout, load_config, make_env, q_learning_with_logging, value_iteration  # noqa: E402

COURSE1 = "ros2_ws/src/pylon_2026_world/purt_course.yaml"


def _end_of(path_start, word, params, radius):
    from dubins import DubinsPath
    segs = DubinsPath(np.asarray(path_start, float), None, radius, word, params).segments()
    return segs[-1].end if segs else np.asarray(path_start, float)


def test_every_word_reaches_goal():
    rng = np.random.default_rng(0)
    for _ in range(1000):
        q0 = np.array([*rng.uniform(-50, 50, 2), rng.uniform(0, 2 * np.pi)])
        q1 = np.array([*rng.uniform(-50, 50, 2), rng.uniform(0, 2 * np.pi)])
        radius = rng.uniform(0.5, 20)
        for word, params in dubins_words(q0, q1, radius).items():
            end = _end_of(q0, word, params, radius)
            assert np.hypot(*(end[:2] - q1[:2])) < 1e-6, word
            assert abs((end[2] - q1[2] + np.pi) % (2 * np.pi) - np.pi) < 1e-6, word
        assert shortest_path(q0, q1, radius).length >= np.hypot(*(q1[:2] - q0[:2])) - 1e-9


def test_known_shapes_and_sampling():
    r = 7.0
    assert shortest_path((0, 0, 0), (10, 0, 0), r).length == pytest.approx(10.0)
    half = shortest_path((0, 0, 0), (0, 2 * r, np.pi), r)
    assert half.length == pytest.approx(np.pi * r) and half.word.startswith("L")
    assert shortest_path((3, -2, 1.2), (3, -2, 1.2), r).length == 0.0
    pts = shortest_path((0, 0, 0), (5, 20, 2.0), r).sample(0.1)
    assert np.all(np.hypot(*np.diff(pts[:, :2], axis=0).T) <= 0.1 + 1e-9)
    assert np.allclose(pts[-1, :2], (5, 20), atol=1e-6)


@pytest.fixture(scope="module")
def env2():
    cfg = load_config(noise=0.0)
    env = make_env(cfg)
    policy, V, _ = value_iteration(env, 1.0, 1e-9)
    env.INIT_POSE = int(np.argmax(V[0]))
    dp_lap = greedy_rollout(env, lambda s: int(policy[s[0], s[1]]))
    return env, dp_lap


def test_env_tables(env2):
    env, _ = env2
    assert env.cost.shape == (6, 50, 50) and tuple(env.observation_space.nvec) == (7, 50)
    assert env.collision.any() and np.all(np.isinf(env.cost[env.collision]))
    assert env.regate.any() and np.all(np.isfinite(env.cost[~(env.collision | env.regate)]))
    env.NOISE = 0.2
    env.state = np.array([0, 7])
    assert sum(p for _, p, _, _ in env.get_possible_next_states(12)) == pytest.approx(1.0)
    env.NOISE = 0.0


def test_value_iteration_matches_brute_force():
    cfg = load_config(course_path=COURSE1, noise=0.0, n_crossing_points=2, heading_offsets_deg=[0])
    env = make_env(cfg)
    assert env.P == 4
    _, V, _ = value_iteration(env, 1.0, 1e-9)
    best = min(sum(env.cost[k, seq[k], seq[k + 1]] for k in range(env.n_gates))
               for seq in itertools.product(range(env.P), repeat=env.n_gates + 1))
    assert -V[0].max() == pytest.approx(best, abs=1e-9)


def test_q_learning_matches_dp_without_noise(env2):
    env, dp_lap = env2
    np.random.seed(0)
    Q, _, returns, _ = q_learning_with_logging(env, 1.0, 0.1, 0.1, 60_000, 1000)
    lap = greedy_rollout(env, lambda s: int(np.argmax(Q[s[0], s[1]])))
    assert not lap["crashed"] and lap["cost"] <= 1.02 * dp_lap["cost"]


def test_export_is_contiguous(env2, tmp_path):
    env, dp_lap = env2
    export_nominal_path(env, dp_lap["state_history"], tmp_path / "p.yaml", "dp")
    data = yaml.safe_load(open(tmp_path / "p.yaml"))
    segs = data["segments"]
    assert data["meta"]["total_length_m"] == pytest.approx(dp_lap["length_m"], abs=1e-6)
    for a, b in zip(segs[:-1], segs[1:]):
        assert np.allclose(a["end"][:2], b["start"][:2], atol=1e-6)
        assert b["s_start_m"] == pytest.approx(a["s_start_m"] + a["length_m"], abs=1e-6)
    assert all(s["radius"] >= env.TURN_RADIUS_M - 1e-6 for s in segs if s["kind"] == "arc")

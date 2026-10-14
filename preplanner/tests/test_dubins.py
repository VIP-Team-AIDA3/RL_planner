import numpy as np
import pytest

from preplanner.dubins import WORDS, dubins_words, shortest_path, turn_radius, word_segments
from preplanner.path import angle_diff


def _random_pose(rng, scale=50.0):
    return np.array([*rng.uniform(-scale, scale, 2), rng.uniform(0, 2 * np.pi)])


def _end_pose(q0, word, params, radius):
    segs = word_segments(q0, word, params, radius)
    return segs[-1].end if segs else np.asarray(q0, dtype=float)


def test_every_feasible_word_reaches_goal():
    rng = np.random.default_rng(0)
    for _ in range(2000):
        q0, q1 = _random_pose(rng), _random_pose(rng)
        radius = rng.uniform(0.5, 20.0)
        words = dubins_words(q0, q1, radius)
        assert words, "at least one word is always feasible"
        for word, params in words.items():
            end = _end_pose(q0, word, params, radius)
            assert np.hypot(*(end[:2] - q1[:2])) < 1e-6, word
            assert abs(angle_diff(end[2], q1[2])) < 1e-6, word


@pytest.mark.parametrize("radius", [0.5, 3.0, 10.68, 40.0])
def test_straight_ahead(radius):
    path = shortest_path((0, 0, 0), (10, 0, 0), radius)
    assert path.length == pytest.approx(10.0, abs=1e-9)


def test_half_circle():
    r = 7.0
    path = shortest_path((0, 0, 0), (0, 2 * r, np.pi), r)
    assert path.length == pytest.approx(np.pi * r, abs=1e-9)
    assert path.word.startswith("L")


def test_same_pose_is_zero_length():
    for q in [(0, 0, 0), (3.0, -2.0, 1.234), (1, 1, 2 * np.pi - 1e-3)]:
        assert shortest_path(q, q, 5.0).length == pytest.approx(0.0, abs=1e-12)


def test_length_at_least_euclidean_distance():
    rng = np.random.default_rng(1)
    for _ in range(1000):
        q0, q1 = _random_pose(rng), _random_pose(rng)
        path = shortest_path(q0, q1, rng.uniform(0.5, 20.0))
        assert path.length >= np.hypot(*(q1[:2] - q0[:2])) - 1e-9


def test_mirror_symmetry():
    rng = np.random.default_rng(2)
    swap = str.maketrans("LR", "RL")
    for _ in range(500):
        q0, q1 = _random_pose(rng), _random_pose(rng)
        radius = rng.uniform(1.0, 15.0)
        a = shortest_path(q0, q1, radius)
        b = shortest_path(q0 * [1, -1, -1], q1 * [1, -1, -1], radius)
        assert b.length == pytest.approx(a.length, abs=1e-7)
        # The word swaps L<->R unless another word ties for shortest.
        lengths = sorted(sum(v) for v in dubins_words(q0, q1, radius).values())
        if len(lengths) == 1 or lengths[1] - lengths[0] > 1e-9:
            assert b.word == a.word.translate(swap)


def test_scaling():
    rng = np.random.default_rng(3)
    for _ in range(300):
        q0, q1 = _random_pose(rng), _random_pose(rng)
        radius, k = rng.uniform(1.0, 15.0), rng.uniform(0.2, 5.0)
        a = shortest_path(q0, q1, radius)
        b = shortest_path(q0 * [k, k, 1], q1 * [k, k, 1], radius * k)
        assert b.length == pytest.approx(k * a.length, rel=1e-7, abs=1e-9)


def test_sampling_spacing_and_smooth_heading():
    rng = np.random.default_rng(4)
    ds = 0.1
    for _ in range(100):
        q0, q1 = _random_pose(rng, 20.0), _random_pose(rng, 20.0)
        radius = rng.uniform(2.0, 15.0)
        path = shortest_path(q0, q1, radius)
        pts = path.sample(ds)
        assert np.allclose(pts[0, :2], q0[:2]) and np.allclose(pts[-1, :2], q1[:2], atol=1e-6)
        assert np.all(np.hypot(*np.diff(pts[:, :2], axis=0).T) <= ds + 1e-9)
        assert np.all(np.abs(angle_diff(pts[1:, 2], pts[:-1, 2])) <= ds / radius + 1e-9)


def test_turn_radius():
    # The plan quotes ~10.68 m; V^2 / (g tan 25deg) with g = 9.81 is 10.71 m.
    assert turn_radius(7.0, np.radians(25)) == pytest.approx(10.71, abs=0.01)
    assert turn_radius(7.0, np.radians(30)) == pytest.approx(8.65, abs=0.01)


def test_words_constant_order():
    assert WORDS == ("LSL", "RSR", "LSR", "RSL", "RLR", "LRL")

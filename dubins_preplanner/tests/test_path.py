import numpy as np
import pytest

from dubins_preplanner.dubins import shortest_path
from dubins_preplanner.path import Path, angle_diff, arc_segment, line_segment


def _example_path(radius=10.0):
    """line -> 180 deg left arc -> line -> 90 deg right arc -> line."""
    segs = [line_segment((0.0, 0.0, 0.0), 20.0)]
    segs.append(arc_segment(segs[-1].end, np.pi * radius, radius, +1))
    segs.append(line_segment(segs[-1].end, 15.0))
    segs.append(arc_segment(segs[-1].end, 0.5 * np.pi * radius, radius, -1))
    segs.append(line_segment(segs[-1].end, 10.0))
    return Path(segs)


def test_endpoints():
    path = _example_path()
    assert np.allclose(path.pose_at(0.0), path.segments[0].start)
    assert np.allclose(path.pose_at(path.length), path.segments[-1].end)


def test_segments_contiguous():
    rng = np.random.default_rng(0)
    paths = [_example_path()]
    for _ in range(50):
        q0 = np.array([*rng.uniform(-30, 30, 2), rng.uniform(0, 2 * np.pi)])
        q1 = np.array([*rng.uniform(-30, 30, 2), rng.uniform(0, 2 * np.pi)])
        paths.append(Path(shortest_path(q0, q1, 8.0).segments()))
    for path in paths:
        for a, b in zip(path.segments[:-1], path.segments[1:]):
            assert np.hypot(*(a.end[:2] - b.start[:2])) < 1e-6
            assert abs(angle_diff(a.end[2], b.start[2])) < 1e-6


def test_line_cross_track_sign():
    path = Path([line_segment((0.0, 0.0, 0.0), 10.0)])
    assert path.project((5.0, 1.0)).cross_track == pytest.approx(1.0)
    assert path.project((5.0, -1.0)).cross_track == pytest.approx(-1.0)
    res = path.project((5.0, 1.0))
    assert res.s == pytest.approx(5.0) and np.allclose(res.tangent, [1, 0])


def test_arc_cross_track_sign():
    r = 10.0
    path = Path([arc_segment((0.0, 0.0, 0.0), 0.5 * np.pi * r, r, +1)])  # left arc, center (0, 10)
    mid = path.pose_at(0.25 * np.pi * r)
    outward = mid[:2] - np.array([0.0, r])
    outward /= np.linalg.norm(outward)
    assert path.project(mid[:2] + outward).cross_track == pytest.approx(-1.0)  # outside = right
    assert path.project(mid[:2] - outward).cross_track == pytest.approx(1.0)   # inside = left
    # Point at the center: returns the arc start.
    res = path.project((0.0, r))
    assert res.s == pytest.approx(0.0) and res.cross_track == pytest.approx(r)


def test_right_arc_cross_track_sign():
    r = 5.0
    path = Path([arc_segment((0.0, 0.0, 0.0), 0.5 * np.pi * r, r, -1)])  # right arc, center (0, -5)
    mid = path.pose_at(0.25 * np.pi * r)
    outward = mid[:2] - np.array([0.0, -r])
    outward /= np.linalg.norm(outward)
    assert path.project(mid[:2] + outward).cross_track == pytest.approx(1.0)  # outside a right arc = left
    assert path.project(mid[:2] - outward).cross_track == pytest.approx(-1.0)


def test_samples_reproject_onto_path():
    path = _example_path()
    for pose in path.sample(0.5):
        assert abs(path.project(pose[:2]).cross_track) < 1e-6


def test_windowed_projection_stays_near_hint():
    # The 180 deg arc brings the path back next to its first leg; a windowed search must not jump.
    path = _example_path(radius=1.0)
    query = (5.0, 1.8)  # 1.8 m left of the first line, 0.2 m from the line after the U-turn (y = 2)
    assert path.project(query).segment_index == 2
    res = path.project(query, s_hint=5.0, window=3.0)
    assert res.segment_index == 0 and res.cross_track == pytest.approx(1.8)


def test_curvature():
    path = _example_path(radius=10.0)
    assert path.curvature_at(5.0) == 0.0
    assert path.curvature_at(25.0) == pytest.approx(0.1)
    assert path.curvature_at(path.s_start[3] + 1.0) == pytest.approx(-0.1)

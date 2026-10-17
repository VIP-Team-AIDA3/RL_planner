"""A planned path as a contiguous list of line and arc segments.

This is the shared representation for export, plotting and (later) the dynamic planner. Conventions: heading 0 = +x, CCW positive; signed cross-track error is positive to the
**left** of the direction of travel.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

TWO_PI = 2.0 * np.pi


def wrap_2pi(a):
    """Wrap an angle (or array of angles) to [0, 2pi)."""
    return np.mod(a, TWO_PI)


def angle_diff(a, b):
    """Signed difference a - b wrapped to [-pi, pi)."""
    return (np.asarray(a) - np.asarray(b) + np.pi) % TWO_PI - np.pi


@dataclass(frozen=True)
class Segment:
    """One line or circular arc. ``direction`` is +1 for a left (CCW) arc, -1 right (CW), 0 a line."""

    kind: str                  # "line" | "arc"
    start: np.ndarray          # (3,) pose
    end: np.ndarray            # (3,) pose
    length: float
    center: np.ndarray | None  # arcs only
    radius: float | None       # arcs only
    direction: int             # +1 left (CCW), -1 right (CW), 0 for lines

    @property
    def curvature(self) -> float:
        return 0.0 if self.kind == "line" else self.direction / self.radius

    def poses_at(self, l) -> np.ndarray:
        """Poses at local arc lengths ``l`` (scalar or array) from the segment start; shape (..., 3)."""
        l = np.asarray(l, dtype=float)
        x0, y0, th0 = self.start
        if self.kind == "line":
            x = x0 + l * np.cos(th0)
            y = y0 + l * np.sin(th0)
            th = np.full_like(l, th0)
        else:
            s, r = self.direction, self.radius
            th = th0 + s * l / r
            x = self.center[0] + s * r * np.sin(th)
            y = self.center[1] - s * r * np.cos(th)
        return np.stack([x, y, wrap_2pi(th)], axis=-1)

    def closest_local(self, xy: np.ndarray, lo: float, hi: float) -> float:
        """Local arc length in [lo, hi] of the point on this segment closest to ``xy``."""
        if self.kind == "line":
            t = np.array([np.cos(self.start[2]), np.sin(self.start[2])])
            return float(np.clip(np.dot(xy - self.start[:2], t), lo, hi))
        rel = xy - self.center
        if np.hypot(*rel) < 1e-12:  # at the center every point is equally close: use the start
            return lo
        start_rel = self.start[:2] - self.center
        phi_p = np.arctan2(rel[1], rel[0])
        phi_0 = np.arctan2(start_rel[1], start_rel[0])
        l_circle = wrap_2pi(self.direction * (phi_p - phi_0)) * self.radius
        if lo <= l_circle <= hi:
            return float(l_circle)
        # Outside the allowed span: the closest point is one of its two ends.
        ends = self.poses_at(np.array([lo, hi]))[:, :2]
        return lo if np.hypot(*(ends[0] - xy)) <= np.hypot(*(ends[1] - xy)) else hi


def line_segment(start: np.ndarray, length: float) -> Segment:
    start = np.asarray(start, dtype=float)
    seg = Segment("line", start, start, float(length), None, None, 0)
    return Segment("line", start, seg.poses_at(length), float(length), None, None, 0)


def arc_segment(start: np.ndarray, length: float, radius: float, direction: int) -> Segment:
    """Arc of arc length ``length`` (meters) turning left (+1) or right (-1) from ``start``."""
    start = np.asarray(start, dtype=float)
    x, y, th = start
    center = np.array([x - direction * radius * np.sin(th), y + direction * radius * np.cos(th)])
    seg = Segment("arc", start, start, float(length), center, float(radius), int(direction))
    return Segment("arc", start, seg.poses_at(length), float(length), center, float(radius), int(direction))


@dataclass
class ProjectionResult:
    s: float                   # arc length of closest point
    cross_track: float         # signed, + = left of path
    tangent: np.ndarray        # unit (2,)
    segment_index: int
    closest_xy: np.ndarray


class Path:
    """Contiguous sequence of segments, parameterized by cumulative arc length ``s``."""

    def __init__(self, segments: list[Segment]):
        if not segments:
            raise ValueError("Path needs at least one segment")
        self.segments = list(segments)
        lengths = np.array([seg.length for seg in self.segments])
        self.s_start = np.concatenate([[0.0], np.cumsum(lengths)[:-1]])
        self.length = float(lengths.sum())

    def _locate(self, s: float) -> tuple[int, float]:
        s = float(np.clip(s, 0.0, self.length))
        k = int(np.searchsorted(self.s_start, s, side="right") - 1)
        k = min(max(k, 0), len(self.segments) - 1)
        return k, s - self.s_start[k]

    def pose_at(self, s: float) -> np.ndarray:
        """Pose at arc length ``s`` (clamped to [0, length])."""
        k, l = self._locate(s)
        return self.segments[k].poses_at(l)

    def curvature_at(self, s: float) -> float:
        """0 on lines, +-1/R on arcs (+ = left)."""
        k, _ = self._locate(s)
        return self.segments[k].curvature

    def poses_at(self, s: np.ndarray) -> np.ndarray:
        """Vectorized ``pose_at`` for an array of arc lengths; shape (N, 3)."""
        s = np.clip(np.asarray(s, dtype=float), 0.0, self.length)
        idx = np.clip(np.searchsorted(self.s_start, s, side="right") - 1, 0, len(self.segments) - 1)
        out = np.empty((len(s), 3))
        for k, seg in enumerate(self.segments):
            mask = idx == k
            if mask.any():
                out[mask] = seg.poses_at(s[mask] - self.s_start[k])
        return out

    def sample(self, ds: float) -> np.ndarray:
        """Evenly spaced poses (spacing <= ds) including both endpoints; shape (N, 3)."""
        n = max(2, int(np.ceil(self.length / ds)) + 1)
        return self.poses_at(np.linspace(0.0, self.length, n))

    def project(self, xy, s_hint: float | None = None, window: float | None = None) -> ProjectionResult:
        """Closest point on the path to ``xy``.

        With ``s_hint`` and ``window``, only arc lengths in [s_hint - window, s_hint + window] are
        searched, so a tracker following a self-crossing lap doesn't jump to a distant leg.
        """
        xy = np.asarray(xy, dtype=float)[:2]
        s_lo, s_hi = 0.0, self.length
        if s_hint is not None and window is not None:
            s_lo, s_hi = max(0.0, s_hint - window), min(self.length, s_hint + window)

        best = None
        for k, seg in enumerate(self.segments):
            a = max(0.0, s_lo - self.s_start[k])
            b = min(seg.length, s_hi - self.s_start[k])
            if a > b:
                continue
            l = seg.closest_local(xy, a, b)
            pose = seg.poses_at(l)
            dist = float(np.hypot(*(xy - pose[:2])))
            if best is None or dist < best[0]:
                best = (dist, k, l, pose)

        dist, k, l, pose = best
        tangent = np.array([np.cos(pose[2]), np.sin(pose[2])])
        rel = xy - pose[:2]
        side = tangent[0] * rel[1] - tangent[1] * rel[0]
        return ProjectionResult(
            s=float(self.s_start[k] + l),
            cross_track=dist if side >= 0 else -dist,
            tangent=tangent,
            segment_index=k,
            closest_xy=pose[:2].copy(),
        )

"""Shortest Dubins paths (Dubins 1957), in pure NumPy.

A Dubins path joins two poses with straight lines and circular arcs of a fixed minimum turn radius
R. The shortest one is always one of six words: LSL, RSR, LSR, RSL, RLR, LRL. Every word is solved
in normalized form (radius 1) and the shortest feasible one wins.

Conventions: pose = (x, y, theta), theta 0 = +x and CCW positive; radians throughout.
"""

from __future__ import annotations

from dataclasses import dataclass
from math import acos, atan2, cos, sin, sqrt, tan

import numpy as np

from .path import Path, Segment, arc_segment, line_segment, wrap_2pi

TWO_PI = 2.0 * np.pi
WORDS = ("LSL", "RSR", "LSR", "RSL", "RLR", "LRL")  # also the tie-break order
_ZERO_EPS = 1e-9


def mod2pi(a: float) -> float:
    """Wrap to [0, 2pi). A value a hair below 2pi (round-off from a tiny negative) snaps to 0, so a
    path that needs no turn never comes out as a full loop."""
    r = a % TWO_PI
    return 0.0 if r > TWO_PI - 1e-10 else r


def turn_radius(airspeed: float, bank_rad: float, g: float = 9.81) -> float:
    """Coordinated-turn radius R = V^2 / (g tan(bank))."""
    return airspeed**2 / (g * tan(bank_rad))


def _normalize(q0, q1, radius) -> tuple[float, float, float]:
    dx, dy = q1[0] - q0[0], q1[1] - q0[1]
    d = sqrt(dx * dx + dy * dy) / radius
    phi = atan2(dy, dx)
    return d, mod2pi(q0[2] - phi), mod2pi(q1[2] - phi)


def dubins_words(q0, q1, radius) -> dict[str, tuple[float, float, float]]:
    """All feasible words -> normalized (t, p, q): arcs in radians of turn, the straight in units of R."""
    d, alpha, beta = _normalize(q0, q1, radius)
    sa, sb, ca, cb = sin(alpha), sin(beta), cos(alpha), cos(beta)
    cab = cos(alpha - beta)
    out: dict[str, tuple[float, float, float]] = {}

    # LSL
    p2 = 2 + d * d - 2 * cab + 2 * d * (sa - sb)
    if p2 >= 0:
        tmp = atan2(cb - ca, d + sa - sb)
        out["LSL"] = (mod2pi(-alpha + tmp), sqrt(p2), mod2pi(beta - tmp))

    # RSR
    p2 = 2 + d * d - 2 * cab + 2 * d * (sb - sa)
    if p2 >= 0:
        tmp = atan2(ca - cb, d - sa + sb)
        out["RSR"] = (mod2pi(alpha - tmp), sqrt(p2), mod2pi(-beta + tmp))

    # LSR
    p2 = -2 + d * d + 2 * cab + 2 * d * (sa + sb)
    if p2 >= 0:
        p = sqrt(p2)
        tmp = atan2(-ca - cb, d + sa + sb) - atan2(-2.0, p)
        out["LSR"] = (mod2pi(-alpha + tmp), p, mod2pi(-mod2pi(beta) + tmp))

    # RSL
    p2 = -2 + d * d + 2 * cab - 2 * d * (sa + sb)
    if p2 >= 0:
        p = sqrt(p2)
        tmp = atan2(ca + cb, d - sa - sb) - atan2(2.0, p)
        out["RSL"] = (mod2pi(alpha - tmp), p, mod2pi(beta - tmp))

    # RLR
    tmp = (6 - d * d + 2 * cab + 2 * d * (sa - sb)) / 8
    if abs(tmp) <= 1:
        p = mod2pi(TWO_PI - acos(min(1.0, max(-1.0, tmp))))
        t = mod2pi(alpha - atan2(ca - cb, d - sa + sb) + p / 2)
        out["RLR"] = (t, p, mod2pi(alpha - beta - t + mod2pi(p)))

    # LRL
    tmp = (6 - d * d + 2 * cab + 2 * d * (-sa + sb)) / 8
    if abs(tmp) <= 1:
        p = mod2pi(TWO_PI - acos(min(1.0, max(-1.0, tmp))))
        t = mod2pi(-alpha - atan2(ca - cb, d + sa - sb) + p / 2)
        out["LRL"] = (t, p, mod2pi(mod2pi(beta) - alpha - t + mod2pi(p)))

    return out


def word_segments(start, word: str, params, radius: float) -> list[Segment]:
    """Forward-integrate a word from ``start``; zero-length pieces (< 1e-9) are dropped."""
    segments: list[Segment] = []
    pose = np.asarray(start, dtype=float)
    for letter, value in zip(word, params):
        length = value * radius
        if length < _ZERO_EPS:
            continue
        if letter == "S":
            seg = line_segment(pose, length)
        else:
            seg = arc_segment(pose, length, radius, +1 if letter == "L" else -1)
        segments.append(seg)
        pose = seg.end
    return segments


@dataclass(frozen=True)
class DubinsPath:
    start: np.ndarray                    # (3,) pose
    end: np.ndarray                      # (3,) pose
    radius: float
    word: str                            # e.g. "LSR"
    params: tuple[float, float, float]   # normalized (t, p, q)

    @property
    def length(self) -> float:
        return self.radius * float(sum(self.params))

    def segments(self) -> list[Segment]:
        return word_segments(self.start, self.word, self.params, self.radius)

    def sample(self, ds: float) -> np.ndarray:
        """(N, 3) poses spaced <= ds apart, including both endpoints."""
        segs = self.segments()
        if not segs:
            return np.stack([self.start, self.start])
        return Path(segs).sample(ds)


def shortest_path(q0, q1, radius: float) -> DubinsPath:
    """The shortest of all feasible words (ties broken by ``WORDS`` order)."""
    q0 = np.array([q0[0], q0[1], wrap_2pi(q0[2])], dtype=float)
    q1 = np.array([q1[0], q1[1], wrap_2pi(q1[2])], dtype=float)
    dpos = np.hypot(q1[0] - q0[0], q1[1] - q0[1])
    dth = abs((q1[2] - q0[2] + np.pi) % TWO_PI - np.pi)
    if dpos < _ZERO_EPS and dth < _ZERO_EPS:
        return DubinsPath(q0, q1, float(radius), "LSL", (0.0, 0.0, 0.0))

    words = dubins_words(q0, q1, radius)
    best_word, best_len = None, np.inf
    for w in WORDS:
        if w in words and sum(words[w]) < best_len:
            best_word, best_len = w, sum(words[w])
    return DubinsPath(q0, q1, float(radius), best_word, words[best_word])

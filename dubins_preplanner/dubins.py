from dataclasses import dataclass
from math import acos, atan2, cos, sin, sqrt

import numpy as np

TWO_PI = 2.0 * np.pi
WORDS = ("LSL", "RSR", "LSR", "RSL", "RLR", "LRL")  # also the tie-break order


def mod2pi(a):
    # Wrap to [0, 2pi). A value a hair below 2pi (round-off from a tiny negative) snaps to 0, so a path
    # that needs no turn never comes out as a full loop.
    r = a % TWO_PI
    return 0.0 if r > TWO_PI - 1e-10 else r


@dataclass(frozen=True)
class Segment:
    # One line or circular arc. direction is +1 for a left (CCW) arc, -1 right (CW), 0 a line.
    kind: str              # "line" | "arc"
    start: np.ndarray      # (3,) pose
    length: float          # meters
    radius: float
    direction: int

    @property
    def center(self):
        x, y, th = self.start
        return np.array([x - self.direction * self.radius * np.sin(th), y + self.direction * self.radius * np.cos(th)])

    def poses_at(self, l):
        # Poses at local arc lengths l (scalar or array) from the segment start; shape (..., 3)
        l = np.asarray(l, dtype=float)
        x0, y0, th0 = self.start
        if self.kind == "line":
            x, y, th = x0 + l * np.cos(th0), y0 + l * np.sin(th0), np.full_like(l, th0)
        else:
            s, r, c = self.direction, self.radius, self.center
            th = th0 + s * l / r
            x, y = c[0] + s * r * np.sin(th), c[1] - s * r * np.cos(th)
        return np.stack([x, y, np.mod(th, TWO_PI)], axis=-1)

    @property
    def end(self):
        return self.poses_at(self.length)


def dubins_words(q0, q1, radius):
    # All feasible words -> normalized (t, p, q): arcs in radians of turn, the straight in units of R
    dx, dy = q1[0] - q0[0], q1[1] - q0[1]
    d = sqrt(dx * dx + dy * dy) / radius
    phi = atan2(dy, dx)
    alpha, beta = mod2pi(q0[2] - phi), mod2pi(q1[2] - phi)
    sa, sb, ca, cb = sin(alpha), sin(beta), cos(alpha), cos(beta)
    cab = cos(alpha - beta)
    out = {}

    p2 = 2 + d * d - 2 * cab + 2 * d * (sa - sb)
    if p2 >= 0:
        tmp = atan2(cb - ca, d + sa - sb)
        out["LSL"] = (mod2pi(-alpha + tmp), sqrt(p2), mod2pi(beta - tmp))

    p2 = 2 + d * d - 2 * cab + 2 * d * (sb - sa)
    if p2 >= 0:
        tmp = atan2(ca - cb, d - sa + sb)
        out["RSR"] = (mod2pi(alpha - tmp), sqrt(p2), mod2pi(-beta + tmp))

    p2 = -2 + d * d + 2 * cab + 2 * d * (sa + sb)
    if p2 >= 0:
        p = sqrt(p2)
        tmp = atan2(-ca - cb, d + sa + sb) - atan2(-2.0, p)
        out["LSR"] = (mod2pi(-alpha + tmp), p, mod2pi(-mod2pi(beta) + tmp))

    p2 = -2 + d * d + 2 * cab - 2 * d * (sa + sb)
    if p2 >= 0:
        p = sqrt(p2)
        tmp = atan2(ca + cb, d - sa - sb) - atan2(2.0, p)
        out["RSL"] = (mod2pi(alpha - tmp), p, mod2pi(beta - tmp))

    # acos is clipped only after the feasibility check, to absorb round-off like 1.0000000002
    tmp = (6 - d * d + 2 * cab + 2 * d * (sa - sb)) / 8
    if abs(tmp) <= 1:
        p = mod2pi(TWO_PI - acos(min(1.0, max(-1.0, tmp))))
        t = mod2pi(alpha - atan2(ca - cb, d - sa + sb) + p / 2)
        out["RLR"] = (t, p, mod2pi(alpha - beta - t + mod2pi(p)))

    tmp = (6 - d * d + 2 * cab + 2 * d * (-sa + sb)) / 8
    if abs(tmp) <= 1:
        p = mod2pi(TWO_PI - acos(min(1.0, max(-1.0, tmp))))
        t = mod2pi(-alpha - atan2(ca - cb, d + sa - sb) + p / 2)
        out["LRL"] = (t, p, mod2pi(mod2pi(beta) - alpha - t + mod2pi(p)))

    return out


@dataclass(frozen=True)
class DubinsPath:
    start: np.ndarray
    end: np.ndarray
    radius: float
    word: str                          # e.g. "LSR"
    params: tuple                      # normalized (t, p, q)

    @property
    def length(self):
        return self.radius * float(sum(self.params))

    def segments(self):
        # Forward-integrate the word from start; zero-length pieces are dropped
        segs, pose = [], np.asarray(self.start, dtype=float)
        for letter, value in zip(self.word, self.params):
            if value * self.radius < 1e-9:
                continue
            kind, direction = ("line", 0) if letter == "S" else ("arc", 1 if letter == "L" else -1)
            seg = Segment(kind, pose, value * self.radius, self.radius, direction)
            segs.append(seg)
            pose = seg.end
        return segs

    def sample(self, ds):
        # (N, 3) poses spaced <= ds apart along the path, including both endpoints
        segs = self.segments()
        if not segs:
            return np.stack([self.start, self.start])
        n = max(2, int(np.ceil(self.length / ds)) + 1)
        s = np.linspace(0.0, self.length, n)
        starts = np.cumsum([0.0] + [seg.length for seg in segs[:-1]])
        idx = np.clip(np.searchsorted(starts, s, side="right") - 1, 0, len(segs) - 1)
        out = np.empty((n, 3))
        for k, seg in enumerate(segs):
            mask = idx == k
            out[mask] = seg.poses_at(s[mask] - starts[k])
        return out


def shortest_path(q0, q1, radius):
    # The shortest of all feasible words (ties broken by WORDS order)
    q0 = np.array([q0[0], q0[1], np.mod(q0[2], TWO_PI)], dtype=float)
    q1 = np.array([q1[0], q1[1], np.mod(q1[2], TWO_PI)], dtype=float)
    if np.hypot(*(q1[:2] - q0[:2])) < 1e-9 and abs((q1[2] - q0[2] + np.pi) % TWO_PI - np.pi) < 1e-9:
        return DubinsPath(q0, q1, float(radius), "LSL", (0.0, 0.0, 0.0))
    words = dubins_words(q0, q1, radius)
    best = min((w for w in WORDS if w in words), key=lambda w: sum(words[w]))
    return DubinsPath(q0, q1, float(radius), best, words[best])

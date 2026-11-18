"""DubinsGateEnv -- the gates-and-pylons race course as a Dubins gate-crossing MDP.

Instead of moving one grid cell per step (RaceEnv), the agent chooses WHERE along the next gate and
at WHAT HEADING to cross it, and flies there along the shortest Dubins path (lines + arcs no tighter
than TURN_RADIUS_M). One step = one gate. The course geometry, pylon safety radius and the course
plot all come from race_env.RaceEnv, so both environments read the course the same way.

State  = (layer, pose): layer k < n is "crossing gate k", layer n is "crossing G1 again" (finish).
Action = pose index on the next gate. Poses = N_CROSSING_POINTS positions across the gate's usable
         width x headings (gate normal + each offset, both directions).
Reward = -(leg length + PYLON_PENALTY * int max(0, R_field - d) ds + OOB_PENALTY * exits), in meters.
         Clipping a pylon ends the episode with CRASH_REWARD.
"""

import sys
from pathlib import Path

import gymnasium as gym
import matplotlib.pyplot as plt
import numpy as np
import yaml
from gymnasium import spaces
from matplotlib.collections import LineCollection
from matplotlib.lines import Line2D

from dubins import shortest_path

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT / "RL Tutorial" / "Demo Results"))
from race_env import RaceEnv  # noqa: E402  (team course loader + renderer)

CRASH_REWARD = -1000.0


class DubinsGateEnv(gym.Env):
    def __init__(self, course_path, TURN_RADIUS_M=10.71, N_CROSSING_POINTS=5, HEADING_OFFSETS_DEG=(-60, -30, 0, 30, 60),
                 SAMPLE_DS_M=0.1, PYLON_PENALTY=1000.0, OOB_PENALTY=1000.0, NOISE=0.0, INIT_POSE=None):
        super(DubinsGateEnv, self).__init__()
        self.COURSE_PATH = str(course_path)
        course_path = Path(course_path) if Path(course_path).is_absolute() else REPO_ROOT / course_path
        self.course = RaceEnv(str(course_path))  

        with open(course_path) as f:
            bounds = yaml.safe_load(f)["bounds_rect"]
        self.BOUNDS = (*sorted((bounds["min_x"], bounds["max_x"])), *sorted((bounds["min_y"], bounds["max_y"])))

        self.TURN_RADIUS_M = TURN_RADIUS_M
        self.SAMPLE_DS_M = SAMPLE_DS_M
        self.PYLON_PENALTY = PYLON_PENALTY
        self.OOB_PENALTY = OOB_PENALTY
        self.NOISE = NOISE  # [0,1] -- chance the realized crossing slips to a neighboring pose
        self.INIT_POSE = INIT_POSE  # G1 pose to start from; None -> random each episode

        self.N_OFFSETS = len(HEADING_OFFSETS_DEG)
        self.N_THETA = 2 * self.N_OFFSETS
        self.N_U = N_CROSSING_POINTS
        self.n_gates = len(self.course.GATES)
        self.poses = [self.gate_poses(gate, N_CROSSING_POINTS, np.radians(HEADING_OFFSETS_DEG)) for gate in self.course.GATES]
        self.P = len(self.poses[0])

        self.observation_space = spaces.MultiDiscrete([self.n_gates + 1, self.P])  # (layer, pose)
        self.action_space = spaces.Discrete(self.P)  # pose on the next gate

        self.precompute_legs()
        self.reset()

    def gate_poses(self, gate, n_points, offsets):
        # Crossing poses for one gate, ordered pose = u * N_THETA + direction * N_OFFSETS + offset
        margin = self.course.GATE_MARGIN_M
        if gate["length"] - 2 * margin <= 0:
            raise ValueError(f"Gate {gate['name']} has no usable width with a {margin} m margin at each pylon")
        direction = (gate["p2"] - gate["p1"]) / gate["length"]
        normal_heading = np.arctan2(direction[0], -direction[1])  # direction rotated +90 deg
        headings = [normal_heading + flip + off for flip in (0.0, np.pi) for off in offsets]
        poses = []
        for dist in np.linspace(margin, gate["length"] - margin, n_points):
            xy = gate["p1"] + dist * direction
            poses += [np.array([xy[0], xy[1], th % (2 * np.pi)]) for th in headings]
        return poses

    def precompute_legs(self):
        # Every leg from each pose on gate k to each pose on gate k+1 (gate n-1 -> G1 closes the lap).
        # Arrays are (n_gates, P, P); layer k's legs are row k.
        n, P = self.n_gates, self.P
        self.length_m = np.zeros((n, P, P))
        self.min_pylon_m = np.zeros((n, P, P))
        self.violation_m2 = np.zeros((n, P, P))
        self.oob_exits = np.zeros((n, P, P), dtype=int)
        self.collision = np.zeros((n, P, P), dtype=bool)
        self.regate = np.zeros((n, P, P), dtype=bool)  # leg crosses its start or end gate a second time

        pylon_xy = np.array([p["xy"] for p in self.course.PYLONS])
        pylon_r = np.array([p["r"] for p in self.course.PYLONS])
        x_lo, x_hi, y_lo, y_hi = self.BOUNDS
        for k in range(n):
            for i, a in enumerate(self.poses[k]):
                for j, b in enumerate(self.poses[(k + 1) % n]):
                    path = shortest_path(a, b, self.TURN_RADIUS_M)
                    pts = path.sample(self.SAMPLE_DS_M)[:, :2]
                    d = np.linalg.norm(pts[:, None, :] - pylon_xy[None], axis=-1)  # (samples, pylons)
                    nearest = d.min(axis=1)
                    # Pylon robustness as in race_env: rho = d - R_field, charged per meter of violation
                    violation = np.maximum(0.0, self.course.PYLON_FIELD_R_M - nearest)
                    step = path.length / (len(pts) - 1)
                    inside = np.concatenate([[True], (pts[:, 0] >= x_lo) & (pts[:, 0] <= x_hi) &
                                             (pts[:, 1] >= y_lo) & (pts[:, 1] <= y_hi)])
                    self.length_m[k, i, j] = path.length
                    self.min_pylon_m[k, i, j] = nearest.min()
                    self.violation_m2[k, i, j] = step * (violation.sum() - 0.5 * (violation[0] + violation[-1]))
                    self.oob_exits[k, i, j] = np.sum(inside[:-1] & ~inside[1:])
                    self.collision[k, i, j] = np.any(d <= pylon_r)
                    self.regate[k, i, j] = (self.recrosses(pts[1:], self.course.GATES[k]) or
                                            self.recrosses(pts[:-1], self.course.GATES[(k + 1) % n]))

        self.cost = self.length_m + self.PYLON_PENALTY * self.violation_m2 + self.OOB_PENALTY * self.oob_exits
        self.cost[self.collision | self.regate] = np.inf

    @staticmethod
    def recrosses(pts, gate):
        # True if the polyline crosses the gate segment (pts excludes the endpoint that sits on the gate, so
        # the one legitimate crossing is not counted: a leg may go through its gates once, never back over them)
        p1, p2 = gate["p1"], gate["p2"]
        side = np.sign((p2[0] - p1[0]) * (pts[:, 1] - p1[1]) - (p2[1] - p1[1]) * (pts[:, 0] - p1[0]))
        flip = np.nonzero(side[:-1] * side[1:] < 0)[0]
        if len(flip) == 0:
            return False
        d = p2 - p1
        a, b = pts[flip], pts[flip + 1]
        sa = np.cross(d, a - p1)
        sb = np.cross(d, b - p1)
        x = a + (b - a) * (sa / (sa - sb))[:, None]  # where the sample segment meets the gate line
        t = (x - p1) @ d / (d @ d)
        return bool(np.any((t >= 0) & (t <= 1)))

    def leg_path(self, layer, i, j):
        return shortest_path(self.poses[layer % self.n_gates][i], self.poses[(layer + 1) % self.n_gates][j], self.TURN_RADIUS_M)

    def neighbors(self, pose):
        # Poses one slip away: +-1 position, or +-1 heading offset within the same crossing direction
        u, h = divmod(pose, self.N_THETA)
        block, off = divmod(h, self.N_OFFSETS)
        return [uu * self.N_THETA + block * self.N_OFFSETS + oo
                for uu, oo in ((u - 1, off), (u + 1, off), (u, off - 1), (u, off + 1))
                if 0 <= uu < self.N_U and 0 <= oo < self.N_OFFSETS]

    def leg_outcome(self, layer, pose, intended, realized):
        # (reward, done, crashed) for flying from pose to realized when intended was chosen
        if not (np.isfinite(self.cost[layer, pose, intended]) and np.isfinite(self.cost[layer, pose, realized])):
            return CRASH_REWARD, True, True
        return -float(self.cost[layer, pose, realized]), layer + 1 == self.n_gates, False

    def reset(self):
        pose = self.INIT_POSE if self.INIT_POSE is not None else np.random.randint(self.P)
        self.state = np.array([0, pose])
        self.state_history = [self.state.copy()]
        self.action_history = []
        return self.get_observation(), self.get_info()

    def step(self, action):
        layer, pose = self.state
        realized = int(action)
        nbrs = self.neighbors(realized)
        if self.NOISE > 0 and nbrs and np.random.random() < self.NOISE:
            realized = int(np.random.choice(nbrs))
        reward, done, crashed = self.leg_outcome(layer, pose, int(action), realized)

        self.state = np.array([layer + 1, realized])
        self.state_history.append(self.state.copy())
        self.action_history.append(int(action))
        info = self.get_info()
        info.update({"realized": realized, "crashed": crashed, "length_m": float(self.length_m[layer, pose, realized]),
                     "min_pylon_m": float(self.min_pylon_m[layer, pose, realized])})
        return self.get_observation(), reward, done, False, info

    def get_possible_next_states(self, action):
        # [(next_state, prob, reward, done)] from self.state -- the model the team's value_iteration reads
        layer, pose = self.state
        if layer >= self.n_gates:
            return [(self.state.copy(), 1.0, 0.0, True)]
        nbrs = self.neighbors(int(action)) if self.NOISE > 0 else []
        outcomes = [(int(action), 1.0 - self.NOISE if nbrs else 1.0)] + [(j, self.NOISE / len(nbrs)) for j in nbrs]
        result = []
        for realized, prob in outcomes:
            reward, done, _ = self.leg_outcome(layer, pose, int(action), realized)
            result.append((np.array([layer + 1, realized]), prob, reward, done))
        return result

    def get_observation(self):
        return self.state.copy()

    def get_info(self):
        return {"state_history": self.state_history, "action_history": self.action_history}

    def lap_paths(self, state_history=None):
        # Dubins legs flown along a state history (default: the last episode)
        hist = self.state_history if state_history is None else state_history
        return [self.leg_path(k, int(a[1]), int(b[1])) for k, (a, b) in enumerate(zip(hist[:-1], hist[1:]))]

    def render(self, ax=None, title=None, state_history=None):
        # The team's course plot (RaceEnv.render without its grid path) with the Dubins lap on top
        standalone = ax is None
        if standalone:
            fig, ax = plt.subplots(figsize=(10, 8))
        legs = self.lap_paths(state_history)
        if legs:
            pts = np.concatenate([leg.sample(0.2)[:, :2] for leg in legs])
            segments = list(np.stack([pts[:-1], pts[1:]], axis=1))  # LineCollection is typed to take a sequence
            lc = LineCollection(segments, cmap="plasma", linewidths=3, alpha=0.9, zorder=2, capstyle="round")
            lc.set_array(np.linspace(0, 1, len(segments)))
            ax.add_collection(lc)
            crossings = np.array([legs[0].start] + [leg.end for leg in legs])
            ax.quiver(crossings[:, 0], crossings[:, 1], np.cos(crossings[:, 2]), np.sin(crossings[:, 2]), color="dodgerblue",
                      angles="xy", scale_units="xy", scale=0.25, width=0.004, zorder=3)
            ax.add_line(Line2D([], [], color=plt.get_cmap("plasma")(0.5), lw=3, label="Dubins path"))
            ax.scatter(*crossings[0, :2], color="forestgreen", marker="s", s=120, label="Start", zorder=4)
            ax.scatter(*crossings[-1, :2], color="gold", marker="*", s=250, edgecolor="black", label="Finish", zorder=4)
        self.course.render(ax=ax, title=title or "Dubins lap", show_path=False)
        x_lo, x_hi, y_lo, y_hi = self.BOUNDS
        ax.plot([x_lo, x_hi, x_hi, x_lo, x_lo], [y_lo, y_lo, y_hi, y_hi, y_lo], color="dimgray", lw=1, zorder=0)
        if standalone:
            plt.tight_layout()
            plt.show()
        return ax

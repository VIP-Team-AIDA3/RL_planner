# rho_gate_k(t)        = r1 - d(p(t), gate_k)       > 0  iff within r1 of gate k
# rho_not_gate_k+1(t)  = d(p(t), gate_k+1) - r2     > 0  iff farther than r2 from gate k+1

import numpy as np
from gymnasium import spaces

from race_env import GateSequenceMonitor, point_segment_distance

STL_REWARDS = {"neutral": -1, "midpoint": 1000, "endpoint": 1000, "pylon_field": -300, "stl_order": 50}


class STLOrderMonitor(GateSequenceMonitor):
    def __init__(self, env, REWARDS=STL_REWARDS, r1=3.0, r2=3.0, first_stage=1, ROUND_M=None, H_BINS=None):
        if r1 <= 0 or r2 <= 0:
            raise ValueError(f"r1 and r2 must be positive, got r1={r1}, r2={r2}")
        super().__init__(env, REWARDS)
        self.r1 = float(r1)
        self.r2 = float(r2)
        # Stage 0 (target G1) starts on G1 itself, so its distance to G2 is fixed by the start position,
        # not the policy. Order clauses are scored from first_stage on (default 1: skip stage 0).
        self.first_stage = int(first_stage)
        self.ROUND_M = ROUND_M
        self.H_BINS = H_BINS

        self.observation_space = spaces.Tuple((
            env.observation_space,
            spaces.Discrete(env.n_gates + 1),
            spaces.Box(-np.inf, np.inf, shape=(), dtype=np.float64)
        ))

        self.rho_avoidance = np.inf
        self.reset_order()
        self.observe()

    # ---- STL predicates -------------------------------------------------------------------------
    def gate_distance(self, xy, gate_index):
        gate = self.env.GATES[gate_index]
        return float(point_segment_distance(xy, gate["p1"], gate["p2"]))

    def rho_gate(self, xy, gate_index):
        return self.r1 - self.gate_distance(xy, gate_index)

    def rho_not_gate(self, xy, gate_index):
        return self.gate_distance(xy, gate_index) - self.r2

    def targets(self):
        # phi_order (Eq. 21) only has pairs i = 1..N_G-1: target G_k, avoid G_k+1.
        # Stages q >= N_G-1 (target G_NG, then the return to G1) carry no order clause,
        # and stages q < first_stage are skipped.
        if self.first_stage <= self.q < self.env.n_gates - 1:
            return self.q, self.q + 1
        return None, None

    def reset_stage(self):
        self.W = np.inf  
        self.H = -np.inf  

    def reset_order(self):
        self.reset_stage()
        self.rho_final = []
        self.order_history = []

    def order_robustness(self):
        values = self.rho_final + ([self.H] if np.isfinite(self.H) else [])
        return float(min(values)) if values else -np.inf

    # ---- gym API ---------
    def reset(self):
        self.reset_order()
        self.rho_avoidance = np.inf
        _, info = super().reset()
        return self.observe(), info

    def step(self, action, ignore_truncation=False):
        target, nxt = self.targets()
        q_before = self.q
        _, reward, done, truncated, info = super().step(action, ignore_truncation)
        xy = info["new_xy"]
        self.rho_avoidance = min(self.rho_avoidance, info["pylon_robustness"])

        if target is not None:
            rho_target = self.rho_gate(xy, target)
            rho_not_next = self.rho_not_gate(xy, nxt)
            H_prev = self.H
            self.W = min(self.W, rho_not_next)
            self.H = max(self.H, min(rho_target, self.W))
            r_order = float(self.REWARDS["stl_order"]) * (self.H - H_prev) if np.isfinite(H_prev) else 0.0
        else:
            # No order clause is active: W/H stay at their fresh values (H undefined -> class 0)
            rho_target = rho_not_next = np.nan
            r_order = 0.0

        info["reward_parts"]["stl_order"] = r_order
        reward += r_order
        self.reward_history[-1] = reward
        W, H = self.W, self.H
        if self.q != q_before:
            if target is not None:
                self.rho_final.append(self.H)
            self.reset_stage()
        rho_order = self.order_robustness()

        self.order_history.append({"W": W, "H": H, "rho_order": rho_order})
        info.update({"W": W, "H": H, "rho_target": rho_target, "rho_not_next": rho_not_next,
                     "rho_order": rho_order, "rho_final": list(self.rho_final),
                     "order_history": self.order_history, "rho_avoidance": self.rho_avoidance})
        return self.observe(), reward, done, truncated, info

    def get_info(self):
        return {**super().get_info(), "rho_avoidance": self.rho_avoidance}

    def observe(self):
        H = self.H
        if self.ROUND_M is not None:
            H = float(np.round(H / self.ROUND_M) * self.ROUND_M)
        if self.H_BINS is not None:
            H = 0 if not np.isfinite(H) else int(np.digitize(H, self.H_BINS, right=True))
        self.state = (int(self.env.state), int(self.q), H)
        self.state_history[-1] = self.state
        return self.state

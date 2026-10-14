"""Exact solution of the Dubins gate MDP by backward induction over its layered graph.

    V_n(i) = 0,    V_k(i) = min_j [ c_k(i, j) + V_{k+1}(j) ],    pi_k(i) = argmin_j (.)

This is value iteration on a DAG, so one backward pass is exact.

    python -m dubins_preplanner.dp --config dubins_preplanner/dubins_config.yaml
    python -m dubins_preplanner.dp --config dubins_preplanner/dubins_config.yaml --sweep-radius 3 12 0.5
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass, field
from pathlib import Path as FsPath

import numpy as np

from .config import load_config, resolve_repo_path
from .course import CrossingPose, load_course
from .dubins import DubinsPath
from .environment import DubinsGateMDP
from .path import Path


class NoFeasibleLapError(RuntimeError):
    """Raised when no lap with finite cost exists (e.g. every route hits a pylon or leaves bounds)."""


@dataclass
class Plan:
    """A lap: crossing poses for layers 0..n and the Dubins legs between them."""

    pose_indices: list[int]
    crossings: list[CrossingPose]
    legs: list[DubinsPath]
    leg_cost_s: np.ndarray
    leg_time_s: np.ndarray
    leg_min_pylon_dist_m: np.ndarray
    leg_violation_m2: np.ndarray
    leg_oob_exits: np.ndarray
    gate_names: list[str] = field(default_factory=list)

    @property
    def total_cost_s(self) -> float:
        return float(self.leg_cost_s.sum())

    @property
    def lap_time_s(self) -> float:
        return float(self.leg_time_s.sum())

    @property
    def total_length_m(self) -> float:
        return float(sum(leg.length for leg in self.legs))

    @property
    def total_violation_m2(self) -> float:
        return float(self.leg_violation_m2.sum())

    @property
    def total_oob_exits(self) -> int:
        return int(self.leg_oob_exits.sum())

    @property
    def min_pylon_dist_m(self) -> float:
        return float(self.leg_min_pylon_dist_m.min())

    @property
    def feasible(self) -> bool:
        return bool(np.all(np.isfinite(self.leg_cost_s)))

    def path(self) -> Path:
        return Path([seg for leg in self.legs for seg in leg.segments()])


def plan_from_sequence(env: DubinsGateMDP, pose_indices: list[int], cost: np.ndarray | None = None) -> Plan:
    """Build a Plan from the pose index crossed on each layer 0..n."""
    cost = env.cost_s if cost is None else cost
    ks = np.arange(env.n_gates)
    i, j = np.asarray(pose_indices[:-1]), np.asarray(pose_indices[1:])
    return Plan(
        pose_indices=[int(p) for p in pose_indices],
        crossings=[env.crossing(k, p) for k, p in enumerate(pose_indices)],
        legs=[env.leg_path(k, a, b) for k, (a, b) in enumerate(zip(i, j))],
        leg_cost_s=cost[ks, i, j],
        leg_time_s=env.time_s[ks, i, j],
        leg_min_pylon_dist_m=env.min_pylon_dist_m[ks, i, j],
        leg_violation_m2=env.pylon_violation_m2[ks, i, j],
        leg_oob_exits=env.oob_exits[ks, i, j],
        gate_names=[env.course.gates[k % env.n_gates].name for k in range(env.n_layers)],
    )


def backward_induction(cost: np.ndarray, terminal: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """Return values V (n+1, P) and greedy policy pi (n, P) for leg costs ``cost`` (n, P, P)."""
    n, P, _ = cost.shape
    V = np.empty((n + 1, P))
    pi = np.zeros((n, P), dtype=int)
    V[n] = terminal
    for k in range(n - 1, -1, -1):
        q = cost[k] + V[k + 1][None, :]
        pi[k] = np.argmin(q, axis=1)
        V[k] = q[np.arange(P), pi[k]]
    return V, pi


def _rollout(pi: np.ndarray, start: int) -> list[int]:
    seq = [start]
    for k in range(pi.shape[0]):
        seq.append(int(pi[k, seq[-1]]))
    return seq


def solve_dp(env: DubinsGateMDP, mode: str | None = None, start_pose_index: int | None = None,
             cost: np.ndarray | None = None) -> Plan:
    """Optimal lap. ``single``: free finish pose; ``periodic``: finish pose == start pose."""
    lap = env.cfg.get("lap", {})
    mode = mode or lap.get("mode", "single")
    if start_pose_index is None:
        start_pose_index = lap.get("start_pose_index")
    cost = env.cost_s if cost is None else cost
    P = env.P

    if mode == "single":
        V, pi = backward_induction(cost, np.zeros(P))
        start = int(np.argmin(V[0])) if start_pose_index is None else int(start_pose_index)
        if not np.isfinite(V[0, start]):
            raise NoFeasibleLapError(f"No feasible lap from G1 pose {start} (radius {env.radius:.2f} m)")
        return plan_from_sequence(env, _rollout(pi, start), cost)

    if mode == "periodic":
        starts = range(P) if start_pose_index is None else [int(start_pose_index)]
        best = None
        for i0 in starts:
            terminal = np.full(P, np.inf)
            terminal[i0] = 0.0
            V, pi = backward_induction(cost, terminal)
            if best is None or V[0, i0] < best[0]:
                best = (V[0, i0], i0, pi)
        if not np.isfinite(best[0]):
            raise NoFeasibleLapError(f"No feasible periodic lap (radius {env.radius:.2f} m)")
        return plan_from_sequence(env, _rollout(best[2], best[1]), cost)

    raise ValueError(f"lap mode must be 'single' or 'periodic', got {mode!r}")


def summary_table(plan: Plan, env: DubinsGateMDP) -> str:
    rows = [f"{'leg':<10}{'word':<6}{'length m':>10}{'time s':>9}{'cost s':>9}{'min pylon m':>13}{'OOB':>5}"]
    for k, leg in enumerate(plan.legs):
        name = f"{plan.gate_names[k]}->{plan.gate_names[k + 1]}"
        word = "".join(ch for ch, v in zip(leg.word, leg.params) if v * leg.radius >= 1e-9) or "-"
        rows.append(f"{name:<10}{word:<6}{leg.length:>10.2f}{plan.leg_time_s[k]:>9.2f}{plan.leg_cost_s[k]:>9.2f}"
                    f"{plan.leg_min_pylon_dist_m[k]:>13.2f}{plan.leg_oob_exits[k]:>5d}")
    rows.append(f"{'total':<16}{plan.total_length_m:>10.2f}{plan.lap_time_s:>9.2f}{plan.total_cost_s:>9.2f}"
                f"{plan.min_pylon_dist_m:>13.2f}{plan.total_oob_exits:>5d}")
    rows.append(f"turn radius {env.radius:.2f} m, airspeed {env.airspeed:.1f} m/s, "
                f"pylon violation {plan.total_violation_m2:.3f} m^2, start pose G1[{plan.pose_indices[0]}]")
    return "\n".join(rows)


def radius_sweep(cfg: dict, radii: np.ndarray) -> list[dict]:
    """Run DP at each turn radius; report the penalty-mode lap and whether an OOB-free lap exists."""
    course = load_course(cfg["course_path"])
    results = []
    for r in radii:
        env = DubinsGateMDP(course, {**cfg, "aircraft": {**cfg["aircraft"], "turn_radius_m": float(r)}})
        row = {"radius_m": float(r), "feasible": True}
        try:
            plan = solve_dp(env)
            row.update(lap_time_s=plan.lap_time_s, cost_s=plan.total_cost_s, oob_exits=plan.total_oob_exits,
                       min_pylon_dist_m=plan.min_pylon_dist_m, violation_m2=plan.total_violation_m2)
        except NoFeasibleLapError:
            row.update(feasible=False, lap_time_s=np.nan, cost_s=np.nan, oob_exits=-1,
                       min_pylon_dist_m=np.nan, violation_m2=np.nan)
        try:
            plan_f = solve_dp(env, cost=env.costs("forbid"))
            row.update(oob_free_feasible=True, oob_free_lap_time_s=plan_f.lap_time_s)
        except NoFeasibleLapError:
            row.update(oob_free_feasible=False, oob_free_lap_time_s=np.nan)
        results.append(row)
    return results


def bank_for_radius(radius: float, airspeed: float, g: float = 9.81) -> float:
    """Bank angle (deg) that flies ``radius`` at ``airspeed``."""
    return float(np.degrees(np.arctan(airspeed**2 / (g * radius))))


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description="Exact DP solution of the Dubins gate MDP")
    parser.add_argument("--config", default=None, help="config YAML (default: dubins_preplanner/dubins_config.yaml)")
    parser.add_argument("--course", default=None, help="override course_path from the config")
    parser.add_argument("--mode", choices=["single", "periodic"], default=None)
    parser.add_argument("--sweep-radius", nargs=3, type=float, metavar=("MIN", "MAX", "STEP"))
    args = parser.parse_args(argv)

    import matplotlib
    matplotlib.use("Agg")
    from . import export, plotting

    cfg = load_config(args.config)
    if args.course:
        cfg["course_path"] = args.course
    out_dir = resolve_repo_path(cfg["output_dir"])
    out_dir.mkdir(parents=True, exist_ok=True)

    if args.sweep_radius:
        lo, hi, step = args.sweep_radius
        radii = np.round(np.arange(lo, hi + 1e-9, step), 6)
        results = radius_sweep(cfg, radii)
        V, g = cfg["aircraft"]["airspeed_mps"], cfg["aircraft"].get("g", 9.81)
        print(f"Radius sweep on {cfg['course_path']} (V = {V} m/s)")
        print(f"{'R m':>6}{'bank deg':>10}{'feasible':>10}{'lap s':>8}{'cost s':>8}{'OOB':>5}{'min pylon m':>13}"
              f"{'OOB-free lap':>14}")
        for r in results:
            oob_free = f"{r['oob_free_lap_time_s']:.2f}" if r["oob_free_feasible"] else "none"
            print(f"{r['radius_m']:>6.2f}{bank_for_radius(r['radius_m'], V, g):>10.1f}{str(r['feasible']):>10}"
                  f"{r['lap_time_s']:>8.2f}{r['cost_s']:>8.2f}{r['oob_exits']:>5d}{r['min_pylon_dist_m']:>13.2f}"
                  f"{oob_free:>14}")
        clean = [r for r in results if r["feasible"] and r["oob_exits"] == 0]
        if clean:
            best = max(clean, key=lambda r: r["radius_m"])
            print(f"Largest radius with a valid, zero-OOB DP lap: {best['radius_m']:.2f} m "
                  f"(bank {bank_for_radius(best['radius_m'], V, g):.1f} deg at {V} m/s)")
        else:
            print("No radius in the sweep gives a valid lap with zero OOB exits.")
        stem = FsPath(cfg["course_path"]).stem
        plotting.plot_radius_sweep(results, title=f"Radius sweep: {stem}", save=out_dir / f"radius_sweep_{stem}.png")
        print(f"wrote {out_dir / f'radius_sweep_{stem}.png'}")
        return

    course = load_course(cfg["course_path"])
    env = DubinsGateMDP(course, cfg)
    plan = solve_dp(env, mode=args.mode)
    print(summary_table(plan, env))

    yaml_path = out_dir / "nominal_path.yaml"
    export.write_nominal_path(yaml_path, plan, env, solver="dp", lap_mode=args.mode or cfg["lap"]["mode"])
    png_path = out_dir / "dp_path.png"
    plotting.plot_plan(course, plan, title=f"DP lap: {plan.lap_time_s:.2f} s", field_radius=env.field_radius,
                       save=png_path)
    print(f"wrote {yaml_path}\nwrote {png_path}")


if __name__ == "__main__":
    main()

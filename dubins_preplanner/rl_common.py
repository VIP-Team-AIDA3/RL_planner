"""Tabular TD control on DubinsGateMDP, shared by q_learning.py and sarsa.py.

Logging mirrors race_env.py's ``q_learning_with_logging``: per-step rewards, per-episode returns and
periodic greedy-policy snapshots, so results line up with the existing notebooks.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass

import numpy as np

from .config import load_config, resolve_repo_path
from .course import load_course
from .dp import Plan, plan_from_sequence, solve_dp
from .environment import CRASH_REWARD, DubinsGateMDP


def masked_q_table(env: DubinsGateMDP) -> np.ndarray:
    """Q initialized to 0 on valid actions and -inf on invalid ones (never selected)."""
    Q = np.full((env.n_states, env.n_actions), -np.inf)
    for s in range(env.n_states):
        Q[s, env.valid_actions(s)] = 0.0
    return Q


def epsilon_at(episode: int, rl: dict) -> float:
    """Linear decay from epsilon_start to epsilon_end over epsilon_decay_episodes."""
    frac = min(1.0, episode / max(1, rl["epsilon_decay_episodes"]))
    return rl["epsilon_start"] + frac * (rl["epsilon_end"] - rl["epsilon_start"])


def epsilon_greedy(Q: np.ndarray, state: int, valid: np.ndarray, epsilon: float, rng: np.random.Generator) -> int:
    if rng.random() < epsilon:
        return int(valid[rng.integers(len(valid))])
    return int(np.argmax(Q[state]))


def _state_value(Q: np.ndarray, state: int, valid: np.ndarray) -> float:
    # A non-terminal state with no valid action is a dead end: value it as a crash.
    return float(Q[state].max()) if len(valid) else CRASH_REWARD


def train(env: DubinsGateMDP, rl: dict, algo: str, policy_snapshot_every: int = 1000, progress_callback=None):
    """Train with ``algo`` in {"q_learning", "sarsa"}.

    Returns (Q, step_rewards, trajectory_rewards, policy_history).
    """
    if algo not in ("q_learning", "sarsa"):
        raise ValueError(f"unknown algo {algo!r}")
    rng = np.random.default_rng(rl.get("seed", 0))
    alpha, gamma, n_episodes = rl["alpha"], rl["gamma"], rl["episodes"]
    Q = masked_q_table(env)
    valid = [env.valid_actions(s) for s in range(env.n_states)]

    step_rewards: list[float] = []
    trajectory_rewards: list[float] = []
    policy_history: list[dict] = []

    for ep in range(n_episodes):
        eps = epsilon_at(ep, rl)
        state = env.reset()
        if len(valid[state]) == 0:
            continue
        action = epsilon_greedy(Q, state, valid[state], eps, rng)
        episode_reward = 0.0
        while True:
            next_state, reward, done, info = env.step(action)
            if done:
                target = reward
                next_action = None
            elif len(valid[next_state]) == 0:
                target, done, next_action = reward + gamma * CRASH_REWARD, True, None
            else:
                next_action = epsilon_greedy(Q, next_state, valid[next_state], eps, rng)
                if algo == "q_learning":
                    # Off-policy: bootstrap off the greedy action, whatever the behavior policy does next.
                    target = reward + gamma * _state_value(Q, next_state, valid[next_state])
                else:
                    # On-policy: bootstrap off the epsilon-greedy action actually taken next.
                    target = reward + gamma * Q[next_state, next_action]
            Q[state, action] += alpha * (target - Q[state, action])

            step_rewards.append(reward)
            episode_reward += reward
            if done:
                break
            state, action = next_state, next_action

        trajectory_rewards.append(episode_reward)
        if (ep + 1) % policy_snapshot_every == 0 or ep == n_episodes - 1:
            policy_history.append({"episode": ep + 1, "policy": np.argmax(Q, axis=-1).copy()})
        if progress_callback is not None and ((ep + 1) % max(1, n_episodes // 100) == 0 or ep == n_episodes - 1):
            progress_callback(ep + 1, n_episodes)

    return Q, step_rewards, trajectory_rewards, policy_history


@dataclass
class Rollout:
    pose_indices: list[int]
    cost_s: float              # -return; includes the crash reward if the lap crashed
    lap_time_s: float
    min_pylon_dist_m: float
    crashed: bool


def rollout(env: DubinsGateMDP, policy, start: int, p_slip: float) -> Rollout:
    """Fly one lap with ``policy(layer, pose_index) -> action`` from G1 pose ``start``."""
    saved = env.p_slip
    env.p_slip = p_slip
    try:
        s = env.reset(start_pose_index=start)
        seq, ret, time_s, min_d, crashed = [start], 0.0, 0.0, np.inf, False
        done = False
        while not done:
            k, i = env.decode(s)
            s, r, done, info = env.step(policy(k, i))
            seq.append(info["realized"])
            ret += r
            time_s += info["length_m"] / env.airspeed
            min_d = min(min_d, info["min_pylon_dist_m"])
            crashed |= info["crashed"]
        return Rollout(seq, -ret, time_s, min_d, crashed)
    finally:
        env.p_slip = saved


def q_policy(env: DubinsGateMDP, Q: np.ndarray):
    return lambda k, i: int(np.argmax(Q[env.encode(k, i)]))


def evaluate(env: DubinsGateMDP, policy, start: int, p_slip: float, n_noisy: int = 100) -> dict:
    """One noise-free lap (as a Plan) plus ``n_noisy`` laps with slip."""
    clean = rollout(env, policy, start, 0.0)
    noisy = [rollout(env, policy, start, p_slip) for _ in range(n_noisy)]
    ok = [r for r in noisy if not r.crashed]
    return {
        "clean": clean,
        "clean_plan": None if clean.crashed else plan_from_sequence(env, clean.pose_indices),
        "noisy_mean_cost_s": float(np.mean([r.cost_s for r in noisy])),
        "noisy_mean_lap_time_s": float(np.mean([r.lap_time_s for r in ok])) if ok else np.nan,
        "noisy_crash_rate": float(np.mean([r.crashed for r in noisy])),
        "noisy_mean_min_pylon_m": float(np.mean([r.min_pylon_dist_m for r in ok])) if ok else np.nan,
        "noisy_worst_min_pylon_m": float(np.min([r.min_pylon_dist_m for r in ok])) if ok else np.nan,
    }


def report(name: str, ev: dict, dp_plan: Plan, p_slip: float) -> str:
    dp = dp_plan.total_cost_s
    clean = ev["clean"]
    lines = [f"{name}: greedy lap from DP start pose G1[{dp_plan.pose_indices[0]}]"]
    if clean.crashed:
        lines.append("  noise-free: CRASHED")
    else:
        lines.append(f"  noise-free: cost {clean.cost_s:.2f} s (lap {clean.lap_time_s:.2f} s), "
                     f"DP optimum {dp:.2f} s, gap {100 * (clean.cost_s - dp) / dp:+.2f}%, "
                     f"min pylon {clean.min_pylon_dist_m:.2f} m")
    lines.append(f"  p_slip={p_slip}: mean cost {ev['noisy_mean_cost_s']:.2f} s "
                 f"(gap {100 * (ev['noisy_mean_cost_s'] - dp) / dp:+.2f}% vs DP noise-free), "
                 f"mean lap {ev['noisy_mean_lap_time_s']:.2f} s, crash rate {100 * ev['noisy_crash_rate']:.0f}%, "
                 f"pylon clearance mean {ev['noisy_mean_min_pylon_m']:.2f} m / worst {ev['noisy_worst_min_pylon_m']:.2f} m")
    return "\n".join(lines)


def main(algo: str, argv: list[str] | None = None) -> dict:
    parser = argparse.ArgumentParser(description=f"Tabular {algo} on the Dubins gate MDP")
    parser.add_argument("--config", default=None)
    parser.add_argument("--course", default=None, help="override course_path from the config")
    parser.add_argument("--p-slip", type=float, default=None, help="override rl.p_slip")
    parser.add_argument("--episodes", type=int, default=None, help="override rl.episodes")
    args = parser.parse_args(argv)

    import matplotlib
    matplotlib.use("Agg")
    from . import export, plotting

    cfg = load_config(args.config)
    if args.course:
        cfg["course_path"] = args.course
    if args.p_slip is not None:
        cfg["rl"]["p_slip"] = args.p_slip
    if args.episodes is not None:
        cfg["rl"]["episodes"] = args.episodes
    rl = cfg["rl"]
    out_dir = resolve_repo_path(cfg["output_dir"])
    out_dir.mkdir(parents=True, exist_ok=True)

    course = load_course(cfg["course_path"])
    env = DubinsGateMDP(course, cfg, rng=np.random.default_rng(rl["seed"]))
    dp_plan = solve_dp(env, mode="single")
    start = dp_plan.pose_indices[0]

    Q, _, returns, _ = train(env, rl, algo)
    ev = evaluate(env, q_policy(env, Q), start, rl["p_slip"])
    print(f"{algo}: {rl['episodes']} episodes, p_slip={rl['p_slip']}, alpha={rl['alpha']}, seed={rl['seed']}")
    print(report(algo, ev, dp_plan, rl["p_slip"]))

    curve = out_dir / f"{algo}_learning_curve.png"
    plotting.plot_learning_curves({algo: returns}, dp_optimum=-dp_plan.total_cost_s,
                                  title=f"{algo} (p_slip={rl['p_slip']})", save=curve)
    print(f"wrote {curve}")
    if ev["clean_plan"] is not None:
        png = out_dir / f"{algo}_path.png"
        plotting.plot_plan(course, ev["clean_plan"], title=f"{algo} greedy lap: {ev['clean'].lap_time_s:.2f} s",
                           field_radius=env.field_radius, save=png)
        yml = out_dir / f"{algo}_nominal_path.yaml"
        export.write_nominal_path(yml, ev["clean_plan"], env, solver=algo, lap_mode="single")
        print(f"wrote {png}\nwrote {yml}")
    return {"Q": Q, "returns": returns, "eval": ev, "dp_plan": dp_plan}

"""Solve and train on DubinsGateEnv with the team's methods, and export the resulting Dubins lap.

    python dubins_preplanner/train.py --algo dp            # exact (value iteration)
    python dubins_preplanner/train.py --algo q_learning    # race_env.q_learning_with_logging
    python dubins_preplanner/train.py --algo sarsa
    python dubins_preplanner/train.py --algo all

Value iteration is the team's (comparisons.ipynb). It reads env.get_possible_next_states, which
includes slip noise, so with NOISE > 0 it is the noise-aware optimum. Q-learning is race_env's
q_learning_with_logging; SARSA mirrors it with the SARSA target, as in comparisons.ipynb.
Outputs (plots, nominal_path yaml) go to output_dir.
"""

import argparse
from datetime import datetime
from pathlib import Path

import matplotlib
import numpy as np
import yaml

from dubins_env import REPO_ROOT, DubinsGateEnv
from race_env import epsilon_greedy_action, q_learning_with_logging

CONFIG_PATH = Path(__file__).resolve().parent / "config.yaml"


def load_config(path=None, **overrides):
    with open(path or CONFIG_PATH) as f:
        cfg = yaml.safe_load(f)
    cfg.update({k: v for k, v in overrides.items() if v is not None})
    return cfg


def make_env(cfg, **kwargs):
    return DubinsGateEnv(cfg["course_path"], TURN_RADIUS_M=cfg["turn_radius_m"], N_CROSSING_POINTS=cfg["n_crossing_points"],
                         HEADING_OFFSETS_DEG=cfg["heading_offsets_deg"], SAMPLE_DS_M=cfg["sample_ds_m"],
                         PYLON_PENALTY=cfg["pylon_penalty_m_per_m2"], OOB_PENALTY=cfg["oob_penalty_m"],
                         NOISE=cfg["noise"], **kwargs)


# Value iteration function (from comparisons.ipynb)
def value_iteration(env, discount_factor, theta):
    V = np.zeros(env.observation_space.nvec, dtype=np.float64) # Initialize state-value function
    n_iter = 0

    # 1. Find V* by sweeping the Bellman Optimality equation until it converges
    while True:
        n_iter += 1
        delta = 0
        for s in np.ndindex(*env.observation_space.nvec):
            s = np.asarray(s)
            old_v = V[*s]
            Q = np.zeros(env.action_space.n, dtype=np.float64)
            for a in range(env.action_space.n):
                env.state = s # Set the environment state to the current state
                for next_state, prob, reward, done in env.get_possible_next_states(a):
                    Q[a] += prob * (reward + discount_factor * V[*next_state] * (1 - done))
            V[*s] = np.max(Q) # max instead of following a fixed policy
            delta = max(delta, np.abs(old_v - V[*s]))
        if delta < theta:
            break

    # 2. Extract the greedy policy from V* (with one final pass, no loop)
    policy = np.random.randint(env.action_space.n, size=env.observation_space.nvec, dtype=np.int32) # int8 in the notebook; wider so > 127 poses fit
    for s in np.ndindex(*env.observation_space.nvec):
        s = np.asarray(s)
        Q = np.zeros(env.action_space.n, dtype=np.float64)
        for a in range(env.action_space.n):
            env.state = s
            for next_state, prob, reward, done in env.get_possible_next_states(a):
                Q[a] += prob * (reward + discount_factor * V[*next_state] * (1 - done))
        policy[*s] = np.argmax(Q)

    return policy, V, n_iter


def sarsa_with_logging(env, discount_factor, alpha, epsilon, n_episodes, policy_snapshot_every):
    # Same logging as race_env.q_learning_with_logging; only the TD target differs
    Q = np.random.random([*env.observation_space.nvec, env.action_space.n])

    step_rewards = []       # reward at every step, across all episodes, in order
    trajectory_rewards = [] # total reward per episode (trajectory)
    policy_history = []     # greedy policy (argmax Q) snapshots over the course of training

    for i in range(n_episodes):
        state, _ = env.reset()
        action = epsilon_greedy_action(Q, state, epsilon)
        episode_reward = 0.0

        while True:
            next_state, reward, done, truncated, info = env.step(action)
            next_action = epsilon_greedy_action(Q, next_state, epsilon)

            # SARSA update -- bootstraps off Q(S', A'), the action the behavior policy actually selects next
            Q[*state, action] += alpha * (reward + discount_factor * Q[*next_state, next_action] * (1 - done) - Q[*state, action])

            step_rewards.append(reward)
            episode_reward += reward
            state, action = next_state, next_action
            if done or truncated:
                break

        trajectory_rewards.append(episode_reward)
        if (i + 1) % policy_snapshot_every == 0 or i == n_episodes - 1:
            policy_history.append({"episode": i + 1, "policy": np.argmax(Q, axis=-1).copy()})

    return Q, step_rewards, trajectory_rewards, policy_history


def greedy_rollout(env, action_fn):
    # One episode following action_fn(state); returns the lap's totals and its state history
    state, _ = env.reset()
    lap = {"reward": 0.0, "length_m": 0.0, "min_pylon_m": np.inf, "crashed": False}
    while True:
        state, reward, done, truncated, info = env.step(action_fn(state))
        lap["reward"] += reward
        lap["length_m"] += info["length_m"]
        lap["min_pylon_m"] = min(lap["min_pylon_m"], info["min_pylon_m"])
        lap["crashed"] |= info["crashed"]
        if done or truncated:
            break
    lap["cost"] = -lap["reward"]
    lap["state_history"] = [s.copy() for s in env.state_history]
    return lap


def evaluate(env, action_fn, noise, n_rollouts=100):
    # One noise-free lap plus n_rollouts laps with slip noise
    saved = env.NOISE
    env.NOISE = 0.0
    clean = greedy_rollout(env, action_fn)
    env.NOISE = noise
    noisy = [greedy_rollout(env, action_fn) for _ in range(n_rollouts)]
    env.NOISE = saved
    ok = [r for r in noisy if not r["crashed"]] or [{"min_pylon_m": np.nan}]
    return {"clean": clean, "noisy_cost": np.mean([r["cost"] for r in noisy]),
            "noisy_crash_rate": np.mean([r["crashed"] for r in noisy]),
            "noisy_min_pylon_m": np.mean([r["min_pylon_m"] for r in ok])}


def export_nominal_path(env, state_history, out_path, solver):
    # The lap as contiguous line/arc segments, with cumulative arc length s, for the next stage
    f = lambda x: round(float(x), 9)
    legs = env.lap_paths(state_history)
    crossings, segments, s = [], [], 0.0
    for k, state in enumerate(state_history):
        pose = env.poses[k % env.n_gates][int(state[1])]
        crossings.append({"layer": k, "gate": env.course.GATES[k % env.n_gates]["name"], "x": f(pose[0]), "y": f(pose[1]),
                          "heading_rad": f(pose[2]), "s_m": f(s)})
        if k < len(legs):
            for seg in legs[k].segments():
                d = {"kind": seg.kind, "start": [f(v) for v in seg.start], "end": [f(v) for v in seg.end],
                     "length_m": f(seg.length), "s_start_m": f(s)}
                if seg.kind == "arc":
                    d.update(direction=seg.direction, center=[f(v) for v in seg.center], radius=f(seg.radius))
                segments.append(d)
                s += seg.length
    meta = {"course_path": env.COURSE_PATH, "solver": solver, "turn_radius_m": f(env.TURN_RADIUS_M),
            "total_length_m": f(s), "created": datetime.now().isoformat(timespec="seconds")}
    with open(out_path, "w") as fh:
        yaml.safe_dump({"meta": meta}, fh, sort_keys=False, default_flow_style=False)
        yaml.safe_dump({"gate_crossings": crossings, "segments": segments}, fh, sort_keys=False,
                       default_flow_style=None, width=200)


def plot_learning_curve(returns, dp_reward, title, save, window=200):
    import matplotlib.pyplot as plt
    w = max(1, min(window, len(returns)))
    smooth = np.convolve(returns, np.ones(w) / w, mode="valid")
    fig, ax = plt.subplots(figsize=(9, 4.5))
    ax.plot(np.arange(w, len(returns) + 1), smooth, color="#2a78d6", lw=2, label=f"{w}-episode mean return")
    ax.axhline(dp_reward, color="#444444", lw=1.5, ls="--", label=f"DP optimum ({dp_reward:.1f})")
    ax.set(xlabel="Episode", ylabel="Episode return (= -lap cost, m)", title=title)
    ax.grid(True, color="gainsboro", linewidth=0.5)
    ax.legend()
    fig.tight_layout()
    fig.savefig(save, dpi=150)
    plt.close(fig)


def save_lap(env, lap, algo, out_dir, title):
    import matplotlib.pyplot as plt
    fig, ax = plt.subplots(figsize=(10, 8))
    env.render(ax=ax, title=title, state_history=lap["state_history"])
    fig.tight_layout()
    fig.savefig(out_dir / f"{algo}_path.png", dpi=150, bbox_inches="tight")
    plt.close(fig)
    export_nominal_path(env, lap["state_history"], out_dir / f"{algo}_nominal_path.yaml", algo)


def describe(lap):
    if lap["crashed"]:
        return "CRASHED"
    return f"length {lap['length_m']:.2f} m, cost {lap['cost']:.2f} m, min pylon {lap['min_pylon_m']:.2f} m"


def main(argv=None):
    parser = argparse.ArgumentParser(description="DP / Q-learning / SARSA on the Dubins gate environment")
    parser.add_argument("--algo", choices=["dp", "q_learning", "sarsa", "all"], default="dp")
    parser.add_argument("--config", default=None)
    parser.add_argument("--course", default=None, help="override course_path")
    parser.add_argument("--noise", type=float, default=None, help="override slip noise")
    parser.add_argument("--episodes", type=int, default=None, help="override RL episodes")
    args = parser.parse_args(argv)
    matplotlib.use("Agg")

    cfg = load_config(args.config, course_path=args.course, noise=args.noise, episodes=args.episodes)
    out_dir = REPO_ROOT / cfg["output_dir"]
    out_dir.mkdir(parents=True, exist_ok=True)
    np.random.seed(cfg["seed"])

    # DP always runs: noise-free for the reference lap and best start, plus noise-aware if NOISE > 0
    env = make_env(cfg)
    env.NOISE = 0.0
    policy, V, n_iter = value_iteration(env, cfg["gamma"], 1e-9)
    env.INIT_POSE = int(np.argmax(V[0]))
    dp_fn = lambda s: int(policy[s[0], s[1]])
    dp_lap = greedy_rollout(env, dp_fn)
    env.NOISE = cfg["noise"]
    print(f"{cfg['course_path']}, turn radius {env.TURN_RADIUS_M} m, {env.P} poses/gate, start G1 pose {env.INIT_POSE}")
    print(f"dp: {describe(dp_lap)}  [{' '.join(leg.word for leg in env.lap_paths(dp_lap['state_history']))}], "
          f"{n_iter} sweeps")
    if args.algo in ("dp", "all"):
        save_lap(env, dp_lap, "dp", out_dir, f"DP lap: {dp_lap['length_m']:.2f} m")
    if cfg["noise"] > 0:
        noisy_policy, _, _ = value_iteration(env, cfg["gamma"], 1e-9)
        ev = evaluate(env, lambda s: int(noisy_policy[s[0], s[1]]), cfg["noise"])
        print(f"dp (noise-aware, noise={cfg['noise']}): mean cost {ev['noisy_cost']:.2f} m, "
              f"crash rate {100 * ev['noisy_crash_rate']:.0f}%, mean min pylon {ev['noisy_min_pylon_m']:.2f} m")

    trainers = {"q_learning": q_learning_with_logging, "sarsa": sarsa_with_logging}
    for algo in ([args.algo] if args.algo in trainers else list(trainers) if args.algo == "all" else []):
        np.random.seed(cfg["seed"])
        Q, _, returns, _ = trainers[algo](env, cfg["gamma"], cfg["alpha"], cfg["epsilon"], cfg["episodes"], 1000)
        ev = evaluate(env, lambda s: int(np.argmax(Q[s[0], s[1]])), cfg["noise"])
        clean = ev["clean"]
        gap = 100 * (clean["cost"] - dp_lap["cost"]) / dp_lap["cost"]
        print(f"{algo} ({cfg['episodes']} episodes): {describe(clean)}, gap vs DP {gap:+.2f}%")
        print(f"  noise={cfg['noise']}: mean cost {ev['noisy_cost']:.2f} m, crash rate {100 * ev['noisy_crash_rate']:.0f}%, "
              f"mean min pylon {ev['noisy_min_pylon_m']:.2f} m")
        plot_learning_curve(returns, -dp_lap["cost"], f"{algo} (noise={cfg['noise']})", out_dir / f"{algo}_learning_curve.png")
        if not clean["crashed"]:
            save_lap(env, clean, algo, out_dir, f"{algo} lap: {clean['length_m']:.2f} m")
    print(f"outputs in {out_dir}")


if __name__ == "__main__":
    main()

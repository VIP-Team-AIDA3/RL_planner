"""Tabular Q-learning on the Dubins gate MDP.

    python -m dubins_preplanner.q_learning --config dubins_preplanner/dubins_config.yaml [--p-slip 0.0]
"""

from __future__ import annotations

from .rl_common import main as _main
from .rl_common import train


def train_q_learning(env, rl: dict, **kwargs):
    """Returns (Q, step_rewards, trajectory_rewards, policy_history)."""
    return train(env, rl, "q_learning", **kwargs)


def main(argv: list[str] | None = None) -> dict:
    return _main("q_learning", argv)


if __name__ == "__main__":
    main()

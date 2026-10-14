"""Tabular SARSA on the Dubins gate MDP.

    python -m dubins_preplanner.sarsa --config dubins_preplanner/dubins_config.yaml [--p-slip 0.0]
"""

from __future__ import annotations

from .rl_common import main as _main
from .rl_common import train


def train_sarsa(env, rl: dict, **kwargs):
    """Returns (Q, step_rewards, trajectory_rewards, policy_history)."""
    return train(env, rl, "sarsa", **kwargs)


def main(argv: list[str] | None = None) -> dict:
    return _main("sarsa", argv)


if __name__ == "__main__":
    main()

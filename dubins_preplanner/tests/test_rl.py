import numpy as np
import pytest

from dubins_preplanner.config import load_config
from dubins_preplanner.course import load_course
from dubins_preplanner.dp import solve_dp
from dubins_preplanner.environment import DubinsGateMDP
from dubins_preplanner.q_learning import train_q_learning
from dubins_preplanner.rl_common import evaluate, q_policy
from dubins_preplanner.sarsa import train_sarsa

COURSE2 = "ros2_ws/src/pylon_2026_world/purt_course2.yaml"


@pytest.fixture(scope="module")
def env_clean():
    env = DubinsGateMDP(load_course(COURSE2), load_config(overrides={"rl": {"p_slip": 0.0}}))
    return env, solve_dp(env)


def test_q_learning_matches_dp_without_noise(env_clean):
    env, dp = env_clean
    # With alpha = 0.1 the default 20k episodes leave most (state, action) pairs under-trained;
    # 150k converges on every seed tried (0-9).
    rl = {**env.cfg["rl"], "episodes": 150_000, "epsilon_decay_episodes": 112_500, "seed": 0}
    Q, _, returns, history = train_q_learning(env, rl)
    ev = evaluate(env, q_policy(env, Q), dp.pose_indices[0], p_slip=0.0, n_noisy=1)
    assert not ev["clean"].crashed
    assert ev["clean"].cost <= 1.02 * dp.total_cost
    assert len(returns) == rl["episodes"] and history[-1]["episode"] == rl["episodes"]


def test_sarsa_lap_is_valid(env_clean):
    env, dp = env_clean
    Q, _, _, _ = train_sarsa(env, {**env.cfg["rl"], "episodes": 20_000})
    ev = evaluate(env, q_policy(env, Q), dp.pose_indices[0], p_slip=0.0, n_noisy=1)
    assert not ev["clean"].crashed and np.isfinite(ev["clean"].cost)
    assert ev["clean"].cost >= dp.total_cost - 1e-9


def test_masked_actions_never_selected(env_clean):
    env, _ = env_clean
    assert (~env.valid).any(), "course 2 should have some colliding legs to mask"
    for algo in (train_q_learning, train_sarsa):
        rl = {**env.cfg["rl"], "episodes": 3000, "epsilon_decay_episodes": 2000}
        Q, _, returns, _ = algo(env, rl)
        assert min(returns) > -1000, "an invalid (crash) action was selected"
        # Masked entries stay -inf; greedy actions are always valid.
        for s in range(env.n_gates * env.P):
            invalid = np.setdiff1d(np.arange(env.n_actions), env.valid_actions(s))
            assert np.all(np.isneginf(Q[s, invalid]))
            if len(env.valid_actions(s)):
                assert int(np.argmax(Q[s])) in env.valid_actions(s)

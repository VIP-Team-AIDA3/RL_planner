"""Config loading for the Dubins pre-planner.

Every tunable lives in ``dubins_config.yaml``; this module reads it, applies overrides, and resolves
the derived values (turn radius) so the rest of the code never re-derives them.
"""

from __future__ import annotations

import copy
from pathlib import Path

import numpy as np
import yaml

PACKAGE_DIR = Path(__file__).resolve().parent
REPO_ROOT = PACKAGE_DIR.parent
DEFAULT_CONFIG_PATH = PACKAGE_DIR / "dubins_config.yaml"


def deep_update(base: dict, overrides: dict) -> dict:
    """Recursively merge ``overrides`` into a copy of ``base``."""
    out = copy.deepcopy(base)
    for key, value in (overrides or {}).items():
        if isinstance(value, dict) and isinstance(out.get(key), dict):
            out[key] = deep_update(out[key], value)
        else:
            out[key] = copy.deepcopy(value)
    return out


def load_config(path: str | Path | None = None, overrides: dict | None = None) -> dict:
    """Load the YAML config (default: ``preplanner/dubins_config.yaml``) and apply ``overrides``."""
    with open(path or DEFAULT_CONFIG_PATH) as f:
        cfg = yaml.safe_load(f)
    return deep_update(cfg, overrides or {})


def resolve_repo_path(path: str | Path) -> Path:
    """Resolve a repo-relative path (as written in the config) regardless of the working directory."""
    p = Path(path)
    if p.is_absolute() or p.exists():
        return p
    return REPO_ROOT / p


def turn_radius_from_cfg(cfg: dict) -> float:
    """Planning turn radius: ``turn_radius_m`` if set, else V^2 / (g tan(plan_bank))."""
    ac = cfg["aircraft"]
    if ac.get("turn_radius_m") is not None:
        return float(ac["turn_radius_m"])
    from .dubins import turn_radius

    return turn_radius(ac["airspeed_mps"], np.radians(ac["plan_bank_deg"]), ac.get("g", 9.81))

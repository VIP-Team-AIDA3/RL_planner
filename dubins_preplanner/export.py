"""``nominal_path.yaml``: the hand-off format from the pre-planner to the dynamic planner.

The file holds metadata, the gate crossings in lap order (with their arc length ``s_m`` along the
lap) and the contiguous line/arc segments. ``bank_ff_deg`` is each segment's feed-forward bank
(Stastny & Siegwart 2018, eq. 21); the dynamic planner's actions will be offsets from it.
"""

from __future__ import annotations

from datetime import datetime
from pathlib import Path as FsPath

import numpy as np
import yaml

from .path import Path, Segment, wrap_2pi


def _f(x) -> float:
    return round(float(x), 9)


def _pose(p) -> list[float]:
    return [_f(p[0]), _f(p[1]), _f(wrap_2pi(p[2]))]


def segment_to_dict(seg: Segment, s_start: float, airspeed: float, g: float) -> dict:
    d = {"kind": seg.kind}
    if seg.kind == "arc":
        d["direction"] = int(seg.direction)
    d["start"] = _pose(seg.start)
    d["end"] = _pose(seg.end)
    if seg.kind == "arc":
        d["center"] = [_f(seg.center[0]), _f(seg.center[1])]
        d["radius"] = _f(seg.radius)
    d["length_m"] = _f(seg.length)
    d["s_start_m"] = _f(s_start)
    bank = np.degrees(np.arctan(airspeed**2 / (g * seg.radius))) * seg.direction if seg.kind == "arc" else 0.0
    d["bank_ff_deg"] = _f(bank)
    return d


def segment_from_dict(d: dict) -> Segment:
    if d["kind"] == "arc":
        return Segment("arc", np.array(d["start"], float), np.array(d["end"], float), float(d["length_m"]),
                       np.array(d["center"], float), float(d["radius"]), int(d["direction"]))
    return Segment("line", np.array(d["start"], float), np.array(d["end"], float), float(d["length_m"]),
                   None, None, 0)


def write_nominal_path(out_path, plan, env, solver: str = "dp", lap_mode: str = "single") -> dict:
    """Write a Plan (see ``dp.Plan``) solved on ``env`` to ``out_path``; returns the written dict."""
    cfg = env.cfg
    g = cfg["aircraft"].get("g", 9.81)
    path = plan.path()

    crossings, s = [], 0.0
    for k, cp in enumerate(plan.crossings):
        crossings.append({
            "layer": k, "gate": plan.gate_names[k],
            "x": _f(cp.pose[0]), "y": _f(cp.pose[1]),
            "heading_rad": _f(cp.pose[2]), "heading_deg": _f(np.degrees(cp.pose[2])),
            "u": _f(cp.u), "s_m": _f(s),
        })
        if k < len(plan.legs):
            s += plan.legs[k].length

    data = {
        "meta": {
            "course_path": str(cfg["course_path"]),
            "solver": solver,
            "airspeed_mps": _f(env.airspeed),
            "turn_radius_m": _f(env.radius),
            "plan_bank_deg": _f(np.degrees(np.arctan(env.airspeed**2 / (g * env.radius)))),
            "lap_mode": lap_mode,
            "total_length_m": _f(path.length),
            "lap_time_s": _f(plan.lap_time_s),
            "created": datetime.now().isoformat(timespec="seconds"),
        },
        "gate_crossings": crossings,
        "segments": [segment_to_dict(seg, s0, env.airspeed, g) for seg, s0 in zip(path.segments, path.s_start)],
    }
    out_path = FsPath(out_path)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w") as f:
        # meta reads best as a block; crossings as one flow mapping per line; segments as blocks with flow lists.
        yaml.safe_dump({"meta": data["meta"]}, f, sort_keys=False, default_flow_style=False)
        yaml.safe_dump({k: data[k] for k in ("gate_crossings", "segments")}, f, sort_keys=False,
                       default_flow_style=None, width=200)
    return data


def load_nominal_path(path) -> tuple[dict, list[dict], Path]:
    """Read ``nominal_path.yaml`` -> (meta, gate crossings, Path)."""
    with open(path) as f:
        data = yaml.safe_load(f)
    return data["meta"], data["gate_crossings"], Path([segment_from_dict(d) for d in data["segments"]])

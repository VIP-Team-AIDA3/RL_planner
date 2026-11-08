"""Aggregate bhnr_sweep.py results over seeds and test every STL condition against two controls.

    python analyze_sweep.py results.jsonl [summary.csv] [--min-seeds N]

Conditions:
    plain          no STL reward and no H_t label (state = position, q)
    label-only     H_t shown, zero STL reward, same state space as the STL runs (first_stage = 1)
    baseline(fs0)  the notebook's original w = 0 run (label shown, stage 0 included)
    STL            STL reward runs

Comparisons (Welch's t on per-seed values; |t| < 2 is roughly "within seed noise"):
    vs plain          everything the STL setup changes at once (reward + label + state space)
    vs label-only     the reward alone: same window config if a control exists, else the same stride

Metrics:
    lap_steps / noisefree_lap_steps   final path length (lower = better); noisefree = greedy rollout with NOISE = 0
    lap_rate                          fraction of the 200 final greedy rollouts that finish a lap
    auc_1500                          mean greedy lap rate at checkpoints 250 ... 1500 (higher = learns faster)
    lap@500/1000/1500                 greedy lap rate at those training episodes
"""
import json
import sys

import numpy as np
import pandas as pd

KEYS = ["cond", "mode", "window_len", "overlap", "w"]
METRICS = ["lap_rate", "lap_steps", "lap_steps_min", "noisefree_lap_steps", "rho_order", "rho_avoidance", "ep_to_90", "auc_1500",
           "lap@500", "lap@1000", "lap@1500", "train_s", "train_steps", "states", "tr_stl", "tr_gate", "tr_pylon",
           "tr_neutral", "tr_total", "tr_lap_rate", "greedy_stl_per_lap", "hover_gain_per_step"]


def _curve_features(curve):
    c = {int(e): r for e, r in curve}
    early = [c[e] for e in (250, 500, 750, 1000, 1250, 1500) if e in c]
    return pd.Series({"auc_1500": np.mean(early) if early else np.nan,
                      "lap@500": c.get(500), "lap@1000": c.get(1000), "lap@1500": c.get(1500)})


def load(path):
    with open(path) as f:
        df = pd.DataFrame([json.loads(line) for line in f if line.strip()])
    # jobs only record first_stage / label when they override the defaults; fill the defaults back in
    for col in ("first_stage", "label"):
        if col not in df:
            df[col] = np.nan
    df["first_stage"] = df["first_stage"].fillna(pd.Series(np.where(df["w"] == 0, 0, 1), index=df.index)).astype(int)
    df["label"] = df["label"].fillna(True).astype(bool)

    def name(r):
        if not r.label:
            return "plain"
        return "STL" if r.w != 0 else ("label-only" if r.first_stage == 1 else "baseline(fs0)")
    df["cond"] = df.apply(name, axis=1)
    return pd.concat([df, df["curve"].apply(_curve_features)], axis=1)


def summarize(df):
    g = df.groupby(KEYS)
    out = g[METRICS].mean()
    out["n_seeds"] = g.size()
    for m in ("lap_rate", "lap_steps", "noisefree_lap_steps", "auc_1500", "train_s"):
        out[m + "_sd"] = g[m].std()
    out["stride"] = out.index.get_level_values("window_len") - out.index.get_level_values("overlap")
    comp = out[["tr_stl", "tr_gate", "tr_pylon", "tr_neutral"]].abs()
    out["stl_share"] = comp["tr_stl"] / comp.sum(axis=1)   # |STL| relative to everything it competes with
    return out.reset_index()


def welch_t(a, b):
    a, b = np.asarray(a, float), np.asarray(b, float)
    if len(a) < 2 or len(b) < 2:
        return np.nan
    se = np.sqrt(a.var(ddof=1) / len(a) + b.var(ddof=1) / len(b))
    return (a.mean() - b.mean()) / se if se > 0 else np.nan


def _select(df, cond, L=None, ov=None, stride=None):
    m = df["cond"] == cond
    if L is not None:
        m &= (df["window_len"] == L) & (df["overlap"] == ov)
    if stride is not None:
        m &= (df["window_len"] - df["overlap"]) == stride
    return df[m]


def control_for(df, row):
    """label-only control for an STL condition: same (window_len, overlap) if available, else same stride."""
    same = _select(df, "label-only", row["window_len"], row["overlap"])
    return same if len(same) >= 2 else _select(df, "label-only", stride=row["window_len"] - row["overlap"])


def compare(df, metric, min_seeds=5):
    """One row per STL condition: mean, difference and t vs plain, and vs its label-only control."""
    plain = _select(df, "plain")[metric].dropna()
    rows = []
    for key, grp in df[df["cond"] == "STL"].groupby(KEYS):
        vals = grp[metric].dropna()
        if len(vals) < min_seeds:
            continue
        row = dict(zip(KEYS, key))
        ctrl = control_for(df, row)[metric].dropna()
        rows.append({**{k: row[k] for k in ("mode", "window_len", "overlap", "w")}, "n": len(vals), "mean": vals.mean(),
                     "d_vs_plain": vals.mean() - plain.mean() if len(plain) else np.nan, "t_plain": welch_t(vals, plain),
                     "d_vs_label": vals.mean() - ctrl.mean() if len(ctrl) else np.nan, "t_label": welch_t(vals, ctrl)})
    cols = ["mode", "window_len", "overlap", "w", "n", "mean", "d_vs_plain", "t_plain", "d_vs_label", "t_label"]
    out = pd.DataFrame(rows, columns=cols)
    return out.sort_values(["mode", "window_len", "overlap", "w"])


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    min_seeds = int(sys.argv[sys.argv.index("--min-seeds") + 1]) if "--min-seeds" in sys.argv else 5
    args = [a for a in args if a != str(min_seeds)]
    df = load(args[0])
    s = summarize(df)
    if len(args) > 1:
        s.to_csv(args[1], index=False)
    pd.set_option("display.width", 260, "display.max_columns", 40)
    cols = ["cond", "mode", "window_len", "overlap", "stride", "w", "n_seeds", "lap_rate", "lap_steps", "lap_steps_sd",
            "noisefree_lap_steps", "auc_1500", "lap@1000", "ep_to_90", "train_s", "tr_stl", "stl_share"]
    print(f"=== per condition (means over seeds; conditions with >= {min_seeds} seeds) ===")
    print(s[s.n_seeds >= min_seeds].sort_values(["cond", "mode", "window_len", "overlap", "w"])[cols].round(2).to_string(index=False))
    for metric, note in [("lap_steps", "lower = better"), ("noisefree_lap_steps", "lower = better"),
                         ("lap_rate", "higher = better"), ("auc_1500", "higher = learns faster")]:
        out = compare(df, metric, min_seeds)
        if len(out):
            print(f"\n=== {metric} ({note}); t > 2 in magnitude is roughly significant ===")
            print(out.round(3).to_string(index=False))

"""Plots for the Dubins pre-planner, in the style of race_env.py's ``render``: gates as thick
translucent dark-orange lines, pylons as firebrick disks with a dashed safety-radius ring, gainsboro
grid, equal aspect, bounds rectangle.
"""

from __future__ import annotations

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.collections import LineCollection
from matplotlib.lines import Line2D
from matplotlib.patches import Circle, Rectangle
from matplotlib.ticker import MaxNLocator

from .path import Path

PATH_CMAP = "plasma"
CURVE_COLORS = {"q_learning": "#2a78d6", "sarsa": "#1baf7a", "dp": "#444444"}


def _finish(fig, ax, title, save, legend=True):
    if title:
        ax.set_title(title, fontsize=13, fontweight="bold", pad=12)
    if legend:
        ax.legend(loc="upper left", bbox_to_anchor=(1.02, 1), borderaxespad=0, fontsize=9)
    if fig is not None:
        fig.tight_layout()
        if save:
            fig.savefig(save, dpi=150, bbox_inches="tight")
            plt.close(fig)


def plot_course(course, ax, field_radius: float | None = None) -> None:
    """Bounds, gates, pylons and safety rings."""
    x_lo, x_hi, y_lo, y_hi = course.bounds
    ax.add_patch(Rectangle((x_lo, y_lo), x_hi - x_lo, y_hi - y_lo, fill=False, edgecolor="dimgray",
                           linestyle="-", linewidth=1.0, zorder=0, label="Bounds"))
    pad = 0.06 * max(x_hi - x_lo, y_hi - y_lo)
    ax.set_xlim(x_lo - pad, x_hi + pad)
    ax.set_ylim(y_lo - pad, y_hi + pad)
    ax.grid(True, color="gainsboro", linestyle="-", linewidth=0.5, alpha=0.6)

    for i, gate in enumerate(course.gates):
        ax.plot(*np.array([gate.p1, gate.p2]).T, color="darkorange", alpha=0.3, linewidth=6,
                solid_capstyle="round", zorder=0, label="Gate" if i == 0 else None)
        mid = 0.5 * (gate.p1 + gate.p2)
        ax.annotate(gate.name, mid, textcoords="offset points", xytext=(6, 6), fontsize=9, color="saddlebrown")

    field_radius = course.gate_margin_m if field_radius is None else field_radius
    for i, pylon in enumerate(course.pylons):
        ax.add_patch(Circle(pylon["xy"], field_radius, facecolor="firebrick", alpha=0.10, edgecolor="firebrick",
                            linestyle="--", linewidth=1.0, zorder=1, label="Safety radius" if i == 0 else None))
        ax.add_patch(Circle(pylon["xy"], pylon["r"], color="firebrick", alpha=0.5, zorder=1))
        ax.scatter(*pylon["xy"], color="firebrick", marker="x", s=50, linewidths=2, zorder=2,
                   label="Pylon" if i == 0 else None)

    ax.set_xlabel("X (m)")
    ax.set_ylabel("Y (m)")
    ax.set_aspect("equal")


def _draw_path(ax, path: Path, ds: float = 0.2, label: str = "Planned path") -> None:
    """Path colored by progress (plasma); arcs drawn slightly thicker than lines."""
    for seg, s0 in zip(path.segments, path.s_start):
        n = max(2, int(np.ceil(seg.length / ds)) + 1)
        pts = seg.poses_at(np.linspace(0, seg.length, n))[:, :2]
        pieces = np.stack([pts[:-1], pts[1:]], axis=1)
        progress = (s0 + np.linspace(0, seg.length, n)[:-1]) / max(path.length, 1e-9)
        lc = LineCollection(pieces, cmap=PATH_CMAP, linewidths=3.2 if seg.kind == "arc" else 2.0, capstyle="round",
                            alpha=0.95, zorder=3)
        lc.set_array(progress)
        lc.set_clim(0, 1)
        ax.add_collection(lc)
    ax.add_line(Line2D([], [], color=plt.get_cmap(PATH_CMAP)(0.5), lw=2.5, label=label))


def plot_plan(course, plan_or_path, ax=None, title: str | None = None, field_radius: float | None = None,
              crossings=None, save=None):
    """Plot a Plan (from dp.py) or a Path over the course. Crossing poses are drawn as arrows."""
    fig = None
    if ax is None:
        x_lo, x_hi, y_lo, y_hi = course.bounds
        fig, ax = plt.subplots(figsize=(10, max(4.0, 8.5 * (y_hi - y_lo) / (x_hi - x_lo))))
    plot_course(course, ax, field_radius)

    if isinstance(plan_or_path, Path):
        path = plan_or_path
    else:
        path = plan_or_path.path()
        crossings = crossings if crossings is not None else [cp.pose for cp in plan_or_path.crossings]
    _draw_path(ax, path)

    if crossings is not None:
        poses = np.array([np.asarray(c)[:3] for c in crossings])
        arrow = 0.04 * max(course.bounds[1] - course.bounds[0], course.bounds[3] - course.bounds[2])
        ax.quiver(poses[:, 0], poses[:, 1], np.cos(poses[:, 2]), np.sin(poses[:, 2]), color="dodgerblue",
                  angles="xy", scale_units="xy", scale=1 / arrow, width=0.004, zorder=4, label="Crossing pose")
        ax.scatter(*poses[0, :2], color="forestgreen", marker="s", s=110, zorder=5, label="Start (G1)")
        ax.scatter(*poses[-1, :2], color="gold", marker="*", s=230, edgecolor="black", zorder=5, label="Finish (G1)")

    _finish(fig, ax, title or "Dubins gate plan", save)
    return ax


def plot_learning_curves(curves: dict[str, np.ndarray], dp_optimum: float | None = None, window: int = 200,
                         ax=None, title: str | None = None, save=None):
    """Episode return vs. episode (moving average) for each algorithm, with the DP optimum."""
    fig = None
    if ax is None:
        fig, ax = plt.subplots(figsize=(9, 4.5))
    for i, (name, returns) in enumerate(curves.items()):
        r = np.asarray(returns, dtype=float)
        w = max(1, min(window, len(r)))
        smooth = np.convolve(r, np.ones(w) / w, mode="valid")
        color = CURVE_COLORS.get(name, f"C{i}")
        ax.plot(np.arange(w, len(r) + 1), smooth, color=color, lw=2, label=f"{name} ({w}-episode mean)")
    if dp_optimum is not None:
        ax.axhline(dp_optimum, color=CURVE_COLORS["dp"], lw=1.5, ls="--", label=f"DP optimum ({dp_optimum:.2f})")
    ax.set_xlabel("Episode")
    ax.set_ylabel("Episode return (= -lap cost, s)")
    ax.grid(True, color="gainsboro", linewidth=0.5)
    for side in ("top", "right"):
        ax.spines[side].set_visible(False)
    _finish(fig, ax, title or "Learning curves", save)
    return ax


def plot_radius_sweep(results: list[dict], title: str | None = None, save=None):
    """Lap time (top) and OOB exits / feasibility (bottom) vs. turn radius, on a shared x-axis."""
    r = np.array([row["radius_m"] for row in results])
    lap = np.array([row["lap_time_s"] for row in results], dtype=float)
    oob = np.array([row["oob_exits"] for row in results], dtype=float)
    free = np.array([row["oob_free_lap_time_s"] for row in results], dtype=float)
    feas = np.array([row["feasible"] for row in results])

    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(9, 6), sharex=True, gridspec_kw={"height_ratios": [2, 1]})
    ax1.plot(r, lap, "o-", color="#2a78d6", lw=2, ms=6, label="DP lap (OOB as penalty)")
    ax1.plot(r, free, "s--", color="#1baf7a", lw=2, ms=6, label="DP lap (OOB forbidden)")
    ax1.set_ylabel("Lap time (s)")
    ax1.legend(fontsize=9, loc="upper left")
    ax2.bar(r, np.where(feas, oob, 0), width=0.6 * (r[1] - r[0] if len(r) > 1 else 1), color="#444444",
            label="OOB exits on DP lap")
    for x in r[~feas]:
        ax2.annotate("infeasible", (x, 0), ha="center", va="bottom", fontsize=8, color="firebrick", rotation=90)
    ax2.set_ylabel("OOB exits")
    ax2.yaxis.set_major_locator(MaxNLocator(integer=True))
    ax2.set_xlabel("Turn radius (m)")
    for ax in (ax1, ax2):
        ax.grid(True, color="gainsboro", linewidth=0.5)
        for side in ("top", "right"):
            ax.spines[side].set_visible(False)
    ax1.set_title(title or "Radius sweep", fontsize=13, fontweight="bold", pad=12)
    fig.tight_layout()
    if save:
        fig.savefig(save, dpi=150, bbox_inches="tight")
        plt.close(fig)
    return fig


def plot_flyability(course, path: Path, flown_xy: np.ndarray, title: str | None = None,
                    field_radius: float | None = None, save=None):
    """Overlay the simulated flight on the planned path."""
    x_lo, x_hi, y_lo, y_hi = course.bounds
    fig, ax = plt.subplots(figsize=(10, max(4.0, 8.5 * (y_hi - y_lo) / (x_hi - x_lo))))
    plot_course(course, ax, field_radius)
    _draw_path(ax, path)
    ax.plot(flown_xy[:, 0], flown_xy[:, 1], color="black", lw=1.0, ls="--", zorder=4, label="Flown (L1 tracker)")
    _finish(fig, ax, title or "Flyability check", save)
    return ax

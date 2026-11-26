"use client";

import { flushSync } from "react-dom";

/** The switch in progress: a second press during it starts its own, and only the latest one cleans up after itself. */
let current: ViewTransition | null = null;
/** The frame that lets transitions back in after an instant switch; a second press restarts the wait. */
let settle = 0;

/**
 * Light ↔ dark, ported from the maple dashboard. Every colour changes in the same
 * frame (globals.css `theme-switching`), and where the browser has view
 * transitions the change is one motion from the toggle: the light page is a
 * circle that spreads out of the button going light and is gathered back into it
 * going dark, under a soft light from the button (`theme-vt`, `theme-glow`).
 * With reduced motion, or without view transitions, it is instant.
 * `apply` sets next-themes' state; the <html> class is set here as well so the
 * browser's picture of the new page is surely in the new colours.
 */
export function switchTheme(button: HTMLElement, next: "light" | "dark", apply: () => void) {
  const root = document.documentElement;
  root.classList.add("theme-switching");
  if (typeof document.startViewTransition !== "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    apply();
    // Two frames: the new colours are drawn with nothing fading, then hover and press ease again.
    cancelAnimationFrame(settle);
    settle = requestAnimationFrame(() => {
      settle = requestAnimationFrame(() => {
        if (!current) root.classList.remove("theme-switching");
      });
    });
    return;
  }

  const box = button.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  const far = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const toLight = next === "light";
  root.style.setProperty("--theme-x", `${x}px`);
  root.style.setProperty("--theme-y", `${y}px`);
  root.style.setProperty("--theme-r", toLight ? "0px" : `${far}px`);
  root.classList.remove("theme-vt-up", "theme-vt-down");
  root.classList.add("theme-vt", toLight ? "theme-vt-up" : "theme-vt-down");

  let glow: HTMLDivElement | undefined;
  const transition = document.startViewTransition(() => {
    flushSync(apply);
    root.classList.remove("light", "dark");
    root.classList.add(next);
    root.style.colorScheme = next;
    glow = document.createElement("div");
    glow.className = "theme-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.append(glow);
  });
  current = transition;
  transition.ready
    .then(() => {
      // The radius holds its end value (`forwards` and the inline value): let go of,
      // it fell back to the start for a frame and the old theme flashed at the end.
      const end = toLight ? `${far}px` : "0px";
      root.animate(
        { "--theme-r": [toLight ? "0px" : `${far}px`, end] },
        { duration: 600, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards", pseudoElement: "::view-transition-image-pair(root)" },
      );
      root.style.setProperty("--theme-r", end);
      glow?.animate(
        [{ opacity: 0, easing: "ease-in-out" }, { opacity: 1, offset: 0.4, easing: "ease-in-out" }, { opacity: 0 }],
        { duration: 600 },
      );
    })
    .catch(() => {});
  transition.finished
    .finally(() => {
      glow?.remove();
      if (current !== transition) return;
      current = null;
      root.classList.remove("theme-switching", "theme-vt", "theme-vt-up", "theme-vt-down");
      for (const name of ["--theme-x", "--theme-y", "--theme-r"]) root.style.removeProperty(name);
    })
    .catch(() => {});
}

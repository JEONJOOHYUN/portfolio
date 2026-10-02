"use client";

import { useEffect, useRef } from "react";

/** How much of the remaining distance the ring covers each frame (0–1). */
const FOLLOW = 0.2;

/**
 * A ring that trails the (still visible) system cursor, swells over links and
 * buttons, and turns into a labelled bubble over `[data-cursor="<label>"]`.
 *
 * Mouse/trackpad only (`pointer: fine`), off for `prefers-reduced-motion`.
 * Position never goes through React state: pointer events only record the
 * target, and a requestAnimationFrame loop eases the ring towards it by
 * writing `transform` straight to the DOM — no re-render, no layout. The loop
 * stops once the ring has caught up, so an idle page costs nothing.
 */
export function CursorFollower() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!root || !ring || !label) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let frame = 0;
    let shown = false;

    const place = () => {
      root.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * FOLLOW;
      pos.y += (target.y - pos.y) * FOLLOW;
      place();
      frame =
        Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.1
          ? requestAnimationFrame(tick)
          : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      if (!shown) {
        // first sighting: appear at the pointer instead of flying in from 0,0
        shown = true;
        pos.x = target.x;
        pos.y = target.y;
        place();
        root.dataset.visible = "";
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const el = e.target instanceof Element ? e.target : null;
      const labelled = el?.closest<HTMLElement>("[data-cursor]");
      if (labelled) {
        ring.dataset.state = "label";
        label.textContent = labelled.dataset.cursor ?? "";
      } else if (el?.closest("a, button, [role='button'], label, summary")) {
        ring.dataset.state = "link";
      } else {
        delete ring.dataset.state;
      }
    };

    const onLeave = () => {
      shown = false;
      delete root.dataset.visible;
    };
    const onDown = () => (ring.dataset.pressed = "");
    const onUp = () => delete ring.dataset.pressed;

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  // Outer element: position (written by the rAF loop). Inner ring: size/colour
  // (CSS transitions) — kept apart so the two never fight over `transform`.
  return (
    <div ref={rootRef} aria-hidden="true" className="cursor-follower print:hidden">
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </div>
  );
}

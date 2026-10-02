"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/** Number of dots in the trail (head included). */
const DOTS = 10;
/** How much of the gap each dot closes per frame — the head hugs the pointer, the tail lags. */
const HEAD_FOLLOW = 0.55;
const TAIL_FOLLOW = 0.42;

/**
 * A short trail of small dots behind the (still visible) system cursor that
 * shrinks and fades along its length, collapses into the pointer when the
 * mouse stops, then fades out.
 *
 * Mouse/trackpad only (`pointer: fine`), off for `prefers-reduced-motion`.
 * Positions never go through React state: pointermove only records the target,
 * and a requestAnimationFrame loop pulls each dot towards the one ahead of it,
 * writing `transform` straight to the DOM — no re-render, no layout. The loop
 * stops once the trail has collapsed, so an idle page costs nothing.
 */
export function CursorTrail() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const dots = Array.from(root.children) as HTMLElement[];
    const pts = dots.map(() => ({ x: 0, y: 0 }));
    // scale shrinks along the tail; opacity is per dot in CSS via --i
    const scales = dots.map((_, i) => 1 - (i / DOTS) * 0.75);
    const target = { x: 0, y: 0 };
    let frame = 0;
    let shown = false;

    const tick = () => {
      let moving = false;
      for (let i = 0; i < pts.length; i++) {
        const lead = i === 0 ? target : pts[i - 1];
        const k = i === 0 ? HEAD_FOLLOW : TAIL_FOLLOW;
        const p = pts[i];
        p.x += (lead.x - p.x) * k;
        p.y += (lead.y - p.y) * k;
        if (Math.abs(target.x - p.x) + Math.abs(target.y - p.y) > 0.1) moving = true;
        dots[i].style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${scales[i]})`;
      }
      if (moving) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        root.dataset.idle = "";
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      if (!shown) {
        // first sighting: start collapsed at the pointer, not flying in from 0,0
        shown = true;
        for (const p of pts) Object.assign(p, target);
      }
      delete root.dataset.idle;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      shown = false;
      root.dataset.idle = "";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" data-idle="" className="cursor-trail print:hidden">
      {Array.from({ length: DOTS }, (_, i) => (
        <span key={i} style={{ "--i": i } as CSSProperties} />
      ))}
    </div>
  );
}

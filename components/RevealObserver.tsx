"use client";

import { useEffect } from "react";

/**
 * Scroll reveal for every `[data-reveal]` element on the page — a ~1KB
 * replacement for framer-motion's `whileInView`. Render once, after the
 * sections (effects run after the elements exist). Stagger with a `--d`
 * custom property, e.g. style={{ "--d": "80ms" } as React.CSSProperties}.
 */
export function RevealObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const pending = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );

    // Whatever is already on screen stays visible — marking it before the page
    // goes `reveal-ready` avoids a visible → hidden → fade-in flash.
    const vh = window.innerHeight;
    for (const el of pending) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.dataset.revealed = "";
    }
    document.documentElement.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of pending) if (!("revealed" in el.dataset)) io.observe(el);

    return () => io.disconnect();
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

/**
 * Next.js resets scroll position after hydration, which overrides the
 * browser's native "scroll to #hash on load" behavior when navigating here
 * from another route (e.g. clicking "Projects" while on /pdf). This
 * re-applies that scroll once the page has mounted.
 *
 * Uses "instant" rather than "auto": the global `scroll-behavior: smooth`
 * (styles/globals.css) makes "auto" defer to CSS and animate, which is not
 * what a same-document anchor jump would normally do on load.
 */
export function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);

    const timeout = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}

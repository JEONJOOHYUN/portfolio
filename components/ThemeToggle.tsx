"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { switchTheme } from "@/components/theme-transition";

/** Both icons stay in place and cross-fade with a little scale and blur, so a second press mid-way just turns back. */
const LAYER = "col-start-1 row-start-1 flex transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]";
const SHOWN = "scale-100 opacity-100 blur-none";
const HIDDEN = "scale-25 opacity-0 blur-xs";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid a light/dark mismatch between the server render and the client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required to detect the client mount for hydration-safe theme rendering
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      data-theme-toggle=""
      onClick={(e) => switchTheme(e.currentTarget, next, () => setTheme(next))}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-[background-color,scale] duration-200 hover:bg-zinc-100 active:scale-[0.96] dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
    >
      <span aria-hidden="true" className="inline-grid">
        <span className={`${LAYER} ${isDark ? SHOWN : HIDDEN}`}>
          <Sun size={18} />
        </span>
        <span className={`${LAYER} ${isDark ? HIDDEN : SHOWN}`}>
          <Moon size={18} />
        </span>
      </span>
    </button>
  );
}

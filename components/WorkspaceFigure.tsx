"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { WorkspaceShot } from "@/data/portfolio";

/**
 * The About workspace screenshot, opened large in a modal instead of a new tab.
 * A native <dialog> (showModal) gives the focus trap, Esc to close, inert page
 * behind it and focus back on the thumbnail when it closes, with no dependency.
 * The large image mounts only while open, so the page loads the small one only.
 */
export function WorkspaceFigure({
  shot,
  heading,
  style,
}: {
  shot: WorkspaceShot;
  heading: string;
  style?: CSSProperties;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  return (
    <figure data-reveal style={style}>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {heading}
      </h3>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${shot.alt} — 크게 보기`}
        aria-haspopup="dialog"
        // outline paints over the image: a neutral black/white edge instead of a grey border
        className="group block w-full cursor-zoom-in overflow-hidden rounded-xl bg-zinc-900 outline outline-1 -outline-offset-1 outline-black/10 transition-[scale] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 active:scale-[0.96] dark:outline-white/10 dark:focus-visible:ring-zinc-100"
      >
        <Image
          src={shot.image}
          alt=""
          width={shot.width}
          height={shot.height}
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 100vw"
          className="h-auto w-full transition-[scale] duration-300 group-hover:scale-[1.03]"
        />
      </button>
      <figcaption className="mt-2 text-xs text-pretty text-zinc-500 dark:text-zinc-400">{shot.caption}</figcaption>

      <dialog
        ref={dialogRef}
        aria-label={shot.alt}
        onClose={() => setOpen(false)}
        // a click on the backdrop lands on the dialog itself; clicks on the image or button do not
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="lightbox"
      >
        {open && (
          <div className="relative">
            <Image
              src={shot.image}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="92vw"
              loading="eager"
              // as wide as fits: 92% of the screen, the file's own width, or what the height allows once
              // 7rem is kept free, so the close button above (3rem) stays on screen even in landscape phones
              style={{ width: `min(92vw, ${shot.width}px, calc((100dvh - 7rem) * ${shot.width / shot.height}))` }}
              className="block h-auto rounded-2xl outline outline-1 -outline-offset-1 outline-white/10"
            />
            {/* above the picture, so it is not confused with the window's own close button in the screenshot */}
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              aria-label="닫기"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-[background-color,scale] duration-200 hover:bg-white/25 active:scale-[0.96]"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </dialog>
    </figure>
  );
}

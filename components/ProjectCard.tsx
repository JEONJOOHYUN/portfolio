import type { CSSProperties } from "react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { preloadProjectImages } from "@/components/ProjectModal";

/**
 * Two shapes:
 * - "lead" (the first project): full-width card. Below md it is a plain tile;
 *   from md up the screenshot fills a 2:1 card with the title on a gradient.
 * - "tile": screenshot on top, text below on a solid surface. Three per row from
 *   md up; "자세히 보기" sits at the bottom so the row's last lines align.
 *
 * The scroll reveal sits on the wrapper; hover/press motion sits on the button —
 * the two would fight over `translate`/`transition` if they shared an element.
 *
 * Tailwind v4 moves elements with the `translate`/`scale` properties (not
 * `transform`), so transitions name those properties.
 */
export function ProjectCard({
  project,
  revealDelay,
  lead = false,
  onOpen,
}: {
  project: Project;
  revealDelay: number;
  lead?: boolean;
  onOpen: (project: Project) => void;
}) {
  return (
    <div
      data-reveal
      style={{ "--d": `${revealDelay}ms` } as CSSProperties}
      className={lead ? "md:col-span-3" : "flex"}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        // warm the modal images on intent (pointerenter also fires on touch-down)
        onPointerEnter={() => preloadProjectImages(project)}
        onFocus={() => preloadProjectImages(project)}
        className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-transparent bg-white text-left shadow-card transition-[translate,scale,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 active:scale-[0.96] dark:bg-zinc-950 dark:shadow-card-dark dark:hover:shadow-card-dark-hover dark:focus-visible:ring-zinc-100 ${
          lead ? "md:block md:aspect-[2/1] md:bg-transparent md:dark:bg-transparent" : "h-full"
        }`}
      >
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden border-b border-black/10 dark:border-white/10 ${
            lead ? "md:absolute md:inset-0 md:aspect-auto md:border-b-0" : ""
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} 스크린샷`}
            fill
            unoptimized={project.image.endsWith(".gif")}
            className="object-cover object-top transition-[scale] duration-500 group-hover:scale-105"
            sizes={lead ? "(min-width: 768px) 1024px, 100vw" : "(min-width: 768px) 340px, 100vw"}
          />
          {/* sheen: a band of light sweeps across the screenshot on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-sheen"
          />
        </div>

        {lead && (
          // busy screenshots (the maple home) need a solid floor under the two text lines
          <div className="absolute inset-0 hidden bg-gradient-to-t from-black/90 from-15% via-black/55 via-40% to-transparent to-70% md:block" />
        )}

        <div
          className={`flex flex-1 flex-col gap-1 p-4 sm:p-5 ${
            lead ? "md:absolute md:inset-x-0 md:bottom-0 md:gap-1.5 md:p-6" : ""
          }`}
        >
          {/* status sits with the title, not on the screenshot, so it never covers the app's own header */}
          {project.status && (
            <span
              className={`mb-1 inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 ${
                lead
                  ? "md:bg-black/50 md:text-white md:ring-1 md:ring-white/20 md:dark:bg-black/50 md:dark:text-white"
                  : ""
              }`}
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                {project.status.live && (
                  <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-500" />
                )}
                <span
                  className={`relative inline-flex h-1.5 w-1.5 rounded-full ${project.status.live ? "bg-emerald-500" : "bg-zinc-400"}`}
                />
              </span>
              {project.status.label}
            </span>
          )}
          <h3
            className={`text-lg font-semibold text-balance text-zinc-900 dark:text-zinc-50 ${
              lead ? "md:text-2xl md:text-white md:dark:text-white" : ""
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`line-clamp-2 text-sm text-pretty text-zinc-600 dark:text-zinc-400 ${
              lead ? "md:text-base md:text-zinc-200 md:dark:text-zinc-200" : ""
            }`}
          >
            {project.tagline}
          </p>
          <span
            className={`mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-zinc-400 transition-opacity duration-300 dark:text-zinc-500 ${
              // touch screens have no hover, so the hint only hides where a pointer can reveal it
              lead
                ? "md:text-white/70 md:can-hover:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 md:dark:text-white/70"
                : ""
            }`}
          >
            자세히 보기
            <span className="transition-[translate] duration-200 group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </button>
    </div>
  );
}

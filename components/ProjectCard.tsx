import type { CSSProperties } from "react";
import Image from "next/image";
import { portfolioData, type Project } from "@/data/portfolio";
import { preloadProjectImages } from "@/components/ProjectModal";

/**
 * Mobile: screenshot on top, title/tagline below on a solid surface (text over a
 * busy screenshot is unreadable at phone width).
 * sm and up: full-bleed screenshot with the title overlaid on a gradient.
 *
 * The scroll reveal sits on the wrapper; hover motion sits on the button — the
 * two would fight over `transform`/`transition` if they shared an element.
 */
export function ProjectCard({
  project,
  index,
  wide = false,
  onOpen,
}: {
  project: Project;
  index: number;
  /** spans both columns on sm+ (used for the lead project so 5 cards fill the grid) */
  wide?: boolean;
  onOpen: (project: Project) => void;
}) {
  return (
    <div
      data-reveal
      // lead card is alone on row 1, so pairs start at index 1 — left card first
      style={{ "--d": `${((index + 1) % 2) * 90}ms` } as CSSProperties}
      className={wide ? "sm:col-span-2" : undefined}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        // warm the modal images on intent (pointerenter also fires on touch-down)
        onPointerEnter={() => preloadProjectImages(project)}
        onFocus={() => preloadProjectImages(project)}
        data-cursor={portfolioData.cursorLabel}
        className={`group relative flex w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-zinc-200 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 active:scale-[0.99] sm:block ${wide ? "sm:aspect-[2/1]" : "sm:aspect-[4/3]"} sm:bg-transparent dark:bg-zinc-950 dark:ring-zinc-800 dark:focus-visible:ring-zinc-100 sm:dark:bg-transparent`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src={project.image}
            alt={`${project.title} 스크린샷`}
            fill
            unoptimized={project.image.endsWith(".gif")}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes={wide ? "(min-width: 640px) 1024px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
          />
          {/* sheen: a band of light sweeps across the screenshot on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-sheen"
          />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-t from-black/85 via-black/25 to-transparent sm:block" />

        <div className="flex flex-col gap-1 p-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:gap-1.5 sm:p-5">
          <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl sm:text-white dark:text-zinc-50 sm:dark:text-white">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm text-zinc-600 sm:text-zinc-200 dark:text-zinc-400 sm:dark:text-zinc-200">
            {project.tagline}
          </p>
          <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 transition-opacity duration-300 sm:mt-2 sm:text-white/70 sm:opacity-0 sm:group-hover:opacity-100 dark:text-zinc-500 sm:dark:text-white/70">
            자세히 보기
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </button>
    </div>
  );
}

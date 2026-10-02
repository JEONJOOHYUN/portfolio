"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { X, CheckCircle2, Trophy, Users, Calendar, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/BrandIcons";

/** Must match the panel's `duration-*` below — unmount waits for the exit transition. */
const EXIT_MS = 220;

/** Staggered entrance for the body blocks (CSS `rise`, runs once on mount). */
const rise = (i: number): { className: string; style: CSSProperties } => ({
  className: "animate-rise",
  style: { animationDelay: `${120 + i * 50}ms` },
});

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Plain CSS transitions driven by two flags: `entered` flips on the frame
  // after mount (so the hidden → shown transition actually runs) and `closing`
  // plays the exit before the parent unmounts us.
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);
  const shown = entered && !closing;

  const handleClose = () => setClosing(true);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!closing) return;
    const timeout = setTimeout(onClose, EXIT_MS);
    return () => clearTimeout(timeout);
  }, [closing, onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClosing(true);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-200 sm:items-center sm:p-6 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Bottom sheet on phones (thumb-reachable, full width); centered dialog from sm up. */}
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={`relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl transition-[opacity,transform] duration-[220ms] ease-out sm:max-h-[88vh] sm:rounded-2xl dark:bg-zinc-900 ${
          shown
            ? "translate-y-0 opacity-100 sm:scale-100"
            : "translate-y-8 opacity-0 sm:translate-y-3 sm:scale-[0.98]"
        }`}
      >
        <div className="relative h-48 w-full shrink-0 sm:h-72">
          <Image
            src={project.image}
            alt={`${project.title} 스크린샷`}
            fill
            unoptimized={project.image.endsWith(".gif")}
            className="object-cover object-top"
            sizes="(min-width: 768px) 700px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <button
            type="button"
            onClick={handleClose}
            aria-label="닫기"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-[background-color,transform] duration-200 hover:bg-black/60 active:scale-95 sm:right-4 sm:top-4"
          >
            <X size={18} />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/90 ring-1 ring-black/5">
              <Image src={project.icon} alt="" fill className="object-contain p-1" />
            </div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h2>
          </div>
        </div>

        <div className="overflow-y-auto p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:p-6">
          <div className="flex flex-col gap-6">
            <div
              {...rise(0)}
              className={`${rise(0).className} flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400`}
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={15} />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users size={15} />
                {project.team}
              </span>
            </div>

            <p
              {...rise(1)}
              className={`${rise(1).className} text-base leading-relaxed text-zinc-700 dark:text-zinc-300`}
            >
              {project.overview}
            </p>

            <div {...rise(2)}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                나의 역할
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.role}
              </p>
            </div>

            <div {...rise(3)}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                무엇을 했는가
              </h3>
              <ul className="flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div {...rise(4)}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                배운 점
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.learnings}
              </p>
            </div>

            {project.achievement && (
              <div
                {...rise(5)}
                className={`${rise(5).className} inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-sm font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400`}
              >
                <Trophy size={15} />
                {project.achievement}
              </div>
            )}

            <div {...rise(6)} className={`${rise(6).className} flex flex-wrap gap-2`}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              {...rise(7)}
              className={`${rise(7).className} flex flex-wrap items-center gap-3 pt-1`}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-[background-color,transform] duration-200 hover:bg-zinc-700 active:scale-[0.97] dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition-[background-color,transform] duration-200 hover:bg-zinc-100 active:scale-[0.97] dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <ExternalLink size={16} />
                  데모 보기
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

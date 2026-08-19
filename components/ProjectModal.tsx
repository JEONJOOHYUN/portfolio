"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, CheckCircle2, Trophy, Users, Calendar, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/BrandIcons";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // framer-motion's AnimatePresence exit animation never resolves for this
  // component in the current setup, so the close animation is driven by
  // local state instead: fade/scale out, then unmount after the transition.
  const [closing, setClosing] = useState(false);

  const handleClose = () => setClosing(true);

  useEffect(() => {
    if (!closing) return;
    const timeout = setTimeout(onClose, 200);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: closing ? 0 : 1 }}
      transition={{ duration: 0.2 }}
      onClick={handleClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{
          opacity: closing ? 0 : 1,
          y: closing ? 16 : 0,
          scale: closing ? 0.97 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-900"
      >
        <div className="relative h-56 w-full shrink-0 sm:h-72">
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
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <X size={18} />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/90 ring-1 ring-black/5">
              <Image src={project.icon} alt="" fill className="object-contain p-1" />
            </div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        <div className="overflow-y-auto p-6">
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={15} />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users size={15} />
                {project.team}
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              {project.overview}
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                나의 역할
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.role}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                무엇을 했는가
              </h3>
              <ul className="flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                배운 점
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.learnings}
              </p>
            </motion.div>

            {project.achievement && (
              <motion.div
                variants={itemVariants}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-sm font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
              >
                <Trophy size={15} />
                {project.achievement}
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <ExternalLink size={16} />
                  데모 보기
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:ring-zinc-800 dark:focus-visible:ring-zinc-100"
    >
      <Image
        src={project.image}
        alt={`${project.title} 스크린샷`}
        fill
        unoptimized={project.image.endsWith(".gif")}
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-zinc-200">{project.tagline}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          자세히 보기 →
        </span>
      </div>
    </motion.button>
  );
}

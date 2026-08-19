"use client";

import { useState } from "react";
import { portfolioData, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const { projects } = portfolioData;
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="bg-zinc-50 px-6 py-24 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projects" title="진행한 프로젝트" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

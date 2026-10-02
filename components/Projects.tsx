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
      className="bg-zinc-50 px-5 py-16 sm:px-6 sm:py-24 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-5xl">
        <div data-reveal>
          <SectionHeading eyebrow="Projects" title="진행한 프로젝트" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              wide={i === 0}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

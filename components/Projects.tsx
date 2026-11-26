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

        {/* lead project spans the row; the other three share the next row from md up */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              lead={i === 0}
              revealDelay={i === 0 ? 0 : (i - 1) * 90}
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

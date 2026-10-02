import type { CSSProperties } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const TYPE_ICONS = {
  work: Briefcase,
  education: GraduationCap,
  project: Rocket,
};

export function Experience() {
  const { timeline, projects } = portfolioData;

  return (
    <section id="experience" className="px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div data-reveal>
          <SectionHeading eyebrow="Experience" title="경력 및 이력" />
        </div>

        <ol className="relative border-s border-zinc-200 dark:border-zinc-800">
          {timeline.map((item, i) => {
            const project = projects.find((p) => p.id === item.projectId);
            const Icon = TYPE_ICONS[item.type];

            return (
              <li
                key={item.id}
                data-reveal
                style={{ "--d": `${i * 80}ms` } as CSSProperties}
                className="mb-10 ms-7 last:mb-0 sm:ms-8"
              >
                <span className="absolute -start-4 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-zinc-100 ring-4 ring-white dark:bg-zinc-800 dark:ring-black">
                  {project ? (
                    <Image
                      src={project.icon}
                      alt={`${project.title} 로고`}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    <Icon size={14} className="text-zinc-600 dark:text-zinc-300" />
                  )}
                </span>
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {item.organization}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

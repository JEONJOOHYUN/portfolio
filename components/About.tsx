import type { CSSProperties } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div data-reveal>
          <SectionHeading eyebrow="About Me" title="저를 소개합니다" />
        </div>

        <div data-reveal style={delay(60)} className="flex max-w-2xl flex-col gap-4">
          {about.summary.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div data-reveal style={delay(120)} className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <GraduationCap size={16} className="text-zinc-500 dark:text-zinc-400" />
            학점 {about.gpa}
          </span>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2">
          {about.skills.map((group, i) => (
            <div key={group.category} data-reveal style={delay(i * 80)}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}

          <figure data-reveal style={delay(about.skills.length * 80)}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Workspace
            </h3>
            <a
              href={about.workspace.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800"
            >
              <Image
                src={about.workspace.image}
                alt={about.workspace.alt}
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 100vw"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              {about.workspace.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

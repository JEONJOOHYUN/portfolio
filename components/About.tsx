import type { CSSProperties } from "react";
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

        <p
          data-reveal
          style={delay(60)}
          className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {about.summary}
        </p>

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
        </div>
      </div>
    </section>
  );
}

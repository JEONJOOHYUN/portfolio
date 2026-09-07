import type { Metadata } from "next";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { PdfPrintButton } from "@/components/PdfPrintButton";

export const metadata: Metadata = {
  title: `${portfolioData.hero.name} 포트폴리오 (PDF)`,
  description: "클릭 없이 한 번에 훑어보는 인쇄/PDF 버전 포트폴리오입니다.",
};

export default function PdfPage() {
  const { hero, about, projects, timeline } = portfolioData;

  return (
    <div className="pdf-page min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto max-w-3xl px-8 py-12 print:max-w-none print:px-0 print:py-0">
        <div className="mb-6 flex justify-end print:hidden">
          <PdfPrintButton />
        </div>

        {/* Header */}
        <header className="flex items-start gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <Image
            src={hero.photo}
            alt={hero.name}
            width={88}
            height={88}
            className="h-22 w-22 shrink-0 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight">{hero.name}</h1>
            <p className="mt-1 text-base font-medium text-zinc-600 dark:text-zinc-400">
              {hero.role} · {hero.location}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {hero.tagline}
            </p>
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {hero.links.map((link) => (
                <div key={link.label} className="flex gap-1.5">
                  <dt className="font-medium text-zinc-400 dark:text-zinc-500">
                    {link.label}
                  </dt>
                  <dd>
                    <a
                      href={link.url}
                      className="text-zinc-700 underline decoration-zinc-300 underline-offset-2 dark:text-zinc-300 dark:decoration-zinc-700"
                    >
                      {link.url.replace(/^(mailto:|tel:)/, "")}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* About */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            About
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {about.summary}
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-400 dark:text-zinc-500">학점</span>{" "}
            {about.gpa}
          </p>
          <dl className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {about.skills.map((group) => (
              <div key={group.category} className="text-sm">
                <dt className="inline font-medium text-zinc-500 dark:text-zinc-400">
                  {group.category}:{" "}
                </dt>
                <dd className="inline text-zinc-700 dark:text-zinc-300">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Projects */}
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Projects
          </h2>

          <div className="mt-3 flex flex-col gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="break-inside-avoid border-t border-zinc-200 pt-5 dark:border-zinc-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    {project.period} · {project.team}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {project.tagline}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.overview}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    나의 역할.{" "}
                  </span>
                  {project.role}
                </p>

                <div className="mt-3">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    무엇을 했는가
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    배운 점.{" "}
                  </span>
                  {project.learnings}
                </p>

                {project.achievement && (
                  <p className="mt-3 text-sm font-medium text-amber-700 dark:text-amber-400">
                    🏆 {project.achievement}
                  </p>
                )}

                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  {project.techStack.join(" · ")}
                </p>

                <p className="mt-2 flex flex-wrap gap-x-4 text-xs text-zinc-600 dark:text-zinc-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="underline decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      GitHub: {project.githubUrl.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="underline decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      Demo: {project.liveUrl.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Experience
          </h2>
          <div className="mt-3 flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            {timeline.map((item) => (
              <div key={item.id} className="break-inside-avoid text-sm">
                <p>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </span>{" "}
                  <span className="text-zinc-400 dark:text-zinc-500">
                    · {item.organization} · {item.period}
                  </span>
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

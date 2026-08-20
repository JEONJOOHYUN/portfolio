"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Experience" title="경력 및 이력" />

        <ol className="relative border-s border-zinc-200 dark:border-zinc-800">
          {timeline.map((item, i) => {
            const project = projects.find((p) => p.id === item.projectId);
            const Icon = TYPE_ICONS[item.type];

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="mb-10 ms-8 last:mb-0"
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
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

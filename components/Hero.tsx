"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon } from "@/components/BrandIcons";

const ICONS = {
  github: GithubIcon,
  email: Mail,
  phone: Phone,
  external: Mail,
};

export function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id="home"
      className="flex min-h-[90vh] flex-col justify-center px-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-white shadow-md dark:ring-zinc-900"
        >
          <Image
            src={hero.photo}
            alt={hero.name}
            width={96}
            height={96}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500"
        >
          {hero.role} · {hero.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50"
        >
          안녕하세요, {hero.name}입니다.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href={`mailto:${hero.email}`}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            연락하기
          </a>
          <div className="flex items-center gap-3">
            {hero.links.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.icon === "github" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
        >
          더 알아보기
          <ArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  );
}

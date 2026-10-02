import Image from "next/image";
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
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center px-5 py-16 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-5 sm:gap-6">
        <div
          style={{ animationDelay: "0ms" }}
          className="animate-rise h-20 w-20 overflow-hidden rounded-full shadow-md ring-4 ring-white sm:h-24 sm:w-24 dark:ring-zinc-900"
        >
          <Image
            src={hero.photo}
            alt={hero.name}
            width={96}
            height={96}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <div
          style={{ animationDelay: "60ms" }}
          className="animate-rise flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {hero.status}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 sm:text-sm dark:text-zinc-500">
            {hero.role} · {hero.location}
          </span>
        </div>

        <h1
          style={{ animationDelay: "120ms" }}
          className="animate-rise text-[clamp(2.25rem,6vw+1rem,4.5rem)] leading-[1.12] font-extrabold tracking-tight text-balance text-zinc-900 dark:text-zinc-50"
        >
          안녕하세요, <br className="sm:hidden" />
          {hero.name}입니다.
        </h1>

        <p
          style={{ animationDelay: "200ms" }}
          className="animate-rise max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
        >
          {hero.tagline}
        </p>

        <div
          style={{ animationDelay: "280ms" }}
          className="animate-rise flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={`mailto:${hero.email}`}
            className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-7 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-zinc-700 active:scale-[0.98] sm:h-11 sm:px-6 sm:text-sm dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {/* sheen: a band of light sweeps across on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-sheen dark:via-white/60"
            />
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 active:scale-95 sm:h-11 sm:w-11 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <a
          href="#about"
          style={{ animationDelay: "480ms" }}
          className="animate-rise group mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-600 sm:mt-10 dark:text-zinc-600 dark:hover:text-zinc-400"
        >
          더 알아보기
          <ArrowDown
            size={14}
            className="transition-transform duration-200 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}

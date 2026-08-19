import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  external: Mail,
};

export function Footer() {
  const { hero } = portfolioData;

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-500">
        <p>
          © {new Date().getFullYear()} {hero.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {hero.links.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.icon === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

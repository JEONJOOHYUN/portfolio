"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

// "/" 접두어를 붙여서 /pdf 같은 다른 라우트에서도 항상 홈으로 이동한 뒤
// 해당 섹션으로 스크롤되도록 합니다. next/link는 다른 페이지에서 넘어올 때
// 해시 앵커로 스크롤하지 않아서, 여기서는 일부러 일반 <a> 태그를 써서
// 브라우저의 기본 앵커 이동 동작에 맡깁니다.
const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md print:hidden dark:border-zinc-800 dark:bg-black/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- see NAV_LINKS comment above */}
        <a
          href="/#home"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {portfolioData.hero.name}
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/pdf"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            PDF
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="메뉴 열기"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-1 border-t border-zinc-200 px-6 py-4 sm:hidden dark:border-zinc-800">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/pdf"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-2 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            PDF
          </Link>
        </div>
      )}
    </header>
  );
}

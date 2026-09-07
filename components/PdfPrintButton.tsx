"use client";

import { Printer } from "lucide-react";

export function PdfPrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 print:hidden dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      <Printer size={16} />
      PDF로 저장 / 인쇄
    </button>
  );
}

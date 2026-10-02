export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 sm:text-sm dark:text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-[clamp(1.75rem,3vw+1rem,2.5rem)] leading-tight font-semibold tracking-tight text-balance text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  eyebrow,
  className,
}: {
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-7 text-zinc-400">{description}</p> : null}
    </div>
  );
}

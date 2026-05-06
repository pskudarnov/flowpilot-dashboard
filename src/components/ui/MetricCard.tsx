import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type MetricTone = "amber" | "cyan" | "emerald" | "violet";

const toneClasses: Record<MetricTone, string> = {
  amber: "from-amber-200/18 text-amber-100",
  cyan: "from-cyan-200/18 text-cyan-100",
  emerald: "from-emerald-200/18 text-emerald-100",
  violet: "from-violet-200/18 text-violet-100",
};

export function MetricCard({
  label,
  value,
  delta,
  note,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  note: string;
  tone: MetricTone;
}) {
  const isPositive = !delta.startsWith("-");

  return (
    <Card className="group overflow-hidden p-4">
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-16 bg-gradient-to-b to-transparent opacity-80",
          toneClasses[tone],
        )}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{label}</p>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium",
              isPositive
                ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
                : "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="size-3.5" aria-hidden />
            ) : (
              <ArrowDownRight className="size-3.5" aria-hidden />
            )}
            {delta}
          </span>
        </div>
        <p className="mt-5 text-3xl font-semibold tracking-tight text-zinc-50">{value}</p>
        <p className="mt-2 text-sm leading-5 text-zinc-500">{note}</p>
      </div>
    </Card>
  );
}

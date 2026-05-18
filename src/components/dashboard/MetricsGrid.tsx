import { MetricCard } from "@/components/ui/MetricCard";
import { compactNumber, percent } from "@/lib/format";
import { kpiCards } from "@/data/metrics";

export function MetricsGrid() {
  return (
    <section aria-labelledby="kpi-heading" className="reveal">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
            Snapshot
          </p>
          <h2 id="kpi-heading" className="mt-2 text-xl font-semibold text-zinc-50">
            Key metrics
          </h2>
        </div>
        <p className="text-sm text-zinc-500">Updated from sample analytics data</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((k) => (
          <MetricCard
            key={k.label}
            label={k.label}
            value={k.label === "Open escalations" ? compactNumber(k.value) : percent(k.value)}
            delta={k.delta}
            note={k.note}
            tone={k.tone}
          />
        ))}
      </div>
    </section>
  );
}

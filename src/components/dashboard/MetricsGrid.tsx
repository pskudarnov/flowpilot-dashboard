import { MetricCard } from "@/components/ui/MetricCard";
import { compactNumber, percent } from "@/lib/format";
import { kpiCards } from "@/data/metrics";

export function MetricsGrid() {
  return (
    <section aria-labelledby="kpi-heading">
      <h2 id="kpi-heading" className="mb-3 text-lg font-medium text-zinc-100">
        Key metrics
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((k) => (
          <MetricCard
            key={k.label}
            label={k.label}
            value={k.label === "Open tasks" ? compactNumber(k.value) : percent(k.value)}
            delta={k.delta}
          />
        ))}
      </div>
    </section>
  );
}

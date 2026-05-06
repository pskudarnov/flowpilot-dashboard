import { Card } from "@/components/ui/Card";

export function MetricCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <Card className="p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-zinc-100">{value}</p>
      <p className="mt-1 text-sm text-cyan-300">{delta}</p>
    </Card>
  );
}

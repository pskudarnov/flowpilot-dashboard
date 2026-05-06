"use client";
import { Card } from "@/components/ui/Card";
import { conversionSeries } from "@/data/metrics";
import { useHasMounted } from "@/hooks/useHasMounted";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function ConversionChart() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return (
      <Card className="p-4">
        <h3 className="text-sm font-medium text-zinc-100">Signups & activation</h3>
        <p className="mb-3 text-xs text-zinc-500">Weekly funnel health</p>
        <div className="flex h-[260px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-sm text-zinc-500">
          Loading chart…
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-zinc-100">Signups & activation</h3>
      <p className="mb-3 text-xs text-zinc-500">Weekly funnel health</p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={conversionSeries}>
            <CartesianGrid stroke="#27272a" strokeDasharray="4 4" />
            <XAxis dataKey="week" stroke="#a1a1aa" />
            <YAxis stroke="#a1a1aa" />
            <Tooltip />
            <Bar dataKey="signups" fill="#6366f1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="activation" fill="#22d3ee" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

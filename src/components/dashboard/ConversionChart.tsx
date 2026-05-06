"use client";
import { Card } from "@/components/ui/Card";
import { conversionSeries } from "@/data/metrics";
import { useHasMounted } from "@/hooks/useHasMounted";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function ChartSkeleton() {
  return (
    <div className="grid h-[280px] grid-cols-6 items-end gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
      {[54, 66, 60, 72, 78, 86].map((height) => (
        <div key={height} className="flex h-full items-end gap-1">
          <div
            className="animate-soft-pulse w-full rounded-t-md bg-white/10"
            style={{ height: `${height}%` }}
          />
          <div
            className="animate-soft-pulse w-full rounded-t-md bg-cyan-200/10"
            style={{ height: `${height - 16}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export function ConversionChart() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return (
      <Card className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-zinc-100">Trial conversion</h3>
            <p className="mt-1 text-sm text-zinc-500">Weekly signups reaching first report</p>
          </div>
          <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            Loading
          </span>
        </div>
        <ChartSkeleton />
      </Card>
    );
  }

  return (
    <Card className="reveal reveal-delay-2 p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">Trial conversion</h3>
          <p className="mt-1 text-sm text-zinc-500">Weekly signups reaching first report</p>
        </div>
        <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs font-medium text-violet-100">
          71% activated
        </span>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={conversionSeries} margin={{ bottom: 4, left: -10, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="signupBar" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.52} />
              </linearGradient>
              <linearGradient id="activationBar" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" vertical={false} />
            <XAxis axisLine={false} dataKey="week" stroke="#71717a" tickLine={false} />
            <YAxis axisLine={false} stroke="#71717a" tickLine={false} />
            <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} wrapperClassName="chart-tooltip" />
            <Bar dataKey="signups" fill="url(#signupBar)" name="Signups" radius={[8, 8, 0, 0]} />
            <Bar
              dataKey="activation"
              fill="url(#activationBar)"
              name="Activated"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

"use client";
import { Card } from "@/components/ui/Card";
import { revenueSeries } from "@/data/metrics";
import { useHasMounted } from "@/hooks/useHasMounted";
import { currency } from "@/lib/format";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ChartSkeleton() {
  return (
    <div className="flex h-[280px] items-end gap-2 rounded-xl border border-white/10 bg-white/[0.025] p-4">
      {[42, 55, 48, 62, 72, 84, 76].map((height) => (
        <div
          key={height}
          className="animate-soft-pulse flex-1 rounded-t-md bg-white/10"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export function RevenueChart() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return (
      <Card className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-zinc-100">MRR movement</h3>
            <p className="mt-1 text-sm text-zinc-500">Recognized monthly revenue in USD</p>
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
    <Card className="reveal reveal-delay-1 p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">MRR movement</h3>
          <p className="mt-1 text-sm text-zinc-500">Recognized monthly revenue in USD</p>
        </div>
        <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
          +21.8%
        </span>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueSeries} margin={{ bottom: 4, left: -10, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="revenueStroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#a7f3d0" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 6" vertical={false} />
            <XAxis axisLine={false} dataKey="month" stroke="#71717a" tickLine={false} />
            <YAxis
              axisLine={false}
              stroke="#71717a"
              tickFormatter={(value) => `$${Number(value) / 1000}k`}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{}}
              cursor={{ stroke: "rgba(103,232,249,0.25)", strokeWidth: 1 }}
              formatter={(value) => [currency(Number(value)), "MRR"]}
              wrapperClassName="chart-tooltip"
            />
            <Line
              activeDot={{ fill: "#ecfeff", r: 5, stroke: "#22d3ee", strokeWidth: 2 }}
              dataKey="revenue"
              dot={false}
              stroke="url(#revenueStroke)"
              strokeLinecap="round"
              strokeWidth={3}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

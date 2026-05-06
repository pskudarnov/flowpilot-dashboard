"use client";
import { Card } from "@/components/ui/Card";
import { revenueSeries } from "@/data/metrics";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export function RevenueChart() {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-zinc-100">Monthly revenue</h3>
      <p className="mb-3 text-xs text-zinc-500">MRR trend in USD</p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueSeries}>
            <CartesianGrid stroke="#27272a" strokeDasharray="4 4" />
            <XAxis dataKey="month" stroke="#a1a1aa" />
            <YAxis stroke="#a1a1aa" />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

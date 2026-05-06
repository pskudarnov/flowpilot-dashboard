"use client";
import { Card } from "@/components/ui/Card";
import { conversionSeries } from "@/data/metrics";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function ConversionChart() {
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

import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { BarChart3, Blocks, Gauge, LineChart, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    description: "Revenue, activation and retention signals stay readable at a glance.",
    icon: Gauge,
    title: "Product health",
  },
  {
    description: "Charts use realistic time-series data instead of decorative filler.",
    icon: LineChart,
    title: "Trend reporting",
  },
  {
    description: "Tasks, owners and priorities sit next to the business context.",
    icon: Users,
    title: "Team execution",
  },
  {
    description: "Reusable data files keep the demo ready for a future API layer.",
    icon: Blocks,
    title: "Mock-data architecture",
  },
  {
    description: "Cards, tables and navigation keep keyboard and focus states intact.",
    icon: ShieldCheck,
    title: "Accessible polish",
  },
  {
    description: "Dense dashboard layouts adapt cleanly from phone to desktop.",
    icon: BarChart3,
    title: "Responsive surfaces",
  },
];

export function Features() {
  return (
    <section id="product" className="scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Product system"
          title="Built for modern product teams"
          description="Focused UX, reusable components and mock-data architecture ready to evolve into real API integration."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <Card
              key={item.title}
              className="reveal p-5"
              style={{ animationDelay: `${index * 55}ms` } as CSSProperties}
              tone="muted"
            >
              <item.icon className="size-5 text-cyan-100" aria-hidden />
              <h3 className="mt-5 text-base font-semibold text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

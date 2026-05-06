import { Card } from "@/components/ui/Card";

const plans = [
  { name: "Starter", price: "$0", desc: "Basic analytics for solo makers" },
  { name: "Pro", price: "$49", desc: "Advanced insights for product squads" },
  { name: "Scale", price: "$149", desc: "Cross-team analytics and governance" },
];

export function PricingPreview() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <h2 className="text-3xl font-semibold text-zinc-50">Simple pricing preview</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className="p-6">
              <p className="text-zinc-200">{p.name}</p>
              <p className="mt-2 text-3xl font-semibold text-zinc-50">
                {p.price}
                <span className="text-sm text-zinc-500">/mo</span>
              </p>
              <p className="mt-3 text-sm text-zinc-400">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

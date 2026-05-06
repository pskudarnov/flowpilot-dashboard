import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const plans = [
  { name: "Starter", price: "$0", points: ["Core metrics", "Basic charts", "Email support"] },
  {
    name: "Pro",
    price: "$49",
    points: ["All analytics widgets", "Team activity feed", "Priority support"],
  },
  {
    name: "Scale",
    price: "$149",
    points: ["Multi-team views", "Executive reporting", "Dedicated success"],
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <h1 className="text-4xl font-semibold text-zinc-50">Pricing</h1>
      <p className="mt-3 max-w-2xl text-zinc-400">
        Simple plans for product teams of different sizes.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-6">
            <h2 className="text-xl text-zinc-100">{plan.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-zinc-50">
              {plan.price}
              <span className="text-sm text-zinc-500">/mo</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {plan.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/70 p-6">
        <h2 className="text-2xl font-semibold text-zinc-50">FAQ</h2>
        <p className="mt-3 text-zinc-400">
          This is a demo project. Plans are illustrative and not tied to billing.
        </p>
        <div className="mt-6">
          <Button href="/dashboard">Back to dashboard</Button>
        </div>
      </div>
    </section>
  );
}

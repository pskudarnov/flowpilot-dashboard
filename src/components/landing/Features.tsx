import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const features = [
  "Product metrics",
  "Delivery health",
  "Team activity",
  "Clean reporting",
  "Responsive dashboard",
  "Mock API-ready architecture",
];

export function Features() {
  return (
    <section id="product" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          title="Built for modern product teams"
          description="Focused UX, reusable components and mock-data architecture ready to evolve into real API integration."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <Card key={item} className="p-5 text-zinc-300">
              {item}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

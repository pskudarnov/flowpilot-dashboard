import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { PricingPreview } from "@/components/landing/PricingPreview";
import { CTA } from "@/components/landing/CTA";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { ProductPreview } from "@/components/landing/ProductPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
        <MetricsGrid />
      </section>
      <Features />
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <h2 className="mb-6 text-3xl font-semibold text-zinc-50">Product preview</h2>
          <ProductPreview />
        </div>
      </section>
      <PricingPreview />
      <CTA />
    </>
  );
}

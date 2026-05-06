export const pricingPlans = [
  {
    cta: "Start free",
    description: "A tidy analytics cockpit for founders and solo product builders.",
    featured: false,
    name: "Starter",
    price: "$0",
    points: ["Core KPIs", "Basic charts", "Weekly email digest", "Community support"],
  },
  {
    cta: "Open Pro demo",
    description: "Shared visibility for product squads shipping every week.",
    featured: true,
    name: "Pro",
    price: "$49",
    points: [
      "All analytics widgets",
      "Team activity feed",
      "Priority alerts",
      "Export-ready reports",
    ],
  },
  {
    cta: "Talk to sales",
    description: "Executive reporting and governance for multi-team organizations.",
    featured: false,
    name: "Scale",
    price: "$149",
    points: [
      "Multi-team views",
      "Custom segments",
      "Dedicated success",
      "Quarterly business reviews",
    ],
  },
] as const;

export const pricingFaq = [
  {
    answer:
      "No. FlowPilot is a portfolio demo, so the plans are illustrative and do not connect to a payment provider.",
    question: "Is billing wired up?",
  },
  {
    answer:
      "The current architecture is mock-data driven, with component boundaries that can be connected to API data later.",
    question: "Can this become a real SaaS dashboard?",
  },
  {
    answer:
      "Yes. The interface keeps the key routes static and lightweight, so it can be deployed as a polished product demo.",
    question: "Is it ready for a portfolio review?",
  },
] as const;

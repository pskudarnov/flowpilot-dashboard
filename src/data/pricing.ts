export const pricingPlans = [
  {
    cta: "Open Starter preview",
    description: "A focused reporting view for founders validating early revenue signals.",
    featured: false,
    name: "Starter",
    price: "$0",
    points: [
      "Revenue and activation KPIs",
      "Basic trend charts",
      "Weekly snapshot email",
      "Community support",
    ],
  },
  {
    cta: "View Pro workspace",
    description: "Shared reporting for product and revenue teams managing active accounts.",
    featured: true,
    name: "Pro",
    price: "$49",
    points: [
      "Full analytics workspace",
      "Team activity timeline",
      "Renewal risk alerts",
      "Board-ready CSV exports",
    ],
  },
  {
    cta: "Plan rollout",
    description: "Portfolio-grade executive reporting for larger teams and custom segments.",
    featured: false,
    name: "Scale",
    price: "$149",
    points: [
      "Multi-team workspaces",
      "Custom segments",
      "Dedicated onboarding",
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
      "Yes. The sample data is already separated from the UI, so the same components can be connected to API responses later.",
    question: "Can this become a real SaaS dashboard?",
  },
  {
    answer:
      "Yes. The interface keeps the key routes static and lightweight, so it can be deployed as a polished product demo.",
    question: "Is it ready for a portfolio review?",
  },
] as const;

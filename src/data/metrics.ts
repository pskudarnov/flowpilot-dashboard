export const kpiCards = [
  { label: "Revenue growth", value: 12.4, delta: "+2.1 pts" },
  { label: "Activation rate", value: 68.4, delta: "+4.2%" },
  { label: "Retention", value: 91.2, delta: "+1.1%" },
  { label: "Open tasks", value: 24, delta: "-8" },
] as const;

export const revenueSeries = [
  { month: "Jan", revenue: 118000 },
  { month: "Feb", revenue: 132000 },
  { month: "Mar", revenue: 141000 },
  { month: "Apr", revenue: 157000 },
  { month: "May", revenue: 176000 },
  { month: "Jun", revenue: 191000 },
  { month: "Jul", revenue: 207000 },
  { month: "Aug", revenue: 219000 },
  { month: "Sep", revenue: 248000 },
];

export const conversionSeries = [
  { week: "W1", signups: 420, activation: 62 },
  { week: "W2", signups: 510, activation: 65 },
  { week: "W3", signups: 498, activation: 67 },
  { week: "W4", signups: 560, activation: 68 },
  { week: "W5", signups: 590, activation: 69 },
  { week: "W6", signups: 640, activation: 71 },
];

export const activityFeed = [
  "Checkout funnel conversion improved by 3.2%",
  "New onboarding experiment launched for SMB cohort",
  "5 critical tasks moved to Done this week",
  "Retention alert resolved for inactive segment",
] as const;

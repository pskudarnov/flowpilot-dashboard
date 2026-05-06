export const kpiCards = [
  {
    label: "Revenue growth",
    value: 12.4,
    delta: "+2.1 pts",
    note: "vs. previous month",
    tone: "cyan",
  },
  {
    label: "Activation rate",
    value: 68.4,
    delta: "+4.2%",
    note: "new users reaching value",
    tone: "emerald",
  },
  {
    label: "Retention",
    value: 91.2,
    delta: "+1.1%",
    note: "healthy accounts retained",
    tone: "violet",
  },
  {
    label: "Open tasks",
    value: 24,
    delta: "-8",
    note: "critical delivery items",
    tone: "amber",
  },
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
  { week: "W1", signups: 420, activation: 260 },
  { week: "W2", signups: 510, activation: 332 },
  { week: "W3", signups: 498, activation: 334 },
  { week: "W4", signups: 560, activation: 381 },
  { week: "W5", signups: 590, activation: 407 },
  { week: "W6", signups: 640, activation: 454 },
];

export const activityFeed = [
  {
    title: "Checkout funnel improved",
    detail: "Conversion rose by 3.2% after copy and trust badge updates.",
    time: "12 min ago",
    type: "Insight",
  },
  {
    title: "SMB onboarding experiment launched",
    detail: "Variant B is now live for 18% of qualified traffic.",
    time: "1 hr ago",
    type: "Experiment",
  },
  {
    title: "Delivery risk reduced",
    detail: "5 critical tasks moved to Done this week.",
    time: "Today",
    type: "Ops",
  },
  {
    title: "Retention alert resolved",
    detail: "Inactive segment returned to the expected range.",
    time: "Yesterday",
    type: "Health",
  },
] as const;

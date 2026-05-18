export const kpiCards = [
  {
    label: "Net revenue retention",
    value: 112.4,
    delta: "+2.1 pts",
    note: "expansion minus contraction",
    tone: "cyan",
  },
  {
    label: "Trial activation",
    value: 68.4,
    delta: "+4.2%",
    note: "accounts reaching first report",
    tone: "emerald",
  },
  {
    label: "Logo retention",
    value: 91.2,
    delta: "+1.1%",
    note: "paid accounts retained",
    tone: "violet",
  },
  {
    label: "Open escalations",
    value: 7,
    delta: "-3",
    note: "customer-facing items",
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
    title: "Checkout drop-off narrowed",
    detail: "Card validation errors fell after the billing form copy update.",
    time: "12 min ago",
    type: "Insight",
  },
  {
    title: "Self-serve onboarding cohort opened",
    detail: "The guided setup path is live for new teams under 25 seats.",
    time: "1 hr ago",
    type: "Experiment",
  },
  {
    title: "Enterprise export blocker cleared",
    detail: "CSV export parity shipped for the finance reporting segment.",
    time: "Today",
    type: "Ops",
  },
  {
    title: "Renewal risk returned to baseline",
    detail: "Usage recovered for the healthcare segment after permissions fixes.",
    time: "Yesterday",
    type: "Health",
  },
] as const;

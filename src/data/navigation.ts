export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Product", href: "/#product" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Pricing", href: "/pricing" },
  { label: "GitHub", href: "https://github.com/pskudarnov/flowpilot-dashboard", external: true },
];

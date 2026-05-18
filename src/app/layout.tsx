import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "FlowPilot — SaaS Analytics Dashboard";
const description =
  "A production-ready SaaS analytics dashboard concept for revenue, activation, retention and delivery reporting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "FlowPilot",
  title,
  description,
  keywords: ["SaaS dashboard", "Next.js portfolio", "analytics dashboard", "frontend showcase"],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "FlowPilot",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.svg"] },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-background text-zinc-100 antialiased">
        <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_18%_-8%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_85%_4%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#080a10_0%,#0b0f19_48%,#080a10_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

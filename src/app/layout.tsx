import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const siteUrl = "http://64.188.63.171:3210";
const title = "FlowPilot — SaaS Analytics Dashboard Demo";
const description =
  "A production-ready Next.js SaaS analytics dashboard demo built with TypeScript, Tailwind CSS and Recharts.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "FlowPilot",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: title }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.svg"] },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#090b12] text-zinc-100 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.08),transparent_35%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

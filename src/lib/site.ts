export const defaultSiteUrl = "https://flowpilot-demo.vercel.app";

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

  try {
    const url = new URL(rawUrl);
    return url.origin;
  } catch {
    return defaultSiteUrl;
  }
}

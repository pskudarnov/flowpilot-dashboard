import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "http://64.188.63.171:3210";
  return ["", "/dashboard", "/pricing"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));
}

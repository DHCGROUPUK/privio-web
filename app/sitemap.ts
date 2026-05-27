import type { MetadataRoute } from "next";

const base = "https://privio.dhdev.click";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#how`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#features`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#security`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#compare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}

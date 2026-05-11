import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://citizenshipnorth.com/",
      lastModified: new Date("2026-05-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://citizenshipnorth.com/citizenship-by-descent",
      lastModified: new Date("2026-05-11"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}

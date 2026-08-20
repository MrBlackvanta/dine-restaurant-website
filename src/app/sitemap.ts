import type { MetadataRoute } from "next";

import { siteUrl } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/booking"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "yearly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

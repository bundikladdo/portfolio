import type { MetadataRoute } from "next";
import { selectedWork, site } from "@/data/site";
import { isIndexable, siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable || !siteUrl) return [];
  return ["/", "/work", "/about", "/resume", ...selectedWork.map(({ slug }) => `/work/${slug}`)].map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: site.updatedAt,
  }));
}

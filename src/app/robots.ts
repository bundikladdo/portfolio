import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(isIndexable ? { allow: "/" } : { disallow: "/" }) },
    ...(isIndexable && siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}

import type { MetadataRoute } from "next";
import { caseStudies, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/work"];
  const studies = Object.keys(caseStudies).map((slug) => `/work/${slug}`);
  return [...pages, ...studies].map((path) => ({ url: `${site.url}${path}` }));
}

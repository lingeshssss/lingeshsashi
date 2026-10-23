import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL;
  if (!base) return [];
  return [
    "",
    "/about",
    "/projects",
    "/experience",
    "/resume",
    "/contact",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: new URL(path, base).href }));
}

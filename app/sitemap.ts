import type { MetadataRoute } from "next";
import { SITEMAP_SEGMENTS } from "@/lib/sitemap/config";
import { buildSitemapBySegment } from "@/lib/sitemap/entries";
import type { SitemapSegmentId } from "@/lib/sitemap/types";

/**
 * Sitemap index Gzimmo — segments séparés par type de contenu.
 *
 * /sitemap.xml          → index
 * /sitemap/pages.xml    → pages principales + FAQ
 * /sitemap/services.xml → fiches services
 * /sitemap/local.xml    → pages SEO locales (Suisse romande)
 * /sitemap/legal.xml    → mentions légales, confidentialité
 */
export async function generateSitemaps() {
  return SITEMAP_SEGMENTS.map(({ id }) => ({ id }));
}

export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const id = (await props.id) as SitemapSegmentId;
  return buildSitemapBySegment(id);
}

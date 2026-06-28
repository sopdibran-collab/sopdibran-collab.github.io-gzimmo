import { NextResponse } from "next/server";
import { SITE_URL, SITEMAP_SEGMENTS } from "@/lib/sitemap/config";
import { getLastModified } from "@/lib/sitemap/lastmod";

/**
 * Sitemap index — requis car generateSitemaps ne publie pas /sitemap.xml
 * automatiquement dans Next.js 15.
 */
export async function GET() {
  const lastmod = getLastModified(
    "app/sitemap.ts",
    "lib/sitemap/config.ts",
    "lib/sitemap/entries.ts",
  );

  const lastmodIso = lastmod.toISOString();

  const sitemapEntries = SITEMAP_SEGMENTS.map(
    ({ id }) => `  <sitemap>
    <loc>${SITE_URL}/sitemap/${id}.xml</loc>
    <lastmod>${lastmodIso}</lastmod>
  </sitemap>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

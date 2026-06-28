import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import {
  LEGAL_PAGES,
  MAIN_PAGES,
  SERVICE_PRIORITIES,
  SITE_URL,
  SITEMAP_SEGMENTS,
} from "@/lib/sitemap/config";
import { getLastModified } from "@/lib/sitemap/lastmod";
import type { SitemapEntry, SitemapSegmentId, StaticPageEntry } from "@/lib/sitemap/types";

const ROOT = process.cwd();

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** Vérifie qu'une image existe dans public/ avant inclusion image sitemap. */
function resolvePublicImages(imagePaths?: string[]): string[] | undefined {
  if (!imagePaths?.length) return undefined;

  const urls = imagePaths
    .map((relativePath) => {
      const normalized = relativePath.replace(/^\//, "");
      const fullPath = path.join(ROOT, "public", normalized);
      return fs.existsSync(fullPath) ? `${SITE_URL}/${normalized}` : null;
    })
    .filter((url): url is string => url !== null);

  return urls.length > 0 ? urls : undefined;
}

function buildStaticEntries(
  pages: StaticPageEntry[],
  lastModified: Date,
): SitemapEntry[] {
  return pages.map((page) => {
    const entry: SitemapEntry = {
      url: absoluteUrl(page.path),
      lastModified,
      priority: page.priority,
    };

    if (page.changeFrequency) {
      entry.changeFrequency = page.changeFrequency;
    }

    const images = resolvePublicImages(page.images);
    if (images) entry.images = images;

    return entry;
  });
}

function getSegmentLastModified(segmentId: SitemapSegmentId): Date {
  const segment = SITEMAP_SEGMENTS.find((s) => s.id === segmentId);
  return getLastModified(...(segment?.sourceFiles ?? []));
}

export function buildPagesSitemap(): MetadataRoute.Sitemap {
  return buildStaticEntries(MAIN_PAGES, getSegmentLastModified("pages"));
}

export function buildLegalSitemap(): MetadataRoute.Sitemap {
  return buildStaticEntries(LEGAL_PAGES, getSegmentLastModified("legal"));
}

export function buildServicesSitemap(): MetadataRoute.Sitemap {
  const lastModified = getSegmentLastModified("services");

  return services.map((service) => {
    const entry: SitemapEntry = {
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      priority: SERVICE_PRIORITIES[service.slug] ?? 0.8,
      changeFrequency: "monthly",
    };

    const images = resolvePublicImages([service.image.src]);
    if (images) entry.images = images;

    return entry;
  });
}

export function buildLocalSitemap(): MetadataRoute.Sitemap {
  const lastModified = getSegmentLastModified("local");

  return locations.map((location) => ({
    url: absoluteUrl(`/seo/${location.slug}`),
    lastModified,
    priority: location.priority,
    changeFrequency: "monthly" as const,
  }));
}

export function buildSitemapBySegment(
  segmentId: SitemapSegmentId,
): MetadataRoute.Sitemap {
  switch (segmentId) {
    case "pages":
      return buildPagesSitemap();
    case "services":
      return buildServicesSitemap();
    case "local":
      return buildLocalSitemap();
    case "legal":
      return buildLegalSitemap();
    default: {
      const _exhaustive: never = segmentId;
      return _exhaustive;
    }
  }
}

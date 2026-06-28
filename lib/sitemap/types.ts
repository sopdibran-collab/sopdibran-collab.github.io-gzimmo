import type { MetadataRoute } from "next";

/** Segments du sitemap index — un fichier XML par type de contenu. */
export type SitemapSegmentId = "pages" | "services" | "local" | "legal";

export type SitemapSegment = {
  id: SitemapSegmentId;
  /** Fichiers sources pour calculer lastmod automatiquement au build. */
  sourceFiles: string[];
};

export type StaticPageEntry = {
  path: string;
  priority: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** Chemins relatifs à public/ pour image sitemap (uniquement si le fichier existe). */
  images?: string[];
};

export type SitemapEntry = MetadataRoute.Sitemap[number];

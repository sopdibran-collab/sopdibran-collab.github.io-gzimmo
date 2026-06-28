import { company } from "@/data/company";
import type { SitemapSegment, StaticPageEntry } from "@/lib/sitemap/types";

export const SITE_URL = company.url;

/** Segments exposés dans le sitemap index (/sitemap.xml). */
export const SITEMAP_SEGMENTS: SitemapSegment[] = [
  {
    id: "pages",
    sourceFiles: [
      "app/page.tsx",
      "app/services/page.tsx",
      "app/zones/page.tsx",
      "app/contact/page.tsx",
      "app/a-propos/page.tsx",
      "app/faq/page.tsx",
      "app/realisations/page.tsx",
      "data/content.ts",
      "data/faq.ts",
      "data/navigation.ts",
    ],
  },
  {
    id: "services",
    sourceFiles: ["data/services.ts", "app/services/[slug]/page.tsx"],
  },
  {
    id: "local",
    sourceFiles: ["data/locations.ts", "app/seo/[slug]/page.tsx"],
  },
  {
    id: "legal",
    sourceFiles: [
      "app/mentions-legales/page.tsx",
      "app/politique-confidentialite/page.tsx",
    ],
  },
];

/**
 * Pages principales indexables — hors services, locales et légales.
 * FAQ incluse ici (page unique, pas de sous-pages).
 */
export const MAIN_PAGES: StaticPageEntry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.88, changeFrequency: "monthly" },
  { path: "/zones", priority: 0.88, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.82, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.82, changeFrequency: "monthly" },
  { path: "/realisations", priority: 0.75, changeFrequency: "monthly" },
];

/** Pages légales — indexables mais faible priorité crawl. */
export const LEGAL_PAGES: StaticPageEntry[] = [
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  {
    path: "/politique-confidentialite",
    priority: 0.2,
    changeFrequency: "yearly",
  },
];

/**
 * Priorités services selon intention transactionnelle locale.
 * Clés = slug dans data/services.ts
 */
export const SERVICE_PRIORITIES: Record<string, number> = {
  "nettoyage-bureaux": 0.88,
  "nettoyage-fin-de-bail": 0.88,
  "nettoyage-appartements": 0.85,
  "nettoyage-maisons": 0.85,
  "nettoyage-apres-chantier": 0.85,
  "entretien-locaux": 0.82,
  "nettoyage-vitres": 0.8,
};

/** Routes explicitement exclues du sitemap (noindex, admin, test, etc.). */
export const EXCLUDED_PATH_PREFIXES = [
  "/api/",
  "/admin/",
  "/_next/",
] as const;

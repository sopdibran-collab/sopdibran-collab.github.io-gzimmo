import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { getLocationPath } from "@/lib/location-paths";
import { getServicePath } from "@/lib/service-paths";

/**
 * Dates are frozen from git history (`git log -1 --format=%cI` on each
 * page’s source files). Vercel’s shallow clone is not a reliable clock.
 */
function toLastModified(iso: string): Date {
  const date = new Date(iso);
  const now = new Date();
  return date > now ? now : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;

  const staticRoutes = [
    { path: "", priority: 1, updatedAt: "2026-10-14T22:28:42+00:00" },
    { path: "/zones", priority: 0.9, updatedAt: "2026-10-14T22:28:42+00:00" },
    { path: "/services", priority: 0.85, updatedAt: "2026-10-14T22:28:42+00:00" },
    { path: "/contact", priority: 0.85, updatedAt: "2026-10-14T22:28:42+00:00" },
    { path: "/a-propos", priority: 0.8, updatedAt: "2026-10-14T22:28:42+00:00" },
    { path: "/avis", priority: 0.75, updatedAt: "2026-10-13T09:41:15+00:00" },
    { path: "/faq", priority: 0.8, updatedAt: "2026-10-14T22:28:42+00:00" },
    { path: "/realisations", priority: 0.7, updatedAt: "2026-10-13T09:41:15+00:00" },
    { path: "/mentions-legales", priority: 0.3, updatedAt: "2026-10-13T08:40:54+00:00" },
    { path: "/politique-confidentialite", priority: 0.3, updatedAt: "2026-10-13T08:40:54+00:00" },
  ].map(({ path, priority, updatedAt }) => ({
    url: `${base}${path}`,
    lastModified: toLastModified(updatedAt),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}${getServicePath(service.slug)}`,
    lastModified: toLastModified(service.updatedAt),
    changeFrequency: "monthly" as const,
    priority:
      service.slug === "nettoyage-fin-de-bail" || service.slug === "nettoyage-apres-chantier"
        ? 0.95
        : 0.8,
  }));

  const localRoutes = locations.map((location) => ({
    url: `${base}${getLocationPath(location.slug)}`,
    lastModified: toLastModified(location.updatedAt),
    changeFrequency: "monthly" as const,
    priority: location.priority,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localRoutes];
}

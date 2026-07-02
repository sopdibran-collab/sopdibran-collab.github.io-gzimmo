import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { getServicePath } from "@/lib/service-paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/zones", priority: 0.9 },
    { path: "/services", priority: 0.85 },
    { path: "/contact", priority: 0.85 },
    { path: "/a-propos", priority: 0.8 },
    { path: "/faq", priority: 0.8 },
    { path: "/realisations", priority: 0.7 },
    { path: "/mentions-legales", priority: 0.3 },
    { path: "/politique-confidentialite", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}${getServicePath(service.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "nettoyage-fin-de-bail" ? 0.95 : 0.8,
  }));

  const localRoutes = locations.map((location) => ({
    url: `${base}/seo/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: location.priority,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localRoutes];
}

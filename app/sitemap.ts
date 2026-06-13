import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;

  const staticRoutes = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/contact",
    "/faq",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const localRoutes = locations.map((location) => ({
    url: `${base}/seo/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localRoutes];
}

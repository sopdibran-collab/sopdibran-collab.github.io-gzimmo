import { services } from "@/data/services";

/** URL racine SEO — une intention = une URL (ex. /nettoyage-fin-de-bail). */
export function getServicePath(slug: string) {
  return `/${slug}`;
}

export const serviceSlugs = services.map((service) => service.slug);

export function isServiceSlug(slug: string) {
  return serviceSlugs.includes(slug);
}

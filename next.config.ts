import type { NextConfig } from "next";

const serviceSlugs = [
  "entretien-locaux",
  "nettoyage-appartements",
  "nettoyage-maisons",
  "nettoyage-apres-chantier",
  "nettoyage-fin-de-bail",
  "nettoyage-bureaux",
  "nettoyage-vitres",
] as const;

const serviceRedirects = serviceSlugs.map((slug) => ({
  source: `/services/${slug}`,
  destination: `/${slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return serviceRedirects;
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const serviceSlugs = [
  "entretien-locaux",
  "nettoyage-appartements",
  "nettoyage-maisons",
  "nettoyage-apres-chantier",
  "nettoyage-fin-de-bail",
  "nettoyage-bureaux",
  "nettoyage-vitres",
  "conciergerie",
] as const;

const serviceRedirects = serviceSlugs.map((slug) => ({
  source: `/services/${slug}`,
  destination: `/${slug}`,
  permanent: true,
}));

/** Anciennes URLs locales sans page dédiée → hub zones (pas de pages reconstruites). */
const outOfZoneRedirects = [
  // Genève (ASCII + UTF-8 + percent-encoding)
  "/seo/nettoyage-geneve",
  "/seo/nettoyage-genève",
  "/seo/nettoyage-gen%C3%A8ve",
  "/geneve",
  "/genève",
  "/gen%C3%A8ve",
  "/nettoyage-fin-de-bail-geneve",
  "/nettoyage-fin-de-bail-genève",
  "/nettoyage-fin-de-bail-gen%C3%A8ve",
  // Valais / Sion / villes VS
  "/seo/nettoyage-sion",
  "/seo/nettoyage-monthey",
  "/seo/nettoyage-sierre",
  "/seo/nettoyage-martigny",
  "/seo/nettoyage-valais",
  "/valais",
].map((source) => ({
  source,
  destination: "/zones",
  permanent: true,
}));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gzimmo.ch" }],
        destination: "https://gzimmo.ch/:path*",
        permanent: true,
      },
      {
        source: "/entreprise-nettoyage-romont",
        destination: "/seo/nettoyage-romont",
        permanent: true,
      },
      {
        source: "/valais/:path*",
        destination: "/zones",
        permanent: true,
      },
      ...outOfZoneRedirects,
      ...serviceRedirects,
    ];
  },
};

export default nextConfig;

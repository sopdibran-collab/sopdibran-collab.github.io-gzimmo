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

/** Pages locales trop minces : 301 vers la page forte ou le hub /zones. */
const thinLocalRedirects = [
  { source: "/seo/nettoyage-estavayer", destination: "/seo/nettoyage-romont" },
  { source: "/seo/nettoyage-chatel-saint-denis", destination: "/seo/nettoyage-romont" },
  { source: "/seo/nettoyage-vuisternens-devant-romont", destination: "/seo/nettoyage-romont" },
  { source: "/seo/nettoyage-ursy", destination: "/seo/nettoyage-romont" },
  { source: "/seo/nettoyage-payerne", destination: "/zones" },
  { source: "/seo/nettoyage-yverdon-les-bains", destination: "/zones" },
  { source: "/seo/nettoyage-morges", destination: "/zones" },
  { source: "/seo/nettoyage-nyon", destination: "/zones" },
].map((redirect) => ({ ...redirect, permanent: true as const }));

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
      ...thinLocalRedirects,
      ...serviceRedirects,
    ];
  },
};

export default nextConfig;

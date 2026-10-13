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

/**
 * Anciennes pages /seo/<ville> → URL canonique, sans chaîne.
 * Les communes sans page propre restent listées avant le rattrapage /seo/:path*.
 */
const seoCityRedirects = [
  { source: "/seo/nettoyage-romont", destination: "/nettoyage-romont" },
  { source: "/seo/nettoyage-fribourg", destination: "/nettoyage-fribourg" },
  { source: "/seo/nettoyage-bulle", destination: "/nettoyage-bulle" },
  { source: "/seo/nettoyage-lausanne", destination: "/nettoyage-lausanne" },
  { source: "/seo/nettoyage-neuchatel", destination: "/nettoyage-neuchatel" },
  { source: "/seo/nettoyage-estavayer", destination: "/nettoyage-romont" },
  { source: "/seo/nettoyage-chatel-saint-denis", destination: "/nettoyage-romont" },
  { source: "/seo/nettoyage-vuisternens-devant-romont", destination: "/nettoyage-romont" },
  { source: "/seo/nettoyage-ursy", destination: "/nettoyage-romont" },
  { source: "/seo/nettoyage-payerne", destination: "/zones" },
  { source: "/seo/nettoyage-yverdon-les-bains", destination: "/zones" },
  { source: "/seo/nettoyage-morges", destination: "/zones" },
  { source: "/seo/nettoyage-nyon", destination: "/zones" },
].map((redirect) => ({ ...redirect, permanent: true as const }));

/** Doublons d'intention : une page ville, une page service fin de bail. */
const duplicateIntentRedirects = [
  { source: "/entreprise-nettoyage-romont", destination: "/nettoyage-romont" },
  { source: "/nettoyage-fin-de-bail-romont", destination: "/nettoyage-romont" },
  { source: "/nettoyage-fin-de-bail-fribourg", destination: "/nettoyage-fribourg" },
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
        source: "/valais/:path*",
        destination: "/zones",
        permanent: true,
      },
      ...outOfZoneRedirects,
      ...seoCityRedirects,
      ...duplicateIntentRedirects,
      {
        source: "/seo",
        destination: "/zones",
        permanent: true,
      },
      {
        source: "/seo/:path*",
        destination: "/zones",
        permanent: true,
      },
      ...serviceRedirects,
    ];
  },
};

export default nextConfig;

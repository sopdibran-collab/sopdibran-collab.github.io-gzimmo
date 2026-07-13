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
        source: "/seo/nettoyage-sion",
        destination: "/zones",
        permanent: true,
      },
      ...serviceRedirects,
    ];
  },
};

export default nextConfig;

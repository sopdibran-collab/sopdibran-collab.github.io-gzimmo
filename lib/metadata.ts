import type { Metadata } from "next";
import { company, formatAddress } from "@/data/company";

const defaultTitle = `${company.name} — Nettoyage professionnel Romont & Suisse romande`;
const defaultDescription =
    "Gzimmo Sàrl, Route de Raboud 8. Équipe expérimentée, fin de bail, bureaux, après chantier, conciergerie. Priorité Fribourg & Vaud. Devis gratuit — 076 214 23 42.";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  geo?: { placename: string; region: string; lat: number; lng: number };
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
  keywords = [],
  geo,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} — ${company.name}` : defaultTitle;
  const url = `${company.url}${path}`;

  const defaultKeywords = [
    "nettoyage professionnel",
    "entreprise de nettoyage",
    "Romont",
    "Suisse romande",
    "Fribourg",
    "fin de bail",
    "nettoyage bureaux",
    "devis gratuit",
    "Gzimmo",
  ];

  const geoMeta = geo ?? {
    placename: company.address.city,
    region: `CH-${company.address.region}`,
    lat: 46.6917,
    lng: 6.9111,
  };

  return {
    title: pageTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(company.url),
    alternates: { canonical: path || "/" },
    openGraph: {
      type: "website",
      locale: "fr_CH",
      url,
      siteName: company.name,
      title: pageTitle,
      description,
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: `${company.name} — Nettoyage professionnel en Suisse romande` }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og-default.jpg"],
    },
    robots: { index: true, follow: true },
    other: {
      "geo.region": geoMeta.region,
      "geo.placename": geoMeta.placename,
      "geo.position": `${geoMeta.lat};${geoMeta.lng}`,
      ICBM: `${geoMeta.lat}, ${geoMeta.lng}`,
    },
  };
}

export { defaultDescription, defaultTitle };

export function localPageMetadata(location: {
  title: string;
  description: string;
  slug: string;
  city: string;
  canton: string;
  geo: { latitude: number; longitude: number };
}) {
  return createMetadata({
    title: location.title,
    description: location.description,
    path: `/seo/${location.slug}`,
    keywords: [
      `nettoyage ${location.city}`,
      `entreprise nettoyage ${location.city}`,
      `nettoyage professionnel ${location.canton}`,
      "fin de bail",
      "nettoyage bureaux",
    ],
    geo: {
      placename: location.city,
      region: `CH-${location.canton}`,
      lat: location.geo.latitude,
      lng: location.geo.longitude,
    },
  });
}

export function companyNapLine() {
  return `${company.legalName} — ${formatAddress()} — ${company.phoneDisplay}`;
}

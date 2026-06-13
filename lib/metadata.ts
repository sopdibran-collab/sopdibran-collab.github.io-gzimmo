import type { Metadata } from "next";
import { company } from "@/data/company";

const defaultTitle = `${company.name} — ${company.tagline}`;
const defaultDescription =
  "Gzimmo Sàrl : nettoyage professionnel en Suisse romande. Plus de 15 ans d'expérience, intervention rapide, devis gratuit. Romont (FR).";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} — ${company.name}` : defaultTitle;
  const url = `${company.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(company.url),
    alternates: { canonical: path || "/" },
    openGraph: {
      type: "website",
      locale: "fr_CH",
      url,
      siteName: company.name,
      title: pageTitle,
      description,
      images: [{ url: "/horizontal.png", width: 1200, height: 630, alt: company.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export { defaultDescription, defaultTitle };

import { notFound } from "next/navigation";
import { getGeoServiceLanding, getGeoServicePath } from "@/data/geo-service-landings";
import { GeoServiceLandingPage } from "@/components/seo/GeoServiceLandingPage";
import { createMetadata } from "@/lib/metadata";

type Props = {
  path: string;
};

export function createGeoServiceLandingMetadata(path: string) {
  const landing = getGeoServiceLanding(path);
  if (!landing) return {};

  return createMetadata({
    title: landing.metaTitle,
    description: landing.metaDescription,
    path: getGeoServicePath(path),
    keywords: [
      `nettoyage fin de bail ${landing.city}`,
      `fin de bail ${landing.city}`,
      landing.city,
      landing.cantonName,
      "devis gratuit",
      "garantie régie",
    ],
    geo: {
      placename: landing.city,
      region: `CH-${landing.canton}`,
      lat: landing.geo.latitude,
      lng: landing.geo.longitude,
    },
  });
}

export function GeoServiceLandingRoute({ path }: Props) {
  const landing = getGeoServiceLanding(path);
  if (!landing) notFound();
  return <GeoServiceLandingPage landing={landing} />;
}

import {
  createGeoServiceLandingMetadata,
  GeoServiceLandingRoute,
} from "@/lib/geo-service-route";

export const metadata = createGeoServiceLandingMetadata("nettoyage-fin-de-bail-fribourg");

export default function NettoyageFinDeBailFribourgPage() {
  return <GeoServiceLandingRoute path="nettoyage-fin-de-bail-fribourg" />;
}

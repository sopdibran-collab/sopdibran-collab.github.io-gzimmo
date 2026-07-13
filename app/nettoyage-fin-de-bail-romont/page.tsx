import {
  createGeoServiceLandingMetadata,
  GeoServiceLandingRoute,
} from "@/lib/geo-service-route";

export const metadata = createGeoServiceLandingMetadata("nettoyage-fin-de-bail-romont");

export default function NettoyageFinDeBailRomontPage() {
  return <GeoServiceLandingRoute path="nettoyage-fin-de-bail-romont" />;
}

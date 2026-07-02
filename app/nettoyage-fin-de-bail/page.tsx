import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("nettoyage-fin-de-bail");

export default function NettoyageFinDeBailPage() {
  return <ServiceLandingRoute slug="nettoyage-fin-de-bail" />;
}

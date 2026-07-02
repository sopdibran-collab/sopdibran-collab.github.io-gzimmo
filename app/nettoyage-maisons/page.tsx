import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("nettoyage-maisons");

export default function NettoyageMaisonsPage() {
  return <ServiceLandingRoute slug="nettoyage-maisons" />;
}

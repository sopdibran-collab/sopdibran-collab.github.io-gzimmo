import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("nettoyage-vitres");

export default function NettoyageVitresPage() {
  return <ServiceLandingRoute slug="nettoyage-vitres" />;
}

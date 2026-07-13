import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("nettoyage-bureaux");

export default function NettoyageBureauxPage() {
  return <ServiceLandingRoute slug="nettoyage-bureaux" />;
}

import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("nettoyage-appartements");

export default function NettoyageAppartementsPage() {
  return <ServiceLandingRoute slug="nettoyage-appartements" />;
}

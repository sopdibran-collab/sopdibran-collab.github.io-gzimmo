import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("nettoyage-apres-chantier");

export default function NettoyageApresChantierPage() {
  return <ServiceLandingRoute slug="nettoyage-apres-chantier" />;
}

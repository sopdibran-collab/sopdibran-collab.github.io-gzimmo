import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("entretien-locaux");

export default function EntretienLocauxPage() {
  return <ServiceLandingRoute slug="entretien-locaux" />;
}

import {
  createServiceLandingMetadata,
  ServiceLandingRoute,
} from "@/lib/service-landing-route";

export const metadata = createServiceLandingMetadata("conciergerie");

export default function ConciergeriePage() {
  return <ServiceLandingRoute slug="conciergerie" />;
}

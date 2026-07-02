import { notFound } from "next/navigation";
import { getServiceLanding } from "@/data/service-landings";
import { ServiceLandingPage } from "@/components/seo/ServiceLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getServicePath } from "@/lib/service-paths";

type Props = {
  slug: string;
};

export function createServiceLandingMetadata(slug: string) {
  const landing = getServiceLanding(slug);
  if (!landing) return {};

  return createMetadata({
    title: landing.metaTitle,
    description: landing.metaDescription,
    path: getServicePath(slug),
    keywords: [landing.slug.replace(/-/g, " "), "devis gratuit", "Suisse romande"],
  });
}

export function ServiceLandingRoute({ slug }: Props) {
  const landing = getServiceLanding(slug);
  if (!landing) notFound();
  return <ServiceLandingPage landing={landing} />;
}

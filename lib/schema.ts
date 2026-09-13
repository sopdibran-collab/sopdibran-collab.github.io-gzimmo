import { company, formatAddress, teamExperienceLabel } from "@/data/company";
import { faqItems, normalizeFaqItems, type FaqContent, type FaqItem } from "@/data/faq";
import {
  featuredGoogleReview,
  googleBusinessPublicRating,
  type GoogleReview,
} from "@/data/google-reviews";
import { extraSchemaCities } from "@/data/intervention-zones";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";

const romontGeo = {
  "@type": "GeoCoordinates" as const,
  latitude: 46.6917,
  longitude: 6.9111,
};

/** Zone : Fribourg, Vaud, Neuchâtel. */
export function priorityAreaServed() {
  const fromLandings = locations
    .filter((location) => location.canton === "FR" || location.canton === "VD" || location.canton === "NE")
    .map((location) => ({
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.cantonName,
      },
    }));

  const extras = extraSchemaCities.map((city) => ({
    "@type": "City",
    name: city.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: city.cantonName,
    },
  }));

  return [
    { "@type": "AdministrativeArea", name: "Canton de Fribourg" },
    { "@type": "AdministrativeArea", name: "Canton de Vaud" },
    { "@type": "AdministrativeArea", name: "Canton de Neuchâtel" },
    ...fromLandings,
    ...extras,
  ];
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${company.url}/#organization`,
    name: company.legalName,
    alternateName: "Gzimmo",
    description: `${company.tagline}. ${teamExperienceLabel()}.`,
    url: company.url,
    email: company.email,
    telephone: company.phone,
    image: `${company.url}/horizontal.png`,
    logo: `${company.url}/icon_only.png`,
    priceRange: "$$",
    currenciesAccepted: "CHF",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: `CH-${company.address.region}`,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: romontGeo,
    areaServed: priorityAreaServed(),
    knowsAbout: [
      ...services.map((s) => s.title),
      "Nettoyage après rénovation",
      "Nettoyage après travaux",
      "Nettoyage après construction",
      "Nettoyage de fin de chantier",
      "État des lieux",
      "Remise des clés",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de nettoyage Gzimmo",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "CleaningService",
          name: service.title,
          description: service.description,
          url: `${company.url}${getServicePath(service.slug)}`,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "customer service",
      areaServed: "CH",
      availableLanguage: ["French"],
    },
    hasMap: company.googleMapsUrl,
    sameAs: [company.googleMapsUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.url}/#website`,
    name: company.name,
    url: company.url,
    description: company.tagline,
    publisher: { "@id": `${company.url}/#organization` },
    inLanguage: "fr-CH",
  };
}

export function faqPageSchema(items: readonly (FaqItem | FaqContent)[] = faqItems) {
  const normalized = items.every((item) => "id" in item)
    ? (items as FaqItem[])
    : normalizeFaqItems(items);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalized.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(
  service: (typeof services)[number],
  path?: string,
  options?: { serviceTypes?: string[] },
) {
  const servicePath = path ?? getServicePath(service.slug);
  const serviceTypes = options?.serviceTypes?.length
    ? options.serviceTypes
    : [service.title];

  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: service.title,
    description: service.description,
    url: `${company.url}${servicePath}`,
    provider: { "@id": `${company.url}/#organization` },
    areaServed: priorityAreaServed(),
    serviceType: serviceTypes,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${company.url}/contact`,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: company.phone,
        contactType: "customer service",
        areaServed: "CH",
        availableLanguage: ["French"],
      },
    },
  };
}

export function zonesItemListSchema() {
  const zoneLocations = locations.filter(
    (location) => location.canton === "FR" || location.canton === "VD" || location.canton === "NE",
  );

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zones d'intervention Gzimmo — Fribourg, Vaud, Neuchâtel",
    itemListElement: zoneLocations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location.title,
      url: `${company.url}/seo/${location.slug}`,
    })),
  };
}

export function locationPageSchema(location: (typeof locations)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${company.url}/seo/${location.slug}`,
    name: location.title,
    description: location.description,
    url: `${company.url}/seo/${location.slug}`,
    inLanguage: "fr-CH",
    isPartOf: { "@id": `${company.url}/#website` },
    about: {
      "@type": "Place",
      name: location.city,
      address: {
        "@type": "PostalAddress",
        addressLocality: location.city,
        addressRegion: `CH-${location.canton}`,
        addressCountry: "CH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.geo.latitude,
        longitude: location.geo.longitude,
      },
    },
    mainEntity: { "@id": `${company.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.url}${item.path}`,
    })),
  };
}

export function organizationJsonLd() {
  return [websiteSchema(), localBusinessSchema()];
}

export function googleReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${company.url}/#organization` },
    reviewBody: featuredGoogleReview.quote,
    author: {
      "@type": "Person",
      name: featuredGoogleReview.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
    url: featuredGoogleReview.url,
    reviewRating: {
      "@type": "Rating",
      ratingValue: featuredGoogleReview.rating ?? 5,
      bestRating: 5,
    },
  };
}

/**
 * LocalBusiness + avis affichés + AggregateRating Google public.
 * `aggregateRating` = chiffres Google pile-à-pile (`googleBusinessPublicRating`),
 * jamais dérivés de `reviews.length` (sous-ensemble UI ≠ total Google).
 */
export function googleReviewsLocalBusinessSchema(reviews: readonly GoogleReview[]) {
  return {
    ...localBusinessSchema(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleBusinessPublicRating.ratingValue,
      reviewCount: googleBusinessPublicRating.reviewCount,
      bestRating: googleBusinessPublicRating.bestRating,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: review.author ?? "Client Google",
      },
      url: review.url,
    })),
  };
}

export function fullAddressString() {
  return formatAddress();
}

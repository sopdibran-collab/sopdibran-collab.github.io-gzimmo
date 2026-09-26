import { company, formatAddress, teamExperienceLabel } from "@/data/company";
import { entityKnowsAbout, entitySameAs } from "@/data/entity";
import { faqItems, normalizeFaqItems, type FaqContent, type FaqItem } from "@/data/faq";
import { extraSchemaCities } from "@/data/intervention-zones";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";

const romontGeo = {
  "@type": "GeoCoordinates" as const,
  latitude: 46.6917,
  longitude: 6.9111,
};

/**
 * Couverture commerciale : toute la Suisse romande (siège Romont).
 * Représentation raisonnable : la Romandie en tête, puis le détail
 * vérifiable (cantons FR/VD/NE, villes avec pages et preuves).
 * Pas de liste de 500 communes.
 */
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
    { "@type": "AdministrativeArea", name: "Suisse romande" },
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
    knowsAbout: [...services.map((s) => s.title), ...entityKnowsAbout],
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
    sameAs: [...entitySameAs],
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

export function fullAddressString() {
  return formatAddress();
}

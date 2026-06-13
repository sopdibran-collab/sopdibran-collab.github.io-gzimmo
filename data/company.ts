export const company = {
  name: "Gzimmo Sàrl",
  legalName: "Gzimmo Sàrl",
  tagline: "Nettoyage professionnel en Suisse romande",
  email: "info@gzimmo.ch",
  phone: "+41762142342",
  phoneDisplay: "076 214 23 42",
  address: {
    street: "Route de Raboud 8",
    city: "Romont",
    region: "FR",
    postalCode: "1680",
    country: "CH",
  },
  url: "https://gzimmo.ch",
  areaServed: "Suisse romande",
  /** Expérience cumulée des collaborateurs dans le nettoyage — pas l'ancienneté de l'entreprise */
  teamExperienceYears: 15,
} as const;

export function formatAddress() {
  const { street, postalCode, city, region } = company.address;
  return `${street}, ${postalCode} ${city} ${region}`;
}

export function teamExperienceLabel(short = false) {
  if (short) {
    return `Plus de ${company.teamExperienceYears} ans d'expérience dans le nettoyage`;
  }
  return `Notre équipe cumule plus de ${company.teamExperienceYears} ans d'expérience dans le nettoyage professionnel`;
}

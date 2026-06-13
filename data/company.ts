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
  experienceYears: 15,
  foundedYear: 2010,
} as const;

export function formatAddress() {
  const { street, postalCode, city, region } = company.address;
  return `${street}, ${postalCode} ${city} ${region}`;
}

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
  googleMapsUrl: "https://maps.app.goo.gl/nV2nY4Pkt5oSB7WQ8",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722146.2448747047!2d7.2172082500000005!3d46.512005599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4626471abee245df%3A0x3e99c98bf090d593!2sGzimmo%20S%C3%A0rl!5e1!3m2!1sfr!2sch!4v1781389480796!5m2!1sfr!2sch",
  areaServed: "Romont, canton de Fribourg et canton de Vaud",
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

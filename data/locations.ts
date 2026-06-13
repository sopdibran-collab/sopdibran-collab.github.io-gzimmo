export type Location = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
};

export const locations: Location[] = [
  {
    slug: "nettoyage-lausanne",
    city: "Lausanne",
    title: "Nettoyage professionnel à Lausanne",
    description:
      "Gzimmo intervient à Lausanne pour l'entretien de locaux, bureaux, appartements et nettoyages spécialisés.",
    intro:
      "Basés à Romont, nous couvrons Lausanne et l'ensemble de la Suisse romande avec la même exigence de précision.",
  },
  {
    slug: "nettoyage-geneve",
    city: "Genève",
    title: "Nettoyage professionnel à Genève",
    description:
      "Service de nettoyage professionnel à Genève : bureaux, appartements, fin de bail et après chantier.",
    intro:
      "Une équipe expérimentée, des produits de qualité et une intervention rapide dans le canton de Genève.",
  },
  {
    slug: "nettoyage-fribourg",
    city: "Fribourg",
    title: "Nettoyage professionnel à Fribourg",
    description:
      "Nettoyage professionnel à Fribourg et environs. Devis gratuit, intervention soignée.",
    intro:
      "Notre siège à Romont nous permet d'intervenir rapidement dans tout le canton de Fribourg.",
  },
  {
    slug: "nettoyage-neuchatel",
    city: "Neuchâtel",
    title: "Nettoyage professionnel à Neuchâtel",
    description:
      "Entretien de locaux et nettoyage spécialisé à Neuchâtel. Équipe expérimentée, devis gratuit.",
    intro:
      "Un service discret et minutieux pour les particuliers et entreprises du canton de Neuchâtel.",
  },
  {
    slug: "nettoyage-sion",
    city: "Sion",
    title: "Nettoyage professionnel à Sion",
    description:
      "Nettoyage professionnel à Sion et en Valais romand. Devis gratuit sous 24h.",
    intro:
      "Gzimmo assure des prestations rigoureuses dans tout le Valais romand.",
  },
  {
    slug: "nettoyage-yverdon-les-bains",
    city: "Yverdon-les-Bains",
    title: "Nettoyage professionnel à Yverdon-les-Bains",
    description:
      "Nettoyage d'appartements, bureaux et locaux à Yverdon-les-Bains.",
    intro:
      "Intervention rapide dans la région d'Yverdon pour un résultat impeccable.",
  },
  {
    slug: "nettoyage-morges",
    city: "Morges",
    title: "Nettoyage professionnel à Morges",
    description:
      "Service de nettoyage professionnel à Morges et la Côte vaudoise.",
    intro:
      "Un accompagnement fiable pour les particuliers et professionnels de Morges.",
  },
  {
    slug: "nettoyage-nyon",
    city: "Nyon",
    title: "Nettoyage professionnel à Nyon",
    description:
      "Nettoyage professionnel à Nyon : entretien régulier et prestations ponctuelles.",
    intro:
      "Des interventions planifiées avec précision pour les habitants et entreprises de Nyon.",
  },
  {
    slug: "nettoyage-bulle",
    city: "Bulle",
    title: "Nettoyage professionnel à Bulle",
    description:
      "Nettoyage de locaux et fin de bail à Bulle et en Gruyère.",
    intro:
      "Gzimmo couvre la Gruyère avec le même niveau d'exigence qu'à Romont.",
  },
  {
    slug: "nettoyage-payerne",
    city: "Payerne",
    title: "Nettoyage professionnel à Payerne",
    description:
      "Nettoyage professionnel à Payerne et en Broye vaudoise.",
    intro:
      "Un service flexible et soigné pour la région de Payerne.",
  },
  {
    slug: "nettoyage-romont",
    city: "Romont",
    title: "Nettoyage professionnel à Romont",
    description:
      "Entreprise de nettoyage basée à Romont (FR). Intervention dans toute la Suisse romande.",
    intro:
      "Depuis Romont, Gzimmo assure un service de proximité porté par une équipe expérimentée dans le nettoyage professionnel.",
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

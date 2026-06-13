export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "entretien-locaux",
    title: "Entretien de locaux",
    shortTitle: "Entretien de locaux",
    description:
      "Entretien régulier de locaux professionnels et commerciaux en Suisse romande.",
    intro:
      "Un entretien planifié, discret et rigoureux pour des espaces qui restent impeccables au quotidien.",
    benefits: [
      "Planning adapté à vos horaires",
      "Intervention discrète et efficace",
      "Finitions soignées à chaque passage",
    ],
  },
  {
    slug: "nettoyage-appartements",
    title: "Nettoyage d'appartements",
    shortTitle: "Nettoyage d'appartements",
    description:
      "Nettoyage complet d'appartements pour particuliers et régies en Suisse romande.",
    intro:
      "Des appartements remis en ordre avec précision — surfaces, sols et détails traités avec soin.",
    benefits: [
      "Approche minutieuse pièce par pièce",
      "Produits professionnels adaptés",
      "Résultat visible dès la première visite",
    ],
  },
  {
    slug: "nettoyage-maisons",
    title: "Nettoyage de maisons",
    shortTitle: "Nettoyage de maisons",
    description:
      "Nettoyage de maisons individuelles, du rez-de-chaussée aux espaces de vie.",
    intro:
      "Un service complet pour des intérieurs qui respirent la clarté et le calme.",
    benefits: [
      "Prise en charge de tous les volumes",
      "Attention particulière aux matériaux",
      "Équipe expérimentée et fiable",
    ],
  },
  {
    slug: "nettoyage-apres-chantier",
    title: "Nettoyage après chantier",
    shortTitle: "Nettoyage après chantier",
    description:
      "Remise en état après travaux : poussières, résidus et finitions propres.",
    intro:
      "Nous transformons un chantier en espace prêt à être habité ou livré.",
    benefits: [
      "Élimination des poussières fines",
      "Vitres, sols et surfaces traités",
      "Intervention rapide après travaux",
    ],
  },
  {
    slug: "nettoyage-fin-de-bail",
    title: "Nettoyage fin de bail",
    shortTitle: "Nettoyage fin de bail",
    description:
      "Nettoyage de fin de bail conforme aux exigences des régies et propriétaires.",
    intro:
      "Un état des lieux facilité grâce à un nettoyage complet et méthodique.",
    benefits: [
      "Checklist rigoureuse",
      "Respect des standards de restitution",
      "Devis clair avant intervention",
    ],
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage de bureaux",
    shortTitle: "Nettoyage de bureaux",
    description:
      "Entretien de bureaux et espaces de travail pour entreprises en Suisse romande.",
    intro:
      "Des espaces de travail propres, silencieux dans leur exécution, précis dans le résultat.",
    benefits: [
      "Horaires flexibles",
      "Confidentialité et discrétion",
      "Environnement sain pour vos équipes",
    ],
  },
  {
    slug: "nettoyage-vitres",
    title: "Nettoyage de vitres",
    shortTitle: "Nettoyage de vitres",
    description:
      "Nettoyage de vitres intérieures et extérieures pour particuliers et professionnels.",
    intro:
      "Des vitres impeccables, sans traces — la lumière retrouve toute sa place.",
    benefits: [
      "Techniques professionnelles sans rayures",
      "Accès sécurisé en hauteur",
      "Résultat net et durable",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

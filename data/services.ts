export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  benefits: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition: string;
  };
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
    image: {
      src: "/images/services/entretien-locaux.webp",
      alt: "Entretien professionnel de locaux commerciaux",
      width: 1500,
      height: 919,
      objectPosition: "center 45%",
    },
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
    image: {
      src: "/images/services/nettoyage-appartements.webp",
      alt: "Nettoyage d'appartement soigné",
      width: 1500,
      height: 1000,
      objectPosition: "center 45%",
    },
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
    image: {
      src: "/images/services/nettoyage-maisons.webp",
      alt: "Nettoyage de maison individuelle",
      width: 1500,
      height: 1000,
      objectPosition: "center 45%",
    },
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
    image: {
      src: "/images/services/nettoyage-apres-chantier.webp",
      alt: "Remise en état après travaux",
      width: 1500,
      height: 1000,
      objectPosition: "center 45%",
    },
  },
  {
    slug: "nettoyage-fin-de-bail",
    title: "Nettoyage fin de bail",
    shortTitle: "Nettoyage fin de bail",
    description:
      "Nettoyage de fin de bail conforme aux exigences des régies et propriétaires.",
    intro:
      "Vous avez un déménagement à gérer ? Laissez-nous nous occuper du nettoyage de fin de bail — conforme aux régies, sans stress à l'état des lieux.",
    benefits: [
      "Checklist rigoureuse",
      "Respect des standards de restitution",
      "Devis clair avant intervention",
    ],
    image: {
      src: "/images/services/nettoyage-fin-de-bail.webp",
      alt: "Nettoyage de fin de bail",
      width: 1500,
      height: 1021,
      objectPosition: "center 45%",
    },
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
    image: {
      src: "/images/services/nettoyage-bureaux.webp",
      alt: "Nettoyage de bureaux professionnels",
      width: 1500,
      height: 842,
      objectPosition: "center 45%",
    },
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
    image: {
      src: "/images/services/nettoyage-vitres.webp",
      alt: "Nettoyage de vitres sans traces",
      width: 1500,
      height: 1000,
      objectPosition: "center 45%",
    },
  },
  {
    slug: "conciergerie",
    title: "Services de conciergerie",
    shortTitle: "Conciergerie",
    description:
      "Conciergerie pour régies et immeubles en Fribourg et Vaud — parties communes, coordination et réactivité.",
    intro:
      "Un interlocuteur de confiance pour vos immeubles : entretien des espaces communs, coordination des prestataires et suivi au quotidien.",
    benefits: [
      "Point de contact unique pour la régie",
      "Entretien régulier des parties communes",
      "Réactivité et discrétion sur site",
    ],
    image: {
      src: "/images/services/entretien-locaux.webp",
      alt: "Conciergerie et entretien d'immeuble",
      width: 1500,
      height: 919,
      objectPosition: "center 55%",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

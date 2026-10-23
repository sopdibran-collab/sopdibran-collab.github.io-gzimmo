export type Service = {
  slug: string;
  /** Last editorial change (`git log -1 --format=%cI` on this service’s sources). Frozen — not the build date. */
  updatedAt: string;
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
    slug: "nettoyage-appartements",
    updatedAt: "2026-10-14T22:28:42+00:00",
    title: "Nettoyage d'appartements",
    shortTitle: "Nettoyage d'appartements",
    description:
      "Nettoyage complet d'appartements pour particuliers et régies.",
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
    updatedAt: "2026-10-14T22:28:42+00:00",
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
    updatedAt: "2026-10-14T22:28:42+00:00",
    title: "Nettoyage après chantier",
    shortTitle: "Nettoyage après chantier",
    description:
      "Remise en état après rénovation, chantier ou travaux : poussière fine, laitance, sols et vitres.",
    intro:
      "Après rénovation ou fin de chantier, le lieu est prêt à être habité ou livré.",
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
    updatedAt: "2026-10-14T22:28:42+00:00",
    title: "Nettoyage fin de bail",
    shortTitle: "Nettoyage fin de bail",
    description:
      "Nettoyage de fin de bail conforme aux régies : état des lieux, remise des clés, devis et garantie de reprise.",
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
    updatedAt: "2026-10-14T22:28:42+00:00",
    title: "Nettoyage de bureaux",
    shortTitle: "Nettoyage de bureaux",
    description:
      "Nettoyage de bureaux et de locaux d'entreprise.",
    intro:
      "Des espaces de travail propres, silencieux dans leur exécution, précis dans le résultat.",
    benefits: [
      "Horaires flexibles",
      "Bureaux, commerces et cabinets",
      "Devis sous 24 h",
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
    updatedAt: "2026-10-14T22:28:42+00:00",
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
    updatedAt: "2026-10-14T22:28:42+00:00",
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

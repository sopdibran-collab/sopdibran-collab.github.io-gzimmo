export type Realisation = {
  id: string;
  title: string;
  service: string;
  location: string;
  clientType: string;
  problem: string;
  result: string;
  description: string;
  /** Chemin sous public/ — affiché seulement si le fichier est ajouté */
  image?: string;
};

export const realisations: Realisation[] = [
  {
    id: "bureaux-lausanne",
    title: "Entretien régulier de bureaux",
    service: "Nettoyage de bureaux",
    location: "Lausanne",
    clientType: "PME",
    problem:
      "Bureaux de 800 m² nécessitant un entretien hebdomadaire en dehors des heures d'activité.",
    result:
      "Environnement de travail impeccable, sans perturbation des équipes. Intervention en soirée, résultat constant.",
    description:
      "Intervention hebdomadaire en dehors des heures de bureau. Sols, sanitaires et espaces communs maintenus à un niveau constant.",
    image: "/images/realisations/bureaux.jpg",
  },
  {
    id: "fin-bail-fribourg",
    title: "Remise en état fin de bail",
    service: "Nettoyage fin de bail",
    location: "Fribourg",
    clientType: "Régie immobilière",
    problem:
      "Appartement 4.5 pièces en fin de bail, exigences strictes de la régie pour l'état des lieux.",
    result:
      "État des lieux validé du premier coup. Locataire libéré sans retenue sur la garantie.",
    description:
      "Appartement 4.5 pièces remis aux standards de la régie. Cuisines, sanitaires et surfaces vitrées traités en profondeur.",
    image: "/images/realisations/fin-de-bail.jpg",
  },
  {
    id: "chantier-morges",
    title: "Nettoyage après rénovation",
    service: "Nettoyage après chantier",
    location: "Morges",
    clientType: "Promoteur",
    problem:
      "Remise en état complète après rénovation d'un immeuble, poussières fines sur toutes les surfaces.",
    result:
      "Livraison dans les délais. Surfaces prêtes à être habitées, sans résidu de chantier.",
    description:
      "Élimination des poussières de construction et remise en état complète avant livraison au propriétaire.",
    image: "/images/realisations/salle-de-bain.jpg",
  },
  {
    id: "vitres-romont",
    title: "Vitres et façades vitrées",
    service: "Nettoyage de vitres",
    location: "Romont",
    clientType: "Commerce",
    problem:
      "Vitrines de centre-ville encrassées par la pollution et les intempéries, image de marque impactée.",
    result:
      "Vitrines impeccables, visibilité retrouvée. Intervention régulière planifiée.",
    description:
      "Nettoyage intérieur et extérieur de surfaces vitrées pour un commerce en centre-ville.",
  },
];

export const featuredRealisations = realisations.slice(0, 3);

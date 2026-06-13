export type Realisation = {
  id: string;
  title: string;
  service: string;
  location: string;
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
    description:
      "Intervention hebdomadaire en dehors des heures de bureau. Sols, sanitaires et espaces communs maintenus à un niveau constant.",
  },
  {
    id: "fin-bail-fribourg",
    title: "Remise en état fin de bail",
    service: "Nettoyage fin de bail",
    location: "Fribourg",
    description:
      "Appartement 4.5 pièces remis aux standards de la régie. Cuisines, sanitaires et surfaces vitrées traités en profondeur.",
  },
  {
    id: "chantier-morges",
    title: "Nettoyage après rénovation",
    service: "Nettoyage après chantier",
    location: "Morges",
    description:
      "Élimination des poussières de construction et remise en état complète avant livraison au propriétaire.",
  },
  {
    id: "vitres-romont",
    title: "Vitres et façades vitrées",
    service: "Nettoyage de vitres",
    location: "Romont",
    description:
      "Nettoyage intérieur et extérieur de surfaces vitrées pour un commerce en centre-ville.",
  },
];

export const featuredRealisations = realisations.slice(0, 2);

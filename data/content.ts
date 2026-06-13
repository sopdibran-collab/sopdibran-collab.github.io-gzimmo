import { company } from "./company";

export const whyItems = [
  `Plus de ${company.teamExperienceYears} ans d'expérience cumulée dans le nettoyage`,
  "Intervention rapide, planning flexible",
  "Travail minutieux, finitions soignées",
  "Produits professionnels de qualité",
  "Devis gratuit, sans engagement",
  "Couverture : toute la Suisse romande",
];

export const stats = [
  { value: `${company.teamExperienceYears}+`, label: "ans dans le métier" },
  { value: "100%", label: "engagement qualité" },
  { value: "7", label: "services spécialisés" },
] as const;

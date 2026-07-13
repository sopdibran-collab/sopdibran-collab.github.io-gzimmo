import { company } from "./company";

export const whyItems = [
  "Expertise des exigences immobilières — régies, propriétaires, promoteurs",
  "Checklist rigoureuse et devis transparent avant intervention",
  `Plus de ${company.teamExperienceYears} ans d'expérience cumulée dans le nettoyage`,
  "Produits professionnels fournis, adaptés à chaque surface",
  "Réponse sous 24 h, intervention en Suisse romande",
  "Garantie de remise de bail sur nos prestations fin de bail",
];

export const stats = [
  { value: `${company.teamExperienceYears}+`, label: "ans dans le métier" },
  { value: "100%", label: "engagement qualité" },
  { value: "7", label: "services spécialisés" },
] as const;

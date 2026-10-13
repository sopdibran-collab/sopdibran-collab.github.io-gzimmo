import { company } from "./company";

export const whyItems = [
  "Gzimmo Sàrl est une entreprise de nettoyage à Romont, pas une régie immobilière.",
  "Expertise des exigences immobilières : régies, propriétaires, promoteurs.",
  "Checklist rigoureuse et devis transparent avant intervention",
  `Plus de ${company.teamExperienceYears} ans d'expérience cumulée dans le nettoyage`,
  "Produits professionnels fournis, adaptés à chaque surface",
  "Départ depuis Romont, à Fribourg et en Vaud",
  "Frais de déplacement indiqués dans le devis",
  "Garantie de remise de bail sur nos prestations fin de bail",
];

export const stats = [
  { value: `${company.teamExperienceYears}+`, label: "ans dans le métier" },
  { value: "100%", label: "engagement qualité" },
  { value: "8", label: "services spécialisés" },
] as const;

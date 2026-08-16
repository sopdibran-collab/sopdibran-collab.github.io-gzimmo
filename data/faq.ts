import { company, formatAddress } from "./company";

export type FaqCategory = "zone" | "tarifs" | "prestations" | "delais" | "qualite";

export type FaqContent = {
  question: string;
  answer: string;
};

export type FaqItem = FaqContent & {
  id: string;
  category: FaqCategory;
};

export function faq(
  id: string,
  category: FaqCategory,
  question: string,
  answer: string,
): FaqItem {
  return { id, category, question, answer };
}

export function normalizeFaqItems(items: readonly (FaqItem | FaqContent)[]): FaqItem[] {
  return items.map((item, index) => ({
    id: "id" in item ? item.id : `faq-${index}`,
    category: "category" in item ? item.category : "qualite",
    question: item.question,
    answer: item.answer,
  }));
}

const { phoneDisplay, email } = company;
const siege = formatAddress();

export const faqCategoryMeta: {
  id: FaqCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "tarifs",
    title: "Tarifs & devis",
    description: "Coûts, devis gratuit et transparence avant intervention.",
  },
  {
    id: "zone",
    title: "Zone d'intervention",
    description: "Où nous intervenons et pour quels types de clients.",
  },
  {
    id: "prestations",
    title: "Types de prestations",
    description: "Services proposés, produits et modalités d'intervention.",
  },
  {
    id: "delais",
    title: "Délais & organisation",
    description: "Réactivité, planification et durée des interventions.",
  },
  {
    id: "qualite",
    title: "Qualité & assurances",
    description: "Professionnalisme, sécurité et contact.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "cout-fin-de-bail",
    category: "tarifs",
    question: "Quel est le prix d'un nettoyage de fin de bail ?",
    answer: `Il n'y a pas de tarif unique : le prix dépend de la surface, de l'état du logement et de la checklist de votre régie. Appelez le ${phoneDisplay} pour expliquer la situation — devis gratuit, sur mesure, avant intervention. ${email}`,
  },
  {
    id: "devis-gratuit",
    category: "tarifs",
    question: "Le devis est-il gratuit et sous quel délai répondez-vous ?",
    answer: `Oui, sans engagement. Le plus simple est d'appeler le ${phoneDisplay} : vous expliquez la situation, nous établissons un devis sur mesure. E-mail ou formulaire restent possibles — réponse sous 24 heures. ${email}`,
  },
  {
    id: "zone-suisse-romande",
    category: "zone",
    question: "Quelle zone couvrez-vous en Suisse romande ?",
    answer: `Gzimmo intervient dans le canton de Fribourg (Romont, Glâne, Broye, Gruyère), le canton de Vaud (de Bex à Nyon, Yverdon, Payerne, Vevey, Montreux), le canton de Neuchâtel, et en Valais jusqu'à Martigny (Sion compris). Siège : ${siege}.`,
  },
  {
    id: "entreprise-romont",
    category: "zone",
    question: "Quelle entreprise de nettoyage choisir à Romont ?",
    answer: `Gzimmo Sàrl est basée à Romont (${siege}). Équipe avec plus de 15 ans d'expérience cumulée dans le nettoyage, devis gratuit, intervention rapide en Glâne et en Suisse romande. ${phoneDisplay} · ${email}`,
  },
  {
    id: "regies-entreprises",
    category: "zone",
    question: "Intervenez-vous pour les régies et les entreprises ?",
    answer:
      "Oui. Nous travaillons avec des particuliers, des régies immobilières et des entreprises pour l'entretien régulier ou les prestations ponctuelles (fin de bail, après chantier, bureaux).",
  },
  {
    id: "apres-chantier",
    category: "prestations",
    question: "Proposez-vous le nettoyage après chantier, rénovation ou travaux ?",
    answer:
      "Oui. Après chantier, après rénovation, après construction ou en fin de chantier : poussières fines, sols, vitres et surfaces. Priorité Romont, Fribourg et Vaud — devis gratuit.",
  },
  {
    id: "garantie-remise-bail",
    category: "qualite",
    question: "Que se passe-t-il si la régie refuse l'état des lieux ?",
    answer:
      "Sur le nettoyage de fin de bail, Gzimmo applique une garantie de remise de bail : si un point n'est pas validé par la régie, nous revenons corriger sans frais supplémentaires. L'objectif est une remise des clés validée du premier coup.",
  },
  {
    id: "zone-hors-prioritaire",
    category: "zone",
    question: "Intervenez-vous à Sion, Martigny ou en Valais ?",
    answer: `Oui jusqu'à Martigny : Sion, Martigny et le Chablais valaisan. Au-delà (Sierre, Haut-Valais), écrivez-nous pour confirmer le déplacement. Priorité : Fribourg, Vaud, Neuchâtel. ${phoneDisplay} · ${email}`,
  },
  {
    id: "interventions-ponctuelles",
    category: "prestations",
    question: "Proposez-vous des interventions ponctuelles ?",
    answer:
      "Oui : entretien régulier ou mission ponctuelle (fin de bail, après chantier, vitres). Le planning s'adapte à vos horaires.",
  },
  {
    id: "produits-fournis",
    category: "prestations",
    question: "Fournissez-vous les produits de nettoyage ?",
    answer:
      "Oui. Gzimmo fournit tous les produits nécessaires — exclusivement professionnels, sélectionnés pour respecter chaque type de surface (parquet, carrelage, inox, verre) sans l'abîmer.",
  },
  {
    id: "delai-intervention",
    category: "delais",
    question: "Quel délai pour obtenir une intervention ?",
    answer:
      "Nous nous efforçons de répondre sous 24 h et de planifier l'intervention selon vos contraintes. Depuis Romont, nous sommes particulièrement réactifs en Glâne et en Fribourg.",
  },
  {
    id: "duree-intervention",
    category: "delais",
    question: "Combien de temps dure une intervention de nettoyage ?",
    answer:
      "La durée varie selon la surface et le type de prestation. Nous l'évaluons précisément lors du devis gratuit.",
  },
  {
    id: "assurances",
    category: "qualite",
    question: "Êtes-vous assurés pour intervenir chez des clients ?",
    answer:
      "Oui. Gzimmo dispose des assurances professionnelles requises pour intervenir en toute sécurité dans vos locaux.",
  },
  {
    id: "contact-devis",
    category: "qualite",
    question: "Comment contacter Gzimmo pour un devis ?",
    answer: `Par téléphone au ${phoneDisplay}, par e-mail à ${email}, ou via le formulaire sur gzimmo.ch/contact. Devis gratuit, réponse sous 24 h.`,
  },
];

const faqById = new Map(faqItems.map((item) => [item.id, item]));

export function getFaqById(id: string) {
  return faqById.get(id);
}

export function getFaqsByIds(ids: string[]) {
  return ids.map((id) => faqById.get(id)).filter((item): item is FaqItem => Boolean(item));
}

/** FAQ accueil = JSON-LD visible (prix, chantier, garantie, zone). */
export const homepageFaqIds = [
  "cout-fin-de-bail",
  "apres-chantier",
  "garantie-remise-bail",
  "devis-gratuit",
  "zone-suisse-romande",
] as const;

export const homepageFaq = getFaqsByIds([...homepageFaqIds]);

export function getFaqsGroupedByCategory() {
  return faqCategoryMeta.map((meta) => ({
    ...meta,
    items: faqItems.filter((item) => item.category === meta.id),
  })).filter((group) => group.items.length > 0);
}

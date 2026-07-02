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
    question: "Combien coûte un nettoyage fin de bail en Suisse romande ?",
    answer: `Le tarif dépend de la surface, de l'état du logement et des exigences de la régie. Gzimmo établit un devis gratuit et personnalisé avant toute intervention. Contactez-nous au ${phoneDisplay} ou à ${email}.`,
  },
  {
    id: "devis-gratuit",
    category: "tarifs",
    question: "Le devis est-il gratuit et sous quel délai répondez-vous ?",
    answer: `Oui, sans engagement. Décrivez votre besoin par téléphone, e-mail ou formulaire — nous répondons sous 24 heures avec une proposition claire. ${phoneDisplay} · ${email}`,
  },
  {
    id: "zone-suisse-romande",
    category: "zone",
    question: "Quelle zone couvrez-vous en Suisse romande ?",
    answer: `Gzimmo intervient dans toute la Suisse romande : canton de Fribourg (Romont, Glâne, Broye, Gruyère), Vaud, Genève, Neuchâtel et Valais romand. Siège : ${siege}.`,
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
    question: "Proposez-vous le nettoyage après chantier ?",
    answer:
      "Oui. Nous réalisons des remises en état complètes après travaux : élimination des poussières, nettoyage des sols, vitres et surfaces. Intervention en Suisse romande, devis gratuit.",
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

/** 5 questions orientées conversion — références vers faqItems (même contenu). */
export const homepageFaqIds = [
  "cout-fin-de-bail",
  "regies-entreprises",
  "devis-gratuit",
  "zone-suisse-romande",
  "produits-fournis",
] as const;

export const homepageFaq = getFaqsByIds([...homepageFaqIds]);

export function getFaqsGroupedByCategory() {
  return faqCategoryMeta.map((meta) => ({
    ...meta,
    items: faqItems.filter((item) => item.category === meta.id),
  })).filter((group) => group.items.length > 0);
}

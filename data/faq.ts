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
    answer: `Il n'y a pas de tarif unique : le prix dépend de la surface, de l'état du logement et de la checklist de votre régie. Appelez-nous au ${phoneDisplay} et décrivez-nous le logement : nous vous envoyons un devis gratuit avant toute intervention. ${email}`,
  },
  {
    id: "devis-gratuit",
    category: "tarifs",
    question: "Le devis est-il gratuit et sous quel délai répondez-vous ?",
    answer: `Oui, sans engagement, sans frais de déplacement. Le plus simple est d'appeler le ${phoneDisplay} : vous nous décrivez le travail, nous établissons le devis. Vous pouvez aussi écrire par e-mail ou passer par le formulaire : nous répondons sous 24 heures. ${email}`,
  },
  {
    id: "zone-suisse-romande",
    category: "zone",
    question: "Comment se définit votre zone d'intervention ?",
    answer: `Nous partons de notre siège de Romont (${siege}) et intervenons en Glâne et dans la Broye, en Gruyère et en Veveyse, en Sarine et en Singine, à Lausanne et dans l'Ouest lausannois, sur la Riviera et dans le Chablais, dans le Nord vaudois et à Morat. Nous n'intervenons pas à Neuchâtel, à Genève ni en Valais.`,
  },
  {
    id: "entreprise-romont",
    category: "zone",
    question: "Quelle entreprise de nettoyage choisir à Romont ?",
    answer: `Gzimmo Sàrl est basée à Romont (${siege}) et compte plus de 15 ans d'expérience dans le nettoyage. Le devis est gratuit, sans frais de déplacement, et nous répondons sous 24 h. Nous intervenons dans les cantons de Fribourg et de Vaud. ${phoneDisplay} · ${email}`,
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
      "Oui. Après chantier, après rénovation, après construction ou en fin de chantier : poussières fines, sols, vitres et surfaces. Nous intervenons dans les cantons de Fribourg et de Vaud, sur devis gratuit.",
  },
  {
    id: "garantie-remise-bail",
    category: "qualite",
    question: "Que se passe-t-il si la régie refuse l'état des lieux ?",
    answer:
      "Pour un nettoyage de fin de bail, si la régie refuse un point lors de l'état des lieux, nous revenons le corriger sans frais.",
  },
  {
    id: "zone-hors-prioritaire",
    category: "zone",
    question: "Intervenez-vous dans le canton de Neuchâtel ?",
    answer: `Non, nous n'intervenons pas dans le canton de Neuchâtel, ni à Genève ou en Valais. La liste des communes desservies est sur la page Zones. Siège : ${siege}. ${phoneDisplay} · ${email}`,
  },
  {
    id: "interventions-ponctuelles",
    category: "prestations",
    question: "Proposez-vous des interventions ponctuelles ?",
    answer:
      "Oui : entretien régulier ou mission ponctuelle (fin de bail, après chantier, vitres). Nous convenons des horaires avec vous.",
  },
  {
    id: "produits-fournis",
    category: "prestations",
    question: "Fournissez-vous les produits de nettoyage ?",
    answer:
      "Oui. Nous apportons des produits professionnels adaptés à chaque surface : parquet, carrelage, inox, verre.",
  },
  {
    id: "delai-intervention",
    category: "delais",
    question: "Quel délai pour obtenir une intervention ?",
    answer:
      "Nous répondons sous 24 h, puis nous fixons avec vous la date de l'intervention dans le devis. Il n'y a pas de frais de déplacement.",
  },
  {
    id: "duree-intervention",
    category: "delais",
    question: "Combien de temps dure une intervention de nettoyage ?",
    answer:
      "La durée varie selon la surface et le type de prestation. Nous l'estimons dans le devis.",
  },
  {
    id: "assurances",
    category: "qualite",
    question: "Êtes-vous assurés pour intervenir chez des clients ?",
    answer:
      "Oui, Gzimmo est assurée pour les interventions chez ses clients.",
  },
  {
    id: "contact-devis",
    category: "qualite",
    question: "Comment contacter Gzimmo pour un devis ?",
    answer: `Par téléphone au ${phoneDisplay}, par e-mail à ${email}, ou via le formulaire sur gzimmo.ch/contact. Devis gratuit, réponse sous 24 h, sans frais de déplacement.`,
  },
];

const faqById = new Map(faqItems.map((item) => [item.id, item]));

export function getFaqById(id: string) {
  return faqById.get(id);
}

export function getFaqsByIds(ids: string[]) {
  return ids.map((id) => faqById.get(id)).filter((item): item is FaqItem => Boolean(item));
}

/** FAQ affichée sur l'accueil (prix, chantier, garantie, zone). */
export const homepageFaqIds = [
  "devis-gratuit",
  "delai-intervention",
  "garantie-remise-bail",
  "cout-fin-de-bail",
  "apres-chantier",
  "zone-suisse-romande",
] as const;

export const homepageFaq = getFaqsByIds([...homepageFaqIds]);

export function getFaqsGroupedByCategory() {
  return faqCategoryMeta.map((meta) => ({
    ...meta,
    items: faqItems.filter((item) => item.category === meta.id),
  })).filter((group) => group.items.length > 0);
}

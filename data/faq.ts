export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Quelle zone couvrez-vous ?",
    answer:
      "Nous intervenons dans toute la Suisse romande — de Genève à Sion, en passant par Lausanne, Fribourg, Neuchâtel et les régions avoisinantes.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, sans engagement. Décrivez votre besoin et nous vous répondons sous 24 heures avec une proposition claire.",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Des produits professionnels de qualité, sélectionnés pour respecter les surfaces et garantir un résultat durable.",
  },
  {
    question: "Proposez-vous des interventions ponctuelles ?",
    answer:
      "Oui. Nous adaptons notre planning à vos contraintes : entretien régulier ou intervention ponctuelle après chantier, fin de bail ou événement.",
  },
  {
    question: "Combien de temps dure une intervention ?",
    answer:
      "La durée dépend de la surface et du type de prestation. Nous évaluons chaque demande individuellement lors du devis.",
  },
  {
    question: "Êtes-vous assurés ?",
    answer:
      "Oui. Gzimmo dispose des assurances professionnelles requises pour intervenir en toute sécurité dans vos locaux.",
  },
];

export const homepageFaq = faqItems.slice(0, 3);

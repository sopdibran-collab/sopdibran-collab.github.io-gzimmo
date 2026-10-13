import type { FaqContent } from "@/data/faq";

export type Location = {
  slug: string;
  city: string;
  canton: string;
  cantonName: string;
  district?: string;
  title: string;
  description: string;
  intro: string;
  geo: { latitude: number; longitude: number };
  priority: number;
  isHeadquarters?: boolean;
  nearbyCommunes: string[];
  servicesHighlight: string[];
  sections: { title: string; body: string }[];
  faqs: FaqContent[];
  priorityLinks?: { label: string; href: string }[];
};

const romontFaqs: FaqContent[] = [
  {
    question: "Quelle entreprise de nettoyage appeler à Romont (FR) ?",
    answer:
      "Gzimmo Sàrl est basée à Romont, Route de Raboud 8. Nous intervenons en ville et dans tout le district de la Glâne. Devis gratuit au 076 214 23 42 ou via info@gzimmo.ch — frais de déplacement indiqués dans le devis.",
  },
  {
    question: "Intervenez-vous rapidement autour de Romont ?",
    answer:
      "Oui. Notre siège est à Romont et nous couvrons aussi Vuisternens-devant-Romont, Ursy, Mézières, Estavayer et Châtel-Saint-Denis. La date du passage figure dans le devis.",
  },
  {
    question: "Proposez-vous le nettoyage fin de bail à Romont ?",
    answer:
      "Oui. Nous nettoyons la cuisine, les fenêtres, les stores, le balcon et la salle de bain, selon la checklist de la régie. Si la régie refuse un point, nous revenons sans frais. Le devis est gratuit.",
  },
  {
    question: "Gzimmo intervient-il hors de Romont ?",
    answer:
      "Oui. Les cantons couverts sont Fribourg et Vaud. Siège : Route de Raboud 8, 1680 Romont FR.",
  },
];

export const locations: Location[] = [
  {
    slug: "nettoyage-romont",
    city: "Romont",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Glâne",
    title: "Entreprise de nettoyage à Romont (FR)",
    description:
      "Entreprise de nettoyage à Romont, Route de Raboud 8. Fin de bail, bureaux, après chantier en Glâne. Devis gratuit — 076 214 23 42.",
    intro:
      "Basée à Romont, Gzimmo est votre entreprise de nettoyage de proximité en Glâne — équipe expérimentée, finitions soignées, devis gratuit. Frais de déplacement indiqués dans le devis.",
    geo: { latitude: 46.6917, longitude: 6.9111 },
    priority: 1,
    isHeadquarters: true,
    nearbyCommunes: [
      "Vuisternens-devant-Romont",
      "Ursy",
      "Mézières",
      "Villarlod",
      "Massonnens",
      "Estavayer",
      "Châtel-Saint-Denis",
    ],
    servicesHighlight: [
      "Nettoyage fin de bail",
      "Entretien de bureaux",
      "Nettoyage après chantier",
      "Conciergerie régies",
      "Nettoyage d'appartements",
      "Nettoyage vitres",
    ],
    sections: [
      {
        title: "Votre entreprise de nettoyage à Romont",
        body: "Gzimmo Sàrl est installée Route de Raboud 8 à Romont. Nous connaissons les attentes des particuliers, régies et entreprises du canton de Fribourg : ponctualité, discrétion et un résultat irréprochable à chaque passage.",
      },
      {
        title: "Autour de Romont",
        body: "Depuis notre siège, nous intervenons à Romont et dans les communes voisines : Vuisternens-devant-Romont, Ursy, Mézières, Villarlod, Massonnens, Estavayer et Châtel-Saint-Denis. Nous allons aussi à Fribourg, Bulle, Lausanne et Neuchâtel. Le devis est gratuit.",
      },
      {
        title: "Pourquoi choisir Gzimmo à Romont ?",
        body: "Une équipe qui cumule plus de 15 ans d'expérience dans le nettoyage professionnel, des produits de qualité, un devis gratuit et une réponse rapide. Nous traitons chaque espace avec la précision qu'exigent les surfaces modernes.",
      },
      {
        title: "Nos prestations depuis Romont",
        body: "Depuis le siège de Romont, nous proposons notamment le nettoyage de fin de bail, le nettoyage après chantier, l'entretien de bureaux et la conciergerie pour régies. Chaque prestation a sa page dédiée — le détail checklist et garantie se trouve sur les pages service.",
      },
      {
        title: "Nettoyage de fin de bail à Romont",
        body: "À Romont, nous avons préparé un appartement pour la remise des clés : four et plaques dégraissés, fenêtres, encadrements et rails nettoyés, stores lavés lamelle par lamelle, balcon et vitrages, salle de bain détartrée. Le locataire et la gérance étaient très satisfaits.",
      },
    ],
    faqs: romontFaqs,
    priorityLinks: [
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Conciergerie pour régies", href: "/conciergerie" },
      { label: "Réalisations", href: "/realisations" },
    ],
  },
  {
    slug: "nettoyage-fribourg",
    city: "Fribourg",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Sarine",
    title: "Nettoyage professionnel à Fribourg",
    description:
      "Nettoyage professionnel à Fribourg et agglomération. Fin de bail, bureaux, après chantier depuis Romont. Devis gratuit  — 076 214 23 42.",
    intro:
      "Depuis Romont, nous couvrons Fribourg et son agglomération avec des prestations de nettoyage professionnel planifiées et soignées.",
    geo: { latitude: 46.8065, longitude: 7.1619 },
    priority: 0.85,
    nearbyCommunes: ["Marly", "Villars-sur-Glâne", "Givisiez", "Matran"],
    servicesHighlight: ["Nettoyage bureaux", "Fin de bail", "Après chantier"],
    sections: [
      {
        title: "Nettoyage à Fribourg capitale",
        body: "Fribourg concentre entreprises, régies et particuliers exigeants. Gzimmo y intervient pour l'entretien régulier de bureaux, les nettoyages de fin de bail et les remises en état après travaux.",
      },
      {
        title: "Depuis Romont, pour Fribourg",
        body: "Notre siège est à Romont, Route de Raboud 8. Nous intervenons à Fribourg, Marly, Villars-sur-Glâne et Givisiez, sur devis. La date du passage est fixée avant le déplacement.",
      },
      {
        title: "Fin de bail à Fribourg et agglomération",
        body: "Le passage reprend les points qui bloquent souvent un état des lieux : four, plaques, sanitaires, joints, sols et vitres. Si la régie refuse un point, nous revenons sans frais. Le détail de la prestation est sur la page nettoyage fin de bail.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous dans l'agglomération fribourgeoise ?",
        answer:
          "Oui : Fribourg, Marly, Villars-sur-Glâne, Givisiez et les communes limitrophes. Siège : Route de Raboud 8, 1680 Romont.",
      },
      {
        question: "Proposez-vous le nettoyage fin de bail à Fribourg ?",
        answer:
          "Oui. Nous reprenons la cuisine, les sanitaires, les sols et les vitres selon la checklist de la régie. Si la régie refuse un point, nous revenons sans frais. Le devis est gratuit.",
      },
      {
        question: "Quel délai pour un passage à Fribourg ?",
        answer:
          "Le devis précise les frais de déplacement. Le jour du passage dépend de notre planning et de la date qui vous convient, et il est confirmé dans le devis.",
      },
    ],
    priorityLinks: [
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/nettoyage-romont" },
    ],
  },
  {
    slug: "nettoyage-bulle",
    city: "Bulle",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Gruyère",
    title: "Nettoyage professionnel à Bulle",
    description:
      "Nettoyage professionnel à Bulle et en Gruyère. Gzimmo : locaux, fin de bail, vitres. Basé à Romont, devis gratuit.",
    intro:
      "Nous intervenons à Bulle et en Gruyère depuis Romont : fin de bail, entretien de locaux, après chantier et vitres. Le devis est gratuit.",
    geo: { latitude: 46.6175, longitude: 7.0569 },
    priority: 0.8,
    nearbyCommunes: ["La Tour-de-Trême", "Riaz", "Vuadens", "Broc"],
    servicesHighlight: ["Après chantier", "Entretien locaux", "Fin de bail"],
    sections: [
      {
        title: "Nettoyage en Gruyère",
        body: "Nous intervenons à Bulle, La Tour-de-Trême, Riaz, Vuadens et Broc depuis notre siège de Romont. La date est confirmée avant le passage.",
      },
      {
        title: "Fin de bail et après chantier à Bulle",
        body: "Pour une sortie de bail, le passage suit la checklist de la régie : cuisine, sanitaires, sols, vitres. Si un point n'est pas accepté, nous revenons sans frais. Après des travaux, nous enlevons la poussière fine et les résidus de chantier. Le détail est sur la page de la prestation.",
      },
      {
        title: "Avant le déplacement",
        body: "Pour établir le devis, nous tenons compte de la surface, de l'état du logement ou du type de chantier, et de la date souhaitée. Le devis est gratuit et fixe ce qui sera fait.",
      },
    ],
    priorityLinks: [
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/nettoyage-romont" },
    ],
    faqs: [
      {
        question: "Couvrez-vous la Gruyère depuis Romont ?",
        answer:
          "Oui. Bulle, La Tour-de-Trême, Riaz, Vuadens et Broc font partie de la zone. Siège : Route de Raboud 8, 1680 Romont.",
      },
      {
        question: "Le devis pour Bulle est-il gratuit ?",
        answer:
          "Oui, et sans engagement. Appelez le 076 214 23 42 ou écrivez à info@gzimmo.ch : le devis précise les frais de déplacement.",
      },
      {
        question: "Faites-vous la fin de bail à Bulle ?",
        answer:
          "Oui. Si la régie ne valide pas un point de la checklist, nous revenons sans frais. Le détail du passage est sur la page fin de bail.",
      },
    ],
  },
  {
    slug: "nettoyage-lausanne",
    city: "Lausanne",
    canton: "VD",
    cantonName: "Vaud",
    district: "Lausanne",
    title: "Nettoyage professionnel à Lausanne",
    description:
      "Nettoyage professionnel à Lausanne et agglomération. Gzimmo : bureaux, appartements, fin de bail. Devis gratuit, depuis Romont.",
    intro:
      "Nous intervenons à Lausanne, Renens, Pully, Prilly et Ecublens depuis Romont : bureaux, appartements et fin de bail. Le devis est gratuit.",
    geo: { latitude: 46.5197, longitude: 6.6323 },
    priority: 0.75,
    nearbyCommunes: ["Renens", "Pully", "Prilly", "Ecublens"],
    servicesHighlight: ["Nettoyage bureaux", "Appartements", "Fin de bail"],
    sections: [
      {
        title: "Nettoyage professionnel à Lausanne",
        body: "Nous intervenons à Lausanne pour l'entretien de bureaux, le nettoyage d'appartements et les fins de bail. Le siège est à Romont, Route de Raboud 8. Le devis fixe le jour avant le déplacement.",
      },
      {
        title: "Communes voisines",
        body: "Renens, Pully, Prilly et Ecublens sont couverts avec Lausanne. Nous allons aussi à Yverdon, Morges, Nyon, Payerne, Vevey et Montreux.",
      },
      {
        title: "Fin de bail et bureaux",
        body: "Pour une remise des clés, nous nettoyons la cuisine, les sanitaires, les sols et les vitres selon la checklist de la régie. Si un point n'est pas accepté, nous revenons sans frais.",
      },
    ],
    priorityLinks: [
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage de bureaux", href: "/nettoyage-bureaux" },
      { label: "Zones d'intervention", href: "/zones" },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Lausanne depuis Romont ?",
        answer:
          "Oui. Lausanne, Renens, Pully, Prilly et Ecublens sont couverts. Siège : Route de Raboud 8, 1680 Romont. Devis gratuit au 076 214 23 42.",
      },
      {
        question: "Proposez-vous la fin de bail à Lausanne ?",
        answer:
          "Oui. Le passage suit la checklist de la régie. Si un point n'est pas validé, nous revenons sans frais.",
      },
      {
        question: "Comment est fixé le passage à Lausanne ?",
        answer:
          "Le devis est gratuit. La date dépend du planning et elle est confirmée avant le déplacement. Les frais de déplacement sont indiqués dans le devis.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const headquarters = locations.find((l) => l.isHeadquarters);

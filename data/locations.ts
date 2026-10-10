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
      "Gzimmo Sàrl est basée à Romont, Route de Raboud 8. Nous intervenons en ville et dans tout le district de la Glâne. Devis gratuit au 076 214 23 42 ou via info@gzimmo.ch — réponse sous 24 h.",
  },
  {
    question: "Intervenez-vous rapidement autour de Romont ?",
    answer:
      "Oui. Le siège est à Romont. Nous couvrons Romont, Vuisternens-devant-Romont, Ursy, Mézières, Estavayer et Châtel-Saint-Denis. La date est fixée dans le devis.",
  },
  {
    question: "Proposez-vous le nettoyage fin de bail à Romont ?",
    answer:
      "Oui. Cuisine, fenêtres, stores, balcon et salle de bain font partie du passage, selon la checklist de la régie. Si un point n'est pas accepté, nous revenons sans frais. Devis gratuit avant l'intervention.",
  },
  {
    question: "Gzimmo intervient-il hors de Romont ?",
    answer:
      "Oui. Les cantons couverts sont Fribourg, Vaud et Neuchâtel. Siège : Route de Raboud 8, 1680 Romont FR.",
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
      "Basée à Romont, Gzimmo est votre entreprise de nettoyage de proximité en Glâne — équipe expérimentée, finitions soignées, devis gratuit sous 24 h.",
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
        body: "Depuis le siège, nous intervenons à Romont et dans les communes voisines : Vuisternens-devant-Romont, Ursy, Mézières, Villarlod, Massonnens, Estavayer et Châtel-Saint-Denis. Fribourg, Bulle, Lausanne et Neuchâtel sont couverts aussi. Le devis est gratuit.",
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
        body: "Fin de bail réalisée à Romont : four et plaques dégraissés, fenêtres, encadrements et rails, stores lamelle par lamelle, balcon et vitrages, salle de bain détartrée. Le locataire et la gérance étaient très satisfaits.",
      },
    ],
    faqs: romontFaqs,
    priorityLinks: [
      { label: "Nettoyage fin de bail à Romont", href: "/nettoyage-fin-de-bail-romont" },
      { label: "Nettoyage fin de bail (Suisse romande)", href: "/nettoyage-fin-de-bail" },
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
      "Nettoyage professionnel à Fribourg et agglomération. Fin de bail, bureaux, après chantier depuis Romont. Devis gratuit sous 24 h — 076 214 23 42.",
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
        body: "Le siège est à Romont, Route de Raboud 8, pas à Fribourg. Fribourg, Marly, Villars-sur-Glâne, Givisiez et Matran sont couverts sur devis. La date du passage est fixée avant le déplacement.",
      },
      {
        title: "Fin de bail à Fribourg et agglomération",
        body: "Le passage reprend les points qui bloquent souvent un état des lieux : four, plaques, sanitaires, joints, sols et vitres. Si la régie tique, nous revenons sans frais. Le détail est sur la page fin de bail à Fribourg.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous dans l'agglomération fribourgeoise ?",
        answer:
          "Oui : Fribourg, Marly, Villars-sur-Glâne, Givisiez et Matran. Siège : Route de Raboud 8, 1680 Romont.",
      },
      {
        question: "Proposez-vous le nettoyage fin de bail à Fribourg ?",
        answer:
          "Oui. Cuisine, sanitaires, sols et vitres sont repris selon la checklist de la régie. Si un point n'est pas accepté, nous revenons sans frais. Devis gratuit avant l'intervention.",
      },
      {
        question: "Quel délai pour un passage à Fribourg ?",
        answer:
          "Nous répondons sous 24 h. Le jour du passage dépend du planning et de votre date. Il est confirmé dans le devis.",
      },
    ],
    priorityLinks: [
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Nettoyage fin de bail à Fribourg", href: "/nettoyage-fin-de-bail-fribourg" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/seo/nettoyage-romont" },
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
      "Bulle et la Gruyère sont couvertes depuis Romont. Fin de bail, locaux, après chantier et vitres. Devis gratuit.",
    geo: { latitude: 46.6175, longitude: 7.0569 },
    priority: 0.8,
    nearbyCommunes: ["La Tour-de-Trême", "Riaz", "Vuadens", "Broc"],
    servicesHighlight: ["Après chantier", "Entretien locaux", "Fin de bail"],
    sections: [
      {
        title: "Nettoyage en Gruyère",
        body: "Bulle, La Tour-de-Trême, Riaz, Vuadens et Broc sont desservis depuis le siège de Romont, Route de Raboud 8. Le devis est gratuit. La date est confirmée avant le passage.",
      },
      {
        title: "Fin de bail et après chantier à Bulle",
        body: "Pour une sortie de bail, le passage suit la checklist de la régie : cuisine, sanitaires, sols, vitres. Si un point n'est pas accepté, nous revenons sans frais. Après des travaux, il s'agit d'enlever la poussière fine et les résidus, pas de faire un ménage courant. Le détail est sur la page de la prestation.",
      },
      {
        title: "Avant le déplacement",
        body: "On regarde la surface, l'état du logement ou le type de chantier, et la date souhaitée. Le devis est gratuit. Il fixe le périmètre avant l'intervention.",
      },
    ],
    priorityLinks: [
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/seo/nettoyage-romont" },
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
          "Oui, sans engagement. Téléphone 076 214 23 42 ou info@gzimmo.ch. Réponse sous 24 h.",
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
      "Lausanne, Renens, Pully, Prilly et Ecublens sont couverts depuis Romont. Bureaux, appartements et fin de bail. Devis gratuit.",
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
        body: "Renens, Pully, Prilly et Ecublens sont couverts avec Lausanne. Yverdon, Morges, Nyon, Payerne, Vevey et Montreux sont desservis aussi, depuis Romont.",
      },
      {
        title: "Fin de bail et bureaux",
        body: "Pour une remise de clés, cuisine, sanitaires, sols et vitres suivent la checklist de la régie. Si un point n'est pas accepté, nous revenons sans frais. L'entretien de bureaux peut se faire en dehors des heures d'activité, quand c'est convenu dans le devis.",
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
        question: "Sous quel délai répondez-vous pour Lausanne ?",
        answer:
          "Sous 24 h pour le devis. La date d'intervention dépend du planning et est confirmée avant le déplacement.",
      },
    ],
  },
  {
    slug: "nettoyage-neuchatel",
    city: "Neuchâtel",
    canton: "NE",
    cantonName: "Neuchâtel",
    title: "Nettoyage professionnel à Neuchâtel",
    description:
      "Nettoyage professionnel à Neuchâtel et dans le canton. Gzimmo, siège à Romont : locaux, fin de bail, vitres. Devis gratuit.",
    intro:
      "Neuchâtel et le canton sont couverts depuis Romont. Entretien de locaux, fin de bail et vitres. Devis gratuit.",
    geo: { latitude: 46.99, longitude: 6.931 },
    priority: 0.7,
    nearbyCommunes: ["La Chaux-de-Fonds", "Colombier", "Peseux"],
    servicesHighlight: ["Entretien locaux", "Fin de bail", "Vitres"],
    sections: [
      {
        title: "Nettoyage en canton de Neuchâtel",
        body: "Nous intervenons à Neuchâtel, La Chaux-de-Fonds, Colombier et Peseux. Les passages partent de Romont, Route de Raboud 8. Fribourg et Vaud sont les deux autres cantons couverts.",
      },
      {
        title: "Locaux, fin de bail, vitres",
        body: "L'entretien de locaux se planifie au rythme convenu. La fin de bail reprend cuisine, sanitaires, sols et vitres selon la checklist. Les vitres accessibles, cadres compris, se font sur devis. Si la régie n'accepte pas un point de fin de bail, nous revenons sans frais.",
      },
      {
        title: "Devis avant le déplacement",
        body: "Décrivez le lieu, la prestation et la date souhaitée au 076 214 23 42 ou à info@gzimmo.ch. Le devis est gratuit, avant le passage.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Neuchâtel ?",
        answer:
          "Oui. Neuchâtel, La Chaux-de-Fonds, Colombier et Peseux sont couverts depuis Romont. Devis gratuit.",
      },
      {
        question: "La fin de bail est-elle possible dans le canton ?",
        answer:
          "Oui. Si un point de la checklist n'est pas accepté par la régie, nous revenons sans frais. Le détail est sur la page fin de bail.",
      },
      {
        question: "Comment obtenir un devis pour Neuchâtel ?",
        answer:
          "Par téléphone au 076 214 23 42 ou par e-mail à info@gzimmo.ch. Réponse sous 24 h. Siège : Route de Raboud 8, 1680 Romont FR.",
      },
    ],
    priorityLinks: [
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Entretien de locaux", href: "/entretien-locaux" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/seo/nettoyage-romont" },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const headquarters = locations.find((l) => l.isHeadquarters);

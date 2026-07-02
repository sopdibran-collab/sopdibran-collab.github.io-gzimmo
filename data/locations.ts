import type { FaqContent } from "@/data/faq";
import { faq, getFaqsByIds } from "@/data/faq";

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
      "Oui. Notre siège à Romont nous permet d'intervenir rapidement à Romont, Estavayer, Vuisternens-devant-Romont, Mézières, Ursy, Châtel-Saint-Denis et les communes voisines.",
  },
  {
    question: "Proposez-vous le nettoyage fin de bail à Romont ?",
    answer:
      "Oui. Nous réalisons des nettoyages de fin de bail conformes aux exigences des régies et propriétaires du canton de Fribourg. Devis gratuit avant intervention.",
  },
  {
    question: "Gzimmo couvre-t-il toute la Suisse romande depuis Romont ?",
    answer:
      "Oui. Bien que basés à Romont, nous intervenons dans toute la Suisse romande : Fribourg, Vaud, Genève, Neuchâtel et Valais romand.",
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
      "Gzimmo Sàrl : entreprise de nettoyage à Romont, Route de Raboud 8. Fin de bail, bureaux, après chantier. Devis gratuit, intervention rapide en Glâne.",
    intro:
      "Basée à Romont, Gzimmo est votre entreprise de nettoyage de proximité en Glâne — équipe expérimentée, finitions soignées, devis gratuit sous 24 h.",
    geo: { latitude: 46.6917, longitude: 6.9111 },
    priority: 1,
    isHeadquarters: true,
    nearbyCommunes: [
      "Estavayer",
      "Vuisternens-devant-Romont",
      "Mézières",
      "Ursy",
      "Châtel-Saint-Denis",
      "Villarlod",
      "Massonnens",
    ],
    servicesHighlight: [
      "Nettoyage fin de bail",
      "Entretien de bureaux",
      "Nettoyage après chantier",
      "Nettoyage d'appartements",
    ],
    sections: [
      {
        title: "Votre nettoyeur professionnel à Romont",
        body: "Gzimmo Sàrl est installée Route de Raboud 8 à Romont. Nous connaissons les attentes des particuliers, régies et entreprises du canton de Fribourg : ponctualité, discrétion et un résultat irréprochable à chaque passage.",
      },
      {
        title: "Intervention en Glâne et en Suisse romande",
        body: "Depuis notre siège romontais, nous intervenons en priorité dans le district de la Glâne, puis dans toute la Suisse romande. Que vous soyez à Romont, Estavayer ou Fribourg, la même exigence de qualité s'applique.",
      },
      {
        title: "Pourquoi choisir Gzimmo à Romont ?",
        body: "Une équipe qui cumule plus de 15 ans d'expérience dans le nettoyage professionnel, des produits de qualité, un devis gratuit et une réponse rapide. Nous traitons chaque espace avec la précision qu'exigent les surfaces modernes.",
      },
    ],
    faqs: romontFaqs,
  },
  {
    slug: "nettoyage-estavayer",
    city: "Estavayer",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Broye",
    title: "Nettoyage professionnel à Estavayer",
    description:
      "Nettoyage professionnel à Estavayer et Estavayer-le-Lac. Gzimmo, basé à Romont : fin de bail, bureaux, locaux. Devis gratuit.",
    intro:
      "À 15 minutes de Romont, nous intervenons à Estavayer pour des prestations de nettoyage professionnel soignées et planifiées.",
    geo: { latitude: 46.8492, longitude: 6.8467 },
    priority: 0.9,
    nearbyCommunes: ["Estavayer-le-Lac", "Châtonnaye", "Villarepos", "Lully"],
    servicesHighlight: ["Nettoyage fin de bail", "Entretien de locaux", "Nettoyage vitres"],
    sections: [
      {
        title: "Nettoyage à Estavayer et sur la Côte",
        body: "Gzimmo dessert Estavayer, Estavayer-le-Lac et les communes de la Broye fribourgeoise depuis son siège à Romont. Particuliers, régies et PME : nous adaptons nos prestations à vos besoins.",
      },
      {
        title: "Proximité et réactivité",
        body: "La courte distance depuis Romont nous permet d'intervenir rapidement à Estavayer, que ce soit pour un entretien régulier ou une remise en état ponctuelle après travaux.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Estavayer-le-Lac ?",
        answer:
          "Oui. Nous couvrons Estavayer, Estavayer-le-Lac et les communes environnantes du canton de Fribourg.",
      },
      {
        question: "Comment obtenir un devis à Estavayer ?",
        answer:
          "Contactez-nous par téléphone au 076 214 23 42, par e-mail à info@gzimmo.ch ou via le formulaire en ligne. Devis gratuit, réponse sous 24 h.",
      },
    ],
  },
  {
    slug: "nettoyage-chatel-saint-denis",
    city: "Châtel-Saint-Denis",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Veveyse",
    title: "Nettoyage professionnel à Châtel-Saint-Denis",
    description:
      "Entreprise de nettoyage à Châtel-Saint-Denis (FR). Gzimmo : appartements, bureaux, fin de bail. Basé à Romont, devis gratuit.",
    intro:
      "Châtel-Saint-Denis et la Veveyse : Gzimmo assure un nettoyage professionnel rigoureux, avec la réactivité d'une équipe basée à Romont.",
    geo: { latitude: 46.5267, longitude: 6.9014 },
    priority: 0.9,
    nearbyCommunes: ["Semsales", "Granges", "Le Flon", "Remaufens"],
    servicesHighlight: ["Nettoyage d'appartements", "Nettoyage bureaux", "Fin de bail"],
    sections: [
      {
        title: "Service de nettoyage en Veveyse",
        body: "Depuis Romont, nous intervenons régulièrement à Châtel-Saint-Denis pour l'entretien de logements, bureaux et locaux commerciaux. Un service discret, planifié selon vos disponibilités.",
      },
    ],
    faqs: [
      {
        question: "Couvrez-vous Châtel-Saint-Denis et la Veveyse ?",
        answer:
          "Oui. Châtel-Saint-Denis, Semsales, Granges et les communes de la Veveyse font partie de notre zone d'intervention depuis Romont.",
      },
    ],
  },
  {
    slug: "nettoyage-vuisternens-devant-romont",
    city: "Vuisternens-devant-Romont",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Glâne",
    title: "Nettoyage à Vuisternens-devant-Romont",
    description:
      "Nettoyage professionnel à Vuisternens-devant-Romont. Gzimmo, entreprise voisine à Romont : fin de bail, maisons, locaux.",
    intro:
      "À deux pas de notre siège, Vuisternens-devant-Romont bénéficie d'interventions rapides et d'un service de proximité.",
    geo: { latitude: 46.7183, longitude: 6.9189 },
    priority: 0.95,
    nearbyCommunes: ["Romont", "Villarlod", "Massonnens", "Ursy"],
    servicesHighlight: ["Nettoyage maisons", "Fin de bail", "Entretien locaux"],
    sections: [
      {
        title: "Proximité immédiate depuis Romont",
        body: "Vuisternens-devant-Romont est l'une des communes les plus proches de notre siège. Nous y intervenons pour des nettoyages de fin de bail, l'entretien de maisons et de locaux professionnels.",
      },
    ],
    faqs: [
      {
        question: "Êtes-vous proches de Vuisternens-devant-Romont ?",
        answer:
          "Oui. Notre entreprise est basée à Romont, à quelques minutes de Vuisternens. C'est l'une de nos zones d'intervention prioritaires.",
      },
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
      "Nettoyage professionnel à Fribourg et agglomération. Gzimmo, basé à Romont : bureaux, fin de bail, après chantier. Devis gratuit.",
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
        body: "Notre siège à Romont est idéalement situé pour desservir Fribourg et l'ensemble du canton. Même équipe, même exigence, devis gratuit sous 24 h.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous dans l'agglomération fribourgeoise ?",
        answer:
          "Oui : Fribourg, Marly, Villars-sur-Glâne, Givisiez et les communes limitrophes.",
      },
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
      "Bulle et la Gruyère : Gzimmo déploie son expertise en nettoyage professionnel depuis Romont, avec intervention rapide.",
    geo: { latitude: 46.6175, longitude: 7.0569 },
    priority: 0.8,
    nearbyCommunes: ["La Tour-de-Trême", "Riaz", "Vuadens", "Broc"],
    servicesHighlight: ["Entretien locaux", "Fin de bail", "Nettoyage vitres"],
    sections: [
      {
        title: "Nettoyage en Gruyère",
        body: "Bulle, carrefour de la Gruyère, accueille commerces et entreprises qui nécessitent un entretien régulier et fiable. Gzimmo intervient avec la même rigueur qu'à Romont.",
      },
    ],
    faqs: [
      {
        question: "Couvrez-vous la Gruyère depuis Romont ?",
        answer: "Oui. Bulle, La Tour-de-Trême et les communes de la Gruyère font partie de notre zone d'intervention.",
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
      "Nettoyage professionnel à Lausanne et agglomération. Gzimmo : bureaux, appartements, fin de bail. Devis gratuit, Suisse romande.",
    intro:
      "Lausanne et l'Ouest vaudois : une équipe expérimentée pour l'entretien de vos espaces professionnels et privés.",
    geo: { latitude: 46.5197, longitude: 6.6323 },
    priority: 0.75,
    nearbyCommunes: ["Renens", "Pully", "Prilly", "Ecublens"],
    servicesHighlight: ["Nettoyage bureaux", "Appartements", "Fin de bail"],
    sections: [
      {
        title: "Nettoyage professionnel à Lausanne",
        body: "Lausanne, capitale vaudoise, demande des prestataires fiables et discrets. Gzimmo intervient pour l'entretien de bureaux, le nettoyage d'appartements et les fins de bail.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Lausanne depuis Romont ?",
        answer:
          "Oui. Nous couvrons Lausanne, Renens, Pully et l'agglomération lausannoise.",
      },
    ],
  },
  {
    slug: "nettoyage-geneve",
    city: "Genève",
    canton: "GE",
    cantonName: "Genève",
    title: "Nettoyage professionnel à Genève",
    description:
      "Nettoyage professionnel à Genève et canton. Gzimmo : bureaux, fin de bail, après chantier. Devis gratuit sous 24 h.",
    intro:
      "Genève et son canton : nettoyage professionnel rigoureux, produits de qualité, équipe expérimentée.",
    geo: { latitude: 46.2044, longitude: 6.1432 },
    priority: 0.75,
    nearbyCommunes: ["Carouge", "Lancy", "Meyrin", "Vernier"],
    servicesHighlight: ["Bureaux", "Fin de bail", "Après chantier"],
    sections: [
      {
        title: "Service de nettoyage à Genève",
        body: "Genève exige ponctualité et discrétion. Gzimmo intervient pour les entreprises, régies et particuliers du canton, avec un devis gratuit avant chaque mission.",
      },
    ],
    faqs: [
      {
        question: "Couvrez-vous tout le canton de Genève ?",
        answer: "Oui. Genève ville et les communes du canton font partie de notre zone Suisse romande.",
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
      "Nettoyage professionnel à Neuchâtel et canton. Gzimmo : entretien locaux, fin de bail. Équipe expérimentée, devis gratuit.",
    intro:
      "Neuchâtel : un service de nettoyage professionnel discret et minutieux pour particuliers et entreprises.",
    geo: { latitude: 46.99, longitude: 6.931 },
    priority: 0.7,
    nearbyCommunes: ["La Chaux-de-Fonds", "Colombier", "Peseux"],
    servicesHighlight: ["Entretien locaux", "Fin de bail", "Vitres"],
    sections: [
      {
        title: "Nettoyage en canton de Neuchâtel",
        body: "Gzimmo intervient à Neuchâtel et dans les communes du canton pour l'entretien de locaux et les nettoyages spécialisés.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Neuchâtel ?",
        answer: "Oui. Neuchâtel et les communes du canton font partie de notre couverture Suisse romande.",
      },
    ],
  },
  {
    slug: "nettoyage-sion",
    city: "Sion",
    canton: "VS",
    cantonName: "Valais",
    title: "Nettoyage professionnel à Sion",
    description:
      "Nettoyage professionnel à Sion et Valais romand. Gzimmo : bureaux, fin de bail. Devis gratuit sous 24 h.",
    intro:
      "Sion et le Valais romand : prestations de nettoyage professionnel avec la rigueur Gzimmo.",
    geo: { latitude: 46.2331, longitude: 7.3606 },
    priority: 0.65,
    nearbyCommunes: ["Sierre", "Conthey", "Martigny"],
    servicesHighlight: ["Bureaux", "Fin de bail", "Après chantier"],
    sections: [
      {
        title: "Nettoyage en Valais romand",
        body: "Depuis Romont, nous desservons Sion et le Valais romand pour l'entretien de bureaux, les fins de bail et les remises en état.",
      },
    ],
    faqs: [
      {
        question: "Couvrez-vous le Valais romand ?",
        answer: "Oui. Sion, Sierre et les communes du Valais romand font partie de notre zone.",
      },
    ],
  },
  {
    slug: "nettoyage-yverdon-les-bains",
    city: "Yverdon-les-Bains",
    canton: "VD",
    cantonName: "Vaud",
    district: "Jura-Nord vaudois",
    title: "Nettoyage professionnel à Yverdon-les-Bains",
    description:
      "Nettoyage professionnel à Yverdon-les-Bains et Nord vaudois. Gzimmo : appartements, bureaux, locaux.",
    intro:
      "Yverdon-les-Bains et le Nord vaudois : intervention rapide pour un résultat impeccable.",
    geo: { latitude: 46.7785, longitude: 6.6412 },
    priority: 0.7,
    nearbyCommunes: ["Grandson", "Orbe", "Payerne"],
    servicesHighlight: ["Appartements", "Bureaux", "Entretien locaux"],
    sections: [
      {
        title: "Nettoyage à Yverdon",
        body: "Gzimmo intervient à Yverdon-les-Bains pour des nettoyages d'appartements, l'entretien de bureaux et de locaux professionnels.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Yverdon-les-Bains ?",
        answer: "Oui. Yverdon et le Nord vaudois font partie de notre zone Suisse romande.",
      },
    ],
  },
  {
    slug: "nettoyage-morges",
    city: "Morges",
    canton: "VD",
    cantonName: "Vaud",
    district: "Morges",
    title: "Nettoyage professionnel à Morges",
    description:
      "Nettoyage professionnel à Morges et Côte vaudoise. Gzimmo : locaux, fin de bail, vitres.",
    intro:
      "Morges et la Côte : un accompagnement fiable pour particuliers et professionnels.",
    geo: { latitude: 46.5112, longitude: 6.4985 },
    priority: 0.7,
    nearbyCommunes: ["Tolochenaz", "Lonay", "Préverenges"],
    servicesHighlight: ["Locaux", "Fin de bail", "Vitres"],
    sections: [
      {
        title: "Nettoyage sur la Côte vaudoise",
        body: "Morges et les communes de la Côte bénéficient de nos prestations d'entretien régulier et de nettoyage ponctuel.",
      },
    ],
    faqs: [
      {
        question: "Couvrez-vous Morges et la Côte ?",
        answer: "Oui. Morges, Tolochenaz et la Côte vaudoise font partie de notre zone.",
      },
    ],
  },
  {
    slug: "nettoyage-nyon",
    city: "Nyon",
    canton: "VD",
    cantonName: "Vaud",
    district: "Nyon",
    title: "Nettoyage professionnel à Nyon",
    description:
      "Nettoyage professionnel à Nyon et La Côte. Gzimmo : entretien régulier, prestations ponctuelles.",
    intro:
      "Nyon : des interventions planifiées avec précision pour habitants et entreprises.",
    geo: { latitude: 46.3833, longitude: 6.2333 },
    priority: 0.65,
    nearbyCommunes: ["Gland", "Rolle", "Coppet"],
    servicesHighlight: ["Entretien régulier", "Fin de bail", "Bureaux"],
    sections: [
      {
        title: "Nettoyage à Nyon",
        body: "Nyon et la région lémanique : Gzimmo assure entretien régulier et prestations ponctuelles avec la même exigence qu'à Romont.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Nyon ?",
        answer: "Oui. Nyon, Gland et la Côte font partie de notre couverture.",
      },
    ],
  },
  {
    slug: "nettoyage-payerne",
    city: "Payerne",
    canton: "VD",
    cantonName: "Vaud",
    district: "Broye-Vully",
    title: "Nettoyage professionnel à Payerne",
    description:
      "Nettoyage professionnel à Payerne et Broye vaudoise. Gzimmo, proche depuis Romont : devis gratuit.",
    intro:
      "Payerne et la Broye vaudoise : service flexible et soigné, à proximité de notre base fribourgeoise.",
    geo: { latitude: 46.822, longitude: 6.939 },
    priority: 0.8,
    nearbyCommunes: ["Avenches", "Estavayer-le-Lac", "Fétigny"],
    servicesHighlight: ["Fin de bail", "Locaux", "Maisons"],
    sections: [
      {
        title: "Nettoyage en Broye vaudoise",
        body: "Payerne, à la frontière fribourgeoise, est naturellement desservie depuis notre siège à Romont. Entretien de locaux, fin de bail et nettoyage de maisons.",
      },
    ],
    faqs: [
      {
        question: "Êtes-vous proches de Payerne ?",
        answer:
          "Oui. Payerne est à proximité de Romont. Nous y intervenons régulièrement pour des particuliers et des entreprises.",
      },
    ],
  },
  {
    slug: "nettoyage-ursy",
    city: "Ursy",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Glâne",
    title: "Nettoyage professionnel à Ursy",
    description:
      "Nettoyage à Ursy et en Glâne. Gzimmo, entreprise à Romont : fin de bail, maisons, locaux. Intervention rapide.",
    intro:
      "Ursy et la Glâne : service de proximité depuis notre siège romontais.",
    geo: { latitude: 46.735, longitude: 6.982 },
    priority: 0.9,
    nearbyCommunes: ["Romont", "Vauderens", "Siviriez", "Massonnens"],
    servicesHighlight: ["Fin de bail", "Maisons", "Entretien locaux"],
    sections: [
      {
        title: "Nettoyage à Ursy",
        body: "Ursy fait partie du district de la Glâne, notre zone de prédilection depuis Romont. Nettoyage de maisons, fin de bail et entretien de locaux.",
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous à Ursy ?",
        answer: "Oui. Ursy et les communes de la Glâne sont couvertes en priorité depuis Romont.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const headquarters = locations.find((l) => l.isHeadquarters);
export const romontRegionLocations = locations.filter(
  (l) => l.canton === "FR" && (l.isHeadquarters || l.district === "Glâne" || l.district === "Broye" || l.district === "Veveyse"),
);

import type { FaqContent } from "@/data/faq";

export type SourceLink = { href: string; label: string };

export type Location = {
  slug: string;
  city: string;
  canton: string;
  cantonName: string;
  district?: string;
  title: string;
  description: string;
  intro: string;
  subtitle?: string;
  geo: { latitude: number; longitude: number };
  priority: number;
  isHeadquarters?: boolean;
  nearbyCommunes: string[];
  communeGroups: { title: string; names: string[] }[];
  rules: { title: string; body: string; sources: SourceLink[] };
  remoteHandover: { title: string; body: string };
  building?: { title?: string; body: string; sourceLine: string; sources: SourceLink[] };
  example: { body: string; sources: SourceLink[] };
  servicesHighlight: string[];
  faqs: FaqContent[];
  priorityLinks?: { label: string; href: string }[];
};

const federalRestitution: SourceLink = {
  href: "https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_267",
  label: "Code des obligations, art. 267 et 267a (Fedlex)",
};

const federalCleaningNote: SourceLink = {
  href: "https://www.rechtsratgeber-rassismus.admin.ch/pdf/FRB_Apres_la_resiliation.pdf",
  label: "Confédération : le nettoyage fait partie de la restitution (art. 267 CO)",
};

const fribourgBuildings: SourceLink = {
  href: "https://www.fr.ch/deef/ssd/statistiques-par-themes/batiments",
  label: "État de Fribourg, bâtiments à usage d'habitation, 2025",
};

const vaudRulv: SourceLink = {
  href: "https://www.vd.ch/fileadmin/user_upload/themes/vie_privee/logement/fichiers_pdf/rulv.pdf",
  label: "Règles et usages locatifs du canton de Vaud, art. 36 et 37 (PDF du 14 novembre 2025)",
};

const lausanneStats: SourceLink = {
  href: "https://www.lausanne.ch/officiel/statistique/portrait-statistique.html",
  label: "Ville de Lausanne, Portrait statistique 2025",
};

const romontExample: SourceLink = {
  href: "/nettoyage-romont#realisation-romont",
  label: "Photos avant et après du fin de bail réalisé à Romont",
};

export const locations: Location[] = [
  {
    slug: "nettoyage-romont",
    city: "Romont",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Glâne",
    title: "Nettoyage à Romont, Glâne et Broye",
    description:
      "Entreprise de nettoyage à Romont, Route de Raboud 8. Nous intervenons en Glâne, dans la Broye et le Gros-de-Vaud : Moudon, Oron, Payerne, Estavayer-le-Lac. Réponse sous 24 h.",
    intro:
      "Notre siège est à la Route de Raboud 8, 1680 Romont, dans le district de la Glâne. C'est d'ici que nous partons pour toutes nos interventions.",
    geo: { latitude: 46.6917, longitude: 6.9111 },
    priority: 1,
    isHeadquarters: true,
    nearbyCommunes: [
      "Vuisternens-devant-Romont",
      "Ursy",
      "Mézières",
      "Massonnens",
      "Moudon",
      "Oron",
      "Payerne",
      "Estavayer-le-Lac",
    ],
    communeGroups: [
      {
        title: "Glâne",
        names: ["Vuisternens-devant-Romont", "Ursy", "Mézières", "Massonnens"],
      },
      {
        title: "Broye et Gros-de-Vaud",
        names: ["Moudon", "Oron", "Payerne", "Estavayer-le-Lac"],
      },
    ],
    rules: {
      title: "Deux droits de restitution sur le même départ",
      body: "Romont et Estavayer-le-Lac sont fribourgeoises. Le locataire y restitue le logement dans l'état d'un usage conforme au contrat : le nettoyage en fait partie, et le bailleur signale tout de suite les défauts qu'il impute au locataire. Moudon, Oron et Payerne sont vaudoises. Là, les règles et usages locatifs du canton de Vaud placent la remise à midi le jour de l'échéance : locaux propres et vidés, sols contrôlables, toutes les clés y compris les doubles.",
      sources: [federalRestitution, federalCleaningNote, vaudRulv],
    },
    remoteHandover: {
      title: "Fin de bail à Romont",
      body: "À Romont, vous faites l'état des lieux avec la régie, qui suit sa propre checklist. Nous fixons la date du nettoyage dans le devis.",
    },
    building: {
      body: "En 2025, le canton de Fribourg compte 75 906 bâtiments à usage d'habitation, dont 45 395 maisons individuelles, soit 59,8 %. C'est une moyenne cantonale : Romont n'a pas de chiffre séparé.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: [
      "Nettoyage fin de bail",
      "Entretien de bureaux",
      "Nettoyage après chantier",
      "Conciergerie régies",
    ],
    faqs: [
      {
        question: "Quelles communes de la Glâne partent du siège ?",
        answer:
          "Vuisternens-devant-Romont, Ursy, Mézières et Massonnens. Pour un devis : 076 214 23 42.",
      },
      {
        question: "Intervenez-vous aussi à Moudon, Oron, Payerne et Estavayer-le-Lac ?",
        answer:
          "Oui. Ces communes font partie de la Broye et du Gros-de-Vaud, que nous desservons depuis Romont.",
      },
      {
        question: "Pourquoi la règle change-t-elle entre Estavayer-le-Lac et Payerne ?",
        answer:
          "Estavayer-le-Lac est en Broye fribourgeoise : Code des obligations, art. 267. Payerne, Moudon et Oron sont vaudois : règles et usages locatifs, art. 36 et 37, remise à midi.",
      },
    ],
    priorityLinks: [
      { label: "Photos avant et après", href: "/realisations#realisation-romont" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Conciergerie pour régies", href: "/conciergerie" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
  {
    slug: "nettoyage-bulle",
    city: "Bulle",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Gruyère",
    title: "Nettoyage à Bulle, Gruyère et Veveyse",
    description:
      "Nettoyage à Bulle, Riaz, Vuadens et Broc en Gruyère, et à Châtel-Saint-Denis en Veveyse. Devis gratuit, sans frais de déplacement.",
    intro:
      "Bulle est le centre de la Gruyère. Nous y venons depuis notre siège de Romont.",
    geo: { latitude: 46.6175, longitude: 7.0569 },
    priority: 0.8,
    nearbyCommunes: ["Riaz", "Vuadens", "Broc", "Châtel-Saint-Denis"],
    communeGroups: [
      { title: "Gruyère", names: ["Bulle", "Riaz", "Vuadens", "Broc"] },
      { title: "Veveyse", names: ["Châtel-Saint-Denis"] },
    ],
    rules: {
      title: "Gruyère et Veveyse : le même droit fédéral",
      body: "Bulle, Riaz, Vuadens, Broc et Châtel-Saint-Denis sont dans le canton de Fribourg. La Gruyère et la Veveyse suivent donc le Code des obligations, pas les usages vaudois de la remise à midi. Le logement est rendu dans l'état qui résulte d'un usage conforme au contrat. Le nettoyage fait partie de cette restitution. Le bailleur contrôle l'état à la sortie et signale les défauts qu'il impute au locataire.",
      sources: [federalRestitution, federalCleaningNote],
    },
    remoteHandover: {
      title: "Fin de bail en Gruyère et en Veveyse",
      body: "En Gruyère comme en Veveyse, nous nettoyons d'après la checklist de votre régie. Le devis indique la date du passage.",
    },
    building: {
      body: "Le recensement cantonal de 2025 donne 59,8 % de maisons individuelles, soit 45 395 bâtiments sur 75 906. Ce taux vaut pour l'ensemble du canton.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: ["Après chantier", "Entretien de locaux", "Fin de bail"],
    faqs: [
      {
        question: "Quelles communes de la Gruyère sont listées avec Bulle ?",
        answer: "Bulle, Riaz, Vuadens et Broc.",
      },
      {
        question: "Châtel-Saint-Denis est-il en Gruyère ?",
        answer: "Non, Châtel-Saint-Denis est dans la Veveyse. Nous le présentons sur cette page avec Bulle.",
      },
      {
        question: "La remise en Veveyse suit-elle les usages vaudois ?",
        answer:
          "Non. Châtel-Saint-Denis est fribourgeois, comme Bulle. La restitution suit les art. 267 et 267a du Code des obligations. La remise à midi des usages vaudois ne s'applique pas.",
      },
    ],
    priorityLinks: [
      { label: "Photos d'un fin de bail fait à Romont", href: "/nettoyage-romont#realisation-romont" },
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/nettoyage-romont" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
  {
    slug: "nettoyage-fribourg",
    city: "Fribourg",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Sarine",
    title: "Nettoyage à Fribourg, Matran et Guin",
    description:
      "Nettoyage à Fribourg, Marly, Villars-sur-Glâne, Givisiez et Matran (Sarine), et à Düdingen (Guin) en Singine. Réponse sous 24 h.",
    intro:
      "Nous intervenons à Fribourg et dans les communes voisines de la Sarine, ainsi qu'à Düdingen (Guin), en Singine.",
    geo: { latitude: 46.8065, longitude: 7.1619 },
    priority: 0.85,
    nearbyCommunes: ["Matran", "Marly", "Villars-sur-Glâne", "Givisiez", "Düdingen (Guin)"],
    communeGroups: [
      {
        title: "Sarine",
        names: ["Fribourg", "Matran", "Marly", "Villars-sur-Glâne", "Givisiez"],
      },
      { title: "Singine", names: ["Düdingen (Guin)"] },
    ],
    rules: {
      title: "Sarine et Singine sous le Code des obligations",
      body: "Fribourg, Matran, Marly, Villars-sur-Glâne et Givisiez sont dans la Sarine. Düdingen (Guin) est dans la Singine. L'article 267 du Code des obligations vise l'état conforme au contrat, nettoyage compris. L'article 267a oblige le bailleur à signaler immédiatement les défauts à la restitution.",
      sources: [federalRestitution, federalCleaningNote],
    },
    remoteHandover: {
      title: "Fin de bail en Sarine et en Singine",
      body: "Votre régie remet sa checklist d'état des lieux, et nous la suivons point par point. La date du nettoyage figure dans le devis.",
    },
    building: {
      body: "59,8 % des bâtiments d'habitation du canton sont des maisons individuelles en 2025, soit 45 395 sur 75 906. Ce chiffre porte sur tout le canton.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: ["Nettoyage de bureaux", "Fin de bail", "Après chantier"],
    faqs: [
      {
        question: "Quelles communes autour de Fribourg ?",
        answer: "Marly, Villars-sur-Glâne, Givisiez et Matran, dans la Sarine.",
      },
      {
        question: "Pourquoi Düdingen (Guin) figure-t-il sur une page en français ?",
        answer:
          "Düdingen est le nom officiel, Guin le nom français. La commune est dans le district de la Singine.",
      },
      {
        question: "Quelle règle fédérale vise la restitution à Fribourg ?",
        answer:
          "Les art. 267 et 267a du Code des obligations : état conforme à un usage conforme au contrat, nettoyage compris, et signalement immédiat des défauts à la sortie.",
      },
    ],
    priorityLinks: [
      { label: "Photos d'un fin de bail fait à Romont", href: "/nettoyage-romont#realisation-romont" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage après chantier", href: "/nettoyage-apres-chantier" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/nettoyage-romont" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
  {
    slug: "nettoyage-lausanne",
    city: "Lausanne",
    canton: "VD",
    cantonName: "Vaud",
    district: "Lausanne",
    title: "Nettoyage à Lausanne et dans l'Ouest lausannois",
    subtitle: "Renens et Crissier dans l'Ouest lausannois",
    description:
      "Nettoyage à Lausanne, Renens et Crissier. Devis gratuit, réponse sous 24 h, sans frais de déplacement.",
    intro:
      "Nous intervenons à Lausanne, avec Renens et Crissier dans l'Ouest lausannois, depuis notre siège de Romont.",
    geo: { latitude: 46.5197, longitude: 6.6323 },
    priority: 0.75,
    nearbyCommunes: ["Renens", "Crissier"],
    communeGroups: [
      { title: "Lausanne", names: ["Lausanne"] },
      { title: "Ouest lausannois", names: ["Renens", "Crissier"] },
    ],
    rules: {
      title: "Remise vaudoise à midi",
      body: "Lausanne, Renens et Crissier sont dans le canton de Vaud. Les règles et usages locatifs, art. 36 et 37, fixent la remise à midi le jour de l'échéance. Les locaux et les dépendances sont propres, entretenus et vidés. Les sols doivent pouvoir être contrôlés. Selon le logement, le passage vise aussi le filtre de ventilation, les stores à lamelles, les jalousies, les écoulements d'eau accessibles et les radiateurs. L'état des lieux est signé par les deux parties. Toutes les clés sont remises, y compris celles qui ont été faites faire.",
      sources: [vaudRulv],
    },
    remoteHandover: {
      title: "Fin de bail à Lausanne, Renens et Crissier",
      body: "Pour une remise à midi, la date et l'heure de notre passage sont fixées dans le devis, d'après la checklist de votre régie.",
    },
    building: {
      title: "Le logement à Lausanne",
      body: "Le portrait statistique 2025 de la Ville compte, pour 2024, 82 321 logements : 48 825 dans des maisons à plusieurs logements et 2 192 dans des maisons individuelles. Ce chiffre concerne la seule commune de Lausanne.",
      sourceLine: "Ville de Lausanne, Portrait statistique 2025, logements 2024",
      sources: [lausanneStats],
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: ["Nettoyage de bureaux", "Appartements", "Fin de bail"],
    faqs: [
      {
        question: "Où intervenez-vous autour de Lausanne ?",
        answer: "À Lausanne, avec Renens et Crissier dans l'Ouest lausannois.",
      },
      {
        question: "Que disent les usages vaudois sur l'heure de remise ?",
        answer:
          "À midi le jour de l'échéance, les locaux sont propres, vidés, et les sols contrôlables. Les clés, y compris les doubles, sont remises. Source : règles et usages locatifs du canton de Vaud, art. 36 et 37.",
      },
      {
        question: "Combien de logements compte Lausanne ?",
        answer:
          "82 321 en 2024, dont 48 825 en immeubles et 2 192 en maisons individuelles. Ces chiffres concernent la seule commune de Lausanne. Source : Portrait statistique 2025.",
      },
    ],
    priorityLinks: [
      { label: "Photos d'un fin de bail fait à Romont", href: "/nettoyage-romont#realisation-romont" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage de bureaux", href: "/nettoyage-bureaux" },
      { label: "Zones d'intervention", href: "/zones" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
  {
    slug: "nettoyage-vevey-montreux",
    city: "Vevey",
    canton: "VD",
    cantonName: "Vaud",
    district: "Riviera-Pays-d'Enhaut",
    title: "Nettoyage à Vevey et Montreux",
    description:
      "Nettoyage fin de bail, appartements et vitres à Vevey, Montreux et Aigle. Devis gratuit, sans frais de déplacement.",
    intro:
      "Nous intervenons à Vevey et à Montreux, sur la Riviera, ainsi qu'à Aigle, dans le Chablais.",
    geo: { latitude: 46.4628, longitude: 6.8419 },
    priority: 0.72,
    nearbyCommunes: ["Montreux", "Aigle"],
    communeGroups: [
      { title: "Riviera", names: ["Vevey", "Montreux"] },
      { title: "Chablais", names: ["Aigle"] },
    ],
    rules: {
      title: "Riviera et Chablais : la remise vaudoise",
      body: "Vevey, Montreux et Aigle sont vaudois. La sortie de bail y suit les règles et usages locatifs du canton, en plus du Code des obligations. L'article 36 place la remise à midi le jour de l'échéance, locaux vidés et sols contrôlables. L'article 37 demande toutes les clés, copies comprises. Le filtre de ventilation, les stores et les radiateurs se traitent quand le logement les a, selon le même texte.",
      sources: [vaudRulv],
    },
    remoteHandover: {
      title: "Fin de bail sur la Riviera et à Aigle",
      body: "Sur la Riviera comme à Aigle, envoyez-nous la checklist de votre régie. Nous fixons la date dans le devis.",
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: ["Fin de bail", "Appartements", "Vitres"],
    faqs: [
      {
        question: "Montreux a-t-il une page à part ?",
        answer: "Non, Montreux est présenté avec Vevey sur cette page.",
      },
      {
        question: "Intervenez-vous à Aigle ?",
        answer: "Oui. Aigle, dans le Chablais, fait partie de cette zone.",
      },
    ],
    priorityLinks: [
      { label: "Photos d'un fin de bail fait à Romont", href: "/nettoyage-romont#realisation-romont" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage à Bulle", href: "/nettoyage-bulle" },
      { label: "Zones d'intervention", href: "/zones" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
  {
    slug: "nettoyage-yverdon",
    city: "Yverdon-les-Bains",
    canton: "VD",
    cantonName: "Vaud",
    district: "Jura-Nord vaudois",
    title: "Nettoyage à Yverdon-les-Bains",
    subtitle: "Nord vaudois",
    description:
      "Yverdon-les-Bains, dans le Nord vaudois. Réponse sous 24 h, sans frais de déplacement.",
    intro:
      "Dans le Nord vaudois, nous intervenons à Yverdon-les-Bains depuis notre siège de Romont.",
    geo: { latitude: 46.7785, longitude: 6.6412 },
    priority: 0.7,
    nearbyCommunes: [],
    communeGroups: [{ title: "Nord vaudois", names: ["Yverdon-les-Bains"] }],
    rules: {
      title: "Usages vaudois, au nord du canton",
      body: "Yverdon-les-Bains dépend des règles et usages locatifs vaudois, comme Lausanne. La remise est à midi le jour de l'échéance. Le logement est vidé, les sols peuvent être contrôlés, et toutes les clés sont rendues, doubles compris. Le texte cantonal cite aussi, quand ils existent, le filtre de ventilation, les stores à lamelles et les radiateurs. Le devis reprend la checklist de votre régie.",
      sources: [vaudRulv],
    },
    remoteHandover: {
      title: "Fin de bail à Yverdon-les-Bains",
      body: "À Yverdon-les-Bains, nous travaillons d'après la checklist de votre régie. Le devis fixe le jour du nettoyage.",
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: ["Fin de bail", "Appartements", "Bureaux"],
    faqs: [
      {
        question: "Intervenez-vous autour d'Yverdon ?",
        answer:
          "Pour une commune proche d'Yverdon-les-Bains, appelez-nous : nous vous dirons si nous pouvons venir. Nous n'intervenons pas dans le canton de Neuchâtel.",
      },
      {
        question: "Quelle heure de remise s'applique à Yverdon ?",
        answer:
          "Midi, le jour de l'échéance, selon les art. 36 et 37 des règles et usages locatifs vaudois. Les locaux sont propres et vidés, les clés et leurs doubles sont remises.",
      },
    ],
    priorityLinks: [
      { label: "Photos d'un fin de bail fait à Romont", href: "/nettoyage-romont#realisation-romont" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage à Lausanne", href: "/nettoyage-lausanne" },
      { label: "Zones d'intervention", href: "/zones" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
  {
    slug: "nettoyage-morat",
    city: "Morat (Murten)",
    canton: "FR",
    cantonName: "Fribourg",
    district: "Lac",
    title: "Nettoyage à Morat (Murten)",
    description:
      "Nettoyage fin de bail, appartements et parties communes à Morat (Murten), district du Lac. Devis gratuit, réponse sous 24 h.",
    intro:
      "Nous intervenons à Morat (Murten), dans le district du Lac, depuis notre siège de Romont.",
    geo: { latitude: 46.928, longitude: 7.117 },
    priority: 0.68,
    nearbyCommunes: [],
    communeGroups: [{ title: "District du Lac", names: ["Morat (Murten)"] }],
    rules: {
      title: "Au bord du lac, le bail reste fédéral",
      body: "Morat est fribourgeoise, dans le district du Lac. Ce sont donc les règles fédérales qui s'appliquent, pas les usages vaudois. Le locataire rend le logement dans l'état d'un usage conforme au contrat. Le nettoyage en fait partie. Le bailleur signale immédiatement les défauts à la sortie, selon les art. 267 et 267a du Code des obligations.",
      sources: [federalRestitution, federalCleaningNote],
    },
    remoteHandover: {
      title: "Fin de bail à Morat",
      body: "À Morat aussi, c'est la checklist de votre régie qui fait foi. Nous convenons de la date dans le devis.",
    },
    building: {
      body: "Le canton compte, en 2025, 75 906 bâtiments d'habitation, dont 45 395 maisons individuelles (59,8 %). C'est un chiffre cantonal.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "",
      sources: [romontExample],
    },
    servicesHighlight: ["Fin de bail", "Appartements", "Parties communes"],
    faqs: [
      {
        question: "Pourquoi écrire Morat (Murten) ?",
        answer: "Morat est le nom français, Murten le nom allemand de la même commune.",
      },
      {
        question: "La remise à Morat suit-elle les usages vaudois ?",
        answer:
          "Non. Morat est dans le canton de Fribourg. La restitution suit les art. 267 et 267a du Code des obligations, pas la remise à midi du canton de Vaud.",
      },
    ],
    priorityLinks: [
      { label: "Photos d'un fin de bail fait à Romont", href: "/nettoyage-romont#realisation-romont" },
      { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
      { label: "Nettoyage à Fribourg", href: "/nettoyage-fribourg" },
      { label: "Zones d'intervention", href: "/zones" },
      { label: "Avis clients", href: "/avis" },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const headquarters = locations.find((l) => l.isHeadquarters);

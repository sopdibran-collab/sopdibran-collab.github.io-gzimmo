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
  travelRows: { place: string; time: string }[];
  travelNote: string;
  communeGroups: { title: string; names: string[] }[];
  rules: { title: string; body: string; sources: SourceLink[] };
  remoteHandover: { title: string; body: string };
  building: { body: string; sourceLine: string; sources: SourceLink[] };
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
      "Siège Route de Raboud 8, 1680 Romont. Glâne, Broye et Gros-de-Vaud : Moudon, Oron, Payerne, Estavayer-le-Lac. Frais de déplacement indiqués dans le devis.",
    intro:
      "Le siège de Gzimmo Sàrl est Route de Raboud 8, 1680 Romont, dans le district de la Glâne. Les passages autour du siège partent de cette adresse.",
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
    travelRows: [
      { place: "Moudon", time: "environ 15 min" },
      { place: "Oron", time: "environ 18 min" },
      { place: "Payerne", time: "environ 20 min" },
      { place: "Estavayer-le-Lac", time: "environ 25 à 30 min" },
    ],
    travelNote:
      "Ces durées partent de Route de Raboud 8. Elles décrivent la route, pas l'heure à laquelle l'équipe sonne.",
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
      body: "Romont et Estavayer-le-Lac sont fribourgeoises. Le locataire y restitue le logement dans l'état d'un usage conforme au contrat : le nettoyage en fait partie, et le bailleur signale tout de suite les défauts qu'il impute au locataire. Moudon, Oron et Payerne sont vaudoises. Là, les règles et usages locatifs du canton de Vaud placent la remise à midi le jour de l'échéance : locaux propres et vidés, sols contrôlables, toutes les clés y compris les doubles. Le canton de Fribourg ne publie pas sur fr.ch une checklist de pièces à nettoyer.",
      sources: [federalRestitution, federalCleaningNote, vaudRulv],
    },
    remoteHandover: {
      title: "Fin de bail à Romont : clés et régie",
      body: "Pour une fin de bail à Romont, l'équipe part de Route de Raboud 8. Les clés d'un logement de la Glâne peuvent être prises au siège ou remises le matin avec la régie, dans l'appartement. L'état des lieux se tient sur place. Le jour est celui écrit dans le devis.",
    },
    building: {
      body: "En 2025, le canton de Fribourg compte 75 906 bâtiments à usage d'habitation, dont 45 395 maisons individuelles, soit 59,8 %. Autour du siège, la Glâne est un district de maisons. Ce pourcentage décrit le canton, pas un décompte des maisons de la seule ville de Romont.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "Fin de bail réalisé à Romont : paroi de douche, stores et vitrage, avant et après.",
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
          "Vuisternens-devant-Romont, Ursy, Mézières et Massonnens. Le siège est Route de Raboud 8, 1680 Romont. Téléphone 076 214 23 42.",
      },
      {
        question: "Moudon, Oron, Payerne et Estavayer-le-Lac sont-ils sur cette page ?",
        answer:
          "Oui, dans la section Broye et Gros-de-Vaud. Moudon est à environ 15 minutes, Oron à environ 18, Payerne à environ 20, Estavayer-le-Lac à environ 25 à 30. Ce ne sont pas des communes de la Glâne.",
      },
      {
        question: "Pourquoi la règle change-t-elle entre Estavayer-le-Lac et Payerne ?",
        answer:
          "Estavayer-le-Lac est en Broye fribourgeoise : Code des obligations, art. 267. Payerne, Moudon et Oron sont vaudois : règles et usages locatifs, art. 36 et 37, remise à midi.",
      },
      {
        question: "Où se fait l'état des lieux quand le logement est à Romont ?",
        answer:
          "Dans le logement, avec la régie. Les clés peuvent être prises au siège, Route de Raboud 8, ou remises le matin sur place. Le jour figure dans le devis.",
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
      "Bulle, Riaz, Vuadens et Broc en Gruyère. Châtel-Saint-Denis en Veveyse, environ 20 à 25 minutes depuis Romont. Frais de déplacement indiqués dans le devis.",
    intro:
      "Bulle est le centre de la Gruyère. Gzimmo y intervient depuis Romont : il n'y a pas de bureau à Bulle.",
    geo: { latitude: 46.6175, longitude: 7.0569 },
    priority: 0.8,
    nearbyCommunes: ["Riaz", "Vuadens", "Broc", "Châtel-Saint-Denis"],
    travelRows: [
      { place: "Bulle", time: "environ 15 min" },
      { place: "Châtel-Saint-Denis", time: "environ 20 à 25 min" },
    ],
    travelNote:
      "Bulle est sur l'A12, à environ 15 minutes du siège. Châtel-Saint-Denis, en Veveyse, demande environ 20 à 25 minutes. Ni l'une ni l'autre de ces durées n'est une heure de rendez-vous.",
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
      title: "Préparer la sortie de bail avant de quitter Romont",
      body: "Rien n'est stocké à Bulle. Avant de quitter Romont, on convient avec la régie de l'heure de l'état des lieux et de l'endroit où laisser les clés — souvent le logement lui-même, parfois l'agence à Bulle ou à Châtel-Saint-Denis. L'équipe apporte le matériel pour la checklist de cette régie.",
    },
    building: {
      body: "Le recensement cantonal de 2025 donne 59,8 % de maisons individuelles, soit 45 395 bâtiments sur 75 906. Bulle, elle, est le centre urbain de la Gruyère : ce taux ne décrit pas le parc d'appartements de la ville.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "Les photos avant et après du site montrent un appartement nettoyé à Romont. Aucun chantier de la Gruyère n'est photographié ici.",
      sources: [romontExample],
    },
    servicesHighlight: ["Après chantier", "Entretien de locaux", "Fin de bail"],
    faqs: [
      {
        question: "Quelles communes de la Gruyère sont listées avec Bulle ?",
        answer: "Riaz, Vuadens et Broc, plus Bulle. Le départ se fait de Route de Raboud 8 à Romont, à environ 15 minutes de Bulle.",
      },
      {
        question: "Châtel-Saint-Denis est-il en Gruyère ?",
        answer:
          "Non. Châtel-Saint-Denis est dans la Veveyse. Le trajet depuis Romont y est d'environ 20 à 25 minutes. Il n'y a pas de page séparée pour cette commune.",
      },
      {
        question: "La remise en Veveyse suit-elle les usages vaudois ?",
        answer:
          "Non. Châtel-Saint-Denis est fribourgeois, comme Bulle. La restitution suit les art. 267 et 267a du Code des obligations. La remise à midi des usages vaudois ne s'applique pas.",
      },
      {
        question: "Les photos du site ont-elles été prises à Bulle ?",
        answer: "Non. Elles montrent un fin de bail réalisé à Romont.",
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
      "Fribourg et Matran dans la Sarine, Düdingen (Guin) dans la Singine. Marly, Villars-sur-Glâne, Givisiez. Frais de déplacement indiqués dans le devis.",
    intro:
      "Fribourg et Matran sont dans la Sarine. Matran n'est pas une commune de la Glâne. Düdingen (Guin) est dans la Singine ; cette page reste en français.",
    geo: { latitude: 46.8065, longitude: 7.1619 },
    priority: 0.85,
    nearbyCommunes: ["Matran", "Marly", "Villars-sur-Glâne", "Givisiez", "Düdingen (Guin)"],
    travelRows: [
      { place: "Matran", time: "environ 15 à 20 min" },
      { place: "Fribourg", time: "environ 25 min" },
    ],
    travelNote:
      "Matran est avant Fribourg sur l'A12 : environ 15 à 20 minutes depuis Romont, puis environ 25 minutes jusqu'à Fribourg. Düdingen (Guin) est desservie sans minute publiée : le devis indique le déplacement.",
    communeGroups: [
      {
        title: "Sarine",
        names: ["Fribourg", "Matran", "Marly", "Villars-sur-Glâne", "Givisiez"],
      },
      { title: "Singine", names: ["Düdingen (Guin)"] },
    ],
    rules: {
      title: "Sarine et Singine sous le Code des obligations",
      body: "Fribourg, Matran, Marly, Villars-sur-Glâne et Givisiez sont dans la Sarine. Düdingen (Guin) est dans la Singine. Le nom de la commune est allemand, et il n'existe pas de page en allemand : le bail se lit ici en français. L'article 267 du Code des obligations vise l'état conforme au contrat, nettoyage compris. L'article 267a oblige le bailleur à signaler immédiatement les défauts à la restitution. Le canton ne publie pas de liste de pièces à nettoyer à la place de ce texte.",
      sources: [federalRestitution, federalCleaningNote],
    },
    remoteHandover: {
      title: "Les clés restent à Fribourg ou à Guin",
      body: "À Fribourg, les clés ne transitent pas par le siège de Romont. Elles sont remises à la régie sarinoise, ou à celle de Düdingen pour un logement à Guin, à l'heure de l'état des lieux. L'équipe arrive de Route de Raboud 8 pour ce rendez-vous. Le procès-verbal se signe dans le logement.",
    },
    building: {
      body: "59,8 % des bâtiments d'habitation du canton sont des maisons individuelles en 2025, soit 45 395 sur 75 906. La ville de Fribourg et l'agglomération de la Sarine sont plus denses que ce taux, qui mélange ville et campagne. Aucun décompte séparé de la ville n'est repris ici.",
      sourceLine: "État de Fribourg, statistiques des bâtiments, 2025",
      sources: [fribourgBuildings],
    },
    example: {
      body: "L'avant/après publié a été pris à Romont, dans la Glâne, pas dans un logement de la Sarine ou de la Singine.",
      sources: [romontExample],
    },
    servicesHighlight: ["Nettoyage de bureaux", "Fin de bail", "Après chantier"],
    faqs: [
      {
        question: "Matran est-il une commune de la Glâne ?",
        answer:
          "Non. Matran est dans la Sarine, avec Fribourg, Marly, Villars-sur-Glâne et Givisiez. Depuis Romont, Matran est à environ 15 à 20 minutes et Fribourg à environ 25.",
      },
      {
        question: "Pourquoi Düdingen (Guin) figure-t-il sur une page en français ?",
        answer:
          "Düdingen est le nom officiel, Guin le nom français, dans le district de la Singine. Le nettoyage est décrit en français. Il n'y a pas de page en allemand. Aucune minute de route n'est publiée pour Guin.",
      },
      {
        question: "Quelle règle fédérale vise la restitution à Fribourg ?",
        answer:
          "Les art. 267 et 267a du Code des obligations : état conforme à un usage conforme au contrat, nettoyage compris, et signalement immédiat des défauts à la sortie.",
      },
      {
        question: "Les clés d'un logement fribourgeois passent-elles par Romont ?",
        answer:
          "Non. Elles sont remises à la régie à Fribourg ou à Düdingen, à l'heure de l'état des lieux. L'équipe, elle, part de Route de Raboud 8.",
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
    title: "Nettoyage à Lausanne, zone étendue",
    subtitle: "zone étendue",
    description:
      "Lausanne, Renens et Crissier. Environ 35 à 40 minutes de route jusqu'à Lausanne depuis Romont. Frais de déplacement indiqués dans le devis.",
    intro:
      "Lausanne, Renens et Crissier forment une zone étendue, au-delà du bassin proche de Romont. Le siège reste Route de Raboud 8.",
    geo: { latitude: 46.5197, longitude: 6.6323 },
    priority: 0.75,
    nearbyCommunes: ["Renens", "Crissier"],
    travelRows: [{ place: "Lausanne", time: "environ 35 à 40 min" }],
    travelNote:
      "La fourchette concerne Lausanne. Renens et Crissier sont dans la même zone étendue ; leur temps de route n'est pas chiffré à part. Rien ici ne fixe une heure d'arrivée.",
    communeGroups: [
      { title: "Zone étendue", names: ["Lausanne", "Renens", "Crissier"] },
    ],
    rules: {
      title: "Remise vaudoise à midi",
      body: "Lausanne, Renens et Crissier sont dans le canton de Vaud. Les règles et usages locatifs, art. 36 et 37, fixent la remise à midi le jour de l'échéance. Les locaux et les dépendances sont propres, entretenus et vidés. Les sols doivent pouvoir être contrôlés. Selon le logement, le passage vise aussi le filtre de ventilation, les stores à lamelles, les jalousies, les écoulements d'eau accessibles et les radiateurs. L'état des lieux est signé par les deux parties. Toutes les clés sont remises, y compris celles qui ont été faites faire.",
      sources: [vaudRulv],
    },
    remoteHandover: {
      title: "Clés remises sur place, pas ramenées à Romont",
      body: "Le passage lausannois se cale sur l'état des lieux de la régie, souvent à midi selon les usages vaudois. Les clés, doubles compris, restent à Lausanne, à Renens ou à Crissier : on les remet à la régie sur place. L'équipe repart vers Romont après le logement prévu au devis.",
    },
    building: {
      body: "Le portrait statistique 2025 de la Ville compte, pour 2024, 82 321 logements : 48 825 dans des maisons à plusieurs logements et 2 192 dans des maisons individuelles. C'est un chiffre de la commune de Lausanne, pas du canton de Vaud, ni de Renens ou de Crissier.",
      sourceLine: "Ville de Lausanne, Portrait statistique 2025, logements 2024",
      sources: [lausanneStats],
    },
    example: {
      body: "L'exemple en photos est un fin de bail fait à Romont. Il ne documente pas un état des lieux à Lausanne, à Renens ou à Crissier.",
      sources: [romontExample],
    },
    servicesHighlight: ["Nettoyage de bureaux", "Appartements", "Fin de bail"],
    faqs: [
      {
        question: "Quelles communes accompagnent Lausanne ?",
        answer:
          "Renens et Crissier, avec Lausanne. Le siège est à Romont, Route de Raboud 8.",
      },
      {
        question: "Pourquoi cette page parle-t-elle de zone étendue ?",
        answer:
          "Lausanne est à environ 35 à 40 minutes de route depuis Romont, au-delà des communes à moins de 30 minutes. Renens et Crissier sont dans la même zone. Les frais de déplacement sont indiqués dans le devis.",
      },
      {
        question: "Que disent les usages vaudois sur l'heure de remise ?",
        answer:
          "À midi le jour de l'échéance, les locaux sont propres, vidés, et les sols contrôlables. Les clés, y compris les doubles, sont remises. Source : règles et usages locatifs du canton de Vaud, art. 36 et 37.",
      },
      {
        question: "Le portrait statistique compte-t-il les logements de Renens ?",
        answer:
          "Non. Les 82 321 logements de 2024 sont ceux de la commune de Lausanne : 48 825 en immeubles et 2 192 en maisons individuelles. Source : Portrait statistique 2025.",
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
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const headquarters = locations.find((l) => l.isHeadquarters);

/**
 * Bandes de temps de route depuis Romont.
 * Seules les minutes du fichier géographique sont publiées.
 */

export type ZonePlace = {
  name: string;
  href?: string;
};

export type ZoneBand = {
  id: string;
  timeLabel: string;
  detail?: string;
  note?: string;
  places: ZonePlace[];
};

export const indicativeTimeNotice =
  "Temps indicatif, pas un délai d'intervention garanti.";

export const zoneBands: ZoneBand[] = [
  {
    id: "siege",
    timeLabel: "Siège · Glâne",
    detail: "Route de Raboud 8, 1680 Romont",
    places: [
      { name: "Romont", href: "/nettoyage-romont" },
      { name: "Vuisternens-devant-Romont" },
      { name: "Ursy" },
      { name: "Mézières" },
      { name: "Massonnens" },
    ],
  },
  {
    id: "quinze-vingt",
    timeLabel: "~15–20 min",
    note: "Bulle environ 15 minutes, Moudon environ 15, Matran environ 15 à 20, Oron environ 18, Payerne environ 20. Riaz, Vuadens et Broc sont desservies avec Bulle, sans minute séparée.",
    places: [
      { name: "Bulle", href: "/nettoyage-bulle" },
      { name: "Moudon" },
      { name: "Matran" },
      { name: "Oron" },
      { name: "Payerne" },
      { name: "Riaz" },
      { name: "Vuadens" },
      { name: "Broc" },
    ],
  },
  {
    id: "vingt-trente",
    timeLabel: "~20–30 min",
    note: "Châtel-Saint-Denis environ 20 à 25 minutes, Fribourg environ 25, Estavayer-le-Lac environ 25 à 30. Marly, Villars-sur-Glâne et Givisiez sont desservies avec Fribourg. Düdingen (Guin) aussi, sans minute publiée.",
    places: [
      { name: "Fribourg", href: "/nettoyage-fribourg" },
      { name: "Châtel-Saint-Denis" },
      { name: "Estavayer-le-Lac" },
      { name: "Marly" },
      { name: "Villars-sur-Glâne" },
      { name: "Givisiez" },
      { name: "Düdingen (Guin)" },
    ],
  },
  {
    id: "etendue",
    timeLabel: "~35–40 min",
    detail: "zone étendue",
    note: "Les 35 à 40 minutes concernent Lausanne et Yverdon-les-Bains. Renens et Crissier sont dans la même zone étendue. Leur temps de route figure dans le devis.",
    places: [
      { name: "Lausanne", href: "/nettoyage-lausanne" },
      { name: "Renens" },
      { name: "Crissier" },
      { name: "Yverdon-les-Bains" },
    ],
  },
];

/** Communes réellement listées comme desservies. Pas les cantons entiers. */
export const servedCommunes: { name: string; cantonName: string }[] = [
  { name: "Romont", cantonName: "Fribourg" },
  { name: "Vuisternens-devant-Romont", cantonName: "Fribourg" },
  { name: "Ursy", cantonName: "Fribourg" },
  { name: "Mézières", cantonName: "Fribourg" },
  { name: "Massonnens", cantonName: "Fribourg" },
  { name: "Bulle", cantonName: "Fribourg" },
  { name: "Riaz", cantonName: "Fribourg" },
  { name: "Vuadens", cantonName: "Fribourg" },
  { name: "Broc", cantonName: "Fribourg" },
  { name: "Châtel-Saint-Denis", cantonName: "Fribourg" },
  { name: "Fribourg", cantonName: "Fribourg" },
  { name: "Matran", cantonName: "Fribourg" },
  { name: "Marly", cantonName: "Fribourg" },
  { name: "Villars-sur-Glâne", cantonName: "Fribourg" },
  { name: "Givisiez", cantonName: "Fribourg" },
  { name: "Düdingen", cantonName: "Fribourg" },
  { name: "Estavayer-le-Lac", cantonName: "Fribourg" },
  { name: "Moudon", cantonName: "Vaud" },
  { name: "Oron", cantonName: "Vaud" },
  { name: "Payerne", cantonName: "Vaud" },
  { name: "Lausanne", cantonName: "Vaud" },
  { name: "Renens", cantonName: "Vaud" },
  { name: "Crissier", cantonName: "Vaud" },
  { name: "Yverdon-les-Bains", cantonName: "Vaud" },
];

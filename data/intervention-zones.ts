/**
 * Bassins publiés. Aucune durée de route.
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

export const zoneBands: ZoneBand[] = [
  {
    id: "glane-broye",
    timeLabel: "Siège · Glâne et Broye",
    detail: "Route de Raboud 8, 1680 Romont",
    note: "Romont est le siège, dans le district de la Glâne. Vuisternens-devant-Romont, Ursy, Mézières et Massonnens sont en Glâne. Estavayer-le-Lac est en Broye fribourgeoise ; Moudon, Oron et Payerne sont vaudoises. Détail sur la page Romont.",
    places: [
      { name: "Romont", href: "/nettoyage-romont" },
      { name: "Vuisternens-devant-Romont" },
      { name: "Ursy" },
      { name: "Mézières" },
      { name: "Massonnens" },
      { name: "Estavayer-le-Lac" },
      { name: "Moudon" },
      { name: "Oron" },
      { name: "Payerne" },
    ],
  },
  {
    id: "gruyere-veveyse",
    timeLabel: "Gruyère et Veveyse",
    note: "Bulle, Riaz, Vuadens et Broc sont en Gruyère. Châtel-Saint-Denis est en Veveyse, pas en Gruyère. Toutes ces communes sont fribourgeoises. Page Bulle.",
    places: [
      { name: "Bulle", href: "/nettoyage-bulle" },
      { name: "Riaz" },
      { name: "Vuadens" },
      { name: "Broc" },
      { name: "Châtel-Saint-Denis" },
    ],
  },
  {
    id: "sarine-singine",
    timeLabel: "Sarine et Singine",
    note: "Fribourg, Matran, Marly, Villars-sur-Glâne et Givisiez sont dans la Sarine. Düdingen (Guin) est en Singine. Page Fribourg.",
    places: [
      { name: "Fribourg", href: "/nettoyage-fribourg" },
      { name: "Matran" },
      { name: "Marly" },
      { name: "Villars-sur-Glâne" },
      { name: "Givisiez" },
      { name: "Düdingen (Guin)" },
    ],
  },
  {
    id: "lausanne",
    timeLabel: "Lausanne et Ouest lausannois",
    note: "Lausanne, avec Renens et Crissier dans l'Ouest lausannois. Page Lausanne.",
    places: [
      { name: "Lausanne", href: "/nettoyage-lausanne" },
      { name: "Renens" },
      { name: "Crissier" },
    ],
  },
  {
    id: "riviera-chablais",
    timeLabel: "Riviera et Chablais",
    note: "Vevey et Montreux sont sur la Riviera. Aigle est dans le Chablais. Montreux n'a pas de page à part : il est présenté avec Vevey.",
    places: [
      { name: "Vevey", href: "/nettoyage-vevey-montreux" },
      { name: "Montreux" },
      { name: "Aigle" },
    ],
  },
  {
    id: "nord-vaudois",
    timeLabel: "Nord vaudois",
    note: "La commune publiée est Yverdon-les-Bains. Pour une commune proche, appelez-nous : nous vous dirons si nous pouvons venir. Pas d'intervention à Neuchâtel.",
    places: [{ name: "Yverdon-les-Bains", href: "/nettoyage-yverdon" }],
  },
  {
    id: "lac",
    timeLabel: "Lac",
    note: "Morat est le nom français, Murten le nom allemand. Commune fribourgeoise, district du Lac. Page en français seulement.",
    places: [{ name: "Morat (Murten)", href: "/nettoyage-morat" }],
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
  { name: "Vevey", cantonName: "Vaud" },
  { name: "Montreux", cantonName: "Vaud" },
  { name: "Aigle", cantonName: "Vaud" },
  { name: "Morat", cantonName: "Fribourg" },
];

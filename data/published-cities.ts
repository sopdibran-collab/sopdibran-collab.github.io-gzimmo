/**
 * Villes qui ont une page. Footer et accueil lisent cette liste.
 * Yverdon entre avec la page /nettoyage-yverdon.
 */
export const publishedCities = [
  {
    label: "Romont",
    homeLabel: "Entreprise de nettoyage à Romont",
    lineAnchor: "Romont",
    href: "/nettoyage-romont",
    note: "Siège",
  },
  {
    label: "Bulle",
    homeLabel: "Nettoyage à Bulle",
    lineAnchor: "Bulle",
    href: "/nettoyage-bulle",
  },
  {
    label: "Fribourg",
    homeLabel: "Nettoyage à Fribourg",
    lineAnchor: "Fribourg",
    href: "/nettoyage-fribourg",
  },
  {
    label: "Lausanne",
    homeLabel: "Nettoyage à Lausanne",
    lineAnchor: "Lausanne",
    href: "/nettoyage-lausanne",
  },
  {
    label: "Vevey",
    homeLabel: "Nettoyage à Vevey et Montreux",
    lineAnchor: "Vevey et Montreux",
    href: "/nettoyage-vevey-montreux",
  },
  {
    label: "Yverdon",
    homeLabel: "Nettoyage à Yverdon-les-Bains",
    lineAnchor: "Yverdon-les-Bains",
    href: "/nettoyage-yverdon",
  },
  {
    label: "Morat (Murten)",
    homeLabel: "Nettoyage à Morat (Murten)",
    lineAnchor: "Morat (Murten)",
    href: "/nettoyage-morat",
  },
] as const;

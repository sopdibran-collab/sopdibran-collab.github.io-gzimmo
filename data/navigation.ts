export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  pages: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

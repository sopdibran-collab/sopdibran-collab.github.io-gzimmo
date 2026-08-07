import { company } from "./company";
import type { FaqContent } from "./faq";
import { getFaqById } from "./faq";

export type GeoServiceLanding = {
  path: string;
  serviceSlug: string;
  city: string;
  canton: string;
  cantonName: string;
  geo: { latitude: number; longitude: number };
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs: FaqContent[];
  localPageHref: string;
  localPageLabel: string;
  priority: number;
};

const { phoneDisplay, email } = company;

export const geoServiceLandings: GeoServiceLanding[] = [
  {
    path: "nettoyage-fin-de-bail-romont",
    serviceSlug: "nettoyage-fin-de-bail",
    city: "Romont",
    canton: "FR",
    cantonName: "Fribourg",
    geo: { latitude: 46.6917, longitude: 6.9111 },
    h1: "Fin de bail à Romont — on s'occupe du ménage, vous du déménagement",
    subtitle:
      "Vous quittez Romont ou la Glâne ? Dites-nous juste la date d'état des lieux. Le reste, c'est nous.",
    metaTitle: "Nettoyage fin de bail Romont — devis gratuit | Particuliers",
    metaDescription: `Vous quittez un logement à Romont ? On s'occupe de la fin de bail. Devis gratuit sous 24 h, garantie pour votre caution. Gzimmo sur place — ${phoneDisplay}.`,
    intro:
      "Rendre les clés à Romont, c'est aussi passer l'état des lieux — et souvent, c'est là que ça coince pour la garantie. Si vous êtes déjà dans les cartons, laissez-nous le nettoyage. On est littéralement à côté (Route de Raboud 8) : joignables, réactifs, et habitués aux régies de la Glâne.",
    sections: [
      {
        title: "Un message, un devis clair",
        body: `Appelez le ${phoneDisplay} ou écrivez à ${email} : surface, état, date. On vous répond sous 24 h avec un devis simple — pour que vous sachiez où vous allez, sans mauvaise surprise.`,
      },
      {
        title: "On vise votre garantie locative",
        body: "Joints, four, vitres, placards… Les détails qui font tiquer la régie, on les connaît. Et si un point juste bloque à l'état des lieux, on revient le corriger — garantie de remise de bail, sans frais en plus.",
      },
      {
        title: "Romont, Vuisternens, Ursy, Estavayer…",
        body: "On vit ici. Priorité Glâne, intervention rapide. Parfait si vous déménagez le week-end et que la régie passe juste après.",
      },
    ],
    faqs: [
      {
        question: "Ça coûte combien, une fin de bail à Romont ?",
        answer: getFaqById("cout-fin-de-bail")!.answer,
      },
      {
        question: "C'est pour bientôt — trop tard pour vous appeler ?",
        answer:
          "Pas forcément. Prévenez-nous dès que vous avez la date. En Glâne on est proches : on fait tout pour vous caser, même en urgence.",
      },
      {
        question: "Et si la régie n'est pas d'accord ?",
        answer:
          "On a une garantie de remise de bail. Point juste non validé → on revient le corriger. Le but : que vous récupériez votre caution.",
      },
    ],
    localPageHref: "/seo/nettoyage-romont",
    localPageLabel: "Entreprise de nettoyage à Romont",
    priority: 0.95,
  },
  {
    path: "nettoyage-fin-de-bail-fribourg",
    serviceSlug: "nettoyage-fin-de-bail",
    city: "Fribourg",
    canton: "FR",
    cantonName: "Fribourg",
    geo: { latitude: 46.8065, longitude: 7.1619 },
    h1: "Fin de bail à Fribourg — vous avancez, on nettoie",
    subtitle:
      "Fribourg, Marly, Villars-sur-Glâne, Givisiez… Trop de cartons, trop peu de temps ? On gère le nettoyage de fin de bail.",
    metaTitle: "Nettoyage fin de bail Fribourg — devis gratuit | Particuliers",
    metaDescription: `Fin de bail à Fribourg : devis gratuit sous 24 h, checklist régie, on vise votre garantie locative. Gzimmo depuis Romont — ${phoneDisplay}.`,
    intro:
      "Nouvel appart, travail, cartons — et au milieu, la date d'état des lieux qui approche. À Fribourg comme ailleurs, improviser le grand ménage finit souvent mal pour la caution. On vient depuis Romont pour les particuliers de l'agglomération : devis simple, vrai nettoyage, objectif = récupérer votre garantie.",
    sections: [
      {
        title: "Écrivez-nous, on répond vite",
        body: `Pièces, état, date d'état des lieux : ${phoneDisplay}, ${email} ou le formulaire. Devis gratuit sous 24 h — clair, sans engagement.`,
      },
      {
        title: "Ce que la régie regarde vraiment",
        body: "Sanitaires, cuisine, sols, vitres, placards, petits détails. On ne fait pas « vite fait » : on prépare l'état des lieux comme si c'était notre caution.",
      },
      {
        title: "Depuis Romont jusqu'à Fribourg",
        body: "On connaît la route. Vous n'avez pas besoin d'être là toute la journée : on s'accorde sur les accès et les horaires avec vous.",
      },
    ],
    faqs: [
      {
        question: "Vous venez bien à Fribourg ville ?",
        answer:
          "Oui — Fribourg, Marly, Villars-sur-Glâne, Givisiez et alentours. On part de Romont, devis sous 24 h.",
      },
      {
        question: "Je suis un particulier, ça marche pour moi ?",
        answer:
          "Oui, c'est même la majorité de nos fins de bail. On explique le devis clairement et on s'organise autour de votre date.",
      },
      {
        question: "Le devis est vraiment gratuit ?",
        answer: getFaqById("devis-gratuit")!.answer,
      },
    ],
    localPageHref: "/seo/nettoyage-fribourg",
    localPageLabel: "Nettoyage professionnel à Fribourg",
    priority: 0.9,
  },
];

const geoByPath = new Map(geoServiceLandings.map((landing) => [landing.path, landing]));

export function getGeoServiceLanding(path: string) {
  return geoByPath.get(path);
}

export function getGeoServicePath(path: string) {
  return `/${path}`;
}

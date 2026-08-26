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
    h1: "Nettoyage fin de bail à Romont (FR)",
    subtitle:
      "Vous déménagez à Romont ou en Glâne ? Devis gratuit, checklist adaptée aux régies locales, garantie de remise de bail — siège Route de Raboud 8.",
    metaTitle: "Nettoyage fin de bail à Romont — devis gratuit | Garantie régie",
    metaDescription: `Fin de bail à Romont et en Glâne. Conforme aux régies de Romont, devis gratuit sous 24 h. Gzimmo — ${phoneDisplay}.`,
    intro:
      "À Romont, l'état des lieux de sortie suit les standards des régies immobilières de la ville et du district de la Glâne. Gzimmo Sàrl, basée Route de Raboud 8, prépare votre appartement ou maison pour la remise des clés : sanitaires, cuisine, sols, vitres et détails souvent retenus. Intervention locale — pas une page générique Suisse romande.",
    sections: [
      {
        title: "Régies de Romont et état des lieux en Glâne",
        body: "Les régies et propriétaires de Romont attendent un logement prêt pour l'état des lieux : joints détartrés, four dégraissé, vitres sans traces, placards et radiateurs inclus. Nous adaptons la checklist à votre régie et à la date de remise des clés — Vuisternens-devant-Romont, Ursy, Mézières, Estavayer et communes voisines comprises.",
      },
      {
        title: "Pourquoi une équipe basée à Romont pour votre fin de bail ?",
        body: "Notre siège est à Romont : planning réactif en Glâne, même équipe du devis à l'intervention, produits professionnels fournis. Pas de sous-traitance opaque. Vous déménagez ; on s'occupe du nettoyage pendant que vous finalisez votre installation.",
      },
      {
        title: "Demandez votre devis fin de bail à Romont",
        body: `Contactez-nous au ${phoneDisplay}, par e-mail à ${email} ou via le formulaire en ligne. Devis gratuit, réponse sous 24 h. Idéalement, prévenez-nous 1 à 2 semaines avant la date d'état des lieux.`,
      },
    ],
    faqs: [
      {
        question: "Combien coûte un nettoyage fin de bail à Romont ?",
        answer: getFaqById("cout-fin-de-bail")!.answer,
      },
      {
        question: "Intervenez-vous rapidement pour une fin de bail en Glâne ?",
        answer:
          "Oui. Notre siège à Romont nous permet d'intervenir en priorité dans le district de la Glâne. En cas d'urgence avant un état des lieux, contactez-nous — nous faisons notre maximum pour planifier l'intervention.",
      },
      {
        question: "La garantie régie s'applique-t-elle à Romont ?",
        answer:
          "Oui. Notre garantie de remise de bail couvre les interventions à Romont et dans le district de la Glâne. L'objectif : un état des lieux validé du premier coup par votre régie à Romont.",
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
    h1: "Nettoyage fin de bail à Fribourg",
    subtitle:
      "Vous déménagez à Fribourg ? Laissez-nous le nettoyage fin de bail — devis gratuit, garantie régie, équipe depuis Romont.",
    metaTitle: "Nettoyage fin de bail à Fribourg — devis gratuit | Garantie régie",
    metaDescription: `Fin de bail à Fribourg et agglomération. Conforme aux régies, devis gratuit sous 24 h. Gzimmo depuis Romont — ${phoneDisplay}.`,
    intro:
      "Un déménagement vers ou depuis Fribourg, Marly, Villars-sur-Glâne ou Givisiez ? Confiez-nous le nettoyage de fin de bail. Gzimmo Sàrl, basée à Romont, dessert l'agglomération fribourgeoise avec checklist précise, produits professionnels et garantie de remise de bail.",
    sections: [
      {
        title: "Fin de bail à Fribourg : une équipe depuis Romont",
        body: "Notre siège à Romont est idéalement situé pour desservir Fribourg capitale et les communes limitrophes. Nous intervenons pour les locataires, propriétaires, régies et agences immobilières de l'agglomération.",
      },
      {
        title: "Prestations conformes aux régies fribourgeoises",
        body: "Sanitaires détartrés, cuisines dégraissées, sols lessivés, vitres nettoyées, placards et détails souvent oubliés (joints, radiateurs, interrupteurs). Chaque prestation fait l'objet d'un devis gratuit et transparent avant intervention.",
      },
      {
        title: "Réactivité et devis sous 24 h",
        body: `Décrivez votre logement et la date d'état des lieux par téléphone (${phoneDisplay}), e-mail (${email}) ou formulaire. Nous répondons sous 24 h avec une proposition claire.`,
      },
    ],
    faqs: [
      {
        question: "Intervenez-vous pour une fin de bail à Fribourg ville ?",
        answer:
          "Oui. Fribourg, Marly, Villars-sur-Glâne, Givisiez et les communes de l'agglomération font partie de notre zone d'intervention régulière depuis Romont.",
      },
      {
        question: "Quel délai pour planifier un nettoyage fin de bail à Fribourg ?",
        answer:
          "Idéalement 1 à 2 semaines avant l'état des lieux. Contactez-nous dès que possible — nous adaptons le planning selon vos contraintes.",
      },
      {
        question: "Le devis fin de bail est-il gratuit à Fribourg ?",
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

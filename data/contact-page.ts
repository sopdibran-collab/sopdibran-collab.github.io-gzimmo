import { company, formatAddress } from "@/data/company";
import { faq, getFaqsByIds, type FaqItem } from "@/data/faq";

const { phoneDisplay, email } = company;

export const contactQuoteTitle = "Ce qu'il faut indiquer pour un devis";

export const contactQuoteIntro = [
  "Vous pouvez demander votre devis gratuit et sans engagement par téléphone au " +
    phoneDisplay +
    ", par e-mail à " +
    email +
    " ou avec le formulaire ci-dessus. Le plus simple est souvent d'appeler : vous nous décrivez le travail et nous établissons le devis.",
  "Le formulaire demande votre nom, votre téléphone, votre e-mail, le type de prestation et la commune. Vous avez le choix entre fin de bail, après chantier, entretien, vitres ou autre. La commune nous permet de vérifier qu'elle se trouve dans une zone desservie (cantons de Fribourg et de Vaud, voir la liste sur la page Zones).",
];

export const contactQuoteMessageLead =
  "Le message est facultatif, mais il nous aide à préparer le devis. Selon le cas, précisez :";

export const contactQuoteMessageItems = [
  "le logement ou le local (pièces, état) ;",
  "pour une fin de bail, la régie et la date de remise des clés ;",
  "pour un après-chantier, le type de travaux et la date de réception.",
];

export const contactQuoteRest = [
  "Le prix n'est pas forfaitaire : il dépend de la surface, de l'état et, pour une fin de bail, de la checklist de la régie.",
  "Si vous quittez un logement avec état des lieux, choisissez « Fin de bail » plutôt qu'« Entretien » : seule la fin de bail comprend notre garantie de retour si la régie refuse un point. Le nettoyage après chantier est une prestation distincte : le devis décrit le passage convenu, sans cette garantie.",
];

export const contactAfterTitle = "Après l'envoi";

export const contactAfterParagraphs = [
  "Une fois le formulaire envoyé, une page de confirmation s'affiche. Nous vous répondons sous 24 heures à l'adresse e-mail indiquée et établissons un devis détaillé. Le tarif convenu est le tarif final. La date de l'intervention est fixée dans le devis, selon notre planning.",
  "Si l'envoi du formulaire échoue, vous pouvez nous joindre au " +
    phoneDisplay +
    " ou à " +
    email +
    ". Les données du formulaire (nom, téléphone, e-mail, commune, type de prestation, message) servent à répondre à votre demande de devis et à planifier l'intervention.",
  "Notre siège se trouve " +
    formatAddress() +
    " (carte ci-dessous). Si votre commune ne figure pas sur la page Zones, indiquez-la quand même : nous vous dirons si nous pouvons venir.",
];

export const contactPageFaqs: FaqItem[] = [
  faq(
    "contact-quoi-indiquer",
    "tarifs",
    "Que faut-il indiquer pour un devis ?",
    `Nom, téléphone, e-mail, type de prestation et commune. Selon le cas, ajoutez dans le message les pièces et l'état du logement, la régie et la date de remise des clés, ou le type de travaux et la date de réception. Le devis est gratuit. ${phoneDisplay} · ${email}`,
  ),
  faq(
    "contact-apres-envoi",
    "delais",
    "Que se passe-t-il après l'envoi du formulaire ?",
    "Nous vous répondons sous 24 heures à l'adresse e-mail indiquée et établissons un devis sans engagement. Le tarif convenu est le tarif final, et la date du passage est fixée dans le devis.",
  ),
  faq(
    "contact-telephone-ou-formulaire",
    "qualite",
    "Puis-je appeler plutôt que remplir le formulaire ?",
    `Oui. Appelez le ${phoneDisplay} ou écrivez à ${email} : un échange suffit pour établir votre devis, sans engagement. Nous répondons sous 24 h.`,
  ),
  faq(
    "contact-fin-de-bail-ou-entretien",
    "prestations",
    "Fin de bail ou entretien : que choisir dans le formulaire ?",
    "Choisissez « Fin de bail » si vous quittez un logement avec état des lieux et remise des clés : nous suivons la checklist de la régie et revenons sans frais si un point est refusé. « Entretien » concerne les locaux, les bureaux, les appartements ou les maisons, sans cette garantie. « Après chantier » vise les poussières fines après travaux, et « Vitres » les surfaces intérieures et extérieures accessibles.",
  ),
  ...getFaqsByIds(["devis-gratuit", "delai-intervention"]),
];

import { company, formatAddress } from "@/data/company";
import { faq, getFaqsByIds, type FaqItem } from "@/data/faq";

const { phoneDisplay, email } = company;

export const contactQuoteTitle = "Ce qu'il faut indiquer pour un devis";

export const contactQuoteParagraphs = [
  "Trois voies aboutissent au même devis gratuit, sans engagement : le téléphone (" +
    phoneDisplay +
    "), l'e-mail (" +
    email +
    "), ou le formulaire ci-dessus. Le plus simple est souvent d'appeler : vous décrivez le travail, nous établissons le tarif ensemble.",
  "Le formulaire demande le nom, le téléphone, l'e-mail, le type de prestation et la commune. Les prestations proposées sont : fin de bail, après chantier, entretien, vitres, ou autre. La commune permet de vérifier que le lieu est dans une zone desservie (cantons de Fribourg et de Vaud, listes sur la page Zones).",
  "Le message est facultatif. Il accélère le devis s'il précise, selon le cas : le logement ou le local (pièces, état) ; la régie et la date de remise des clés pour une fin de bail ; le type de travaux et la date de réception pour un après-chantier. Le prix n'est pas un forfait unique : il dépend de la surface, de l'état et, en fin de bail, de la checklist de la régie.",
  "Pour quitter un logement avec état des lieux, choisissez « Fin de bail » plutôt qu'« Entretien » : seule la fin de bail comprend la garantie de retour si la régie refuse un point. L'après-chantier est une autre prestation : le devis décrit alors le passage convenu, sans cette garantie.",
];

export const contactAfterTitle = "Après l'envoi";

export const contactAfterParagraphs = [
  "Si l'envoi aboutit, vous arrivez sur une page de confirmation. Nous répondons sous 24 heures à l'adresse e-mail indiquée, avec un devis détaillé. Le tarif convenu est le tarif final. La date de l'intervention est ensuite fixée dans ce devis, selon le planning.",
  "Pour une urgence, appelez le " +
    phoneDisplay +
    " plutôt que d'attendre le retour écrit. Si l'envoi du formulaire échoue, le même numéro et " +
    email +
    " restent disponibles. Les données du formulaire (nom, téléphone, e-mail, localité, type de prestation, message) servent à répondre à la demande de devis et à planifier l'intervention.",
  "Siège : " +
    formatAddress() +
    ". Carte ci-dessous. Nous n'intervenons pas à Neuchâtel, à Genève ni en Valais. Une commune absente de la page Zones n'est pas pour autant refusée d'office : indiquez-la, nous vous dirons si nous pouvons venir.",
];

export const contactPageFaqs: FaqItem[] = [
  faq(
    "contact-quoi-indiquer",
    "tarifs",
    "Que faut-il indiquer pour un devis ?",
    `Nom, téléphone, e-mail, type de prestation et commune. Dans le message, utile selon le cas : pièces et état du logement, régie et date de remise des clés, type de travaux et date de réception. Le devis est gratuit. ${phoneDisplay} · ${email}`,
  ),
  faq(
    "contact-apres-envoi",
    "delais",
    "Que se passe-t-il après l'envoi du formulaire ?",
    "Nous répondons sous 24 heures à l'e-mail indiqué, avec un devis sans engagement. Le tarif convenu est le tarif final. La date du passage est fixée dans le devis. Pour une urgence, appelez le " +
      phoneDisplay +
      ".",
  ),
  faq(
    "contact-telephone-ou-formulaire",
    "qualite",
    "Puis-je appeler plutôt que remplir le formulaire ?",
    `Oui. Appelez le ${phoneDisplay} ou écrivez à ${email}. Un échange suffit pour un devis sur mesure, sans engagement. Réponse sous 24 h.`,
  ),
  faq(
    "contact-fin-de-bail-ou-entretien",
    "prestations",
    "Fin de bail ou entretien : que choisir dans le formulaire ?",
    "Fin de bail : état des lieux et remise des clés, checklist régie, garantie de retour sans frais si un point est refusé. Entretien : locaux, bureaux, appartements ou maisons sans cette garantie. Après chantier : poussières fines après travaux. Vitres : intérieur et extérieur accessibles.",
  ),
  ...getFaqsByIds(["devis-gratuit", "delai-intervention", "zone-hors-prioritaire"]),
];

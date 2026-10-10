import { company } from "@/data/company";
import { faq, type FaqItem } from "@/data/faq";

const { phoneDisplay, email } = company;

/** FAQ prix et fin de bail — devis sur mesure au téléphone. */
export const finDeBailPriceFaqs: FaqItem[] = [
  faq(
    "prix-fin-de-bail",
    "tarifs",
    "Quel est le prix d'un nettoyage de fin de bail ?",
    `Il n'y a pas de tarif unique : le prix dépend du logement, de son état et de ce que votre régie exige à l'état des lieux. Appelez le ${phoneDisplay} : vous expliquez la situation, nous posons les questions utiles et nous établissons un devis gratuit, sur mesure. ${email}`,
  ),
  faq(
    "devis-fin-de-bail",
    "tarifs",
    "Comment obtenir un devis gratuit pour un nettoyage de fin de bail ?",
    `Le plus simple est d'appeler le ${phoneDisplay}. Un premier échange (pièces, régie, date de remise des clés) permet un devis transparent, sans engagement. Le tarif convenu est le tarif final — pas de surprise le jour de l'état des lieux.`,
  ),
  faq(
    "garantie-etat-des-lieux",
    "qualite",
    "Que couvre la garantie d'état des lieux ?",
    "Si la régie tique, on revient sans frais. Cela vaut pour un point de la checklist non validé à l'état des lieux : sanitaires, cuisine, joints, vitres et les détails souvent repris.",
  ),
  faq(
    "fin-de-bail-regie-zones",
    "zone",
    "Intervenez-vous à Fribourg, en Vaud et pour les régies ?",
    "Oui. Locataires et régies, dans les cantons de Fribourg, de Vaud et de Neuchâtel. Le passage suit la checklist de votre régie.",
  ),
  faq(
    "delai-fin-de-bail",
    "delais",
    "Combien de temps à l'avance réserver un nettoyage de fin de bail ?",
    `Dès que la date de remise des clés est connue. Nous répondons sous 24 h et nous calons le passage selon le planning. Appelez le ${phoneDisplay}.`,
  ),
  faq(
    "inclus-etat-des-lieux",
    "prestations",
    "Que comprend le nettoyage avant l'état des lieux ?",
    "Sanitaires et joints, four, plaques et hotte, sols, vitres, plinthes, placards, radiateurs et interrupteurs. La liste suit la checklist de votre régie et figure sur le devis.",
  ),
];

import { company } from "@/data/company";
import { faq, type FaqItem } from "@/data/faq";

const { phoneDisplay, email } = company;

/**
 * 4 questions calées sur les requêtes GSC « prix » + « fin de bail ».
 * Devis sur mesure au téléphone — pas de calculateur.
 */
export const finDeBailPriceFaqs: FaqItem[] = [
  faq(
    "prix-fin-de-bail-gsc",
    "tarifs",
    "Quel est le prix d'un nettoyage de fin de bail ?",
    `Il n'y a pas de tarif unique : le prix dépend du logement, de son état et de ce que votre régie exige à l'état des lieux. Appelez le ${phoneDisplay} : vous expliquez la situation, nous posons les questions utiles et nous établissons un devis gratuit, sur mesure. ${email}`,
  ),
  faq(
    "devis-fin-de-bail-gsc",
    "tarifs",
    "Comment obtenir un devis gratuit pour un nettoyage de fin de bail ?",
    `Le plus simple est d'appeler le ${phoneDisplay}. Un premier échange (pièces, régie, date de remise des clés) permet un devis transparent, sans engagement. Le tarif convenu est le tarif final — pas de surprise le jour de l'état des lieux.`,
  ),
  faq(
    "garantie-etat-des-lieux-gsc",
    "qualite",
    "Que couvre la garantie d'état des lieux ?",
    "Nous garantissons la remise des clés auprès de votre régie : si un point de la checklist n'est pas validé à l'état des lieux, nous revenons corriger sans frais supplémentaires. Sanitaires, cuisine, joints, vitres et détails souvent retenus sur la garantie locative sont inclus dans la prestation.",
  ),
  faq(
    "fin-de-bail-regie-zones-gsc",
    "zone",
    "Intervenez-vous à Fribourg, en Vaud et pour les régies ?",
    "Oui. Nous travaillons pour locataires et régies à Fribourg, en Glâne (Romont), dans le canton de Vaud (de Bex à Nyon, Yverdon, Payerne, Vevey, Montreux, Crissier…) et dans le canton de Neuchâtel. Le nettoyage de fin de bail suit les standards de restitution de votre régie.",
  ),
];

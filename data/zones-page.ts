import { company } from "@/data/company";
import { faq, getFaqsByIds, type FaqItem } from "@/data/faq";
import {
  federalCleaningNote,
  federalRestitution,
  vaudRulv,
  type SourceLink,
} from "@/data/locations";

const { phoneDisplay, email } = company;

export const zonesIntroTitle = "Communes desservies par bassin";

export const zonesIntroParagraphs = [
  "Gzimmo Sàrl a son siège à Romont, Route de Raboud 8, 1680. Les zones principales sont les cantons de Fribourg et de Vaud. Les communes desservies sont regroupées ci-dessous par bassin. Sept d'entre elles ont une page, liée dans la liste : Romont, Bulle, Fribourg, Lausanne, Vevey (Montreux sur la même page), Yverdon-les-Bains et Morat (Murten).",
  "Une commune absente n'est pas publiée comme desservie : écrivez-nous ou appelez le " +
    phoneDisplay +
    " ; nous vous dirons si nous pouvons venir. Réponse sous 24 h. Nous n'intervenons pas à Neuchâtel, à Genève ni en Valais. Devis gratuit. " +
    email +
    ".",
];

export const zonesCantonTitle =
  "Fin de bail : ce qui change d'un canton à l'autre";

export const zonesCantonParagraphs = [
  "Le droit de restitution n'est pas le même selon que le logement est fribourgeois ou vaudois. Les pages villes le détaillent avec les sources. Dans les deux cantons, Gzimmo suit la checklist de votre régie ; la date du nettoyage est fixée dans le devis.",
  "À Fribourg (Glâne, Broye fribourgeoise, Gruyère, Veveyse, Sarine, Singine, district du Lac), le locataire restitue le logement dans l'état d'un usage conforme au contrat. Le nettoyage en fait partie. Le bailleur signale immédiatement les défauts à la sortie. Code des obligations, art. 267 et 267a.",
  "En Vaud (Lausanne et Ouest lausannois, Riviera, Chablais, Nord vaudois, Moudon, Oron, Payerne), les règles et usages locatifs, art. 36 et 37, placent la remise à midi le jour de l'échéance : locaux propres et vidés, sols contrôlables, toutes les clés y compris les doubles. Selon le logement, le texte vise aussi filtre de ventilation, stores et radiateurs.",
  "Exemple de rive : Estavayer-le-Lac est fribourgeoise ; Payerne, Moudon et Oron sont vaudoises. Châtel-Saint-Denis, en Veveyse, est fribourgeois comme Bulle. Morat (Murten) est fribourgeoise, dans le district du Lac.",
];

export const zonesCantonSources: SourceLink[] = [
  federalRestitution,
  federalCleaningNote,
  vaudRulv,
];

export const zonesPageFaqs: FaqItem[] = [
  faq(
    "zone-ma-commune",
    "zone",
    "Intervenez-vous dans ma commune ?",
    `Si elle figure dans les listes de cette page, oui. Romont, Bulle, Fribourg, Lausanne, Vevey (avec Montreux), Yverdon-les-Bains et Morat (Murten) ont en plus une page dédiée. Si votre commune n'apparaît pas, écrivez-nous ou appelez le ${phoneDisplay} : nous vous dirons si nous pouvons venir. Réponse sous 24 h. ${email}`,
  ),
  faq(
    "zone-hors-fr-vd",
    "zone",
    "Et en dehors de Fribourg et Vaud ?",
    "Non. Les zones principales sont les cantons de Fribourg et de Vaud, dans les communes listées ici. Nous n'intervenons pas à Neuchâtel, à Genève ni en Valais.",
  ),
  faq(
    "zone-pages-villes",
    "zone",
    "Pourquoi certaines communes ont-elles une page et d'autres non ?",
    "Seules Romont, Bulle, Fribourg, Lausanne, Vevey (avec Montreux), Yverdon-les-Bains et Morat (Murten) ont une page. Les autres communes desservies sont regroupées sur la page du bassin : par exemple Ursy sur la page Romont, Riaz sur la page Bulle, Renens sur la page Lausanne.",
  ),
  faq(
    "zone-fin-de-bail-cantons",
    "zone",
    "La fin de bail suit-elle les mêmes règles à Fribourg et en Vaud ?",
    "Non. À Fribourg, la restitution suit les art. 267 et 267a du Code des obligations : état conforme au contrat, nettoyage compris, défauts signalés tout de suite. En Vaud, les règles et usages locatifs, art. 36 et 37, placent la remise à midi, locaux vidés, sols contrôlables, toutes les clés y compris les doubles. Dans les deux cantons, nous nettoyons d'après la checklist de votre régie.",
  ),
  ...getFaqsByIds(["devis-gratuit"]),
];

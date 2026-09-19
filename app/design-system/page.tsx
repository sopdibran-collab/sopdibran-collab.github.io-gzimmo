import { notFound } from "next/navigation";

/**
 * Route volontairement absente en production.
 * Empêche qu’une preview design-system / Brand Book soit redéployée par erreur.
 */
export default function DesignSystemBlockedPage() {
  notFound();
}

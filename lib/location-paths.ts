/** URL canonique d'une page ville. Le slug est déjà `nettoyage-<ville>`. */
export function getLocationPath(slug: string) {
  return `/${slug}`;
}

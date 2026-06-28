import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

/**
 * Retourne la date de modification la plus récente parmi les fichiers sources.
 * Utilisé au build pour refléter les mises à jour réelles du contenu.
 */
export function getLastModified(...relativePaths: string[]): Date {
  let latest = 0;

  for (const relativePath of relativePaths) {
    const fullPath = path.join(ROOT, relativePath);
    try {
      const { mtimeMs } = fs.statSync(fullPath);
      if (mtimeMs > latest) latest = mtimeMs;
    } catch {
      // Fichier absent — ignoré
    }
  }

  return latest > 0 ? new Date(latest) : new Date();
}

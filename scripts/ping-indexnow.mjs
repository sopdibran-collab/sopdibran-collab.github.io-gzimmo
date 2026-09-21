#!/usr/bin/env node
/**
 * Ping IndexNow (Bing / moteurs compatibles) pour les URLs priorité Gzimmo.
 *
 * Prérequis :
 * - Fichier clé public : /public/<KEY>.txt (contenu = KEY)
 * - Clé déclarée chez Bing Webmaster Tools (IndexNow) si premier envoi
 *
 * Usage :
 *   node scripts/ping-indexnow.mjs
 *   npm run indexnow
 *   node scripts/ping-indexnow.mjs --dry-run
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const HOST = "gzimmo.ch";
const KEY = "4e83fba7d06a413e96b4abe69b2f5256";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

/** URLs priorité (P0 local + hubs sitemap). */
const PRIORITY_PATHS = [
  "/nettoyage-fin-de-bail",
  "/seo/nettoyage-romont",
  "/seo/nettoyage-fribourg",
  "/zones",
  "/services",
  "/sitemap.xml",
  "/",
  "/nettoyage-apres-chantier",
  "/contact",
  "/avis",
];

const dryRun = process.argv.includes("--dry-run");

function assertKeyFile() {
  const keyPath = join(root, "public", `${KEY}.txt`);
  if (!existsSync(keyPath)) {
    console.error(`Fichier clé manquant : public/${KEY}.txt`);
    process.exit(1);
  }
  const body = readFileSync(keyPath, "utf8").trim();
  if (body !== KEY) {
    console.error(`Contenu de public/${KEY}.txt doit être exactement la clé.`);
    process.exit(1);
  }
}

async function main() {
  assertKeyFile();

  const urlList = PRIORITY_PATHS.map((path) => `https://${HOST}${path}`);
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`IndexNow → ${urlList.length} URL(s)`);
  console.log(`keyLocation: ${KEY_LOCATION}`);
  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    console.log("Dry-run : aucune requête envoyée.");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  console.log(`HTTP ${res.status}`);
  if (text) console.log(text);

  // 200 = OK, 202 = Accepted (souvent Bing)
  if (res.status !== 200 && res.status !== 202) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

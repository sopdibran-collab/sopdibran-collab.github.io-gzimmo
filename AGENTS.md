# Gzimmo — règles de collaboration des agents IA

Ce dépôt est la source de vérité du projet Gzimmo Sàrl. Les agents IA doivent lire ce fichier avant toute intervention.

## 1. Contexte technique
- Application privée basée sur Next.js 15, React 19 et TypeScript.
- Respecter l'App Router, les conventions et l'architecture déjà présentes.
- Gestionnaire de paquets : npm. Ne pas remplacer le lockfile sans nécessité.
- Vérifier les scripts disponibles dans `package.json` avant de lancer des commandes.

## 2. Répartition des rôles
- **Grok Bot — agent d'exécution** : effectuer les recherches et audits qui lui sont confiés, proposer ou réaliser des changements isolés, documenter les fichiers modifiés, les hypothèses et les résultats des tests.
- **ChatGPT — architecte et réviseur** : cadrer les tâches, définir les critères d'acceptation, examiner les propositions et diffs, vérifier la cohérence SEO/technique et signaler les risques.
- **Propriétaire du projet — décision finale** : arbitrer les divergences et autoriser toute mise en production ou modification irréversible.

Les agents ne doivent jamais prétendre avoir communiqué directement entre eux. La coordination passe par les Issues, Pull Requests, commentaires et fichiers de suivi GitHub.

## 3. Protocole obligatoire pour chaque tâche
1. Lire ce fichier et examiner le code existant avant de proposer une solution.
2. Décrire le problème, le périmètre, les fichiers potentiellement concernés et les critères d'acceptation.
3. Créer une branche dédiée depuis `main` (ou depuis la branche de travail explicitement désignée).
4. Effectuer un changement limité au périmètre approuvé. Ne pas réécrire des fichiers sans nécessité.
5. Exécuter les vérifications pertinentes disponibles dans `package.json` ; indiquer clairement celles qui n'ont pas pu être exécutées.
6. Ouvrir une Pull Request vers `main` avec résumé, justification, fichiers touchés, tests, risques et captures si pertinentes.
7. Attendre la revue et l'approbation explicite du propriétaire avant fusion ou déploiement.

## 4. Règles de sécurité et de production
- Ne jamais pousser directement sur `main`.
- Ne jamais fusionner une Pull Request ni déclencher un déploiement en production sans approbation explicite.
- Ne jamais supprimer, écraser ou migrer des données, secrets, domaines, DNS, paramètres Vercel ou intégrations sans autorisation explicite.
- Ne jamais exposer de clés API, tokens, mots de passe, données personnelles ou contenu de fichiers `.env`.
- Ne pas inventer de résultats SEO, données Search Console, avis clients, certifications, adresses ou prestations. Distinguer les faits vérifiés des hypothèses.
- Pour les contenus commerciaux et SEO, rester exact sur les services réellement proposés par Gzimmo.
- Préserver l'accessibilité, les performances, le responsive design, les métadonnées, les données structurées et les liens internes existants, sauf changement explicitement demandé.

## 5. Format de compte rendu
Chaque agent termine son travail avec :
- **Objectif**
- **Constats**
- **Changements effectués** (ou recommandations uniquement)
- **Fichiers concernés**
- **Tests exécutés et résultats**
- **Risques / points non vérifiés**
- **Lien vers la branche ou Pull Request**

## 6. Gestion des désaccords
Si les agents proposent des solutions différentes, ne pas appliquer les deux. Présenter les options, leurs avantages, leurs risques et les preuves disponibles. Le propriétaire tranche avant toute modification conflictuelle.

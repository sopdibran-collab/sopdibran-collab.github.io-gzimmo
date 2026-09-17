# Gzimmo Sàrl — Site web

Site officiel de **Gzimmo Sàrl**, nettoyage professionnel en Suisse romande.

- **Domaine :** [gzimmo.ch](https://gzimmo.ch)
- **Contact :** info@gzimmo.ch
- **Repo :** [github.com/sopdibran-collab/gzimmo](https://github.com/sopdibran-collab/gzimmo)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Structure

```
app/           Pages et routes
components/    UI, layout, contenu, SEO
data/          Contenu statique (prêt pour Sanity)
lib/           Metadata, schema.org, utils
assets/        Logos source
public/        Assets servis (logos, images)
```

## Logos

| Fichier | Usage |
|---------|--------|
| `horizontal.svg` | Logo couleur (fonds clairs) |
| `horizontal_on_dark.svg` | Header sombre : marque `#41988E` + wordmark blanc |
| `monochrome_noir.svg` | Variante fond clair |
| `monochrome_blanc.svg` | Footer / aplats blancs |
| `icon_only.svg` / `.png` | Favicon |

## Variables d'environnement

Copier `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

### Formulaire de devis (Resend)

Le formulaire `/contact` envoie un e-mail structuré à **info@gzimmo.ch** via l’API Route `POST /api/devis` et [Resend](https://resend.com).

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `RESEND_API_KEY` | Oui (prod) | Clé API Resend |
| `EMAIL_FROM` | Non | Expéditeur. Défaut : `Gzimmo <onboarding@resend.dev>` (jusqu’à vérification du domaine) |

**Mise en place (Vercel) — Dibran**

1. Créer un compte [Resend](https://resend.com) et une API Key.
2. Dans le projet Vercel → Settings → Environment Variables :
   - `RESEND_API_KEY` = la clé
   - (optionnel) `EMAIL_FROM` = `Gzimmo <info@gzimmo.ch>` après vérification du domaine `gzimmo.ch` dans Resend
3. Redeploy.
4. Test : ouvrir `/contact`, envoyer une demande, vérifier la boîte `info@gzimmo.ch` (et les logs Resend / Vercel si besoin).

Sans `RESEND_API_KEY`, le formulaire affiche une erreur claire (pas de faux succès). Le téléphone reste visible à côté du formulaire.

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Accueil
- `/services` — Services
- `/nettoyage-fin-de-bail` — Détail service (et pages dédiées par ville)
- `/realisations` — Portfolio
- `/a-propos` — À propos
- `/contact` — Devis
- `/faq` — FAQ
- `/seo/[slug]` — Pages locales SEO

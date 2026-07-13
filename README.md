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
| `horizontal.svg` | Header, logo principal |
| `monochrome_noir.svg` | Variante fond clair |
| `icon_only.svg` / `.png` | Favicon |

## Variables d'environnement

Copier `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Accueil
- `/services` — Services
- `/services/[slug]` — Détail service
- `/realisations` — Portfolio
- `/a-propos` — À propos
- `/contact` — Devis
- `/faq` — FAQ
- `/seo/[slug]` — Pages locales SEO

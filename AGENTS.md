# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 15 (App Router) + Tailwind 4** marketing site for *Gzimmo Sàrl* (French content). There is no backend, database, or external service required — all content is static in `data/`.

- **Run / build / lint / test**: standard scripts in `package.json` (`npm run dev` on port 3000, `npm run build`, `npm run lint`). There is no test suite.
- **Do NOT use `dev.sh`**: it hard-codes a macOS Node path (`node-v22.16.0-darwin-x64`) and fails on Linux. Run `npm run dev` directly instead.
- **Env vars are optional**: everything in `.env.example` (Sanity, Plausible) is a placeholder/integration that is not wired up; the app runs and is testable end-to-end without any `.env.local`.
- **Contact/devis form** (`components/content/ContactForm.tsx`) is the main interactive feature. It submits via a `mailto:` link (no API call) and then shows a confirmation state ("Votre client mail va s'ouvrir."). There is no server endpoint to verify.

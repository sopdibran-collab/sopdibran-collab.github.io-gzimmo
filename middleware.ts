import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Défense en profondeur (pattern Alpe) : bloque docs internes, previews,
 * et fichiers sensibles même s’ils sont droppés dans `public/` par erreur.
 */
const BLOCKED_EXACT = new Set([
  "/agents.md",
  "/readme.md",
  "/.gitignore",
  "/.env",
  "/.env.example",
  "/.env.local",
  "/.env.development",
  "/.env.production",
  "/.env.test",
  "/cursor",
  "/cursor.json",
  "/design-system",
  "/brand-book",
  "/brandbook",
  "/brand-book.md",
  "/brandbook.md",
  "/docs",
]);

const BLOCKED_PREFIXES = [
  "/.cursor",
  "/cursor/",
  "/.env",
  "/design-system/",
  "/brand-book/",
  "/brandbook/",
  "/docs/",
];

function isBlocked(pathname: string): boolean {
  const path = pathname.toLowerCase();

  if (BLOCKED_EXACT.has(path)) return true;
  if (BLOCKED_PREFIXES.some((prefix) => path.startsWith(prefix))) return true;

  // Tout fichier `.env*` à la racine (ex. /.env.production.local)
  if (/^\/\.env(\.|$)/.test(path)) return true;

  return false;
}

export function middleware(request: NextRequest) {
  if (isBlocked(request.nextUrl.pathname)) {
    return new NextResponse(null, { status: 404, statusText: "Not Found" });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/AGENTS.md",
    "/agents.md",
    "/README.md",
    "/readme.md",
    "/.gitignore",
    "/.env",
    "/.env.example",
    "/.env.local",
    "/.env.development",
    "/.env.production",
    "/.env.test",
    "/.env.production.local",
    "/.env.development.local",
    "/.cursor",
    "/.cursor/:path*",
    "/cursor",
    "/cursor/:path*",
    "/cursor.json",
    "/design-system",
    "/design-system/:path*",
    "/brand-book",
    "/brand-book/:path*",
    "/brandbook",
    "/brandbook/:path*",
    "/brand-book.md",
    "/brandbook.md",
    "/docs",
    "/docs/:path*",
  ],
};

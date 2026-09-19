import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Bloque l’exposition publique de docs internes / routes de preview,
 * même si un fichier est ajouté par erreur dans `public/` ou `app/`.
 */
const BLOCKED_EXACT = new Set([
  "/agents.md",
  "/readme.md",
  "/.gitignore",
  "/.env",
  "/.env.example",
  "/.env.local",
  "/design-system",
  "/brand-book",
  "/brandbook",
  "/brand-book.md",
  "/brandbook.md",
]);

const BLOCKED_PREFIXES = [
  "/.cursor",
  "/design-system/",
  "/brand-book/",
  "/brandbook/",
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.toLowerCase();

  if (
    BLOCKED_EXACT.has(path) ||
    BLOCKED_PREFIXES.some((prefix) => path.startsWith(prefix))
  ) {
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
    "/.cursor/:path*",
    "/design-system",
    "/design-system/:path*",
    "/brand-book",
    "/brand-book/:path*",
    "/brandbook",
    "/brandbook/:path*",
    "/brand-book.md",
    "/brandbook.md",
  ],
};

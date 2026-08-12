import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { HeaderOffset } from "@/components/layout/HeaderOffset";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { JsonLd, PlausibleScript } from "@/components/seo/JsonLd";
import {
  GoogleTagManagerNoscript,
  GoogleTagManagerScript,
} from "@/components/seo/GoogleTagManager";
import { organizationJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata(),
  icons: {
    icon: [{ url: "/icon_only.png", type: "image/png" }],
    apple: [{ url: "/icon_only.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <GoogleTagManagerScript />
        <PlausibleScript />
      </head>
      <body className="min-h-screen antialiased pb-[calc(3.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        <GoogleTagManagerNoscript />
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <HeaderOffset />
        <main>{children}</main>
        <Footer />
        <MobileBottomNav />
        <SpeedInsights />
      </body>
    </html>
  );
}

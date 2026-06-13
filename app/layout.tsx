import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, PlausibleScript } from "@/components/seo/JsonLd";
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
        <PlausibleScript />
      </head>
      <body className="min-h-screen antialiased">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

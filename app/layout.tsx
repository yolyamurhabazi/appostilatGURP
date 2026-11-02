import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://appostilatgurp.vercel.app"),
  title: "Apostolat GURP | Ensemble, semons l'espérance à Bagira",
  description:
    "Le 6 décembre 2026, rejoignez le GURP pour un apostolat à l'orphelinat de Bagira. Choisissez votre don et confirmez votre participation sur WhatsApp.",
  openGraph: {
    title: "Apostolat GURP — Bagira, 6 décembre 2026",
    description: "Un geste simple, une journée pleine d'espérance.",
    images: ["/images/hero.png"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

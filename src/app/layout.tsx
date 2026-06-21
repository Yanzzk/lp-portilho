import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paesedeliciasmt.com.br"),
  title: "Panificadora Pães & Delícias | Encomendas Rápidas em Arenápolis",
  description: "A padaria mais tradicional do Redondo. Encomende bolos, salgados e pães frescos direto pelo WhatsApp, sem filas.",
  openGraph: {
    title: "Panificadora Pães & Delícias | Arenápolis",
    description: "Encomende bolos premium e salgados fritos na hora pelo celular. Confirmação em 3 minutos.",
    url: "https://paesedeliciasmt.com.br",
    siteName: "Panificadora Pães & Delícias",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#FFF8E1] text-[#3E2723]`}
      >
        {children}
      </body>
    </html>
  );
}

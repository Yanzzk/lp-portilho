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
  title: "Panificadora Pães & Delícias | A Melhor Padaria de Arenápolis - MT",
  description: "A tradição de 16 anos que Arenápolis ama. Encomende bolos premium, salgados fritos na hora e pães frescos direto pelo WhatsApp. Fure a fila e seja VIP!",
  keywords: ["Padaria em Arenápolis", "Panificadora Arenápolis MT", "bolos para festa", "salgados fritos na hora", "Pães e Delícias", "onde tomar café em Arenápolis", "encomendas de bolos Arenápolis", "padaria perto de mim"],
  authors: [{ name: "Pães & Delícias" }],
  creator: "Pães & Delícias",
  publisher: "Pães & Delícias",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Panificadora Pães & Delícias | O Sabor que Arenápolis Ama",
    description: "Salgados crocantes, bolos premium e pães frescos feitos na hora. Fure a fila e acesse nosso Cardápio VIP pelo celular.",
    url: "https://paesedeliciasmt.com.br",
    siteName: "Panificadora Pães & Delícias",
    images: [
      {
        url: "/images/fachada.webp",
        width: 1200,
        height: 630,
        alt: "Fachada Panificadora Pães & Delícias em Arenápolis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Panificadora Pães & Delícias",
  "image": "https://paesedeliciasmt.com.br/images/fachada.webp",
  "description": "A melhor padaria de Arenápolis, oferecendo bolos premium, salgados fritos na hora e pães de fermentação natural. Encomendas VIP pelo WhatsApp.",
  "@id": "https://paesedeliciasmt.com.br",
  "url": "https://paesedeliciasmt.com.br",
  "telephone": "+5565996635396",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Papa Paulo VI, 108 - Centro",
    "addressLocality": "Arenápolis",
    "addressRegion": "MT",
    "postalCode": "78420-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -14.46069168600742,
    "longitude": -56.84671412403612
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/paesedelicias_/"
  ],
  "priceRange": "$$"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

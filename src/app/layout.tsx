import type { Metadata } from "next";
import { Barlow_Condensed, Caveat, Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap"
});

const heroFont = Cormorant_Garamond({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
});

const scriptFont = Caveat({ variable: "--font-script", subsets: ["latin"], weight: ["700"], display: "swap" });

const title = "SPEARE | Marcas desejadas começam por um destino claro";
const description =
  "Criamos e aceleramos marcas que atraem os clientes certos, elevam o valor percebido e vendem mais. Um único serviço em três partes: Porto, Rota e Travessia.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "SPEARE",
  keywords: ["posicionamento de marca", "consultoria de marca", "identidade visual", "valor percebido", "branding"],
  openGraph: {
    title,
    description,
    siteName: "SPEARE",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable} ${heroFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}

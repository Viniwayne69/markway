import type { Metadata } from "next";
import { Barlow_Condensed, Caveat, Nunito_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Nunito_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap"
});

const scriptFont = Caveat({ variable: "--font-script", subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  title: "SPEARE",
  description: "Landing page premium da SPEARE"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}

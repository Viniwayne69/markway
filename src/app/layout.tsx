import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap"
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap"
});

export const metadata: Metadata = {
  title: "MARKWAY",
  description: "Landing page premium da MARKWAY"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${cormorant.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}

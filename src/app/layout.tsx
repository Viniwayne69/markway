import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const brandFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-brand",
  display: "swap"
});

export const metadata: Metadata = {
  title: "SPEARE",
  description: "Landing page premium da SPEARE"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={brandFont.variable}>
      <body>{children}</body>
    </html>
  );
}

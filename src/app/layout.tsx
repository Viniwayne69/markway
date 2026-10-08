import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";

const brandFont = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
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

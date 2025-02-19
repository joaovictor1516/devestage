import { Montserrat, Oxanium } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "devestage"
};

const montserrat = Montserrat({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const oxanium= Oxanium({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${oxanium.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}

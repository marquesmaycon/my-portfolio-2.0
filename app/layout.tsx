import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Maycon Marques - Portfolio",
  description:
    "Desenvolvedor Full Stack | Transformando ideias em experiências digitais envolventes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}

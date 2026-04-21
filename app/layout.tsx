import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Camellio",
  description: "Landing page de Camellio para empleados y empleadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Manrope, Oxanium } from "next/font/google";

import { baseMetadata } from "@/content/seo";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${oxanium.variable}`}>{children}</body>
    </html>
  );
}

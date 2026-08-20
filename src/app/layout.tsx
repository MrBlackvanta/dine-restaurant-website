import { RouteTransitions } from "@/components/effects";
import { SiteFooter } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";

import { siteUrl } from "./site";

import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
});

const title = "Dine — Exquisite dining since 1989";
const description =
  "A seasonal menu of locally sourced food in beautiful country surroundings. Book a table at Dine in Marthwaite, Sedbergh — a Frontend Mentor challenge built with Next.js, TypeScript and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: "Dine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <RouteTransitions />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RealtimeBackground from "@/components/RealtimeBackground";
import LuxuryAudioAndCursor from "@/components/LuxuryAudioAndCursor";
import { COMPANY_DATA } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_DATA.name} | ${COMPANY_DATA.tagline}`,
    template: `%s | ${COMPANY_DATA.name}`,
  },
  description: COMPANY_DATA.description,
  keywords: [
    "RISEUPSOLUTIONS",
    "AI Voice Agents",
    "Business Management Platform",
    "Education ERP",
    "Fleet Tracking GPS",
    "Cloud Printing Solutions",
    "Bespoke Web Applications",
    "Enterprise Software Development",
  ],
  authors: [{ name: COMPANY_DATA.name }],
  creator: COMPANY_DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://riseupsolutions.example.com",
    title: `${COMPANY_DATA.name} | ${COMPANY_DATA.tagline}`,
    description: COMPANY_DATA.description,
    siteName: COMPANY_DATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_DATA.name} | ${COMPANY_DATA.tagline}`,
    description: COMPANY_DATA.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    description: COMPANY_DATA.description,
    applicationCategory: "BusinessApplication",
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090A0C] text-gray-100 font-sans antialiased selection:bg-[#FF5722] selection:text-white">
        <LuxuryAudioAndCursor />
        <RealtimeBackground />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

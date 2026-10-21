import type { Metadata } from "next";
import PrintMaskedApp from "./PrintMaskedApp";

export const metadata: Metadata = {
  title: "Print Bro — Scan. Pay. Print. | Riseup Solutions",
  description:
    "Self-service printing kiosk. Upload, pay, and print from anywhere. Fast, simple, and secure cloud printing solutions by Riseup Solutions.",
  keywords: [
    "printing",
    "kiosk",
    "self-service",
    "Print Bro",
    "PrintBro",
    "Scan. Pay. Print.",
    "Riseup Solutions Cloud Printing",
    "Cloud Thermal Printing",
    "Instant Print Code",
  ],
  authors: [{ name: "Riseup Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riseupsolutions.in/print",
    title: "Print Bro — Scan. Pay. Print. | Riseup Solutions",
    description:
      "Self-service printing kiosk. Upload, pay, and print from anywhere. Fast, simple, and secure cloud printing solutions by Riseup Solutions.",
    siteName: "Riseup Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Bro — Scan. Pay. Print. | Riseup Solutions",
    description:
      "Self-service printing kiosk. Upload, pay, and print from anywhere. Fast, simple, and secure cloud printing solutions by Riseup Solutions.",
  },
  alternates: {
    canonical: "https://riseupsolutions.in/print",
  },
};

export default function PrintPage() {
  return <PrintMaskedApp />;
}

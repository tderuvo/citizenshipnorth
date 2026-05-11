import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Citizenship North | Canadian Citizenship Pathways & Eligibility",
  description:
    "Plain-English guidance on Canadian citizenship by descent, ancestry, permanent residency, work pathways, family sponsorship, and other routes to becoming Canadian.",
  metadataBase: new URL("https://citizenshipnorth.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Citizenship North | Canadian Citizenship Pathways & Eligibility",
    description:
      "Plain-English guidance on Canadian citizenship by descent, ancestry, permanent residency, work pathways, family sponsorship, and other routes to becoming Canadian.",
    url: "https://citizenshipnorth.com",
    siteName: "Citizenship North",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citizenship North | Canadian Citizenship Pathways & Eligibility",
    description:
      "Plain-English guidance on Canadian citizenship by descent, ancestry, permanent residency, work pathways, family sponsorship, and other routes to becoming Canadian.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}

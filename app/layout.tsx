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
    "Clear guidance on Canadian citizenship by ancestry, descent, work, residency, family sponsorship, and other pathways.",
  metadataBase: new URL("https://citizenshipnorth.com"),
  openGraph: {
    title: "Citizenship North | Canadian Citizenship Pathways & Eligibility",
    description:
      "Clear guidance on Canadian citizenship by ancestry, descent, work, residency, family sponsorship, and other pathways.",
    url: "https://citizenshipnorth.com",
    siteName: "Citizenship North",
    locale: "en_CA",
    type: "website",
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

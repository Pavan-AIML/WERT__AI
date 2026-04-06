import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wert AI — AI triage for machine downtime",
  description:
    "Wert AI: decision support for maintenance teams when production stops. Structured first triage, checklists, and the right tools before the mechanic visits — built for SMEs.",
  keywords: [
    "machine downtime",
    "maintenance triage",
    "manufacturing",
    "SME",
    "industrial AI",
    "field service",
  ],
  openGraph: {
    title: "Wert AI — AI triage for machine downtime",
    description:
      "Reduce unplanned downtime with faster, clearer first response on the shop floor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

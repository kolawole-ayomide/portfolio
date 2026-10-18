import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Kolawole Ayomide Oluwatayo | Full-stack developer",
  description: "Portfolio of Kolawole Ayomide Oluwatayo, a full-stack developer working with Next.js and Node.",
  openGraph: {
    title: "Kolawole Ayomide Oluwatayo | Full-stack developer",
    description: "Full-stack projects built with Next.js, Node and TypeScript.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
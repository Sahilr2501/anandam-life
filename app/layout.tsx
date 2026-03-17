import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Using Inter font for better readability
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ANANDAM | Happiness Counseling & Psychotherapy",
  description: "ANANDAM offers personalized mental wellness services rooted in ancient wisdom and modern psychology. Professional counseling, therapy, and holistic mental health support for individuals, couples, and families.",
  keywords: ["counseling", "psychotherapy", "mental wellness", "therapy", "anxiety", "depression", "couples therapy", "career counseling", "life coaching"],
  authors: [{ name: "ANANDAM" }],
  creator: "ANANDAM",
  publisher: "ANANDAM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anandam.com",
    title: "ANANDAM | Happiness Counseling & Psychotherapy",
    description: "Personalized mental wellness rooted in ancient wisdom and modern psychology.",
    siteName: "ANANDAM",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANANDAM - Happiness Counseling & Psychotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANANDAM | Happiness Counseling & Psychotherapy",
    description: "Personalized mental wellness rooted in ancient wisdom and modern psychology.",
    images: ["/og-image.png"],
    creator: "@anandam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#FFFDF1] text-[#562F00]`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
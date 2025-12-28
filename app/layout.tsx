import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = new URL("https://skihubs.vercel.app");

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SkiHub - Free Tech Skills & Career Learning Paths for Nigerians",
    template: "%s | SkiHub",
  },
  description:
    "Master in-demand tech skills for free. Curated learning paths in Web Development, Cybersecurity, Data Science, and more with Nigerian-friendly resources.",
  keywords: [
    "free tech courses Nigeria",
    "learn coding Nigeria",
    "web development tutorial Abuja",
    "data science course Nigeria",
  ],
  authors: [{ name: "SkiHub Team" }],

  // Open Graph for social sharing
  openGraph: {
    title: "SkiHub - Learn Tech Skills for Free | Nigerian Learners",
    description:
      "Curated learning paths with free resources for Nigerians to master web dev, cybersecurity, data science and get tech jobs.",
    url: baseUrl,
    siteName: "SkiHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkiHub Learning Platform",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "SkiHub - Free Tech Skills for Nigerian Learners",
    description:
      "Master web development, cybersecurity, data science with curated Nigerian-friendly resources.",
    images: ["/og-image.png"],
    creator: "@skihub_ng", // Add your Twitter handle
  },

  // SEO Optimization
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

  // Canonical & Alternates
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-NG": baseUrl,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

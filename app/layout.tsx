import type { Metadata } from "next";
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

export const metadata = {
  title: "SkiHub - Free Tech Skills & Career Learning Paths for Nigerians",
  description:
    "Master in-demand tech skills for free. Curated learning paths in Web Development, Cybersecurity, Data Science, and more with Nigerian-friendly resources.",
  keywords:
    "free tech courses Nigeria, learn coding Nigeria, cybersecurity training Lagos, web development tutorial Abuja, data science course Nigeria, digital skills Africa",
  authors: [{ name: "SkiHub Team" }],
  openGraph: {
    title: "SkiHub - Learn Tech Skills for Free | Nigerian Learners",
    description:
      "Curated learning paths with free resources for Nigerians to master web dev, cybersecurity, data science and get tech jobs.",
    url: "https://skihubs.vercel.app",
    siteName: "SkiHub",
    images: [
      {
        url: "/favicon.png", // Create a 1200x630px OG image
        width: 1200,
        height: 630,
        alt: "SkiHub Learning Platform",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkiHub - Free Tech Skills for Nigerian Learners",
    description:
      "Master web development, cybersecurity, data science with curated Nigerian-friendly resources.",
    images: ["/favicon.png"], // 1200x600px
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
  verification: {
    google:
      "google-site-verification=R_L77nwXEX9qEpa2jGPngD9ngPwTnFqs-yBTvHEBNP8",
  },
  alternates: {
    canonical: "https://skihubs.vercel.app",
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
        <meta
          name="google-site-verification"
          content="google-site-verification=R_L77nwXEX9qEpa2jGPngD9ngPwTnFqs-yBTvHEBNP8"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
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

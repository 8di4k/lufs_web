import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GlowCursor, KonamiCode } from "@/components/effects";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lufs-analyzer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LUFS Music Analyzer — AI-Powered Audio Analysis",
    template: "%s | LUFS Music Analyzer",
  },
  description:
    "Professional music analysis powered by AI. 90-97% accuracy, 10-15s processing, 1000+ platforms supported. BPM, Key, Hz detection for producers.",
  keywords: [
    "LUFS",
    "music analyzer",
    "BPM detector",
    "key finder",
    "audio analysis",
    "AI music",
    "Telegram bot",
    "music production",
    "audio mastering",
    "frequency detection",
  ],
  authors: [{ name: "8di4k" }],
  creator: "8di4k",
  publisher: "LUFS Music Analyzer",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LUFS Analyzer",
  },
  formatDetection: {
    telephone: false,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "LUFS Music Analyzer",
    title: "LUFS Music Analyzer — AI-Powered Audio Analysis",
    description:
      "Professional music analysis with 90-97% accuracy. AI-powered BPM, Key, and Hz detection in 10-15 seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LUFS Music Analyzer - AI-Powered Audio Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUFS Music Analyzer — AI-Powered Audio Analysis",
    description:
      "Professional music analysis with 90-97% accuracy. AI-powered BPM, Key, and Hz detection in 10-15 seconds.",
    images: ["/og-image.png"],
    creator: "@8di4k",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LUFS Music Analyzer",
    applicationCategory: "MusicApplication",
    operatingSystem: "Web Browser, Telegram",
    description:
      "AI-powered music analysis tool with 90-97% accuracy. Detect BPM, Key, and Hz in 10-15 seconds.",
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "USD",
        description: "3 analyses per week",
      },
      {
        "@type": "Offer",
        name: "Monthly Plan",
        price: "3.99",
        priceCurrency: "USD",
        description: "Unlimited analyses",
      },
      {
        "@type": "Offer",
        name: "Yearly Plan",
        price: "24.99",
        priceCurrency: "USD",
        description: "Unlimited analyses with 48% discount",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2000",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: "8di4k",
    },
    url: siteUrl,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mobile optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LUFS Analyzer" />
        
        {/* Preconnect to optimize loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <GlowCursor />
        <KonamiCode />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

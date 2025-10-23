import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUFS Music Analyzer — AI-Powered Audio Analysis",
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
  ],
  authors: [{ name: "8di4k" }],
  openGraph: {
    title: "LUFS Music Analyzer — AI-Powered Audio Analysis",
    description:
      "Professional music analysis with 90-97% accuracy. AI-powered BPM, Key, and Hz detection in 10-15 seconds.",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}

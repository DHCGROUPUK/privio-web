import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privio.dhdev.click"),
  title: {
    default: "Privio — Private. Encrypted. Yours.",
    template: "%s · Privio",
  },
  description:
    "A serverless, end-to-end encrypted messenger for Android. No accounts. No phone numbers. Your identity is a cryptographic keypair. Built on the Signal Protocol.",
  keywords: [
    "privacy",
    "encryption",
    "messenger",
    "signal protocol",
    "peer-to-peer",
    "android",
    "secure chat",
    "open source",
  ],
  authors: [{ name: "Privio" }],
  openGraph: {
    title: "Privio — Private. Encrypted. Yours.",
    description:
      "Serverless. End-to-end encrypted. No accounts. Built on the Signal Protocol.",
    url: "https://privio.dhdev.click",
    siteName: "Privio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privio — Private. Encrypted. Yours.",
    description:
      "Serverless. End-to-end encrypted. No accounts. Built on the Signal Protocol.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}

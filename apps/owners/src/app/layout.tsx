import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecallBanner from "@/components/RecallBanner";

const inter = Inter({ subsets: ["latin"] });

// TODO: Update these values for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";
const DOMAIN = "{{DOMAIN}}";
const LOCATION = "{{CITY_STATE}}";

export const viewport: Viewport = {
  themeColor: "#166534",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${COMMUNITY_NAME} Homeowners - Community Hub`,
  description: `Independent community hub for ${COMMUNITY_NAME} homeowners in ${LOCATION}. By homeowners, for homeowners.`,
  robots: {
    index: false, // Change to true when ready to go public
    follow: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `${COMMUNITY_NAME} Owners`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://owners.${DOMAIN}`,
    siteName: `${COMMUNITY_NAME} Homeowners`,
    title: `${COMMUNITY_NAME} Homeowners - Community Hub`,
    description: `Independent community hub for ${COMMUNITY_NAME} homeowners in ${LOCATION}. By homeowners, for homeowners.`,
  },
  twitter: {
    card: "summary",
    title: `${COMMUNITY_NAME} Homeowners - Community Hub`,
    description: `Independent community hub for ${COMMUNITY_NAME} homeowners in ${LOCATION}.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecallBanner variant="mobile" />
        {children}
      </body>
    </html>
  );
}


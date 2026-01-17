import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RECALL_ACTIVE } from "@/lib/features";
import InactivePage from "@/components/InactivePage";

const inter = Inter({ subsets: ["latin"] });

// TODO: Update these values for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";
const DOMAIN = "{{DOMAIN}}";

export const viewport: Viewport = {
  themeColor: "#166534",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `Recall the Board - ${COMMUNITY_NAME}`,
  description: `Campaign to organize homeowner recall votes for board accountability at ${COMMUNITY_NAME}`,
  robots: {
    index: false,
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
    title: `${COMMUNITY_NAME} Recall`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://recall.${DOMAIN}`,
    siteName: `Recall the Board - ${COMMUNITY_NAME}`,
    title: `Recall the Board - ${COMMUNITY_NAME}`,
    description: `Campaign to organize homeowner recall votes for board accountability at ${COMMUNITY_NAME}`,
  },
  twitter: {
    card: "summary",
    title: `Recall the Board - ${COMMUNITY_NAME}`,
    description: `Campaign to organize homeowner recall votes for board accountability at ${COMMUNITY_NAME}`,
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
        {RECALL_ACTIVE ? children : <InactivePage />}
      </body>
    </html>
  );
}


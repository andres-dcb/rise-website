import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "@/styles/globals.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://risedevelopersa.com"),

  title: {
    default: "RISE Remodeling & Renovations | San Antonio",
    template: "%s | RISE Remodeling & Renovations",
  },

  description:
    "Kitchen, bathroom, and interior remodeling in Greater San Antonio. Beautiful spaces designed around the way you live.",

  applicationName: "RISE Remodeling & Renovations",

  keywords: [
    "San Antonio remodeling",
    "San Antonio home remodeling",
    "San Antonio kitchen remodeling",
    "San Antonio bathroom remodeling",
    "kitchen renovation San Antonio",
    "bathroom renovation San Antonio",
    "home renovation San Antonio",
    "remodeling contractor San Antonio",
    "RISE Remodeling & Renovations",
  ],

  category: "Home Remodeling",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "RISE Remodeling & Renovations",
    title: "RISE Remodeling & Renovations | San Antonio",
    description:
      "Kitchen, bathroom, and interior remodeling in Greater San Antonio. Constructed to Last. Designed to Impress.",
  },

  twitter: {
    card: "summary_large_image",
    title: "RISE Remodeling & Renovations | San Antonio",
    description:
      "Kitchen, bathroom, and interior remodeling in Greater San Antonio. Beautiful spaces designed around the way you live.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="
            fixed
            left-4
            top-4
            z-[100]
            -translate-y-24
            rounded-full
            bg-charcoal
            px-5
            py-3
            text-sm
            font-semibold
            text-ivory
            shadow-lg
            transition-transform
            focus:translate-y-0
          "
        >
          Skip to main content
        </a>

        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
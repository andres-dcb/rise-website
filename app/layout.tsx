import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

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
    default: "RISE Remodeling & Renovations",
    template: "%s | RISE Remodeling & Renovations",
  },
  description:
    "Beautiful kitchens and bathrooms, designed around the way you live. Serving Greater San Antonio.",
  applicationName: "RISE Remodeling & Renovations",
  category: "Home Remodeling",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

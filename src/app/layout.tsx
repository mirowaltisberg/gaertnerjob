import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gaertnerjob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gärtner Jobs Schweiz | Gartenbau & Pflanzen",
    template: "%s | gaertnerjob.ch",
  },
  description:
    "Finde aktuelle Stellen in Gartenbau, Grünpflege, Baumpflege, Pflanzenproduktion und Bauleitung in der Schweiz.",
  keywords: [
    "Gartenbaujobs",
    "Gartenbaujobs Schweiz",
    "Gärtner Jobs",
    "Bauleiter Gartenbau",
    "Landschaftsgärtner Jobs",
    "Kundengärtner Jobs",
    "Baumpfleger Jobs",
    "Gärtner Pflanzenproduktion Jobs",
    "Stellen Gartenbaubranche Schweiz",
    "Gartenbau Job Schweiz",
    "Gartenbau Stellen Schweiz",
    "Gärtner Stellenangebote",
    "Gärtner Jobs Schweiz",
    "Gärtner Temporär",
    "Gartenbau Festanstellung",
    "Gärtner Lohn Schweiz",
  ],
  openGraph: {
    title: "Gartenbau Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Landschaftsgärtner, Kundengärtner, Baumpflege, Pflanzenproduktion und Bauleitung.",
    type: "website",
    url: "/",
    siteName: "gaertnerjob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gartenbau Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Landschaftsgärtner, Kundengärtner, Baumpflege, Pflanzenproduktion und Bauleitung.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
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
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "gaertnerjob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "gaertnerjob.ch bündelt Stellenangebote mit klarem Bezug zu Gartenbau und Pflanzen in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "gaertnerjob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Gartenbau- und Pflanzenfachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <PrivacyAnalytics />
      </body>
    </html>
  );
}

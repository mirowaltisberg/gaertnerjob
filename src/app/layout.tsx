import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gaertnerjob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "521 Gärtner Jobs Schweiz 2026 | Offene Stellen finden",
    template: "%s | gärtnerjob.ch",
  },
  description:
    "Finde aktuelle Gärtner Jobs in der Schweiz. Stellen für Landschaftsgärtner, Gartenbauer, Baumpfleger, Gartenplaner & mehr. Jetzt Lebenslauf einreichen.",
  keywords: [
    "Gärtnerjobs",
    "521 Gärtner Jobs Schweiz",
    "Landschaftsgärtner",
    "Gartenbauer",
    "Baumpfleger",
    "Gartenplaner",
    "Grünflächenpflege",
    "Gärtner EFZ",
    "Garten- und Landschaftsbau",
    "Zierpflanzengärtner",
    "Staudengärtner",
    "Baumschulist",
    "Rasenprofi",
    "Gartenpflege Jobs Schweiz",
    "Stellen Gärtnerbranche Schweiz",
  ],
  openGraph: {
    title: "521 Gärtner Jobs Schweiz 2026 | Offene Stellen finden",
    description:
      "Finde aktuelle Gärtner Jobs in der Schweiz. Stellen für Landschaftsgärtner, Gartenbauer, Baumpfleger, Gartenplaner & mehr. Jetzt Lebenslauf einreichen.",
    type: "website",
    url: "/",
    siteName: "gärtnerjob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "521 Gärtner Jobs Schweiz 2026 | Offene Stellen finden",
    description:
      "Finde aktuelle Gärtner Jobs in der Schweiz. Stellen für Landschaftsgärtner, Gartenbauer, Baumpfleger, Gartenplaner & mehr. Jetzt Lebenslauf einreichen.",
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

// SEO-DECISION: Organization schema placed in root layout so it appears on every page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "gärtnerjob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "gärtnerjob.ch ist die spezialisierte Jobbörse für Gärtner und Landschaftsgärtner in der Schweiz. Finde offene Stellen als Gartenbauer, Baumpfleger, Gartenplaner und mehr.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/`,
  },
  sameAs: [
    "https://www.youtube.com/@gaertnerjob",
    "https://www.facebook.com/gaertnerjob",
    "https://www.instagram.com/gaertnerjob",
    "https://www.linkedin.com/company/gaertnerjob",
    "https://twitter.com/gaertnerjob",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "gärtnerjob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Gärtner und Landschaftsgärtner in der Schweiz.",
  inLanguage: "de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body lang="de" className={`${plusJakarta.variable} antialiased font-sans bg-slate-50`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-0000000000"}`}
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${process.env.NEXT_PUBLIC_GA_ID || "G-0000000000"}');
          `}
        </Script>
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || "0000000000000000"}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID || "0000000000000000"}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

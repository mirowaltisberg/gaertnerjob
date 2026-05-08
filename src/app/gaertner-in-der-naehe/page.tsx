import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { GAERTNER_CITIES } from "@/lib/gaertner-cities";

export const metadata: Metadata = {
  title: "Gärtner in der Nähe | Jobs in deiner Stadt finden",
  description:
    "Gärtner Jobs in deiner Nähe — finde offene Stellen in Zürich, Bern, Basel, Luzern, St. Gallen und allen Schweizer Städten. Tägliche Updates.",
  alternates: { canonical: "/gaertner-in-der-naehe" },
};

export const revalidate = 86400;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gaertnerjob.ch";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Gärtner in der Nähe", item: `${SITE_URL}/gaertner-in-der-naehe` },
  ],
};

export default function NaehePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <main className="bg-white">
        <section className="bg-primary/5 border-b">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
            <nav className="text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Startseite</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">Gärtner in der Nähe</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
              Gärtner <span className="text-primary">in deiner Nähe</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Gärtner und Landschaftsgärtner gestalten und pflegen private und öffentliche Grünflächen in der ganzen Schweiz. Wähle deine Stadt und finde offene Stellen mit Pendelradius — typischerweise findest du in 25 km Umkreis 2- bis 3-mal mehr passende Inserate.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-10 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Schweizer Städte mit hoher Nachfrage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            { GAERTNER_CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/gartenbau-jobs/${c.slug}`}
                className="rounded-lg border border-slate-200 bg-white p-4 hover:border-primary/40 transition"
              >
                <div className="font-semibold text-slate-900 mb-1">Gärtner Jobs {c.name}</div>
                <div className="text-sm text-slate-600 mb-2">{c.region} · {c.cantonAbbr}</div>
                <div className="text-xs text-slate-500">Lohn-Band: {c.salaryBand}</div>
                <div className="text-xs text-slate-500 mt-1">Pendelorte: {c.commuterTowns.slice(0, 3).join(", ")}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 border-y">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">So findest du Stellen in deiner Nähe</h2>
            <ol className="space-y-3 text-slate-700 list-decimal list-inside">
              <li>Wähle oben deine Stadt — du bekommst die offenen Gärtner Stellen für die Region.</li>
              <li>Erweitere den Suchradius auf typische Pendelorte (z. B. 25 km, 30 Minuten ÖV) — die Auswahl verdoppelt oder verdreifacht sich.</li>
              <li>Achte auf Lohn-Bandbreiten der jeweiligen Region — Zürich, Zug und Basel zahlen 5 bis 12 Prozent über dem Mittel.</li>
              <li>Servicetechniker und Vorarbeiter erhalten oft ein Geschäftsfahrzeug — der Pendelweg ist dann kein Hindernis.</li>
            </ol>
          </div>
        </section>

        <section className="bg-primary/5 border-t">
          <div className="container mx-auto px-4 sm:px-6 py-10 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Direkt zur Stellensuche</h2>
            <p className="text-slate-600 mb-5">
              Tausende offene Gärtner Stellen in der Schweiz — täglich aktualisiert.
            </p>
            <Button asChild>
              <Link href="/">Jetzt Stellen durchsuchen</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

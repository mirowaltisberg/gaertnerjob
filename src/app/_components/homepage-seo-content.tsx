import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gärtnerjob.ch";

const HOMEPAGE_FAQS = [
  {
    question: "Welche Gärtnerjobs gibt es auf gärtnerjob.ch?",
    answer:
      "Auf gärtnerjob.ch findest du offene Stellen für Landschaftsgärtner EFZ, Gärtner Zierpflanzen EFZ, Gärtner Stauden EFZ, Baumpfleger, Gartenplaner, Vorarbeiter Gartenbau, Gartenbaupolier, Greenkeeper, Baumschulist, Friedhofsgärtner, Gartenbau-Projektleiter und Pflanzenschutzberater — in der ganzen Schweiz.",
  },
  {
    question: "Was verdient ein Landschaftsgärtner in der Schweiz?",
    answer:
      "Ein Landschaftsgärtner EFZ verdient in der Schweiz durchschnittlich zwischen CHF 60'000 und CHF 75'000 pro Jahr. Das Gehalt variiert je nach Kanton, Berufserfahrung und Arbeitgeber. In Zürich und Zug liegen die Löhne tendenziell höher als in ländlicheren Regionen. Mit Weiterbildung zum Gartenbaupolier oder Projektleiter steigen die Verdienstmöglichkeiten deutlich.",
  },
  {
    question: "Wie finde ich einen Job als Gärtner in der Schweiz?",
    answer:
      "Auf gärtnerjob.ch kannst du gezielt nach Gärtnerjobs in deiner Region suchen. Nutze die Filteroptionen nach Beruf, Kanton, Pensum und Umkreis. Du kannst dich direkt über die Plattform bewerben — einfach Lebenslauf hochladen und abschicken.",
  },
  {
    question: "Welche Kantone haben die meisten Gärtnerjobs?",
    answer:
      "Die meisten offenen Stellen für Gartenbau-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Basel und St. Gallen. Diese Regionen haben eine hohe Dichte an Gartenbaubetrieben, Baumschulen und Landschaftsgestaltungsprojekten.",
  },
  {
    question: "Was ist der Unterschied zwischen Landschaftsgärtner und Zierpflanzengärtner?",
    answer:
      "Der Landschaftsgärtner EFZ (Fachrichtung Garten- und Landschaftsbau) gestaltet und baut Aussenanlagen, verlegt Platten, pflanzt Bäume und Sträucher und arbeitet vorwiegend draussen auf Baustellen. Der Zierpflanzengärtner EFZ (Fachrichtung Zierpflanzen) kultiviert und pflegt Zierpflanzen in Gewächshäusern und Gärtnereien. Beide Fachrichtungen sind in der Schweiz sehr gefragt.",
  },
  {
    question: "Gibt es auf gärtnerjob.ch auch Teilzeitstellen?",
    answer:
      "Ja, auf gärtnerjob.ch findest du sowohl Vollzeit- als auch Teilzeitstellen. Nutze den Pensum-Filter, um Stellen mit 60–80% oder 80–100% Arbeitspensum zu finden.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Gartenbau-Projektleiter", range: "CHF 80'000 – 100'000" },
  { role: "Gartenbaupolier", range: "CHF 75'000 – 95'000" },
  { role: "Gartenplaner", range: "CHF 70'000 – 90'000" },
  { role: "Vorarbeiter Gartenbau", range: "CHF 70'000 – 85'000" },
  { role: "Pflanzenschutzberater", range: "CHF 65'000 – 85'000" },
  { role: "Baumpfleger", range: "CHF 65'000 – 80'000" },
  { role: "Landschaftsgärtner EFZ", range: "CHF 60'000 – 75'000" },
  { role: "Greenkeeper", range: "CHF 60'000 – 75'000" },
  { role: "Gärtner Zierpflanzen EFZ", range: "CHF 55'000 – 70'000" },
  { role: "Gärtner Stauden EFZ", range: "CHF 55'000 – 70'000" },
  { role: "Baumschulist", range: "CHF 55'000 – 70'000" },
  { role: "Friedhofsgärtner", range: "CHF 55'000 – 68'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Gartenbau-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Gärtnerjobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf gärtnerjob.ch finden Gartenbau-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Landschaftsgärtner EFZ über Gärtner Zierpflanzen und Gartenplaner bis hin zu
            Baumpfleger, Gartenbaupolier und Greenkeeper. Ob du deinen nächsten Gärtnerjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Gartenbaubranche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>
        </div>

        {/* Salary table — highly citeable by AI */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Gartenbauberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Gartenbau-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.jardinsuisse.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">JardinSuisse</a>,{" "}
            <a href="https://www.bsla.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BSLA</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Alle Gärtnerjobs nach Beruf und Kanton
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

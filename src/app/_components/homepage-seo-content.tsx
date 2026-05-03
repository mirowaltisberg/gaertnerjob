import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gaertnerjob.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Gärtnerjobs gibt es auf gaertnerjob.ch?",
    answer:
      "Auf gaertnerjob.ch findest du alle relevanten Stellenprofile der Schweizer Garten- und Landschaftsbaubranche. Dazu gehören die EFZ-Lehrabschluss-Berufe Landschaftsgärtner, Gärtner Zierpflanzen, Gärtner Stauden und Baumschulist sowie Spezialisten wie Baumpfleger, Greenkeeper, Friedhofsgärtner und Pflanzenschutzberater. Auf Führungs- und Planungsebene listen wir Vorarbeiter Gartenbau, Gartenbaupolier, Gartenplaner und Gartenbau-Projektleiter. Ergänzt wird das Angebot durch Stellen für eidg. dipl. Gärtnermeister, Gartenbautechniker HF, Bewässerungs-Techniker, Naturstein-Spezialisten sowie kommunale Werkhof-Stellen für Strassenbaum- und Parkpflege. Lehrstellen, Trainee-Programme und Wiedereinsteigerangebote sind separat ausgewiesen, damit Berufsanfängerinnen, Quereinsteiger und Rückkehrer die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich in ländlichen Regionen mit wechselnden Baustellen und für alpine Lagen mit längeren Anfahrtszeiten. Die Stellen werden täglich aktualisiert und aus den öffentlich publizierten Inseraten der Schweizer Garten- und Landschaftsbaubranche gefiltert. Sie verteilen sich auf alle 26 Schweizer Kantone, mit besonderer Dichte in Zürich, Bern, Aargau, Waadt und der Ostschweiz.",
  },
  {
    question: "Was verdient ein Landschaftsgärtner in der Schweiz?",
    answer:
      "Ein Landschaftsgärtner EFZ verdient in der Schweiz im Durchschnitt CHF 60'000 bis 75'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Arbeitgebergrösse und Spezialisierung. Im Kanton Zürich, in Zug und in Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Freiburg, Solothurn oder Graubünden 5 bis 8 Prozent darunter. Berufsanfänger nach EFZ-Abschluss starten meist im Bereich CHF 55'000 bis 62'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert in den Bereich CHF 65'000 bis 75'000. Spezialisierungen auf Naturstein, Teichbau, Dachbegrünung oder Baumpflege bringen zusätzliche 5 bis 12 Prozent. Vorarbeiter Gartenbau, Polier Garten und Gartenbau-Projektleiter heben das Salärband weiter — bis CHF 100'000 plus. Mit dem Abschluss als eidg. dipl. Gartenbautechniker HF oder Gärtnermeister sind in städtischen Regionen auch CHF 110'000 bis 125'000 realistisch. Der 13. Monatslohn ist in der Garten- und Landschaftsbaubranche Standard, bei vielen Betrieben ergänzt durch Spesen, Auto-Bonus oder Treueprämien. Die vollständige Lohnübersicht für alle Gartenbauberufe findest du auf dieser Startseite.",
  },
  {
    question: "Wie finde ich einen Job als Gärtner in der Schweiz?",
    answer:
      "Auf gaertnerjob.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80–100%, 60–80%, Teilzeit). Du kannst zusätzlich nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) filtern und Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Du kannst Suchprofile speichern und erhältst eine Benachrichtigung, sobald neue passende Stellen aufgeschaltet werden. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius, was vor allem in alpinen Lagen und Streusiedlungen den Unterschied zwischen einer pendelfreundlichen und einer unpraktikablen Stelle markiert. Berufsmessen wie die Giardina, kantonale OdA-Tage, der Tag der Gärtnerei und regionale Berufsbildungsmessen bieten zusätzliche Direktkontakte zu Arbeitgebern; viele Betriebe haben offene Stellen, die sie noch nicht öffentlich ausgeschrieben haben.",
  },
  {
    question: "Welche Kantone haben die meisten Gärtnerjobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Gartenbau-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Waadt und Basel-Stadt. Diese fünf Kantone vereinen rund 60 Prozent aller publizierten Garten- und Landschaftsbau-Stellenausschreibungen in der Schweiz. Im Mittelfeld folgen St. Gallen, Luzern, Genf, Thurgau und Solothurn. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt Wirtschaftswachstum und Bautätigkeit: Wo Wohnungsbau, Privatgärten und kommunale Grünraumprojekte zunehmen, steigt auch die Nachfrage nach Landschaftsgärtnern, Baumpflegern und Planern. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren häufig in Solothurn und Luzern, Basler in Baselland und Solothurn, Zürcher in Schaffhausen, Thurgau und Schwyz. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt im Kanton Wallis, in der Region Biel/Bienne und in Teilen von Fribourg.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Landschaftsgärtner und Zierpflanzengärtner?",
    answer:
      "Der Unterschied liegt in Tätigkeitsfeld, Arbeitsumgebung und Gehaltsband. Der Landschaftsgärtner EFZ (Fachrichtung Garten- und Landschaftsbau) absolviert eine 3-jährige Lehre, gestaltet und baut Aussenanlagen, verlegt Platten, erstellt Mauern, pflanzt Bäume und Sträucher und arbeitet vorwiegend draussen auf wechselnden Baustellen — vom Privatgarten bis zur öffentlichen Anlage. Der Gärtner Zierpflanzen EFZ kultiviert und pflegt Zierpflanzen in Gewächshäusern und Gärtnereien, vermehrt Pflanzen über Stecklinge und Aussaat, steuert Klima- und Bewässerungsanlagen und berät Kunden im Verkauf. Beide Berufe sind in der Schweiz stark gefragt, der Lohnabstand beträgt durchschnittlich CHF 5'000 bis 8'000 pro Jahr zugunsten des Landschaftsgärtners. Wechsel und Weiterbildung sind gut möglich: Die Berufsprüfung zum Gartenbaupolier, der eidg. Fachausweis Gärtnermeister oder das Studium zum Gartenbautechniker HF stehen beiden offen. Welcher Beruf besser passt, hängt von Lust auf Outdoor-Bauarbeit gegenüber Gewächshaus- und Beratungsarbeit ab — eine Berufsberatung im Wohnkanton oder ein Schnuppertag in beiden Fachrichtungen hilft bei der konkreten Wahl.",
  },
  {
    question: "Gibt es auf gaertnerjob.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf gaertnerjob.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90–100%), 80–100%, 60–80% oder Teilzeit unter 60%. Teilzeitmodelle sind besonders bei Friedhofsgärtnerei, Gartenplanung, Pflegerouten in Privatgärten und im Pflanzenschutz verbreitet — Elternzeit-Modelle, schrittweiser Wiedereinstieg und Vorruhestand mit Reduzierung auf 60 oder 80 Prozent sind in der Schweizer Garten- und Landschaftsbaubranche zunehmend Standard. Im Neubau und bei grossen Baustellen-Equipen bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden. In Planung, Beratung und Greenkeeping ist Teilzeit hingegen gut etabliert. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden vereinzelt angeboten. Wer Elternzeit-Wiedereinstieg sucht, profitiert von gestaffelten Pensumserhöhungen — also Start mit 60 Prozent und schrittweise Anhebung über 12 bis 24 Monate. Frage in Erstgesprächen explizit nach diesem Modell, viele Betriebe bieten es ohne aktive Werbung an.",
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
            Auf gaertnerjob.ch finden Gartenbau-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Landschaftsgärtner EFZ über Gärtner Zierpflanzen und Gartenplaner bis hin zu
            Baumpfleger, Gartenbaupolier und Greenkeeper. Ob du deinen nächsten Gärtnerjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Garten- und Landschaftsbaubranche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>
        </div>

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Gartenbauberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Gartenbau-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.jardinsuisse.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">JardinSuisse</a>,{" "}
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

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Garten- und Landschaftsbaubranche aus den
                Jahres- und Branchenstatistiken von{" "}
                <a
                  href="https://www.jardinsuisse.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  JardinSuisse
                </a>{" "}
                (Unternehmerverband Gärtner Schweiz) und dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf gaertnerjob.ch indexierten
                öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
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

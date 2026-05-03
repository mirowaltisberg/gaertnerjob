// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "landschaftsgaertner-efz::zh": {
    whatDoes:
      "Ein Landschaftsgärtner EFZ in Zürich gestaltet, baut und pflegt Privatgärten am Zürichberg, Gewerbeobjekte in Zürich-West sowie öffentliche Anlagen in Quartierparks und an Schulhäusern. Der Alltag umfasst Erdarbeiten, Plattenbeläge, Bepflanzung, Bewässerungsinstallation und saisonalen Unterhalt. Die hohe Bautätigkeit rund um die Limmatstadt sorgt für volle Auftragsbücher von März bis November, in der Wintersaison verschiebt sich die Arbeit auf Schnittpflege, Winterdienst und Werkstattarbeiten. Wer gestalterisch denkt, körperlich belastbar ist und Termintreue mitbringt, hat im Kanton Zürich besonders viele Stellen mit anspruchsvollen Privatkundenobjekten zur Auswahl.",
    salary:
      "Ein Landschaftsgärtner EFZ verdient im Kanton Zürich typisch CHF 65'000 bis 78'000 pro Jahr — am oberen Ende des Schweizer Bands. Mit drei bis fünf Jahren Erfahrung und Spezialisierung auf Natursteinarbeiten, Teichbau oder Dachbegrünung verschiebt sich der Marktwert ins obere Drittel. Der Aufstieg zum Vorarbeiter Gartenbau bringt 8 bis 12 Prozent Zulage, mit der Berufsprüfung zum Gartenbaupolier sind CHF 80'000 bis 95'000 realistisch. Wer den eidg. dipl. Gartenbautechniker HF oder Gärtnermeister anstrebt, landet im Kanton Zürich häufig zwischen CHF 95'000 und 120'000. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich rekrutieren vor allem Landschaftsbau-KMU mit 8 bis 40 Mitarbeitenden, die Privatgärten am Pfannenstiel, in Küsnacht und an der Goldküste betreuen. Daneben besetzen Stadt- und Gemeindewerkhöfe regelmässig Stellen für die Pflege öffentlicher Anlagen. Friedhofsgärtnereien in Zürich, Winterthur und Uster suchen Fachkräfte für Grabpflege und Gestaltung. Gärtnereien mit eigenem Verkauf an der Stadtgrenze rekrutieren für Beratung und Unterhalt, Greenkeeping-Equipen einzelner Golfclubs am Greifensee ergänzen das Bild. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf gaertnerjob.ch sind anonymisiert, der Arbeitgeber wird im Vorgespräch offengelegt.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit Lehrbetrieb, klaren Referenzobjekten (Bauvolumen, Pflanzliste, dein konkreter Anteil) und Fotos abgeschlossener Anlagen. Im Kanton Zürich erwarten Arbeitgeber Pendelbereitschaft via S-Bahn — gib deinen ÖV-Knotenpunkt an, weil Baustellen täglich wechseln. Führerausweis Kategorie B ist Pflicht, der Maschinenführerschein nach M-Plan (Bagger, Lader) sowie Erfahrung mit Kompaktbaggern bis 3.5 t hebt dich klar ab. Erwähne Outdoor-Tauglichkeit bei jedem Wetter, Pflanzenkenntnis (Stauden, Gehölze, Rasen) und Saisonbereitschaft — viele Betriebe filtern Inserate ohne sichtbares EFZ-Zeugnis aus, also PDF beilegen.",
  },

  "gartenplaner::be": {
    whatDoes:
      "Ein Gartenplaner im Kanton Bern entwirft Privatgärten im Mittelland, gestaltet öffentliche Grünräume für Gemeinden und plant Aussenanlagen für Gewerbeobjekte. Der Alltag teilt sich auf zwischen CAD-Arbeit am Bildschirm (Vectorworks, AutoCAD, Plant DB), Standortbesuchen mit Bauherrschaft sowie Koordinationssitzungen mit Architekten und Landschaftsarchitekten. Im Kanton Bern prägen alpine Lagen im Berner Oberland, historische Gärten in der Innenstadt und naturnahe Bepflanzungen im Emmental den Auftragsmix. Saisonalität spielt eine grosse Rolle: Planungs- und Offertphase im Winter, Bauleitung von April bis Oktober. Wer Gestaltungsgespür mit Pflanzenwissen verbindet, hat hier breite Aufgabenfelder.",
    salary:
      "Gartenplaner verdienen im Kanton Bern typisch CHF 75'000 bis 92'000 pro Jahr, je nach Ausbildung und Software-Beherrschung. Mit Hintergrund als Gärtner EFZ plus Weiterbildung in Gartengestaltung liegt der Einstieg bei CHF 70'000 bis 80'000, mit Studium in Landschaftsarchitektur (FH/HF) und CAD-Erfahrung verschiebt sich das Band nach oben. Spezialisierung auf Dachbegrünung, naturnahe Bepflanzung oder Schwammstadt-Konzepte bringt Zulagen. Der Aufstieg zum Planungsleiter, Gartenbau-Projektleiter oder eidg. dipl. Gärtnermeister öffnet das Band CHF 95'000 bis 115'000. Berufsbegleitende CAS-Lehrgänge werden im Kanton Bern oft mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Bern besetzen vor allem mittelgrosse Landschaftsbau-KMU mit eigenem Planungsbüro Stellen für Gartenplaner. Daneben suchen reine Planungs- und Landschaftsarchitekturbüros in Bern, Thun und Burgdorf regelmässig nach gestalterisch starken Profilen. Stadt- und Gemeindewerkhöfe besetzen interne Planungsstellen für öffentliche Parkanlagen, Spielplätze und Schulhausumgebungen. Generalunternehmer für Hochbauprojekte integrieren Gartenplaner für Aussenraumkoordination. Hotel- und Tourismusbetriebe im Berner Oberland beauftragen Planungsleistungen für Hotelgärten und Wanderparkplätze. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Hänge eine kompakte Auswahl bearbeiteter Projekte an — Bauherrschaft anonymisiert, dafür mit Grundstücksgrösse, Nutzungsart, Pflanzliste und deinem konkreten Planungsanteil. Im Kanton Bern prüfen viele Büros Dossiers explizit auf CAD-Beherrschung (Vectorworks Landschaft, AutoCAD, Plant Library) und Erfahrung mit kommunalen Wettbewerben. Gute Berndeutsch-Verständigung und ein einwandfreies Schriftdeutsch werden vorausgesetzt — Französisch ist im Berner Jura ein Plus. Mobilität via Auto wird bei Standortbesuchen erwartet, Führerausweis Kategorie B ist Pflicht. Erwähne Pflanzenkenntnis (einheimische Gehölze, Stauden), Outdoor-Tauglichkeit für Bauleitung und Saisonbereitschaft. Im Bewerbungsgespräch werden Gestaltungslogik, Termintreue und Koordinationsfähigkeit mit anderen Gewerken vertieft abgefragt.",
  },

  "baumpfleger::ag": {
    whatDoes:
      "Ein Baumpfleger im Kanton Aargau führt Kronenschnitte, Sicherheits- und Höhlenfällungen sowie systematische Baumkontrollen an Strassenbäumen, in Privatgärten und auf öffentlichen Anlagen aus. Der Alltag findet überwiegend in der Seilklettertechnik (SKT-A, SKT-B) statt, ergänzt durch Hubarbeitsbühnen-Einsätze auf engen Innenstadtstandorten und Friedhöfen. Im Kanton Aargau prägen alte Alleen entlang Aare und Reuss, Schlossgärten sowie der Baumbestand kommunaler Werkhöfe in Aarau, Baden und Wettingen das Auftragsbild. Saisonal verschiebt sich der Fokus zwischen Sommerschnitt, Winterfällungen und Vegetations-Kontrollen. Wer schwindelfrei, körperlich belastbar und sicherheitsbewusst arbeitet, ist hier durchgehend ausgelastet.",
    salary:
      "Ein Baumpfleger verdient im Kanton Aargau typisch CHF 68'000 bis 80'000 pro Jahr — am oberen Schweizer Mittel. Mit Zertifizierung als European Tree Worker (ETW) und SKT-B-Ausbildung verschiebt sich der Marktwert ins obere Drittel. Erfahrene Kletterer mit Spezialisierung auf Sicherheitsfällungen, Baumstatik oder Kronensicherung erhalten Zulagen von 8 bis 12 Prozent. Der Aufstieg zum Vorarbeiter Baumpflege oder European Tree Technician (ETT) öffnet das Band CHF 80'000 bis 95'000. Mit dem eidg. dipl. Baumpflege-Spezialisten oder eigener Baumpflege-Firma sind individuell höhere Honorare möglich. Berufsbegleitende Kletterkurse werden im Aargau oft mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Aargau besetzen spezialisierte Baumpflege-KMU mit 4 bis 20 Mitarbeitenden den Grossteil der Stellen — viele bedienen Aargauer Gemeinden, Kantonsverwaltung und Privatkunden. Daneben rekrutieren grössere Landschaftsbau-KMU Baumpfleger als Spezialisten innerhalb gemischter Equipen. Stadt- und Gemeindewerkhöfe in Aarau, Baden, Wettingen und Wohlen besetzen interne Stellen für Strassenbaum- und Friedhofsbestände. Friedhofsgärtnereien beschäftigen Baumpfleger für die Sicherung alter Bestände. Energieversorger suchen Fachkräfte für Trassen-Freihalten unter Hochspannungsleitungen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf alle aktuell gültigen Zertifikate prominent auf — SKT-A, SKT-B, ETW, EFZ Gärtner oder Forstwart, Erste-Hilfe-Kurs für Höhenarbeit. Im Kanton Aargau erwarten Arbeitgeber Schwindelfreiheit, körperliche Belastbarkeit und Outdoor-Tauglichkeit bei jedem Wetter — bestätige die jährliche Eignungsabklärung im Dossier. Führerausweis Kategorie B ist Pflicht, BE oder C1 mit Anhängerausbildung ein klarer Vorteil für Häcksler und Materialtransport. Maschinenkenntnisse (Motorsäge alle Klassen, Hubarbeitsbühne IPAF, Häcksler) gehören in den CV. Saisonbereitschaft mit Winterfällungen wird vorausgesetzt. Beschreibe konkrete Referenzobjekte (Baumarten, Höhen, Schnitt-Typ) — viele Betriebe filtern Bewerbungen ohne sichtbare ETW-Zertifizierung heraus.",
  },

  "vorarbeiter-gartenbau::zg": {
    whatDoes:
      "Ein Vorarbeiter Gartenbau im Kanton Zug leitet Equipen von 3 bis 8 Gärtnern auf wechselnden Baustellen, organisiert den Tagesablauf, überwacht Qualität und Sicherheit und ist Ansprechpartner für Bauherrschaft und Architekten vor Ort. Im Kanton Zug prägen exklusive Privatgärten am Zugersee, anspruchsvolle Firmenareale im Hightech-Gürtel rund um Rotkreuz und Baar sowie Gewerbeobjekte mit hohem Gestaltungsanspruch das Tagesgeschäft. Saisonal verschiebt sich die Arbeit zwischen Neubau (April bis Oktober), Pflegerunden auf Bestandsobjekten und Winterdienst. Wer Übersicht, Führungsstärke und Termintreue mitbringt, hat hier verantwortungsvolle Stellen mit überdurchschnittlichen Konditionen.",
    salary:
      "Vorarbeiter Gartenbau verdienen im Kanton Zug typisch CHF 78'000 bis 92'000 pro Jahr — am oberen Schweizer Band, weil Zuger Arbeitgeber häufig marktführend zahlen. Mit der Berufsprüfung zum Gartenbaupolier verschiebt sich der Marktwert auf CHF 85'000 bis 100'000. Spezialisierung auf Naturstein, Wasseranlagen oder hochwertige Privatgärten bringt Zulagen von 5 bis 10 Prozent. Der Aufstieg zum Gartenbau-Projektleiter oder eidg. dipl. Gärtnermeister öffnet das Band CHF 100'000 bis 125'000. Mit eigener Niederlassungsleitung in einem grösseren Betrieb sind im Kanton Zug auch CHF 125'000 plus realistisch. Berufsbegleitende Lehrgänge werden meist mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Zug besetzen mittelgrosse Landschaftsbau-KMU mit 15 bis 60 Mitarbeitenden den Grossteil der Vorarbeiter-Stellen — viele bedienen exklusive Privatkunden am Zugerberg und in Walchwil. Daneben rekrutieren Facility-Management-Firmen für die Aussenraumpflege grosser Firmenareale rund um Rotkreuz und Baar. Gemeindewerkhöfe in Zug, Cham und Baar besetzen interne Vorarbeiter-Stellen für Park- und Schulhauspflege. Friedhofsgärtnereien suchen Equipenleiter für Grabpflege-Routen. Greenkeeping-Equipen einzelner Golf- und Sportanlagen ergänzen das Bild. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Beton im Lebenslauf konkrete Führungserfahrung: Equipengrösse, Projektvolumen, geleitete Objekttypen (Privatgarten, Firmenareal, Park) und deinen Verantwortungsanteil bei Kalkulation und Materialdisposition. Im Kanton Zug erwarten Arbeitgeber sehr gute Deutschkenntnisse für Kundenkontakt — Englisch wird bei internationalem Privatkundenstamm geschätzt. Führerausweis Kategorie BE ist meist Pflicht, Maschinenführerschein nach M-Plan (Bagger bis 3.5 t und grösser) sowie Erfahrung mit Mini-Pistenbully oder Lader heben dich ab. Outdoor-Tauglichkeit, körperliche Belastbarkeit, Saisonbereitschaft inklusive Winterdienst-Pikett gehören erwähnt. Belege für Erste-Hilfe-Kurs, BG-Bau-Schulungen und Arbeitssicherheits-Modul sowie ein Foto deiner EFZ-Urkunde erhöhen die Trefferquote im Vorauswahl-Schritt deutlich.",
  },

  "greenkeeper::sg": {
    whatDoes:
      "Ein Greenkeeper im Kanton St. Gallen pflegt Sportrasenflächen auf Golfplätzen, Fussball- und Sportanlagen sowie repräsentativen Rasenflächen öffentlicher Anlagen. Der Alltag umfasst Mähen mit Spezialmaschinen (Spindel, Triplex), Vertikutieren, Aerifizieren, Topdressing, Bewässerungssteuerung und Düngeplanung nach Bodenanalyse. Im Kanton St. Gallen prägen Golfplätze rund um den Bodensee und in der Region Toggenburg, kommunale Sportanlagen im Rheintal sowie Stadion-Rasenflächen das Auftragsbild. Höhenlagen und alpine Wetterumschwünge verlangen flexible Pflegeintervalle. Saisonal verschiebt sich die Arbeit zwischen intensiver Sommerpflege, Herbst-Renovation und Winter-Werkstattarbeit. Wer früh aufsteht, präzis arbeitet und Pflanzenphysiologie versteht, ist hier dauerhaft gefragt.",
    salary:
      "Greenkeeper verdienen im Kanton St. Gallen typisch CHF 60'000 bis 75'000 pro Jahr, je nach Saisonalität und Verantwortung. Mit der Spezialisierung als Head-Greenkeeper auf grösseren Golfanlagen verschiebt sich das Band auf CHF 75'000 bis 90'000. Erfahrung mit Bewässerungs-Steuerungssystemen, Bodenanalyse und integriertem Pflanzenschutz bringt Zulagen. Der Aufstieg zum Course Manager öffnet das Band CHF 90'000 bis 110'000, inklusive Gesamtverantwortung für Greens, Fairways, Bewässerung und Personal. Spezialisierungen auf Sportstättenbau, Stadionrasen oder Rasen-Beratung sind individuell höher honoriert. Berufsbegleitende Lehrgänge wie der eidg. Fachausweis Greenkeeper werden im Kanton St. Gallen oft mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem Golfclubs am Bodensee, im Rheintal und im Toggenburg Greenkeeper-Stellen über ihre Greenkeeping-Equipen. Daneben rekrutieren Stadt- und Gemeindewerkhöfe in St. Gallen, Wil, Rapperswil und Buchs interne Stellen für die Pflege kommunaler Sportplätze und Schulhausrasen. Sportstättenbau-Firmen suchen Fachkräfte für Neubauten von Naturrasen- und Hybridrasenflächen. Stadien- und Sportverband-Betriebe besetzen Vollzeit-Stellen für Hauptspielfelder. Hotels und Resorts mit eigener Sportanlage runden das Bild ab. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf konkrete Maschinen- und Software-Erfahrung auf: Spindelmäher (Toro, John Deere), Aerifizierer, Triplex, Bewässerungs-Steuerungen (Toro Lynx, Rain Bird Cirrus), Bodenproben-Auswertung. Im Kanton St. Gallen erwarten Arbeitgeber Outdoor-Tauglichkeit bei jedem Wetter, körperliche Belastbarkeit und sehr frühe Arbeitszeiten ab fünf Uhr morgens — bestätige Saisonbereitschaft inklusive Wochenenddienst. Führerausweis Kategorie B ist Pflicht, BE oder Maschinenführerschein für Anhänger und Aufsitzgeräte ein klarer Vorteil. Pflanzenkenntnis (Rasengräser, Krankheiten, Pflanzenschutz) und Erste-Hilfe-Zertifikat gehören in den CV. Bewerbungsdossiers ohne EFZ Gärtner oder Landwirt plus Greenkeeping-Modul werden in der Vorauswahl häufig aussortiert — Zertifikate als PDF beilegen.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion gaertnerjob.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;

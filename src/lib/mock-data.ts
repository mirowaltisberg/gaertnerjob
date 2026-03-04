export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Landschaftsgärtner EFZ (m/w/d)",
    company: "GrünWerk AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Landschaftsgärtner für abwechslungsreiche Gartenbau-Projekte im Raum Zürich.",
    responsibilities: [
      "Ausführung von Bepflanzungen und Rasenarbeiten",
      "Erstellen von Natursteinmauern und Plattenbelägen",
      "Pflege und Unterhalt von Grünanlagen",
      "Bedienung von Maschinen und Geräten im Gartenbau"
    ],
    requirements: [
      "Abgeschlossene Lehre als Gärtner EFZ Fachrichtung Garten- und Landschaftsbau",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Gärtner Zierpflanzen EFZ",
    company: "Flora Garten GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Produktion und Pflege von Zierpflanzen und Stauden in unserer Gärtnerei.",
    responsibilities: [
      "Anzucht und Pflege von Zierpflanzen und Stauden",
      "Topfen, Pikieren und Umtopfen von Kulturen",
      "Pflanzenschutzmassnahmen durchführen",
      "Kundenberatung und Verkauf im Gartencenter"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Gärtner EFZ Fachrichtung Zierpflanzen",
      "Fundierte Pflanzenkenntnisse und Freude an der Natur",
      "Teamfähigkeit und sorgfältige Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Gartenbau-Projektleiter (w/m)",
    company: "Gartenbau Swiss AG",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie anspruchsvolle Gartenbau-Projekte von der Planung bis zur Übergabe an unsere Kunden.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung für Gartenanlagen",
      "Führung der Gartenbau-Equipen auf der Baustelle",
      "Qualitätssicherung und Bauabnahme"
    ],
    requirements: [
      "Weiterbildung zum Gartenbau-Polier oder Gartenbau-Projektleiter",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in Gartenplanung und Pflanzenkunde",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Baumpfleger / Arborist",
    company: "BaumProfi AG",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Als Baumpfleger führen Sie professionelle Baumpflegearbeiten und Baumfällungen sicher und fachgerecht durch.",
    responsibilities: [
      "Fachgerechte Baumpflege mittels Seilklettertechnik",
      "Durchführung von Baumfällungen und Rodungen",
      "Kronenpflege, Totholzentfernung und Formschnitt",
      "Baumkontrolle und Zustandsbeurteilung"
    ],
    requirements: [
      "Ausbildung als Gärtner EFZ oder Forstwart mit Weiterbildung in Baumpflege",
      "Erfahrung in Seilklettertechnik (SKT)",
      "Schwindelfreiheit und körperliche Fitness"
    ],
    benefits: [
      "Moderne Ausrüstung und Maschinen",
      "Geregelte Arbeitszeiten",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Greenkeeper",
    company: "SportGrün Service",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Greenkeeper pflegen und unterhalten Sie Sportrasenflächen und sorgen für optimale Spielbedingungen.",
    responsibilities: [
      "Pflege und Unterhalt von Sportrasenflächen",
      "Mähen, Vertikutieren, Aerifizieren und Besanden",
      "Düngung und Pflanzenschutz auf Rasenflächen",
      "Pflege der Platzumgebung und Bewässerungsanlagen"
    ],
    requirements: [
      "Ausbildung als Gärtner EFZ oder vergleichbare Qualifikation",
      "Erfahrung in der Rasenpflege und im Sportplatzbau",
      "Technisches Verständnis für Bewässerungssysteme",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Arbeit an der frischen Luft",
      "Umfassend ausgerüsteter Maschinenpark",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];

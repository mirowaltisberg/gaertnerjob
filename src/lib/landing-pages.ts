// SEO-DECISION: Comprehensive landing page matrix covering 12 roles × 12 cantons = 144 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role × canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Landschaftsgärtner EFZ": {
    label: "Landschaftsgärtner EFZ",
    roleDescription:
      "Landschaftsgärtner EFZ gestalten, bauen und pflegen Gärten, Parks und Grünanlagen. Sie führen Erdarbeiten, Bepflanzungen, Plattenverlegungen und Bewässerungsinstallationen aus und sorgen für die fachgerechte Pflege von Aussenanlagen.",
    salaryRange: "CHF 60'000 – 75'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Gärtner EFZ Fachrichtung Garten- und Landschaftsbau, körperliche Fitness, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Gartenbaupolier, Vorarbeiter Gartenbau oder eidg. dipl. Gärtnermeister. Spezialisierung auf Natursteinarbeiten oder Dachbegrünung.",
    related: ["Vorarbeiter Gartenbau", "Gartenbaupolier", "Gartenplaner"],
  },
  "Gärtner Zierpflanzen EFZ": {
    label: "Gärtner Zierpflanzen EFZ",
    roleDescription:
      "Gärtner Zierpflanzen EFZ kultivieren und pflegen Zierpflanzen in Gewächshäusern und Gärtnereien. Sie vermehren Pflanzen, steuern Klima- und Bewässerungsanlagen und beraten Kunden bei der Pflanzenwahl.",
    salaryRange: "CHF 55'000 – 70'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Gärtner EFZ Fachrichtung Zierpflanzen, Pflanzenkenntnisse, sorgfältige Arbeitsweise.",
    career:
      "Weiterbildung zum Gärtnermeister, Spezialisierung auf Floristik, Innenraumbegrünung oder Pflanzenschutz.",
    related: ["Baumschulist", "Gärtner Stauden EFZ", "Pflanzenschutzberater"],
  },
  "Gärtner Stauden EFZ": {
    label: "Gärtner Stauden EFZ",
    roleDescription:
      "Gärtner Stauden EFZ sind auf die Vermehrung, Kultur und Pflege von Stauden spezialisiert. Sie arbeiten in Staudengärtnereien, planen Staudenpflanzungen und beraten Kunden zu standortgerechten Pflanzenkombinationen.",
    salaryRange: "CHF 55'000 – 70'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Gärtner EFZ Fachrichtung Stauden, fundierte Pflanzenkenntnisse, Freude an der Natur.",
    career:
      "Weiterbildung zum Gärtnermeister, Spezialisierung auf Staudenplanung, ökologische Bepflanzung oder Gartenberatung.",
    related: ["Gärtner Zierpflanzen EFZ", "Gartenplaner", "Pflanzenschutzberater"],
  },
  "Baumpfleger": {
    label: "Baumpfleger",
    roleDescription:
      "Baumpfleger sind Spezialisten für die Pflege, Erhaltung und Fällung von Bäumen. Sie führen Kronenschnitte, Sicherheitsbeurteilungen und Baumkontrollen durch und arbeiten oft in der Seilklettertechnik (SKT).",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Ausbildung als Gärtner EFZ oder Forstwart, Zusatzausbildung in Baumpflege (z. B. European Tree Worker), Schwindelfreiheit und körperliche Fitness.",
    career:
      "Spezialisierung auf Baumgutachten, European Tree Technician (ETT) oder Gründung eines eigenen Baumpflegebetriebs.",
    related: ["Landschaftsgärtner EFZ", "Baumschulist", "Vorarbeiter Gartenbau"],
  },
  "Gartenplaner": {
    label: "Gartenplaner",
    roleDescription:
      "Gartenplaner entwerfen und planen Gärten, Aussenanlagen und öffentliche Grünräume. Sie erstellen Bepflanzungspläne, Visualisierungen und Kostenvoranschläge und arbeiten eng mit Bauherren, Architekten und Landschaftsarchitekten zusammen.",
    salaryRange: "CHF 70'000 – 90'000",
    requirements:
      "Ausbildung als Gärtner EFZ mit Weiterbildung in Gartengestaltung oder Studium in Landschaftsarchitektur, CAD-Kenntnisse, gestalterisches Flair.",
    career:
      "Aufstieg zum Planungsleiter, Spezialisierung auf ökologische Gartengestaltung, Dachbegrünung oder nachhaltige Freiraumplanung.",
    related: ["Gartenbau-Projektleiter", "Landschaftsgärtner EFZ", "Gartenbaupolier"],
  },
  "Vorarbeiter Gartenbau": {
    label: "Vorarbeiter Gartenbau",
    roleDescription:
      "Vorarbeiter Gartenbau leiten Gartenbauprojekte vor Ort und führen ein Team von Gärtnern. Sie organisieren den Tagesablauf, überwachen die Arbeitsqualität und sind Ansprechpartner für Kunden auf der Baustelle.",
    salaryRange: "CHF 70'000 – 85'000",
    requirements:
      "Ausbildung als Gärtner EFZ, mehrjährige Berufserfahrung, Führungskompetenz, organisatorisches Geschick.",
    career:
      "Weiterbildung zum Gartenbaupolier, Gartenbau-Projektleiter oder eidg. dipl. Gärtnermeister.",
    related: ["Gartenbaupolier", "Landschaftsgärtner EFZ", "Gartenbau-Projektleiter"],
  },
  "Gartenbaupolier": {
    label: "Gartenbaupolier",
    roleDescription:
      "Gartenbaupoliere übernehmen die Baustellenleitung für grössere Gartenbauprojekte. Sie planen Arbeitsabläufe, kalkulieren Material und Kosten, führen Mitarbeitende und stellen die Qualität der Ausführung sicher.",
    salaryRange: "CHF 75'000 – 95'000",
    requirements:
      "Weiterbildung zum Gartenbaupolier (Berufsprüfung), Führungserfahrung, Kenntnisse in Kalkulation und Baustellenorganisation.",
    career:
      "Aufstieg zum Gartenbau-Projektleiter, Bereichsleiter oder Geschäftsführer eines Gartenbaubetriebs.",
    related: ["Vorarbeiter Gartenbau", "Gartenbau-Projektleiter", "Gartenplaner"],
  },
  "Greenkeeper": {
    label: "Greenkeeper",
    roleDescription:
      "Greenkeeper sind Spezialisten für die Pflege von Sportrasenflächen, insbesondere auf Golfplätzen, Fussballstadien und Sportanlagen. Sie steuern Bewässerung, Düngung, Mäharbeiten und Bodenmanagement.",
    salaryRange: "CHF 60'000 – 75'000",
    requirements:
      "Ausbildung als Gärtner EFZ oder Landwirt, Weiterbildung im Greenkeeping, Kenntnisse in Rasenmanagement und Bewässerungstechnik.",
    career:
      "Aufstieg zum Head-Greenkeeper, Course Manager oder Spezialisierung auf Sportstättenbau und Rasenberatung.",
    related: ["Landschaftsgärtner EFZ", "Vorarbeiter Gartenbau", "Friedhofsgärtner"],
  },
  "Baumschulist": {
    label: "Baumschulist",
    roleDescription:
      "Baumschulisten kultivieren und vermehren Bäume, Sträucher und Heckenpflanzen in Baumschulen. Sie veredeln Gehölze, führen Verschularbeiten durch und beraten Kunden bei der Gehölzauswahl.",
    salaryRange: "CHF 55'000 – 70'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Gärtner EFZ Fachrichtung Baumschule, Gehölzkenntnisse, sorgfältige Arbeitsweise.",
    career:
      "Weiterbildung zum Gärtnermeister, Spezialisierung auf Veredelungstechnik, Raritätenzucht oder Gartencenter-Management.",
    related: ["Gärtner Zierpflanzen EFZ", "Baumpfleger", "Gärtner Stauden EFZ"],
  },
  "Friedhofsgärtner": {
    label: "Friedhofsgärtner",
    roleDescription:
      "Friedhofsgärtner gestalten und pflegen Grabstätten, Friedhofsanlagen und Gedenkstätten. Sie bepflanzen Gräber saisonal, pflegen Grünflächen und beraten Angehörige bei der Grabgestaltung.",
    salaryRange: "CHF 55'000 – 68'000",
    requirements:
      "Ausbildung als Gärtner EFZ, Einfühlungsvermögen, selbstständige Arbeitsweise, Erfahrung in Grabpflege.",
    career:
      "Aufstieg zum Friedhofsverwalter, Spezialisierung auf Friedhofsplanung oder ökologische Bestattungskonzepte.",
    related: ["Landschaftsgärtner EFZ", "Gärtner Stauden EFZ", "Gärtner Zierpflanzen EFZ"],
  },
  "Gartenbau-Projektleiter": {
    label: "Gartenbau-Projektleiter",
    roleDescription:
      "Gartenbau-Projektleiter planen und leiten Gartenbau- und Landschaftsprojekte von der Offerte bis zur Abnahme. Sie kalkulieren Kosten, führen Teams, koordinieren Subunternehmer und beraten Bauherren und Architekten.",
    salaryRange: "CHF 80'000 – 100'000",
    requirements:
      "Weiterbildung zum Gartenbau-Projektleiter oder eidg. dipl. Gärtnermeister, Führungserfahrung, Kalkulationskenntnisse, Verhandlungsgeschick.",
    career:
      "Aufstieg zum Bereichsleiter, Geschäftsführer oder Gründung eines eigenen Gartenbaubetriebs.",
    related: ["Gartenbaupolier", "Gartenplaner", "Vorarbeiter Gartenbau"],
  },
  "Pflanzenschutzberater": {
    label: "Pflanzenschutzberater",
    roleDescription:
      "Pflanzenschutzberater diagnostizieren Pflanzenkrankheiten und Schädlingsbefall, empfehlen geeignete Massnahmen und beraten Gartenbaubetriebe, Gemeinden und Privatkunden zum integrierten Pflanzenschutz.",
    salaryRange: "CHF 65'000 – 85'000",
    requirements:
      "Ausbildung als Gärtner EFZ mit Weiterbildung im Pflanzenschutz, fundierte Kenntnisse in Phytopathologie und Entomologie, Beratungskompetenz.",
    career:
      "Spezialisierung auf biologischen Pflanzenschutz, Beratung für Grossbetriebe oder Tätigkeit bei kantonalen Fachstellen.",
    related: ["Gärtner Zierpflanzen EFZ", "Gärtner Stauden EFZ", "Baumschulist"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the gardening/landscaping industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Gartenbaubetrieben, privaten Gartengestaltungsprojekten und einer hohen Nachfrage nach professioneller Grünraumpflege in Stadtgebieten.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Gartenbau-Fachkräften — von der Pflege historischer Gärten über öffentliche Parkanlagen bis zu Landschaftsgestaltungsprojekten im Berner Oberland.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen für Gärtner mit vielen Grünflächen, dem Botanischen Garten, Parkanlagen und einer regen Nachfrage nach Gartengestaltung.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein wichtiger Standort für Gartenbau und Baumschulen mit zahlreichen Wohnsiedlungen, Gewerbeflächen und einer hohen Nachfrage nach Landschaftsgärtnern und Grünpflege-Spezialisten.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Gartenbau-Fachkräfte — von traditionsreichen Gärtnereien über Sportanlagenpflege bis zu grossen Landschaftsgestaltungsprojekten.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Gartenbau-Fachkräften stetig — getrieben durch Neubauprojekte, Tourismus-Infrastruktur und den Trend zu professionell gestalteten Aussenanlagen.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Standort zwischen Bern und Basel gute Karrierechancen für Gartenbau-Fachkräfte in Gartengestaltung, Grünflächenpflege und kommunalem Unterhalt.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und anspruchsvolle Gartenbau-Projekte — von exklusiven Privatgärten bis zur Pflege von Firmenarealen.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau, bekannt als Obstbaukanton, bietet als wachsender Standort zunehmend Chancen für Gartenbau-Fachkräfte — besonders in Baumschulen, Staudengärtnereien und der Landschaftsgestaltung.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Gartenbau-Fachkräfte gefragt — von der Gestaltung alpiner Gärten über Sportanlagenpflege in Ferienorten bis zur Begrünung von Tourismusinfrastruktur.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Standort mit vielen Grünflächen attraktive Stellen für Gartenbau-Fachkräfte, insbesondere in der Gartengestaltung und kommunalen Grünpflege.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Gartenbau-Fachkräften vielfältige Möglichkeiten in Gartengestaltung, öffentlichen Grünanlagen und landwirtschaftsnahem Gartenbau.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf gärtnerjob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf gärtnerjob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Gartenbaubranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf gärtnerjob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/gaertnerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}

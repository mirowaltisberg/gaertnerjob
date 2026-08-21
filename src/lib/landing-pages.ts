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
  roleDescription: string;
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

interface RoleContent {
  label: string;
  roleDescription: string;
  requirements: string;
  career: string;
}

// Horticulture-only labels. Neighbouring construction and facility roles are
// deliberately excluded from public SEO navigation and vacancy classification.
const ROLE_CONTENT: Record<string, RoleContent> = {
  "Gärtner EFZ": {
    label: "Gärtner EFZ",
    roleDescription:
      "Gärtnerinnen und Gärtner EFZ arbeiten je nach Fachrichtung in Garten- und Landschaftsbau oder Pflanzenproduktion. Das Inserat nennt den tatsächlichen Schwerpunkt.",
    requirements:
      "Für Stellen mit EFZ-Anforderung ist in der Regel der bezeichnete Abschluss oder eine ausdrücklich akzeptierte gleichwertige Qualifikation nötig.",
    career:
      "Offizielle Weiterbildungen und Zulassungsbedingungen sind beim jeweiligen Bildungsanbieter oder Berufsverband zu prüfen.",
  },
  Landschaftsgärtner: {
    label: "Landschaftsgärtner",
    roleDescription:
      "Landschaftsgärtnerstellen können Neubau, Umgestaltung und Pflege von Gärten, Wegen, Plätzen, Pflanzflächen und Grünanlagen umfassen.",
    requirements:
      "Massgebend sind Ausbildung, Pflanzen- und Materialkenntnisse, Maschinenpraxis und die Anforderungen des Inserats.",
    career:
      "Spezialisierungen und Führungsfunktionen hängen von Abschluss, Erfahrung und angebotenen Weiterbildungen ab.",
  },
  Kundengärtner: {
    label: "Kundengärtner",
    roleDescription:
      "Kundengärtnerstellen verbinden saisonale Grünpflege, Pflanzenkenntnisse und selbstständig geplante Einsätze bei privaten oder institutionellen Anlagen.",
    requirements:
      "Berufspraxis, Führerausweis, Kundenkontakt und Maschinenkenntnisse werden je nach Inserat unterschiedlich gewichtet.",
    career:
      "Service- und Pflegeerfahrung kann zu Koordinationsaufgaben führen, ohne dass daraus ein automatischer Anspruch entsteht.",
  },
  Baumpfleger: {
    label: "Baumpfleger",
    roleDescription:
      "Baumpflegestellen betreffen die Beurteilung, Pflege und Sicherung von Bäumen sowie Arbeiten mit geeigneter Kletter- oder Zugangstechnik.",
    requirements:
      "Entscheidend sind die verlangten Fachkenntnisse, Sicherheitsausbildungen und die im Inserat bezeichnete Zugangstechnik.",
    career:
      "Zusatzqualifikationen in Baumpflege und Arbeitssicherheit richten sich nach Funktion und Einsatzbereich.",
  },
  "Gärtner Pflanzenproduktion": {
    label: "Gärtner Pflanzenproduktion",
    roleDescription:
      "Stellen in der Pflanzenproduktion umfassen je nach Kultur das Vermehren, Kultivieren, Pflegen und Bereitstellen von Pflanzen.",
    requirements:
      "Pflanzenkenntnisse, Kulturführung und sorgfältiger Umgang mit Beständen sind gemäss Inserat zu prüfen.",
    career:
      "Spezialisierungen unterscheiden sich nach Kulturen, Produktionsbetrieb und vorhandener Ausbildung.",
  },
  "Bauleiter Gartenbau": {
    label: "Bauleiter Gartenbau",
    roleDescription:
      "Bauleitungsstellen können Arbeitsvorbereitung, Ausmass, Terminsteuerung, Teamführung und Koordination von Gartenbauprojekten umfassen.",
    requirements:
      "Fachausbildung, Berufspraxis und Führungserfahrung werden je nach Stellenprofil unterschiedlich gewichtet.",
    career:
      "Verantwortungsumfang, Weiterbildung und Vergütung lassen sich nur aus dem konkreten Inserat ableiten.",
  },
  "Vorarbeiter Gartenbau": {
    label: "Vorarbeiter Gartenbau",
    roleDescription:
      "Vorarbeiterstellen verbinden praktische Gartenbauarbeiten mit der Koordination von Team, Material, Sicherheit und Terminen.",
    requirements:
      "Massgebend sind die ausgeschriebene Fachpraxis, Organisationsfähigkeit und Führungserfahrung.",
    career:
      "Mögliche Weiterbildungen hängen vom vorhandenen Abschluss und der angestrebten Funktion ab.",
  },
};

const CANTON_CONTENT = {
  ZH: "Zürich", BE: "Bern", BS: "Basel-Stadt", AG: "Aargau",
  SG: "St. Gallen", LU: "Luzern", SO: "Solothurn", ZG: "Zug",
  TG: "Thurgau", GR: "Graubünden", SH: "Schaffhausen", FR: "Freiburg",
} as const;

function buildLandingConfig(roleKey: string, cantonKey: keyof typeof CANTON_CONTENT): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const cantonName = CANTON_CONTENT[cantonKey];
  if (!role || !cantonName) throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);

  const cantonContext = `Der Ortsfilter verwendet den Kanton ${cantonName} (${cantonKey}). Der genaue Arbeitsort und ein allfälliger Einsatzradius ergeben sich aus dem jeweiligen Inserat.`;
  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${cantonName}`,
    description: `Aktuelle Stelleninserate mit Bezug zu ${role.label} im Kanton ${cantonName}. Aufgaben, Anforderungen und Arbeitsort im Inserat prüfen.`,
    intro: `Diese Suchseite zeigt aktuelle Treffer für ${role.label} mit Ortsbezug zum Kanton ${cantonName}. Sie erhebt keinen Anspruch auf vollständige Marktabdeckung. ${cantonContext}`,
    roleDescription: role.roleDescription,
    requirements: role.requirements,
    career: role.career,
    cantonContext,
    faqs: [
      {
        question: `Wie viele ${role.label} Stellen gibt es in ${cantonName}?`,
        answer: "Die Trefferzahl wird aus dem aktuellen öffentlichen Bestand berechnet und kann sich jederzeit ändern. gaertnerjob.ch verspricht keine vollständige Marktabdeckung.",
      },
      { question: `Welche Voraussetzungen gelten für ${role.label}?`, answer: role.requirements },
      {
        question: `Was verdient ein ${role.label} in ${cantonName}?`,
        answer: "Massgebend ist die Lohnangabe im Inserat oder Arbeitsvertrag. Für statistische Vergleiche verweisen wir auf Salarium des Bundesamts für Statistik.",
      },
      { question: `Wo befindet sich die Stelle im Kanton ${cantonName}?`, answer: cantonContext },
    ],
  };
}

export const TOP_LANDING_PAGES = Object.keys(ROLE_CONTENT).flatMap((role) =>
  (Object.keys(CANTON_CONTENT) as Array<keyof typeof CANTON_CONTENT>).map((canton) =>
    buildLandingConfig(role, canton),
  ),
);

const priorityRoles = [...new Set(TOP_LANDING_PAGES.map((page) => page.role))].slice(0, 3);
const priorityPairs: Array<[string | undefined, string]> = [
  [priorityRoles[0], "ZH"],
  [priorityRoles[0], "BE"],
  [priorityRoles[1], "ZH"],
  [priorityRoles[1], "AG"],
  [priorityRoles[2], "ZH"],
  [priorityRoles[2], "SG"],
];

export const SEO_PRIORITY_LANDING_PAGES = priorityPairs.flatMap(([role, canton]) => {
  const match = TOP_LANDING_PAGES.find(
    (page) => page.role === role && page.canton === canton,
  );
  return match ? [match] : [];
});

function normalizeSlug(value: string): string {
  return value.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/\u00df/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export const toRoleSlug = normalizeSlug;
export const toCantonSlug = normalizeSlug;

export function getLandingPath(config: LandingPageConfig): string {
  return `/gaertnerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function isSeoPriorityLandingPage(config: LandingPageConfig): boolean {
  const path = getLandingPath(config);
  return SEO_PRIORITY_LANDING_PAGES.some(
    (candidate) => getLandingPath(candidate) === path,
  );
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return TOP_LANDING_PAGES.find(
    (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug,
  ) ?? null;
}

export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCanton = TOP_LANDING_PAGES.filter((page) => page.canton === config.canton && page.role !== config.role);
  const sameRole = TOP_LANDING_PAGES.filter((page) => page.role === config.role && page.canton !== config.canton);
  const maxPerGroup = Math.ceil(limit / 2);
  return [...sameCanton.slice(0, maxPerGroup), ...sameRole.slice(0, maxPerGroup)].slice(0, limit);
}

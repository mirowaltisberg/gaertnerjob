/**
 * Approximate annual CHF salary ranges for Swiss gardening and landscaping roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern → salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  {
    patterns: ["projektleiter gartenbau", "gartenbau-projektleiter"],
    range: { min: 80_000, max: 100_000 },
  },
  {
    patterns: ["gartenbaupolier", "polier gartenbau", "polier"],
    range: { min: 75_000, max: 95_000 },
  },
  {
    patterns: ["gartenplaner", "planer garten"],
    range: { min: 70_000, max: 90_000 },
  },
  {
    patterns: ["vorarbeiter gartenbau", "vorarbeiter"],
    range: { min: 70_000, max: 85_000 },
  },
  // Specialized roles
  {
    patterns: ["baumpfleger", "arborist"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["landschaftsgärtner", "landschaftsgaertner"],
    range: { min: 60_000, max: 75_000 },
  },
  {
    patterns: ["greenkeeper"],
    range: { min: 60_000, max: 75_000 },
  },
  {
    patterns: ["gärtner zierpflanzen", "gaertner zierpflanzen", "staudengärtner", "staudengaertner"],
    range: { min: 55_000, max: 70_000 },
  },
  {
    patterns: ["baumschulist", "baumschule"],
    range: { min: 55_000, max: 70_000 },
  },
  {
    patterns: ["friedhofsgärtner", "friedhofsgaertner"],
    range: { min: 55_000, max: 68_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["gärtner", "gaertner"],
    range: { min: 55_000, max: 72_000 },
  },
  {
    patterns: ["gartenbau"],
    range: { min: 58_000, max: 75_000 },
  },
  {
    patterns: ["pflege"],
    range: { min: 52_000, max: 68_000 },
  },
  {
    patterns: ["pflanz"],
    range: { min: 52_000, max: 68_000 },
  },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "75'000 – 95'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}

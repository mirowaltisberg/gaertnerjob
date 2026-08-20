import type { Metadata } from "next";
import type { HomepageInitialFilters } from "@/app/_components/homepage-search";
import { HomepageSearchLoader } from "@/app/_components/homepage-search-loader";
import { HomepageLanding } from "@/app/_components/homepage-landing";
import { HomepageSeoContent } from "@/app/_components/homepage-seo-content";
import { SiteFooter } from "@/components/site-footer";
import { searchJobListings } from "@/lib/job-catalog";
import { JsonLd } from "@/components/json-ld";

import type { JobSearchParams, JobSort, RemoteFilter } from "@/lib/job-types";

const homepageMetadata: Metadata = {
  title: "Gärtner Jobs Schweiz | Gartenbau-Stellen",
  description:
    "Finde Stellenangebote für Landschaftsgärtner, Kundengärtner, Baumpflege, Pflanzenproduktion und Bauleitung in der Schweiz.",
  alternates: { canonical: "/" },
};

type HomeSearchParams = Record<string, string | string[] | undefined>;

interface HomePageProps {
  searchParams: Promise<HomeSearchParams>;
}

function firstValue(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? "";
}

function parseHomepageFilters(searchParams: HomeSearchParams): HomepageInitialFilters {
  const q = firstValue(searchParams.q).slice(0, 80);
  const loc = firstValue(searchParams.loc).slice(0, 80);
  const radiusParam = firstValue(searchParams.radiusKm);
  const radiusValues = new Set(["5", "10", "15", "25", "35", "50", "80", "120", "all"]);
  const regionRadius: Record<string, string> = {
    "grossraum zürich": "50",
    "grossraum zurich": "50",
    zentralschweiz: "50",
    nordwestschweiz: "50",
    ostschweiz: "80",
    mittelland: "50",
    "westschweiz / romandie": "80",
    westschweiz: "80",
    romandie: "80",
    tessin: "50",
    wallis: "50",
  };
  const radiusKm = radiusValues.has(radiusParam)
    ? radiusParam
    : (regionRadius[loc.toLocaleLowerCase("de-CH")] ?? "25");
  const remoteParam = firstValue(searchParams.remote);
  const remote: RemoteFilter = ["any", "true", "false"].includes(remoteParam)
    ? (remoteParam as RemoteFilter)
    : "any";
  const postedParam = firstValue(searchParams.postedWithinDays);
  const postedWithinDays = ["7", "14", "30", "all"].includes(postedParam)
    ? postedParam
    : "30";
  const sortParam = firstValue(searchParams.sort);
  const sort: JobSort = ["newest", "oldest", "relevance"].includes(sortParam)
    ? (sortParam as JobSort)
    : "newest";

  return {
    q,
    loc,
    radiusKm,
    type: firstValue(searchParams.type).slice(0, 80) || "all",
    workload: firstValue(searchParams.workload).slice(0, 40) || "all",
    remote,
    postedWithinDays,
    sort,
  };
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  return Object.keys(params).length > 0
    ? { ...homepageMetadata, robots: { index: false, follow: true } }
    : homepageMetadata;
}

// SEO-DECISION: This page is a server component that:
// 1. Fetches initial jobs server-side so Google crawler sees real job titles in HTML
// 2. Passes SSR jobs to the client-side search interface for hydration
// 3. Renders a safe ItemList containing only controlled public titles and URLs
// 4. Server-rendered SEO content (intro, FAQ, salary table, links)

export const revalidate = 3600;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gaertnerjob.ch";

const homepageBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: SITE_URL,
    },
  ],
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const rawSearchParams = await searchParams;
  const filters = parseHomepageFilters(rawSearchParams);
  const jobSearchParams: JobSearchParams = {
    q: filters.q,
    loc: filters.loc,
    radiusKm: filters.radiusKm === "all" ? undefined : Number(filters.radiusKm),
    limit: 12,
    offset: 0,
    type: filters.type === "all" ? undefined : filters.type,
    workload: filters.workload === "all" ? undefined : filters.workload,
    remote: filters.remote,
    postedWithinDays:
      filters.postedWithinDays === "all" ? undefined : Number(filters.postedWithinDays),
    sort: filters.sort,
  };
  const initialData = await searchJobListings(jobSearchParams);
  const homepageJobListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: initialData.jobs.length,
    itemListElement: initialData.jobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: job.title,
        url: `${SITE_URL}/jobs/${job.id}`,
      },
    })),
  };
  const heroContent = (
    <div className="trade-hero-grid">
      <div>
        <p className="trade-kicker">Pflanze · Raum · Jahreszeit</p>
        <h1 className="trade-display">Gartenbaujobs.<em>Parzelle für Parzelle.</em></h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg">Gartenbaustellen — nach Fachgebiet, Ort und Pensum.</p>
      </div>
      <div className="plot-map" aria-hidden="true"><span className="plot-map__label">Pflanzplan / Parzelle 01</span></div>
    </div>
  );

  return (
    <>
      <JsonLd data={homepageBreadcrumbSchema} />
      {initialData.jobs.length > 0 && <JsonLd data={homepageJobListSchema} />}
      {Object.keys(rawSearchParams).length === 0 ? (
        <HomepageLanding initialData={initialData} config={{ hero: heroContent, sectionKicker: "Gartenjournal", sectionTitle: "Aktuelle Gartenbaustellen", keywordPlaceholder: "Welchen Job suchst du?" }} />
      ) : (
        <HomepageSearchLoader initialData={initialData} initialFilters={filters} heroContent={heroContent} />
      )}
      <HomepageSeoContent />
      <SiteFooter />
    </>
  );
}

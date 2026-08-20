"use client";

import dynamic from "next/dynamic";
import type { HomepageSearchProps } from "@/app/_components/homepage-search";

const HomepageSearch = dynamic(
  () => import("@/app/_components/homepage-search").then((module) => module.HomepageSearch),
  { ssr: false },
);

export function HomepageSearchLoader(props: HomepageSearchProps) {
  return <HomepageSearch {...props} />;
}

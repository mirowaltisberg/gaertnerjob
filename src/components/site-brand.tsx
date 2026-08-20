import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact sprout and plot line; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="gaertnerjob.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 42 42"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M21 36V18" />
        <path d="M21 19C12 19 8 14 8 7c8 0 13 4 13 12Z" />
        <path d="M21 23c9 0 13-5 13-12-8 0-13 4-13 12Z" />
        <path d="M5 36c6-4 26-4 32 0" />
      </svg>
      <span className="site-brand__type">
        <strong>gärtner</strong>
        <span>job.ch</span>
      </span>
    </span>
  );
}

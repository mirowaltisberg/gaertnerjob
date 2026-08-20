import { cn } from "@/lib/utils";

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  /** Delay between each child card animation, in ms */
  staggerMs?: number;
  /** Base delay before the first card starts, in ms */
  baseDelayMs?: number;
  /** Change this value to re-trigger the stagger animation (e.g. on new search results) */
  triggerKey?: string | number;
}

export function StaggeredList({
  children,
  className,
}: StaggeredListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  );
}

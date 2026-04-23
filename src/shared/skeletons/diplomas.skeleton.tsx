"use client";
import { ChevronDown } from "lucide-react";
/**
 * DiplomasSkeleton renders placeholder UI while real diploma data is loading.
 * It mimics the grid layout and footer of the actual diplomas screen using
 * Tailwind CSS utilities and a subtle pulse animation.
 */
export default function DiplomasSkeleton({ hasNextPage = true }: { hasNextPage?: boolean }) {
  // Number of placeholder items to show – matches typical grid count (e.g., 6 items)
  const placeholderCount = 6;

  return (
    <>
      {/* Skeleton grid of diploma cards */}
      <div className="my-6 grid grid-cols-3 gap-2.5">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-lg bg-gray-200 p-4 space-y-2">
            {/* Image placeholder */}
            <div className="h-24 w-full bg-gray-300 rounded" />
            {/* Title placeholder */}
            <div className="h-4 w-3/4 bg-gray-300 rounded" />
            {/* Subtitle placeholder */}
            <div className="h-3 w-1/2 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      {/* Footer placeholder – shows loading more indicator or end of list */}
      <div className="text-gray-600 flex flex-col items-center py-2.5">
        {hasNextPage ? (
          <>
            <span className="font-mono">Loading more…</span>
            <ChevronDown className="size-4.5 animate-bounce" />
          </>
        ) : (
          <span className="font-mono text-gray-400">End of list</span>
        )}
      </div>
    </>
  );
}
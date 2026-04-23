"use client";
import { ChevronDown } from "lucide-react";
export default function ExamsSkeleton({ hasNextPage = true }: { hasNextPage?: boolean }) {
  const placeholderCount = 3;

  return (
    <>
      {/* Skeleton list of exam cards */}
      <div className="my-6 grid grid-cols-1 gap-2.5 mt-0 bg-white">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={i}
            className="bg-blue-50 flex items-center gap-4 p-4 animate-pulse"
          >
            {/* exam image placeholder */}
            <div className="size-25 border border-blue-200 bg-blue-100 flex items-center justify-center shrink-0">
              <div className="size-3/4 bg-blue-200 rounded" />
            </div>
            
            {/* exam text placeholder */}
            <div className="flex-1 flex flex-col gap-1.5">
              {/* exam title row */}
              <div className="flex justify-between items-center mb-1">
                <div className="h-6 w-1/3 bg-blue-200 rounded" />
                {/* info placeholder */}
                <div className="flex items-center gap-2">
                  <div className="h-4 w-20 bg-gray-300 rounded" />
                  <div className="h-4 w-20 bg-gray-300 rounded border-l border-gray-400 pl-2" />
                </div>
              </div>
              
              {/* description placeholder */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-11/12 bg-gray-200 rounded" />
                <div className="h-3 w-4/5 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer placeholder */}
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

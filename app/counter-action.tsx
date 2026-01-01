"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function CounterAction({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("count", ((Number(params.get("count")) || 0) + 1).toString());
          router.push(`?${params.toString()}`);
        }}>
        Add 1
      </button>
      {children}
    </div>
  );
}

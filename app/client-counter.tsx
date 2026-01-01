"use client";

import { useSearchParams } from "next/navigation";

export function ClientCounter() {
  const searchParams = useSearchParams();
  const count = searchParams.get("count") || 0;
  return <p>Client Count: {count}</p>;
}

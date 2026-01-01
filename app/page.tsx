import { CounterAction } from "./counter-action";
import { ClientCounter } from "./client-counter";
import { ServerCounter } from "./server-counter";
import { Suspense } from "react";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) {
  const { count } = await searchParams;
  return (
    <CounterAction>
      <ClientCounter />
      <Suspense fallback={<div>Loading server counter...</div>} key={count}>
        <ServerCounter count={Number(count) || 0} />
      </Suspense>
    </CounterAction>
  );
}

import { CounterWrapper, Counter } from "./counter";
import { CounterProvider } from "./counter";
import { Suspense } from "react";
import { CounterRenderServer } from "./counter-render";

export default function Home() {
  return (
    <CounterProvider>
      <CounterWrapper>
        <Suspense fallback={<div>Loading counter...</div>}>
          <CounterRenderServer>
            <Counter />
          </CounterRenderServer>
        </Suspense>
      </CounterWrapper>
    </CounterProvider>
  );
}

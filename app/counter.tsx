"use client";

import { Suspense, useState } from "react";
import { CounterRenderServer } from "./counter-render";

export function CounterWrapper() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <Suspense fallback={<div>Loading counter...</div>}>
        <CounterRenderServer count={count} />
      </Suspense>
    </div>
  );
}

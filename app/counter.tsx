"use client";

import { useState, createContext, use } from "react";

const CounterContext = createContext({ count: 0, setCount: (count: number) => {} });

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return <CounterContext value={{ count, setCount }}>{children}</CounterContext>;
}

export const Counter = () => {
  const { count } = use(CounterContext);
  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
};

export function CounterWrapper({ children }: { children: React.ReactNode }) {
  const { count, setCount } = use(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {children}
    </div>
  );
}

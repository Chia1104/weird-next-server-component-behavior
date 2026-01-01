// counter-render.tsx
"use server";

const p = new Promise((resolve) => setTimeout(resolve, 1000));

export async function CounterRenderServer({ count }: { count: number }) {
  console.log("Rendering <CounterRenderServer />");
  await p;

  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
}
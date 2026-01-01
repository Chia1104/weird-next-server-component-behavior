// counter-render.tsx
// "use server";
import "server-only";

const p = new Promise((resolve) => setTimeout(resolve, 1000));

export async function CounterRenderServer({ children }: { children: React.ReactNode }) {
  console.log("Rendering <CounterRenderServer />");
  await p;

  return (
    <div>
      <p>This is a server component</p>
      {children}
    </div>
  );
}

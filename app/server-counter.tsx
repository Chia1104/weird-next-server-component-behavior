import "server-only";

export async function ServerCounter({ count }: { count: number }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>Server Count: {count}</p>;
}

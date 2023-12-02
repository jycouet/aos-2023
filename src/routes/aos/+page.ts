import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const elfes = await fetch(
    "https://advent.sveltesociety.dev/data/2023/day-one.json"
  );

  return { elves: elfes.json() };
}) satisfies PageLoad;

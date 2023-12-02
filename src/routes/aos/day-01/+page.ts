import { route } from "$lib/ROUTES";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const elfes = await fetch(route("link_aos_data", { day: "one" }));
  return { elves: elfes.json() };
}) satisfies PageLoad;

import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
  if (!cookies.get("aos_number_of_cookies")) {
    cookies.set("aos_number_of_cookies", (Math.random() * 100).toFixed(0));
  }

  return {};
}) satisfies PageServerLoad;

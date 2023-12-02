import { route } from "$lib/ROUTES";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  checking: async ({ fetch, params }) => {
    console.log("Checking... ", params.name);

    const data = await fetch(route("GET /aos/data-[day]", { day: "one" }));
    const elves: { name: string; tally: number }[] = await data.json();

    const { tally } = elves.find((e) => e.name === params.name)!;

    return {
      body: {
        message: tally > 0 ? "😇" : "👺",
      },
    };
  },
} satisfies Actions;

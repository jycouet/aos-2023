import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { route } from "$lib/ROUTES";

export const GET: RequestHandler = async ({ params }) => {
  const data = await fetch(route("link_aos_data", { day: params.day }));
  return json(await data.json());
};

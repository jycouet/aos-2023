import type { KIT_ROUTES } from "$lib/ROUTES";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";
export default defineConfig({
  plugins: [
    sveltekit(),
    kitRoutes<KIT_ROUTES>({
      logs: {
        // stats: true,
      },
      PAGES: {
        "/aos/day-01": {
          explicit_search_params: {
            take: {
              // default: 6,
              required: true,
              // type: "number",
            },
          },
        },
      },

      LINKS: {
        link_aos_data: {
          href: `https://advent.sveltesociety.dev/data/2023/day-[day].json`,
          params: {
            day: { type: "string" },
          },
        },
      },
    }),
  ],
});

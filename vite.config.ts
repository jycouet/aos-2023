import type { KIT_ROUTES } from "$lib/ROUTES";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";
export default defineConfig({
  plugins: [
    sveltekit(),
    kitRoutes<KIT_ROUTES>({
      PAGES: {
        "/aos": {
          explicit_search_params: {
            take: {
              // default: 6,
              required: true,
              // type: "number",
            },
          },
        },
      },
    }),
  ],
});

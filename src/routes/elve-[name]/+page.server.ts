import type { Actions } from "@sveltejs/kit";

export const actions = {
  update: async () => {
    console.log("we are saving...");
    return {
      body: {
        message: `Saved! ✨ Thank you!`,
      },
    };
  },
} satisfies Actions;

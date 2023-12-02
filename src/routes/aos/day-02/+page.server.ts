import type { Actions, PageServerLoad } from "./$types";

export const actions = {
  check: async ({ request }) => {
    const data = await request.formData();
    const guess = data.get("guess");
    return guess === "7"
      ? `Correct number of 🍪 you found well the number 7`
      : `${guess}! Incorrect, check out Cookies 😉`;
  },
} satisfies Actions;

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ cookies }) => {
  let data: string[] = [];

  data.push("_8888888_____88888_______________________________________");
  data.push("_8____8_____8_____8__8888___8888__8____8_8_888888__8888__");
  data.push("_____8______8_______8____8_8____8_8___8__8_8______8______");
  data.push("____8_______8_______8____8_8____8_8888___8_88888___8888__");
  data.push("___8________8_______8____8_8____8_8__8___8_8___________8_");
  data.push("___8________8_____8_8____8_8____8_8___8__8_8______8____8_");
  data.push("___8_________88888___8888___8888__8____8_8_888888__8888__");

  const seconds = new Date().getSeconds();
  for (let i = 0; i < data.length; i++) {
    cookies.set(
      "aos_number_of_cookies_l" + i,
      rotateStringBySeconds(data[i], seconds)
    );
  }

  return new Response();
};

function rotateStringBySeconds(str: string, seconds: number) {
  const shift = (seconds * 5) % str.length;
  return str.substring(shift) + str.substring(0, shift);
}

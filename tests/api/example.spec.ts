import { test, expect } from "@playwright/test";

test("GET todos/1 example", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      headers: {
        Accept: "*/*",
        ContentType: "application/json",
      },
    }
  );
  const body = JSON.parse(await response.text());
  expect(response.status()).toBe(200);
  expect(body.userId).toBe
  expect(body.id).toBe(1);
  expect(body.title).toBe("delectus aut autem");
  expect(body.completed).toBe(false);
});

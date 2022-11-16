import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  await page.getByTestId("username").fill("Butch");
  await page.getByTestId("password").fill("Password");
  await page.getByTestId("login").click();

  // await expect(page).toHaveTitle(/Getting started/);
});

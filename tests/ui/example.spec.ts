import { test, expect } from "@playwright/test";

test.describe("Test Title", async () => {
  test("Test Name", async ({ page }, testInfo) => {
    await test.step("Test Step 1", async () => {
      await page.goto("http://127.0.0.1:3000");
      const screenshot = await page.screenshot();
      await testInfo.attach("screenshot", {
        body: screenshot,
        contentType: "image/png",
      });
    });

    await test.step("Test Step 2", async () => {
      test.info().annotations.push({
        type: "issue",
        description:
          "https://github.com/microsoft/playwright/issues/<some-issue>",
      });
      await page.getByTestId("username").fill("Butch");
    });

    await page.getByTestId("password").fill("Password");
    await page.getByTestId("login").click();

    // await expect(page).toHaveTitle(/Getting started/);
  });
});

import { test, expect } from "@playwright/test";
import { PlaywrightLiveRecorder } from "@dnvgl/playwright-live-recorder";

test.describe("UI Automation", async () => {
  test("Smoke Test", async ({ page }) => {
    await page.goto("https://automationintesting.online");

    await PlaywrightLiveRecorder.start(page, (s) => eval(s));

    // await expect(page).toHaveTitle(/Getting started/);
  });
});

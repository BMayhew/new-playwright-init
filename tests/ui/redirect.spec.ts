import { test, expect } from "@playwright/test";

test("Visit Home Page and subscribe waitForURL", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");
  await page.locator("text=Redirect").click();

  await page.waitForURL("https://playwrightsolutions.com/");

  await page.locator("text=Subscribe").click();

  const popup = page.frameLocator('iframe[title="portal-popup"]');
  await popup.locator("id=input-name").fill("test");
  await popup.locator("text=Sign up").click();

  expect(popup.locator("text=Enter your email address")).toBeVisible;
});

test("Visit Home Page and subscribe promise", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  // Promise solution #1
  // Start waiting for navigation before clicking. Note no await.
  const navigationPromise = page.waitForURL("https://playwrightsolutions.com/");

  // This action triggers the navigation with a script redirect.
  await page.locator("text=Redirect").click();
  await navigationPromise;

  // // Promise solution #2
  // await Promise.all([
  //   // It is important to call waitForNavigation before click to set up waiting.
  //   page.waitForURL("https://playwrightsolutions.com/"),

  //   // Triggers a navigation with a script redirect.
  //   await page.locator("text=Redirect").click(),
  // ]);

  await page.waitForLoadState("networkidle");

  await page.locator("text=Subscribe").click();

  const popup = page.frameLocator('iframe[title="portal-popup"]');
  await popup.locator("id=input-name").fill("test");
  await popup.locator("text=Sign up").click();

  expect(popup.locator("text=Enter your email address")).toBeVisible;
});

test("Visit Home Page and subscribe anti-pattern", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  await page.locator("text=Redirect").click();

  await expect(async () => {
    expect(page.url()).toBe("https://playwrightsolutions.com/");
  }).toPass();

  await page.waitForLoadState("networkidle");
  await page.locator("text=Subscribe").click();

  const popup = page.frameLocator('iframe[title="portal-popup"]');
  await popup.locator("id=input-name").fill("test");
  await popup.locator("text=Sign up").click();

  expect(popup.locator("text=Enter your email address")).toBeVisible;
});

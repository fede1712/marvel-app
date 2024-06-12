import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");

  await expect(page).toHaveTitle("Marvel App");

  await expect(page).toHaveURL("/");
});

test("Go to Marvels Characters details", async ({ page }) => {
  await page.goto("/1017100");

  await expect(page).not.toBeNull();
});

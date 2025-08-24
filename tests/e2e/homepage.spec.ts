import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load homepage successfully", async ({ page }) => {
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(/The KPS Group/);

    // Check main content is visible
    await expect(page.locator("h1")).toBeVisible();

    // Check navigation is present
    await expect(page.locator("nav")).toBeVisible();
  });

  test("should have working contact form", async ({ page }) => {
    await page.goto("/");

    // Scroll to contact form
    await page.locator("#contact").scrollIntoViewIfNeeded();

    // Fill out form
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="phone"]', "555-123-4567");
    await page.selectOption('select[name="service"]', "brands");
    await page.fill('textarea[name="message"]', "Test message");

    // Submit form
    await page.click('button[type="submit"]');

    // Check for success message or redirect
    await expect(page.locator(".success-message, .thank-you")).toBeVisible({
      timeout: 10000,
    });
  });

  test("should be accessible", async ({ page }) => {
    await page.goto("/");

    // Check for proper heading structure
    const headings = await page.locator("h1, h2, h3, h4, h5, h6").all();
    expect(headings.length).toBeGreaterThan(0);

    // Check for alt text on images
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt).toBeTruthy();
    }

    // Check for proper ARIA labels
    const buttons = await page.locator("button").all();
    for (const button of buttons) {
      const ariaLabel = await button.getAttribute("aria-label");
      const text = await button.textContent();
      expect(ariaLabel || text).toBeTruthy();
    }
  });

  test("should be responsive", async ({ page }) => {
    await page.goto("/");

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("nav")).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator("nav")).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator("nav")).toBeVisible();
  });
});

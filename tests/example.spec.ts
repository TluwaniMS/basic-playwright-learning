import { test, expect } from '@playwright/test';

test.describe('Inspect the basic node-js web server deployment landing page.', () => {
  test('Is the web page title as expected?', async ({ page }) => {});

  test('Has the environment variable user-name been set?', async ({ page }) => {});

  test('Has the environment variable envirronment been set?', async ({ page }) => {});

  test('Are all our affirmations included?', async ({ page }) => {});
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

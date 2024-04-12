import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3002');
});

test.describe('Inspect the basic node-js web server deployment landing page.', () => {
  test('Is the web page title as expected?', async ({ page }) => {
    await expect(page).toHaveTitle(/Basic NodeJS Web Server/);
  });

  test('Has the environment variable user-name been set?', async ({ page }) => {
    // Locate the h1 element with class 'username'
    const usernameElement = page.locator('h1.username');

    // Check if the element contains the text 'Jumaima'
    await expect(usernameElement).toHaveText(/Jack/);
  });

  test('Has the environment variable environment been set?', async ({ page }) => {
    // Locate the span within h1 with the class 'environment'
    const environmentSpan = page.locator('h1 span.environment');

    // Check if the span contains the text 'development'
    await expect(environmentSpan).toHaveText(/development/);
  });

  test('Are all our affirmations included?', async ({ page }) => {
    // Locate the li within ul that contains the specific text
    const liWithText = page.locator('ul li', { hasText: 'I trust in my journey and its purpose.' });

    // Check if the li is found
    await expect(liWithText).toBeVisible();
  });
});

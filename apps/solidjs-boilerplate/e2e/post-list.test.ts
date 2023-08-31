/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/post');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Solid.js Boilerplate/);
});

test('Post link in Header', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Post' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*post/);
});

test.describe('HidingHeader Component', () => {
  test('has correct initial custom property value assigned', async ({
    page,
  }) => {
    const locator = page.getByRole('banner', { name: '' });
    await expect(locator).toHaveCSS('--hidingHeader-height', '112px');
    await expect(locator).toHaveCSS('--hidingHeader-bounds-height', '112px');
  });

  test('has correct custom property value assigned after scrolling', async ({
    page,
  }) => {
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(1000);

    // Scroll down 300px.
    await page.evaluate(() => window.scrollTo(0, 300));
    // await page.mouse.wheel(0, 300); // Bug on Firefox.

    const locator = page.getByRole('banner', { name: '' });
    await expect(locator).toHaveCSS('--hidingHeader-height', '112px');
    await expect(locator).toHaveCSS('--hidingHeader-bounds-height', '300px');
  });
});

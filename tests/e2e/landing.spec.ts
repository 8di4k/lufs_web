import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the landing page', async ({ page }) => {
    await expect(page).toHaveTitle(/LUFS/i);
  });

  test('should display Hero section with heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /LUFS/i, level: 1 });
    await expect(heading).toBeVisible();
  });

  test('should display CTA button', async ({ page }) => {
    const ctaButton = page.getByRole('link', { name: /Telegram/i });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', /.+/);
  });

  test('should display Stats section', async ({ page }) => {
    const statsHeading = page.getByRole('heading', { name: /Powered by Numbers/i });
    await expect(statsHeading).toBeVisible();
  });

  test('should display all stat cards', async ({ page }) => {
    await expect(page.getByText(/BPM Detection Accuracy/i)).toBeVisible();
    await expect(page.getByText(/Average Analysis Time/i)).toBeVisible();
    await expect(page.getByText(/Supported Platforms/i)).toBeVisible();
  });

  test('should display Features section', async ({ page }) => {
    await page.getByRole('heading', { name: /Features/i }).scrollIntoViewIfNeeded();
    const featuresSection = page.locator('#features');
    await expect(featuresSection).toBeVisible();
  });

  test('should display Pricing section', async ({ page }) => {
    await page.getByRole('heading', { name: /Pricing/i }).scrollIntoViewIfNeeded();
    const pricingSection = page.locator('#pricing');
    await expect(pricingSection).toBeVisible();
  });

  test('should display FAQ section', async ({ page }) => {
    await page.getByRole('heading', { name: /Frequently Asked Questions/i }).scrollIntoViewIfNeeded();
    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeVisible();
  });
});


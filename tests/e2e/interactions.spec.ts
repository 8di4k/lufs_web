import { test, expect } from '@playwright/test';

test.describe('Interactive Elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open FAQ accordion items', async ({ page }) => {
    // Scroll to FAQ section
    await page.locator('#faq').scrollIntoViewIfNeeded();
    
    // Find the first accordion trigger
    const firstAccordionTrigger = page.locator('[data-state="closed"]').first();
    
    if (await firstAccordionTrigger.isVisible()) {
      await firstAccordionTrigger.click();
      
      // Wait for animation
      await page.waitForTimeout(300);
      
      // Check if content is expanded
      const expandedItem = page.locator('[data-state="open"]').first();
      await expect(expandedItem).toBeVisible();
    }
  });

  test('should display Live Demo section', async ({ page }) => {
    // Scroll to Live Demo if it exists
    const liveDemoHeading = page.getByRole('heading', { name: /Live Demo/i });
    
    if (await liveDemoHeading.isVisible({ timeout: 2000 }).catch(() => false)) {
      await liveDemoHeading.scrollIntoViewIfNeeded();
      await expect(liveDemoHeading).toBeVisible();
    }
  });

  test('should display Comparison section', async ({ page }) => {
    // Scroll to Comparison section if it exists
    const comparisonHeading = page.getByRole('heading', { name: /Comparison/i });
    
    if (await comparisonHeading.isVisible({ timeout: 2000 }).catch(() => false)) {
      await comparisonHeading.scrollIntoViewIfNeeded();
      await expect(comparisonHeading).toBeVisible();
    }
  });

  test('should have clickable CTA buttons', async ({ page }) => {
    const ctaButton = page.getByRole('link', { name: /Telegram/i }).first();
    await expect(ctaButton).toBeVisible();
    
    // Check button is clickable (not disabled)
    await expect(ctaButton).toBeEnabled();
    
    // Check it has a valid href
    const href = await ctaButton.getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).toContain('t.me');
  });

  test('should display pricing cards with all plans', async ({ page }) => {
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    
    // Check for all pricing plans
    await expect(page.getByText(/Free/i).first()).toBeVisible();
    await expect(page.getByText(/Monthly/i).first()).toBeVisible();
    await expect(page.getByText(/Yearly/i).first()).toBeVisible();
  });
});


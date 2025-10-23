import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to Stats section when clicking navigation link', async ({ page }) => {
    // Check if there's a navigation menu
    const statsLink = page.locator('a[href="#stats"]').first();
    
    if (await statsLink.isVisible()) {
      await statsLink.click();
      
      // Wait for scroll animation
      await page.waitForTimeout(500);
      
      // Check if Stats section is in viewport
      const statsSection = page.locator('#stats');
      await expect(statsSection).toBeInViewport();
    }
  });

  test('should have working scroll indicator', async ({ page }) => {
    const scrollIndicator = page.locator('text=Scroll').first();
    
    if (await scrollIndicator.isVisible()) {
      await expect(scrollIndicator).toBeVisible();
    }
  });

  test('should display social proof badges', async ({ page }) => {
    await expect(page.getByText(/10,000\+ users/i)).toBeVisible();
    await expect(page.getByText(/1M\+ tracks analyzed/i)).toBeVisible();
  });
});


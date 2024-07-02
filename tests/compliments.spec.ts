import { test, expect } from '@playwright/test';

test.describe('Compliment', () => {
  test('should display a compliment when clicked', async ({ page }) => {

    // Navigate to the page containing the ComplimentButton component
    await page.goto('/compliments');

    // Locate the button
    const button = page.getByText('Give me a compliment');

    // Check if the button is visible
    await expect(button).toBeVisible();

    // Click the button
    await button.click();

    // Check if a compliment appears
    const compliment = page.getByLabel('Compliment');
    await expect(compliment).toBeVisible();

    // wait for for 4 seconds
    await page.waitForTimeout(4000)

    // Check if the compliment has disappeared
    await expect(compliment).not.toBeVisible();

  });
});
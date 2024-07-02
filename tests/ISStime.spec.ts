import { test, expect } from '@playwright/test';

test.describe('CurrentTime', () => {
  test('should display the current time', async ({ page }) => {
    
    // Navigate to the page containing the CurrentTime component
    await page.goto('/iss-time');

    // Locate the element containing the time
    const timeElement = page.getByLabel('Current time on ISS');

    // Check if the time element is visible
    await expect(timeElement).toBeVisible();

    // Check if the time string matches the expected format (HH:MM:SS AM/PM)
    const timeRegex = /\d{1,2}:\d{2}:\d{2}/;
    await expect(timeElement).toHaveText(timeRegex);

    // Wait for 2 seconds and check if the time has updated
    const initialTime = await timeElement.textContent();
    await page.waitForTimeout(2000);
    const updatedTime = await timeElement.textContent();
    expect(initialTime).not.toBe(updatedTime);
  });
});
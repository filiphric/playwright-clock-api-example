import { test, expect } from '@playwright/test';
import { parseTimeString } from '../utils/parseTimeString';

test.describe('CurrentTime', () => {

  test('should us clock API the current time', async ({ page }) => {

    await page.clock.install({ time: new Date() });

    // Navigate to the page containing the CurrentTime component
    await page.goto('/time');

    // Locate the element containing the time
    const timeElement = page.getByLabel('Current time');

    // Check if the time element is visible
    await expect(timeElement).toBeVisible();

    // Check if the time string matches the expected format (HH:MM:SS AM/PM)
    const timeRegex = /\d{1,2}:\d{2}:\d{2} (AM|PM)/;
    await expect(timeElement).toHaveText(timeRegex);

    // Get the initial time
    const initialTime = await timeElement.textContent();
    if (!initialTime) throw new Error('Initial time is null');
    const initialDate = parseTimeString(initialTime);

    // Move the browser time 2 seconds ahead
    await page.clock.fastForward("00:02");

    // Get the updated time
    const updatedTime = await timeElement.textContent();
    if (!updatedTime) throw new Error('Updated time is null');
    const updatedDate = parseTimeString(updatedTime);

    // Calculate the time difference in seconds
    const timeDifference = Math.floor((updatedDate.getTime() - initialDate.getTime()) / 1000);

    // Check if the time difference is 2 seconds
    expect(timeDifference).toEqual(2);
  });
 
});
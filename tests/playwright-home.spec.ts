import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test('Verify Playwright Get Started navigation', async ({ page }) => {

    const homePage = new PlaywrightHomePage(page);

    await homePage.navigate();
    await homePage.clickGetStarted();

    await expect(page).toHaveURL(/.*intro/);
});

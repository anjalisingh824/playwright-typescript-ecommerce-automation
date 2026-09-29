import { test, expect } from '../fixtures/testFixtures';

test('Verify Playwright Get Started navigation', async ({ homePage }) => {

    await homePage.navigate();
    await homePage.clickGetStarted();

    await expect(homePage.page).toHaveURL(/.*intro/);
});
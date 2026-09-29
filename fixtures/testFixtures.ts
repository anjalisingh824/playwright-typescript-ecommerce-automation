import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

type TestFixtures = {
    homePage: PlaywrightHomePage;
};

export const test = base.extend<TestFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new PlaywrightHomePage(page);
        await use(homePage);
    },
});

export { expect } from '@playwright/test';
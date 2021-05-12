import * as playwright from "playwright";

describe("Test Suite A", () => {

    xtest("Browser test", (async () => {
        for (const browserType of ['chromium', 'firefox', 'webkit']) {
            const browser = await playwright[browserType].launch({ headless: false });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('http://whatsmyuseragent.org/');
            await page.screenshot({ path: `example-${browserType}.png` });
            await browser.close();
        }
    }));
});

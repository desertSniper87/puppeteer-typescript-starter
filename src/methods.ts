import {Page} from "puppeteer";

const type = async (page: Page, selector: string, text: string) => {
    await page.waitForSelector(selector);
    await page.type(selector, text);
}

const click = async (page: Page, selector: string) => {
    await page.waitForSelector(selector);
    await page.click(selector);
}

export { type, click }

import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string) {
    await this.page.goto(url);
  }

  async click(locator: Locator | string) {
    await this.page.click(typeof locator === "string" ? locator : locator);
  }

  async type(locator: Locator | string, text: string) {
    await this.page.fill(typeof locator === "string" ? locator : locator, text);
  }

  async getText(locator: Locator | string) {
    return await this.page.textContent(typeof locator === "string" ? locator : locator);
  }
}
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Functionality", () => {
  test("verify user cannot login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open("https://the-internet.herokuapp.com/login");
    await loginPage.login("wrong", "wrong");

    await expect(loginPage.errorMsg).toBeVisible();
    await expect(loginPage.errorMsg).toContainText("Your username is invalid");
  });
});
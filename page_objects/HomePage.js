import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginLink = page.locator(
      "div.header-right.cell-shrink a.header-login",
    );
    this.emailInput = page.locator("#login-username");
    this.passwordInput = page.locator("#login-password");
    this.loginButton = page.locator("#authorize-with-password-submit");
    this.userProfileMenu = page.locator("div.rt-user-img a img");

    this.acceptCookiesBtn = page.getByRole("button", {
      name: "Accept All Cookies",
    });
  }

  async acceptCookiesIfPresent() {
    if (await this.acceptCookiesBtn.isVisible()) {
      await this.acceptCookiesBtn.click();
    }
  }

  async;

  async login(email, password) {
    await this.loginLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openUserProfile() {
    const userProfilePage = await this.clickAndSwitchToNewTab(
      this.userProfileMenu,
    );
    return userProfilePage;
  }
}

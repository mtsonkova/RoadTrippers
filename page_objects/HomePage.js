import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator("#login-username");
    this.passwordInput = page.locator("#login-password");
    this.loginButton = page.locator("#authorize-with-password-submit");
    this.userProfileMenu = page.locator("div.rt-user-img a img");
  }

  async login(email, password) {
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

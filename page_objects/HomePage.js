import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginLink = page.locator(
      "div.header-right.cell-shrink a.header-login",
    );
    this.signOutLink = page.getByRole('link', {name: 'Sign out'});
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

  
async login(email, password) {
  await this.loginLink.click();
  await this.page.waitForLoadState('domcontentloaded');

  await this.emailInput.waitFor({ state: 'visible' });
  await this.emailInput.fill(email);

  await this.passwordInput.waitFor({ state: 'visible' });
  await this.passwordInput.fill(password);

  await this.loginButton.click();

  try {
    // Wait for reCAPTCHA token to be populated before proceeding
    await this.page.waitForFunction(() => {
      const el = document.querySelector('textarea[name="g-recaptcha-response"]');
      return el && el.value.length > 20;
    }, { timeout: 10000 });

    console.log('reCAPTCHA token populated, proceeding...');
  } catch {
    console.log('No reCAPTCHA token detected, continuing anyway...');
  }

  // Now wait for actual successful navigation
  await this.signOutLink.waitFor({state: 'visible'}, 8000)
}

  async openUserProfile() {
    const userProfilePage = await this.clickAndSwitchToNewTab(
      this.userProfileMenu,
    );
    return userProfilePage;
  }
}

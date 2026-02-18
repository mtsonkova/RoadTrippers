export class UserProfilePage extends BasePage {
  constructor(page) {
    super(page);
    this.userMenu = page.locator("button.rt-top-bar-avatar-button");
    this.myTrips = page.getByRole("link", { name: "My Trips" });
    this.tripCard = page.locator("div.rt-trip-card-content");
    this.tripCardButton = page.locator("div.rt-menu");
    this.deleteTripBtn = page.getByRole("button", { name: "Delete Trip" });
    this.deleteBtn = page.locator('div.confirm [role="button"].first()');
    this.createTripBtn = page.getByRole("button", { name: "Create Trip" });
  }

  async checkIfTripExists() {
    await this.userMenu.click();
    await this.myTrips.click();
    return await this.tripCard.isVisible();
  }

  async deleteTrip() {
    await this.tripCardButton.click();
    await this.deleteTripBtn.click();
    await this.deleteBtn.click();
  }
}

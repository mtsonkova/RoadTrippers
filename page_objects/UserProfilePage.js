import { BasePage } from "./BasePage";

export class UserProfilePage extends BasePage {
  constructor(page) {
    super(page);
    this.userMenu = page.locator("button.rt-top-bar-avatar-button");
    this.myTrips = page.getByRole("link", { name: "My Trips" });
    this.tripCard = page.locator("div.rt-trip-card-content");
    this.tripCardButton = page.locator("div.rt-menu");
    this.deleteTripBtn = page.getByRole("button", { name: "Delete Trip" });
    this.deleteBtn = page
      .locator("div.confirm div.actions div.red")
      .first();
    this.createTripBtn = page.getByRole("button", { name: "Create a trip" });
    this.tripPlanner = page.getByRole("link", {name: "Trip Planner"});
  }

  async checkIfTripExists() {
    return await this.tripCard.isVisible();
  }

  async deleteTrip() {
    await this.tripCardButton.click();
    await this.deleteTripBtn.click();
    await this.deleteBtn.click();
  }

  async handleSavedTrip() {
    const tripExists = await this.checkIfTripExists();
    if (tripExists) {
      await this.deleteTrip();
    }
  }

  async goToMyTrips() {
    await this.userMenu.click();
    await this.myTrips.click();
    await this.handleSavedTrip();
  }

  async createTrip() {
    await this.createTripBtn.click();
  }

async checkAndHandlePromoIframe(page) {
  try {
    const frame = page.frameLocator("iframe[src='https://renderer.gist.build/3.0/index.html']").first();
    const promoCloseBtn = frame.locator("div.c1iayu8k.chcmyku button");

    // Check if the iframe's close button is visible with a short timeout
    const isVisible = await promoCloseBtn.isVisible({ timeout: 3000 });

    if (isVisible) {
      console.log("Promo iframe is visible. Handling it...");
      await handlePromoIframe(page);
    } else {
      console.log("Promo iframe is not visible");
    }
  } catch (error) {
    // Handle case where iframe does not exist or other errors
    if (
      !error.message.includes("Timeout") &&
      !error.message.includes("timeout")
    ) {
      throw error;
    }
    console.log("Promo iframe not found");
  }
}

  async handlePromoIframe(page) {
  
    try {
      const frame = page.frameLocator("iframe[src='https://renderer.gist.build/3.0/index.html']").first();
      const promoCloseBtn = frame.locator("div.c1iayu8k.chcmyku button");

      await promoCloseBtn.waitFor({ state: "visible", timeout: 15000 });
      await promoCloseBtn.click();
      console.log("Promo iframe closed successfully");
    } catch (error) {
      if (
        !error.message.includes("Timeout") &&
        !error.message.includes("timeout")
      ) {
        throw error;
      }
      console.log("Promo iframe not found or not visible");
    }
  }

  async clickOnTripPlanner(){
    await this.tripPlanner.click();
  }
}

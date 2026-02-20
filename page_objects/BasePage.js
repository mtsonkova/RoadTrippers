export class BasePage {
  constructor(page) {
    this.page = page;
    
  }

  async clickAndSwitchToNewTab(locatorObj) {
    const [newPage] = await Promise.all([
      locatorObj.page().context().waitForEvent("page"),
      locatorObj.click(),
    ]);

    await newPage.waitForLoadState("domcontentloaded"); // DOM is ready
    await newPage.waitForLoadState("load"); // Images/resources done
    // Let the app settle briefly without blocking on network
    await newPage.waitForTimeout(500);
    return newPage;
  }

  async createTrip(createTripBtn) {
    await createTripBtn.click();
  }
  
}

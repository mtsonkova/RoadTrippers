import { BasePage } from "./BasePage";
import { waypoints } from "../test_data/testData";

export class CreateTripPage extends BasePage {
  constructor(page) {
    super(page);
    this.startingPoint = page.locator("#origin");
    this.destinationPoint = page.locator("#destination");
    this.waypointsDropdown = page
      .locator("div.rt-autocomplete-list button")
      .first();
    this.quickLaunchOption = page.locator("div.trip-onboarding-type").first();
    this.autopilotOption = page.locator("div.trip-onboarding-type").last();
    this.startDate = page.locator("#start_date");
    this.startDateCalendar = page.locator("div.rt-datepicker-view");

    this.endDate = page.locator("#end_date");
    this.createTripBtn = page.getByRole("button", { name: "Create Trip" });
    this.addStopsField = page.locator("div.sidebar .rt-input");
    this.launchTripBtn = page.getByRole("button", { name: "Launch trip" });

    // itinerary section
    this.itineraryBtn = page.locator("#sub-navigation__button--itinerary");
  }

  async setStartPoint(startPoint) {
    await this.startingPoint.fill(startPoint);
    await this.waypointsDropdown.click();
  }

  async setDestination(destination) {
    await this.destinationPoint.fill(destination);
    await this.waypointsDropdown.click();
  }

  async selectStartDate() {
    await this.enterStartDate();
  }

  async launchTrip() {
    await launchTripBtn.click();
  }

  async enterStartDate() {
    const currentDate = new Date();
    const startDateValue = currentDate.getDate();

    await this.startDate.click();
    await this.startDateCalendar
      .locator(`button:has-text("${startDateValue}")`)
      .click();
  }

  async createQuickLaunchTrip(startPoint, destination) {
    await this.setStartPoint(startPoint);
    await this.setDestination(destination);
    await this.selectStartDate();
    await this.enterStartDate();
    await this.createTripBtn.click();
  }

  async createTripWithAutopilot(startPoint, destination) {
    await this.createTripBtn.click();
    await this.setStartPoint(startPoint);
    await this.setDestination(destination);
    await this.autopilotOption.click();
    await this.selectStartDate();
    await this.enterStartDate();
    const autopilotTripPage = await this.clickAndSwitchToNewTab(createTripBtn);
    return autopilotTripPage;
  }

  async addMaxNumWaypoints() {
  let counter = 2;

  for (let i = 1; i < waypoints.length - 2; i++) {
    await this.addStopsField.click();
    await this.addStopsField.type(waypoints[i]);

    await this.waypointsDropdown.click();
    await this.page.waitForTimeout(1000);
    
  }
}

async addWaypoint() {
    await this.addStopsField.click();
    await this.addStopsField.type(waypoints[1]);

    await this.waypointsDropdown.click();
    await this.page.waitForTimeout(1000);  
}

  async launchTrip() {
    await this.launchTripBtn.click();
  }
}

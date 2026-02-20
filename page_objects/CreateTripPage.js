import { BasePage } from "./BasePage";
import { waypoints } from "../test_data/testData";
import { TravelCrewPage } from "./TravelCrewPage";

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
     this.getStartedBtn = page.getByRole("button", { name: "Get started" });

    // itinerary section
    this.itineraryBtn = page.locator("#sub-navigation__button--itinerary");

    this.existingVehicleFirst = page.locator('label.uv-selector-vehicle-radio').first();

     this.findPlacesOnMyOwn = page.locator("div.sidebar-actions-buttons button:nth-child(2) div.rt-button-label");

    this.nextBtn = page.locator('.panel-actions button').last();
    this.nextBtnPlacesToVisit = page.locator('div.rt-button-label span:nth-child(1)');
    this.tripLimitMsg = page.locator('#membership-modal h2');
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
    await this.createTripBtn.click();
  }

  async createTripWithAutopilot(startPoint, destination) {
    //await this.createTripBtn.click();
    await this.setStartPoint(startPoint);
    await this.setDestination(destination);
    await this.autopilotOption.click();
    await this.selectStartDate();
    await this.createTripBtn.click();
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

  async getStartedAutoTrip() {
    await this.getStartedBtn.click();
     await this.nextBtn.click();
  }

  async selectExistingVehicleAutoTrip() {
    await this.existingVehicleFirst.click();
  }

  async nextBtnClick() {
    await this.nextBtn.click();
  }
  
  async clickNextBtnOnPlacesToVisitPage() {
    await this.nextBtnPlacesToVisit.click();
  }

  async findMyOwnPlaces() {
    await this.findPlacesOnMyOwn.click();
  }

  async getTripLimitMsg() {
    const msg = await this.tripLimitMsg.textContent();
    return msg
  }
}

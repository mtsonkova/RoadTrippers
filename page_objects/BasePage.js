export class BasePage {
  constructor(page) {
    this.page = page;
    this.vehicleData = {
      addVehicleBtn: page.getByRole("button", { name: "+ Add a vehicle" }),
      vehicleSettings: {
        addVehicle: page.locator("div.uv-selector-add-button-label"),
        addRvCamperMotorhome: page.getByRole("button", {
          name: "Add an RV, Camper, or Motorhome",
        }),
        addCarTrackVan: page.getByRole("button", {
          name: "Add a Car, Truck, or Van",
        }),
        addMotorcycle: page.getByRole("button", { name: "Add a Motorcycle" }),

        vehicleDetails: {
          year: page.locator("#vehicle_model_year"),
          make: page.locator("#vehicle_make"),
          model: page.locator("#vehicle_model"),
          floorPlan: page.locator("#vehicle_trim_name"),
          setAsPrimaryVehicle: page.locator(".rt-checkbox-icon"),
        },
        vehicleSelector: page.locator("div.uv-selector-vehicle-label"),
      },
    };

    this.travelCrewSection = {
      adults: {
        leftArrow: page
          .locator(".rt-stepper-controls")
          .nth(0)
          .locator("button")
          .first(),
        rightArrow: page
          .locator(".rt-stepper-controls")
          .nth(0)
          .locator("button")
          .last(),
      },
      youngAdults: {
        leftArrow: page
          .locator(".rt-stepper-controls")
          .nth(1)
          .locator("button")
          .first(),
        rightArrow: page
          .locator(".rt-stepper-controls")
          .nth(1)
          .locator("button")
          .last(),
      },
      teens: {
        leftArrow: page
          .locator(".rt-stepper-controls")
          .nth(2)
          .locator("button")
          .first(),
        rightArrow: page
          .locator(".rt-stepper-controls")
          .nth(2)
          .locator("button")
          .last(),
      },
      children: {
        leftArrow: page
          .locator(".rt-stepper-controls")
          .nth(3)
          .locator("button")
          .first(),
        rightArrow: page
          .locator(".rt-stepper-controls")
          .nth(3)
          .locator("button")
          .last(),
      },
      baby: {
        leftArrow: page
          .locator(".rt-stepper-controls")
          .nth(4)
          .locator("button")
          .first(),
        rightArrow: page
          .locator(".rt-stepper-controls")
          .nth(4)
          .locator("button")
          .last(),
      },
      dogs: {
        leftArrow: page
          .locator(".rt-stepper-controls")
          .nth(5)
          .locator("button")
          .first(),
        rightArrow: page
          .locator(".rt-stepper-controls")
          .nth(5)
          .locator("button")
          .last(),
      },
    };
  }

  async clickAndSwitchToNewTab(locatorObj) {
    const [newPage] = await Promise.all([
      locatorObj.page().context().waitForEvent("page"),
      locatorObj.click(),
    ]);

    await newPage.waitForLoadState();
    return newPage;
  }

  async createTrip(createTripBtn) {
    await createTripBtn.click();
  }
}

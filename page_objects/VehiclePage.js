export class Vehicle {
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

    }
}


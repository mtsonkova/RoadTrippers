export class ItineraryPage {
  constructor(page) {
    this.page = page;
    this.itinerarySection = {
      leftArrow: page.locator(".icon-chevron-left"),
      rightArrow: page.locator(".icon-chevron-right"),
      addDates: page.getByRole("button", { name: "Add Dates" }),
      editDatesBtn: page.getByRole("button", { name: "Edit Dates" }),
      deleteDatesBtn: page.getByRole("button", { name: "Delete Dates" }),
      deleteTripBtn: page.getByRole("button", { name: "Delete Trip" }),
      travelCrewBtn: page.getByRole("button", { name: "Travel Crew" }),

      updateBtn: page.getByRole("button", { name: "Update" }),
    };
    this.detailsSection = {
      detailsBtn: page.getByRole("button", { name: "Details" }),
      vehiclesCard: page.locator("div.details-vehicle-card"),
    };
    addToTripBtn = page.locator('[data-id="submit-form"]');
  }
}

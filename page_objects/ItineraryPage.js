import {expect} from "@playwright/test";
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
    this.addToTripBtn = page.locator('[data-id="submit-form"]');
    this.closeModalBtn = page.locator('div.rt-modal-content button.rt-modal-close-button');
    this.mapActionBar =  {
      myTripsBtn: page.locator('div#map-action-bar button.my-trips-button'),
    }
    this.tripCard = page.locator('div.rt-trip-card-content');
    this.tripName = page.locator('h3.rt-trip-card-name');
  }

  async closeExploringModal() {
    await this.closeModalBtn.click();
 }

 async verifyTripCreated() {
  await this.mapActionBar.myTripsBtn.click();
  await expect(this.tripCard).toBeVisible({ timeout: 5000 });
 }


 async getTripName(){
 const tripName =  await this.tripName.textContent();
 return tripName;
 }
}

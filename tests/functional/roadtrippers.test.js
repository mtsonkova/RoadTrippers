import { test, expect } from "@playwright/test";
import { BasePage } from "../../page_objects/BasePage";
import { CreateTripPage } from "../../page_objects/CreateTripPage";
import { ItineraryPage } from "../../page_objects/ItineraryPage";
import { AutopilotTripPage } from "../../page_objects/AutopilotTripPage";
import { UserProfilePage } from "../../page_objects/UserProfilePage";
import { HomePage } from "../../page_objects/HomePage";
import { waypoints } from "../../test_data/testData";

test.describe("RoadTrippers Trip Creation Functionality", () => {
  let basePage, createTripPage, itineraryPage, autopilotTripPage, userProfilePage, homePage;
  let userPage;
  let result;
  let tripName;
  const baseURL = "https://roadtrippers.com/";

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    homePage = new HomePage(page);

    await page.goto(baseURL);
    //await basePage.handlePromoIframe(page);
    // Already logged in via storageState — go straight to trips
    
  });

  test("Create a trip with quick launch feature and verify itinerary", async ({ page }) => {
    userPage = await homePage.openUserProfile();
    basePage = new BasePage(userPage);
     userProfilePage = new UserProfilePage(userPage);
      createTripPage = new CreateTripPage(userPage);
      itineraryPage = new ItineraryPage(userPage);
      autopilotTripPage = new AutopilotTripPage(userPage);
     

      await userProfilePage.handlePromoIframe(userPage)

    await test.step("Create new trip", async () => {
    await userProfilePage.goToMyTrips(userPage);
      await userProfilePage.createTrip();
      await createTripPage.createQuickLaunchTrip(waypoints[0], waypoints[waypoints.length-1]);
      
    });
    

    await test.step("Add a waypoint", async () => {
      await createTripPage.addWaypoint();
    });

    await test.step("Launch and verify the trip", async() => {
      await createTripPage.launchTrip();
      await itineraryPage.closeExploringModal();
      await itineraryPage.verifyTripCreated();
      tripName = await itineraryPage.getTripName();
      const waypointName = waypoints[waypoints.length-1];
      expect(tripName).toContain(waypointName);      

    });
  });
});

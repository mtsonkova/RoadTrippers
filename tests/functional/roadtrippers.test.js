import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { CreateTripPage } from "../../page_objects/CreateTripPage";
import { ItineraryPage } from "../../page_objects/ItineraryPage";
import { AutopilotTripPage } from "../../page_objects/AutopilotTripPage";
import { UserProfilePage } from "../../page_objects/UserProfilePage";
import { userEmails, password, waypoints } from "../../test_data/testData";
import { BasePage } from "../../page_objects/BasePage";

test.describe("RoadTrippers Trip Creation Functionality", () => {
  let basePage;
  let homePage;
  let createTripPage;
  let itineraryPage;
  let autopilotTripPage;
  let userProfilePage;
  let userPage;
  const baseURL = "https://roadtrippers.com/";

  test.beforeEach(async ({ page }) => {
    userPage = page;
    basePage = new BasePage(page);
    homePage = new HomePage(page);

    await page.goto(baseURL);
    await basePage.handlePromoIframe(page);
    await homePage.acceptCookiesIfPresent();
  });

  test("Create a trip with quick launch feature and verify itinerary", async () => {
    await test.step("Login to RoadTrippers", async () => {
      await homePage.login(userEmails.gina, password);

      // openUserProfile() opens a new tab — reassign userPage and re-instantiate
      // all page objects so they operate in the correct browser context
      userPage = await homePage.openUserProfile();

      basePage = new BasePage(userPage);
      createTripPage = new CreateTripPage(userPage);
      itineraryPage = new ItineraryPage(userPage);
      autopilotTripPage = new AutopilotTripPage(userPage);
      userProfilePage = new UserProfilePage(userPage);

      await basePage.handlePromoIframe(userPage);
      await userProfilePage.goToMyTrips(userPage);
    });

    await test.step("Create new trip", async () => {
      await userProfilePage.createTrip();
      await createTripPage.createQuickLaunchTrip(waypoints[0], waypoints[5]);
    });

    await test.step("Add max number of waypoints and verify waring message", async () => {
      await createTripPage.addMaxNumWaypoints();
    });
  });
});

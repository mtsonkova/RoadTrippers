import { test, expect } from "@playwright/test";
import { BasePage } from "../../page_objects/BasePage";
import { CreateTripPage } from "../../page_objects/CreateTripPage";
import { ItineraryPage } from "../../page_objects/ItineraryPage";
import { UserProfilePage } from "../../page_objects/UserProfilePage";
import { HomePage } from "../../page_objects/HomePage";
import {TravelCrewPage} from "../../page_objects/TravelCrewPage"
import {AttractionLocationsPage} from "../../page_objects/AttractionLocationsPage"
import { waypoints } from "../../test_data/testData";

test.describe("RoadTrippers Trip Creation Functionality", () => {
  test.slow();
  let basePage, createTripPage, itineraryPage, userProfilePage, homePage;
  let userPage;
  let travelCrewPage;
  let tripName;
  let attractionLocationsPage;

  const baseURL = "https://roadtrippers.com/";

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    homePage = new HomePage(page);

    await page.goto(baseURL);
  });

  test("Create a trip with quick launch feature and verify itinerary", async ({ page }) => {
    userPage = await homePage.openUserProfile();
    basePage = new BasePage(userPage);
     userProfilePage = new UserProfilePage(userPage);
      createTripPage = new CreateTripPage(userPage);
      itineraryPage = new ItineraryPage(userPage);
   

      await userProfilePage.checkAndHandlePromoIframe(userPage)

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

   test("Create a trip with auto pilot feature and verify itinerary", async ({ page }) => {
    userPage = await homePage.openUserProfile();
    basePage = new BasePage(userPage);
     userProfilePage = new UserProfilePage(userPage);
     createTripPage = new CreateTripPage(userPage);
     travelCrewPage = new TravelCrewPage(userPage);
    attractionLocationsPage = new AttractionLocationsPage(userPage);       
    itineraryPage = new ItineraryPage(userPage);
      await userProfilePage.checkAndHandlePromoIframe(userPage);

    await test.step("Create new trip", async () => {
    await userProfilePage.goToMyTrips(userPage);
      await userProfilePage.createTrip();
      await createTripPage.createTripWithAutopilot(waypoints[0], waypoints[waypoints.length-1]);
      await createTripPage.getStartedAutoTrip();
   
      await createTripPage.selectExistingVehicleAutoTrip();
      await travelCrewPage.setTravelers("Adults", 2);
      await createTripPage.nextBtnClick();
      await createTripPage.nextBtnClick();
      await attractionLocationsPage.selectAttractions(['Monuments']);
       await createTripPage.nextBtnClick();
      await createTripPage.clickNextBtnOnPlacesToVisitPage();
      await createTripPage.findMyOwnPlaces();
      await itineraryPage.closeExploringModal();
  
    });

    await test.step("Launch and verify the trip", async() => {
      await itineraryPage.verifyTripCreated();
      tripName = await itineraryPage.getTripName();
      const waypointName = waypoints[waypoints.length-1];
      expect(tripName).toContain(waypointName);      

    });
  });

  test("Create a trip with auto pilot feature and a baby as the only traveller", async ({ page }) => {
    userPage = await homePage.openUserProfile();
    basePage = new BasePage(userPage);
     userProfilePage = new UserProfilePage(userPage);
     createTripPage = new CreateTripPage(userPage);
     travelCrewPage = new TravelCrewPage(userPage);
    attractionLocationsPage = new AttractionLocationsPage(userPage);       
    itineraryPage = new ItineraryPage(userPage);
      await userProfilePage.checkAndHandlePromoIframe(userPage);

    await test.step("Create new trip", async () => {
    await userProfilePage.goToMyTrips(userPage);
      await userProfilePage.createTrip();
      await createTripPage.createTripWithAutopilot(waypoints[0], waypoints[waypoints.length-1]);
      await createTripPage.getStartedAutoTrip();
   
      await createTripPage.selectExistingVehicleAutoTrip();
      await travelCrewPage.setTravelers("Baby", 1);
      await createTripPage.nextBtnClick();
      await createTripPage.nextBtnClick();
      await attractionLocationsPage.selectAttractions(['Monuments']);
       await createTripPage.nextBtnClick();
      await createTripPage.clickNextBtnOnPlacesToVisitPage();
      await createTripPage.findMyOwnPlaces();
      await itineraryPage.closeExploringModal();
  
    });

    await test.step("Launch and verify the trip", async() => {
      await itineraryPage.verifyTripCreated();
      tripName = await itineraryPage.getTripName();
      const waypointName = waypoints[waypoints.length-1];
      expect(tripName).toContain(waypointName);      
    });
  });

  test("Create new trip with one active trip in Basic Tier", async() => {
    userPage = await homePage.openUserProfile();
    userProfilePage = new UserProfilePage(userPage);
    createTripPage = new CreateTripPage(userPage);
     travelCrewPage = new TravelCrewPage(userPage);
    attractionLocationsPage = new AttractionLocationsPage(userPage);       
    itineraryPage = new ItineraryPage(userPage);

    await userProfilePage.clickOnTripPlanner();
    await itineraryPage.createNewTripFromItinerary();
    await createTripPage.createQuickLaunchTrip(waypoints[0], waypoints[waypoints.length-1]);
    let tripLimitMsg = await createTripPage.getTripLimitMsg()
    let text = "You’ve hit your trip limit! Sign up for a trial to start this itinerary";
    expect(tripLimitMsg).toBe(text);

  })
});

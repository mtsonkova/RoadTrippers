export class AutopilotTripPage {
  constructor(page) {
    this.page = page;
    getStartedBtn = page.getByRole("button", { name: "Get started" });
    startDate = page.locator("#start_date");
    endDate = page.locator("#end_date");
    backBtn = page.getByRole("button", { name: "Back" });
    nextBtn = page.getByRole("button", { name: "Next" });
    this.attractionsSection = {
      roadsideAttractions: page.locator("#activity-type[roadside-attractions]"),
      offbeatAttractions: page.locator("#activity-type[offbeat-attractions]"),
      scenicPoints: page.locator("#activity-type[scenic-points]"),
      historicSites: page.locator("#activity-type[historic-sites]"),
      worldsLargest: page.locator("#activity-type[worlds-largest]"),
      abandonedSites: page.locator("#activity-type[abandoned-sites]"),
      landmarks: page.locator("#activity-type[landmarks]"),
      museums: page.locator("#activity-type[museums]"),
      architecture: page.locator("#activity-type[architecture]"),
      geographicFeatures: page.locator("#activity-type[geographic-features]"),
      nationalParks: page.locator("#activity-type[national-parks]"),
      stateParks: page.locator("#activity-type[state-parks]"),
      natureReserves: page.locator("#activity-type[nature-reserves]"),
      parksAndGardens: page.locator("#activity-type[parks-gardens]"),
      culturalInterest: page.locator("#activity-type[cultural-interest]"),
      monuments: page.locator("#activity-type[monuments]"),
      filmingLocations: page.locator("activity-type[filming-locations]"),
    };
    waipoints = page.locator("#origin");
    findPlacesOnMyOwn = page.locator("div", {
      hasText: "I’ll find places on my own",
    });
  }
}

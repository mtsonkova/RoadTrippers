export class AttractionLocationsPage {
  constructor(page) {
    this.page = page;
     
  this.attractionsSection = {
  roadsideAttractions: page.locator('label[for="activity-type[roadside-attractions]"]'),
  offbeatAttractions: page.locator('label[for="activity-type[offbeat-attractions]"]'),
  scenicPoints: page.locator('label[for="activity-type[scenic-points]"]'),
  historicSites: page.locator('label[for="activity-type[historic-sites]"]'),
  worldsLargest: page.locator('label[for="activity-type[worlds-largest]"]'),
  abandonedSites: page.locator('label[for="activity-type[abandoned-sites]"]'),
  landmarks: page.locator('label[for="activity-type[landmarks]"]'),
  museums: page.locator('label[for="activity-type[museums]"]'),
  architecture: page.locator('label[for="activity-type[architecture]"]'),
  geographicFeatures: page.locator('label[for="activity-type[geographic-features]"]'),
  nationalParks: page.locator('label[for="activity-type[national-parks]"]'),
  stateParks: page.locator('label[for="activity-type[state-parks]"]'),
  natureReserves: page.locator('label[for="activity-type[nature-reserves]"]'),
  parksAndGardens: page.locator('label[for="activity-type[parks-gardens]"]'),
  culturalInterest: page.locator('label[for="activity-type[cultural-interest]"]'),
  monuments: page.locator('label[for="activity-type[monuments]"]'),
  filmingLocations: page.locator('label[for="activity-type[filming-locations]"]'),
};
  
  } 

  /**
 * Selects attraction types by name, or all if none specified.
 * @param {string[] | 'all'} attractions - e.g. ['museums', 'landmarks'] or 'all'
 * 
 * @example
 * await autopilotTrip.selectAttractions('all');
 * await autopilotTrip.selectAttractions(['museums', 'landmarks', 'stateParks']);
 * await autopilotTrip.selectAttractions(['monuments']);
 */
async selectAttractions(attractions = 'all') {
  const targets =
    attractions === 'all'
      ? Object.keys(this.attractionsSection)
      : attractions.map(a => a.toLowerCase());

  for (const key of targets) {
    if (!this.attractionsSection[key]) {
      throw new Error(
        `Unknown attraction type: "${key}". Valid options are: ${Object.keys(this.attractionsSection).join(', ')}`
      );
    }
    await this.attractionsSection[key].click();
  }
}
}

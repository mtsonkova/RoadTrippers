export class TravelCrewPage {
  constructor(page) {
    this.page = page;

    this.travelCrewSection = {
      adults: {
        rightArrow: page.locator(".rt-stepper-controls button:has(.icon-plus)").nth(0),
      },
      youngAdults: {
        rightArrow: page.locator(".rt-stepper-controls button:has(.icon-plus)").nth(1),
      },
      teens: {
        rightArrow: page.locator(".rt-stepper-controls button:has(.icon-plus)").nth(2),
      },
      children: {
        rightArrow: page.locator(".rt-stepper-controls button:has(.icon-plus)").nth(3),
      },
      baby: {
        rightArrow: page.locator(".rt-stepper-controls button:has(.icon-plus)").nth(4),
      },
      dogs: {
        rightArrow: page.locator(".rt-stepper-controls button:has(.icon-plus)").nth(5),
      },
    };
  }

  
async setTravelers(travelers, num) {
    let locatorObj;
    switch(travelers) {
        case 'Adults':
            locatorObj = this.travelCrewSection.adults.rightArrow;
            break;
        case 'YoungAdults':
            locatorObj = this.travelCrewSection.youngAdults.rightArrow;
            break;
        case 'Teens':
            locatorObj = this.travelCrewSection.teens.rightArrow;
            break;
        case 'Children':
            locatorObj = this.travelCrewSection.children.rightArrow;
            break;
        case 'Baby':
            locatorObj = this.travelCrewSection.baby.rightArrow;
            break;
        case 'Dogs':
            locatorObj = this.travelCrewSection.dogs.rightArrow;
            break;
        default:
            throw new Error(`Wrong group: "${travelers}"`);
    }

    for (let i = 0; i < num; i++) {
        await locatorObj.click();
    }
}
  }


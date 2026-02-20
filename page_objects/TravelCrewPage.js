export class TravelCrewPage{
    constructor(page) {
        this.page = page;

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
}
class PlanPage {
  constructor(page) {
    this.page = page;
    this.sixMealsPlan = page.getByTestId('plan-select-6-toggle');
    this.continueButton = page.getByTestId('plan-select-continue-button');
  }

  async selectPlan() {
    await this.sixMealsPlan.click();
    await this.continueButton.click();
  }
}

module.exports = { PlanPage };

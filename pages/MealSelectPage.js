class MealSelectPage {
  constructor(page) {
    this.page = page;
    this.mealPanelToggle = page.getByText(/Meal selected \d\/6View/);
    this.mealCardAddButtons = page.locator('[data-testid^="meal-select-card-action-initial-add-"]');
  }

  async openMealSelector() {
    await this.mealPanelToggle.waitFor({ state: 'visible' });
    await this.mealPanelToggle.click();
  }

  async addFirstMeal() {
    const firstMeal = this.mealCardAddButtons.first();
    await firstMeal.waitFor({ state: 'visible' });
    await firstMeal.click();
  }

  async expectMealCountToBeGreaterThan(minCount = 1) {
    await this.mealCardAddButtons.first().waitFor({ state: 'visible' });
    const count = await this.mealCardAddButtons.count();
    expect(count).toBeGreaterThan(minCount);
  }
}

module.exports = { MealSelectPage };

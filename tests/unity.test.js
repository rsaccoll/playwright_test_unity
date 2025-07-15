const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { QuizPage } = require('../pages/QuizPage');
const { PlanPage } = require('../pages/PlanPage');
const { SignUpPage } = require('../pages/SignUpPage');

test('CookUnity full sign-up flow', async ({ page }) => {
  const home = new HomePage(page);
  const quiz = new QuizPage(page);
  const plan = new PlanPage(page);
  const signUp = new SignUpPage(page);

  await home.navigate();
  await home.enterZip();

  await quiz.skipQuiz();
  await plan.selectPlan();

  await signUp.fillAccountInfo({});

  // Assert URL
  await expect(page).toHaveURL(/.*en\/meal-select/);

  // Assert there is more than one meal
  const meals = page.locator('[data-testid="meal-card"]');
  await expect(meals).toHaveCountGreaterThan(1);
});

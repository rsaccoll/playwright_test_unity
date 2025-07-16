class QuizPage {
  constructor(page) {
    this.page = page;

    // Botão "Continue"
    this.continueButton = page.getByTestId('preferences-quiz-current-stesp-continue-button');
  }

  async skipQuiz() {
    // Clica 3 vezes no botão "Continue"
    for (let i = 0; i < 4; i++) {
      await this.continueButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.continueButton.click();
      await this.page.waitForTimeout(1000); // wait 1 second
    }
  }
};

module.exports = { QuizPage };

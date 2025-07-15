exports.QuizPage = class QuizPage {
  constructor(page) {
    this.page = page;
    this.skipAllButton = page.getByTestId('preferences-quiz-skip-all-button');
  }

  async skipQuiz() {
    // Remove a classe 'hidden' para garantir que o botão apareça
    await this.page.evaluate(() => {
      const btn = document.querySelector('[data-testid="preferences-quiz-skip-all-button"]');
      if (btn) {
        btn.classList.remove('hidden');
        btn.classList.add('block');
      }
    });

    // Espera o botão ficar visível e clica
    await this.skipAllButton.waitFor({ state: 'visible' });
    await this.skipAllButton.click();
  }
};

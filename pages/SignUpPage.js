exports.SignUpPage = class SignUpPage {
  constructor(page) {
    this.page = page;
    this.usingEmail = page.getByTestId('login-form');
    this.email = page.getByTestId('email');
    this.submitEmail = page.getByTestId('submit-email');
    this.password = page.locator('input[name="password"]');
    this.continueBtn = page.getByTestId('submit-form');
  }

  async fillAccountInfo({
    email,
    password = '123123123'
  } = {}) {
    // Gera e-mail com timestamp, se não for fornecido
    const uniqueEmail = email || `qa.mail+${Date.now()}@gmail.com`;
    await this.usingEmail.waitFor({ state: 'visible', timeout: 8000 });
    await this.usingEmail.click({ force: true });
    await this.email.fill(uniqueEmail);
    await this.submitEmail.click();
    await this.password.fill(password);
    await this.continueBtn.click();
  }
};

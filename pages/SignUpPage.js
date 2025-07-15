exports.SignUpPage = class SignUpPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('input[name="email"]');
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.password = page.locator('input[name="password"]');
    this.continueBtn = page.locator('button:has-text("Continue")');
  }

  async fillAccountInfo({
    email = 'qa.mail@gmail.com',
    firstName = 'My Name',
    lastName = 'My Lastname',
    password = '123123123'
  }) {
    await this.email.fill(email);
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.password.fill(password);
    await this.continueBtn.click();
  }
};

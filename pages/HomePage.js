class HomePage {
  constructor(page) {
    this.page = page;
    this.container = page.getByTestId('hero-vertical-slider-text-column');
    this.zipInput = this.container.getByTestId('funnel-start-form-zipcode-input');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async enterZip(zip = '10001', buttonText = 'Order Now') {
    await this.zipInput.click();
    await this.zipInput.fill(zip);

    const submitBtn = this.container.getByRole('button', { name: buttonText });
    await submitBtn.click();
  }
}

module.exports = { HomePage };

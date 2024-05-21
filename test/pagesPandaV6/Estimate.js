class EstimateConf {
  get generateRate() {
    return $(".sp-methods dt");
  }
  get fixedCost() {
    return $(".sp-methods dd ul li label span");
  }

  async varifyShipping() {
    const textRate = "Flat Rate";
    await this.generateRate.waitForDisplayed({ timeout: 5000 });
    const gtr = await this.generateRate.getText();
    await expect(gtr).toEqual(textRate);
    const fc = await this.fixedCost.getText();
    const textFixedCost = "Fixed - $5.00";
    await expect(`Fixed - ${fc}`).toEqual(textFixedCost);
  }
}

module.exports = new EstimateConf();

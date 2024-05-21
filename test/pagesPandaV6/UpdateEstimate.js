class UpdateEstimate {
  get estimateMethod() {
    return $('//input[@name="estimate_method"]');
  }
  get updateEstimate() {
    return $('//button[@name="do"]');
  }
  get flatRateUpdate() {
    return $("#shopping-cart-totals-table tbody tr:nth-child(2) td:nth-child(2) span");
  }
  get totalPrice() {
    return $("#shopping-cart-totals-table tfoot tr td:nth-child(2) strong span");
  }

  async updateProccess() {
    const flateRateFixed = "$5.00";
    await this.estimateMethod.click();
    await this.updateEstimate.click();
    const textFlatRateUpdate = await this.flatRateUpdate.getText();
    const textTotalPrice = await this.totalPrice.getText();
    await expect(textFlatRateUpdate).toEqual(flateRateFixed);
    console.log(textTotalPrice);
  }
}
module.exports = new UpdateEstimate();

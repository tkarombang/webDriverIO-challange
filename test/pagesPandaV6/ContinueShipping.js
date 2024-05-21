class ContinueShipping {
  get shippingBilling() {
    return $("#shipping\\:same_as_billing");
  }
  get shippingButton() {
    return $("#shipping-buttons-container button");
  }
  get methodBtn() {
    return $("#shipping-method-buttons-container button");
  }
  get paymentInformaion() {
    return $("#checkout-payment-method-load #dt_method_checkmo input");
  }
  get paymentButton() {
    return $("#payment-buttons-container button");
  }

  async continueBillingProccess() {
    await this.shippingBilling.click();
    await this.shippingButton.waitForDisplayed({ timeout: 2000 });
    await this.shippingButton.click();
  }

  async shippingMethod() {
    await this.methodBtn.click();
    await this.paymentInformaion.click();
    await this.paymentButton.click();
  }
}

module.exports = new ContinueShipping();

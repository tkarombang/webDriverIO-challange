class OrderReview {
  get checkoutReview() {
    return $("#checkout-review-load button");
  }
  get btnReview() {
    return $("#review-buttons-container button");
  }
  get waitMain() {
    return $(".col-main");
  }
  get textOrderNum() {
    return $(".col-main p:nth-child(3) a");
  }

  async paymentInfo() {
    this.checkoutReview.waitForDisplayed({ timeout: 2000 });
    this.btnReview.click();
  }

  async verifyOrder() {
    this.waitMain.waitForDisplayed({ timeout: 2000 });
    const getTextOrder = this.textOrderNum.getText();
    console.log("*** Your Order Number for your record = " + getTextOrder);
  }
}
module.exports = new OrderReview();

const { state, province } = require("./Config");
class ShoppingCart {
  get country() {
    return $("#country");
  }
  get state() {
    return $(`//option[@value="${state}"]`);
  }
  get region() {
    return $("#region_id");
  }
  get province() {
    return $(`//option[@value="${province}"]`);
  }
  get postcode() {
    return $("#postcode");
  }
  get estimate() {
    return $('//button[@title="Estimate"]');
  }

  async resultShoppingCart(zip) {
    await this.country.click();
    await this.state.click();
    await this.region.click();
    await this.province.click();
    await this.postcode.setValue(zip);
    await this.estimate.click();
  }
}

module.exports = new ShoppingCart();

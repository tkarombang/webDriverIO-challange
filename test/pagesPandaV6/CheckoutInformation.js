const { state, province } = require("./Config");
class CheckoutInformation {
  get btnCheckout() {
    return $(".cart-totals ul li:nth-child(1) button");
  }
  get nmAwal() {
    return $("#billing\\:firstname");
  }
  get nmAkhir() {
    return $("#billing\\:lastname");
  }
  get street() {
    return $("#billing\\:street1");
  }
  get kota() {
    return $("#billing\\:city");
  }
  get region() {
    return $("#billing\\:region_id");
  }
  get prov() {
    return $(`//option[@value="${province}"]`);
  }
  get postCode() {
    return $("#billing\\:postcode");
  }
  get country() {
    return $("#billing\\:country_id");
  }
  get countryNum() {
    return $(`//option[@value="${state}"]`);
  }
  get telephone() {
    return $("#billing\\:telephone");
  }
  get shippingRadio() {
    return $("#billing\\:use_for_shipping_no");
  }
  get btnContinue() {
    return $("#billing-buttons-container button");
  }

  async billingInformation(firstName, lastName, address, city, zip, phone) {
    await this.btnCheckout.click();
    await this.nmAwal.waitForDisplayed({ timeout: 2000 });
    await this.nmAwal.setValue(firstName);
    await this.nmAkhir.setValue(lastName);
    await this.street.setValue(address);
    await this.kota.setValue(city);
    await this.region.click();
    await this.prov.click();
    await this.postCode.setValue(zip);
    await this.country.click();
    await this.countryNum.click();
    await this.telephone.setValue(phone);
    await this.shippingRadio.click();
    await this.btnContinue.waitForDisplayed({ timeout: 3000 });
    await this.btnContinue.click();
  }
}
module.exports = new CheckoutInformation();

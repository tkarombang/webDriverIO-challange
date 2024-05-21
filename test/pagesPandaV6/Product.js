class Click_Product {
  get wishlist() {
    return $('//a[text()="My Wishlist"]');
  }
  get product() {
    return $('//button[@title="Add to Cart"]');
  }

  async executeProduct() {
    await browser.pause(2000);
    await this.wishlist.click();
    await this.product.click();
  }
}
module.exports = new Click_Product();

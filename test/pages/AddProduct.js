class AddProduct {

  get imgProduct() {
    return $$('.img-fluid')
  }

  // get txtProduct() {
  //   return $$('.hrefch')
  // }

  get btnAdd() {
    return $('.btn-lg')
  }

  get cartPage() {
    return $('#cartur')
  }

  async addProductDemoBlaze(imgText) {
    // BY THUMBNAIL
    await this.imgProduct.forEach(async (img) => {
      const image = await img.getAttribute('src')
      if (image === imgText) {
        await img.click()
      }
    })
    // BY NAME PRODUCT
    // await this.txtProduct.forEach(async (txt) => {
    //   const getText = await txt.getText()
    //   if (getText === imgText) {
    //     txt.click()
    //   }
    // })
    await this.btnAdd.click();
    await this.cartPage.click();

  }
}
module.exports = new AddProduct()
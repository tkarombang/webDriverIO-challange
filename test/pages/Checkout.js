class Checkout {
  get btnOrder() {
    return $('.btn-success')
  }

  get nameProduct() {
    return $('#name')
  }

  get country() {
    return $('#country')
  }

  get city() {
    return $('#city')
  }

  get card() {
    return $('#card')
  }

  get month() {
    return $('#month')
  }

  get year() {
    return $('#year')
  }

  get btnPrimary() {
    return $$('.btn-primary')
  }

  get h2Text() {
    return $('//h2[contains(text(),"Thank you for your purchase!")]')
  }


  async checkoutPurchase(name, country, city, creditCard, month, year) {
    await this.btnOrder.click()
    await this.nameProduct.setValue(name)
    await this.country.setValue(country)
    await this.city.setValue(city)
    await this.card.setValue(creditCard)
    await this.month.setValue(month)
    await this.year.setValue(year)
    await this.btnPrimary.forEach(async (btn) => {
      const btnGetText = await btn.getText()
      if (btnGetText === 'Purchase') {
        await btn.click()
      }
    })
  }

  async checkMessage(msg) {
    await expect(this.h2Text).toHaveTextContaining(msg)
  }
}
module.exports = new Checkout()
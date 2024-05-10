describe('Verify that you cannot add more product in cart the product in cart than the product available in store', function(){

  it('Day 3 - 1. ON clicking update button an error is shown The requested quntity for "Sony Xperia" is not available | 2. On clicking empty cart button - a message "SHOPPING CART IS EMPTY" is shown', async () => {

    //Goto http://live.techpanda.org/
    browser.url('http://live.techpanda.org');

    //Clicking on 'MOBILE' menu
    await $('.level0').click();

    // click on ADD TO CART Sony Xperia
    const btnCarts = await $$('.btn-cart')
    btnCarts.forEach(async (btn, index) => {
      if(index === btnCarts.length - 1){
        await btn.click();
      }
    })

    // change QTY value 1000 and click UPDATE button
    const textQty = await $('//input[@title="Qty"]')
    await textQty.click()
    await textQty.setValue('1000')

    // click UPDATE button
    const btnUPdate = await $('//button[@class="button btn-update"]//span[text()="Update"]')
    await btnUPdate.click()

    // Verify the error message
    const msgError = await $('//p[@class="item-msg error"]')
    await msgError.getText()
    expect(msgError).toExist()
    expect(msgError).toHaveText('* The maximum quantity allowed for purchase is 500.')

    // click EMPTY CART
    const emptyCart = await $('//button[@class="button2 btn-empty"]//span[text()="Empty Cart"]')
    await emptyCart.click()

    // Veryfy Cart is empty
    const cartEmptyMsg = await $('//div[@class="page-title"]//h1[text()="Shopping Cart is Empty"]')
    expect(cartEmptyMsg).toExist();
    expect(cartEmptyMsg).toHaveText('Shopping Cart is Empty');

    await new Promise(resolve => setTimeout(resolve, 10000))
  })

})
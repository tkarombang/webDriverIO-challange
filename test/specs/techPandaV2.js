describe('Test Case: Compare Sony Xperia Mobile Cost', function(){
  it('Day 2 - Should compare cost of Sony Xperia mobile', async () => {
    browser.url('http://live.techpanda.org');

    // MOBILE menu click
    await $('.level0').click();

    // READ THE COST OF SONY XPERIA MOBILE
    const productPriceELement = await $('//span[@id="product-price-1"]//span[@class="price"]')
    const getTextCost = await productPriceELement.getText()

    // CLICK SONY XPERIA MOBILE
   const sonyXperia =  await $('//h2[@class="product-name"]//a[@title="Sony Xperia"]')
   sonyXperia.click();

  // READ THE COST S.EXPERIA MOBILE form DETAIL PAGE
  const productPriceDetail = await $('//span[@id="product-price-1"]//span[@class="price"]');
  const getTextDetail = await productPriceDetail.getText();

  // Compare Value getTextCost & getTextDetail
  expect(getTextCost).toEqual(getTextDetail);
    
    await new Promise(resolve => setTimeout(resolve, 10000))
    
  })
})
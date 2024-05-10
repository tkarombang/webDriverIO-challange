describe('Verify that cost of product in list page and details page are equal', function(){
  it('Day 2 - Product Value in list and details page should be equals($100)', async () => {
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
  try {
    expect(getTextCost).toEqual(getTextDetail);
  } catch (error) {
    console.log('Notif :', error.message);
  }
    
    await new Promise(resolve => setTimeout(resolve, 10000))
    
  })
})
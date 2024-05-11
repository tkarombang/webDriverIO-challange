describe("Verify that you are able to compare two product", function () {
  it('1) A Popup window opens with heading as "COMPARE PRODCUTS" 2) Popup window is closed', async () => {
    //Goto http://live.techpanda.org/
    browser.url("http://live.techpanda.org");

    //Clicking on 'MOBILE' menu
    await $(".level0").click();

    // Click on "Add To Compare" for 2 mobiles
    // Sony Xperia
    await $("ul li:nth-child(3) .product-info .actions ul li:nth-child(2) a").click();
    // Iphone
    await $("ul li:nth-child(1) .product-info .actions ul li:nth-child(2) a").click();

    // CLick on Compare Button
    await $(".block-content div button").click();

    // Verify the pop-up window and check that the products are reflected in it
    // Tunggu hiongga jendela pop-up muncul
    const parentWindow = await browser.getWindowHandles();
    const childWindow = await parentWindow[1];
    // beralih ke jendela popup
    await browser.switchToWindow(childWindow);

    // mendapatkan element yang ada di popup window
    await $('//div[@class="page-title title-buttons"]//h1[text()="Compare Products"]').waitForExist({ timeout: 15000 });
    const popUP = await $('//div[@class="page-title title-buttons"]//h1[text()="Compare Products"]').getText();
    // Get Text
    const textPopup = "COMPARE PRODUCTS";
    // expect(popUP).toHaveTextContaining('Compare Products')
    expect(popUP).toEqual(textPopup);

    // Close The PopUP window
    await $('//button[@class="button"]//span//span[text()="Close Window"]').click();

    browser.switchToWindow(browser.getWindowHandles()[0]);

    await new Promise((resolve) => setTimeout(resolve, 30000));
  });
});

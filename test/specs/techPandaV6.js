// Day - 6 Test Case = test\testCase-Techpanda\Testcase-v6.png
// Writer : Muhammad Azwar Anas

const emailUser = "zxc@gmail.com";
const pwUser = "123456";
const state = "US";
const province = "43";
const zip = "542896";
const firstName = "Muhammad";
const lastName = "Tuang";
const address = "St.Eastern Parkway";
const city = "Brooklyn";
const phone = "12345678";

describe("Verify user is able to purchase product using registered email id(USE CHROME BROWSER)", function () {
  it("FLATE RATE SHIPPING OF $5 IS GENERATED | SHIPPING COST IS ADDED TO TOTAL PRODUCT COST | ORDER IS PLACED. ORDER NUMBER IS GENERATED", async () => {
    // 1. go to web application
    browser.url("http://live.techpanda.org/");

    // 2. Click on my account link
    await $(".skip-account").click();

    // 3. Click login in application
    await $('//a[@title="Log In"]').click();
    await $("#email").setValue(emailUser);
    await $("#pass").setValue(pwUser);
    await $('//div[@class="buttons-set"]//button[@name="send"]').click();
    // 4. Click on my wishlist link
    await $('//a[text()="My Wishlist"]').click();
    // 5. CLick ADD TO CART
    await $('//button[@title="Add to Cart"]').click();
    // 6. Enter general shipping country, state/province and zip for the shipping cost estimate
    await $("#country").click();
    await $(`//option[@value="${state}"]`).click();
    await $("#region_id").click();
    await $(`//option[@value="${province}"]`).click();
    await $("#postcode").setValue(zip);
    // 7. Click Estimate
    await $('//button[@title="Estimate"]').click();
    await browser.pause(2000);
    try {
      // 8. Verify shipping cost generate
      const generateRate = await $(".sp-methods dt").getText();
      const textRate = "Flat Rate";
      await expect(generateRate).toEqual(textRate);
      const fixedCost = await $(".sp-methods dd ul li label span").getText();
      const textFixedCost = "Fixed - $5.00";
      await expect(`FIXED - ${fixedCost}`).toEqual(textFixedCost);
    } catch (error) {
      console.log(error.message);
    }
    // 9. Click UPDATE TOTAL
    await $('//input[@name="estimate_method"]').click();
    await $('//button[@name="do"]').click();
    await browser.pause(2000);

    // 10. Verify Shipping cost is added to total
    const flateRateFixed = "$5.00";
    const flateRateUpdate = await $("#shopping-cart-totals-table tbody tr:nth-child(2) td:nth-child(2) span").getText();
    try {
      expect(flateRateUpdate).toEqual(flateRateFixed);
      await $("#shopping-cart-totals-table tfoot tr td:nth-child(2) strong span").getText();
    } catch (error) {
      console.log(error.message);
    }
    // 11. Click Proceed to Checkout
    await $(".cart-totals ul li:nth-child(1) button").click();
    await browser.pause(2000);

    // 12. Billing Information
    await $("#billing\\:firstname").setValue(firstName);
    await $("#billing\\:lastname").setValue(lastName);
    await $("#billing\\:street1").setValue(address);
    await $("#billing\\:city").setValue(city);
    await $("#billing\\:region_id").click();
    await $(`//option[@value="${province}"]`).click();
    await $("#billing\\:postcode").setValue(zip);
    await $("#billing\\:country_id").click();
    await $(`//option[@value="${state}"]`).click();
    await $("#billing\\:telephone").setValue(phone);
    await $("#billing\\:use_for_shipping_no").click();
    await $("#billing-buttons-container button").click();
    await browser.pause(3000);

    // 13. Shipping Information, Click Continue
    await $("#shipping\\:same_as_billing").click();
    await browser.pause(2000);
    await $("#shipping-buttons-container button").click();
    await browser.pause(3000);

    // 14. Shipping Method, Click Continue
    await $("#shipping-method-buttons-container button").click();
    await browser.pause(2000);

    // 15. Payment Information = Check/Money Order, CLick Continue
    await $("#checkout-payment-method-load #dt_method_checkmo input").click();
    await browser.pause(2000);
    await $("#payment-buttons-container button").click();
    await browser.pause(2000);

    // 16. Order Review, Click Place Order
    const waitDisplay = await $("#checkout-review-load button");
    await waitDisplay.waitForDisplayed({ timeout: 2000 });
    await $("#review-buttons-container button").click();

    // 17. Verify Order is generate. Note the order number
    const wContainerDisplay = await $(".col-main");
    await wContainerDisplay.waitForDisplayed({ timeout: 2000 });
    await browser.pause(2000);
    const orderNum = await $(".col-main p:nth-child(3) a").getText();
    console.log("*** Your Order Number for your record = " + orderNum);

    // await new Promise((resolve) => setTimeout(resolve, 30000));
  });
});

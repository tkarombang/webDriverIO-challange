// Day - 6 Test Case = test\testCase-Techpanda\Testcase-v6.png
// Writer : Muhammad Azwar Anas

// const { emailUser, pwUser, state, province, zip, firstName, lastName, address, city, phone } = require("../pagesPandaV6/config");

const { emailUser, pwUser, firstName, lastName, address, city, zip, phone } = require("../pagesPandaV6/Config");
const LoginV6 = require("../pagesPandaV6/LoginPage");
const Click_product = require("../pagesPandaV6/Product");
const ShoppingCart = require("../pagesPandaV6/ShoppingCart");
const Estimate = require("../pagesPandaV6/Estimate");
const UpdateEstimate = require("../pagesPandaV6/UpdateEstimate");
const CheckoutInformation = require("../pagesPandaV6/CheckoutInformation");
const ContinueShipping = require("../pagesPandaV6/ContinueShipping");
const OrderReview = require("../pagesPandaV6/OrderReview");

describe("Verify user is able to purchase product using registered email id(USE CHROME BROWSER)", function () {
  it("FLATE RATE SHIPPING OF $5 IS GENERATED | SHIPPING COST IS ADDED TO TOTAL PRODUCT COST | ORDER IS PLACED. ORDER NUMBER IS GENERATED", async () => {
    // 1. go to web application
    browser.url("http://live.techpanda.org/");

    await LoginV6.loginTechPandaV6(emailUser, pwUser);
    // Click product in Wishlist
    await browser.pause(3000);
    await Click_product.executeProduct();
    // Shopping Cart
    // Enter general shipping country, state/province and zip for the shipping cost estimate & Click Estimate
    await ShoppingCart.resultShoppingCart(zip);
    //   // 8. Verify shipping cost generate
    await Estimate.varifyShipping();

    // // 9. Click UPDATE TOTAL
    await UpdateEstimate.updateProccess();
    // 10. Verify Shipping cost is added to total

    // 11. Click Proceed to Checkout
    // 12. Billing Information

    await browser.pause(3000);
    await CheckoutInformation.billingInformation(firstName, lastName, address, city, zip, phone);
    // // 13. Shipping Information, Click Continue

    await browser.pause(2000);

    // // 14. Shipping Method, Click Continue
    await ContinueShipping.continueBillingProccess();
    await browser.pause(3000);
    await ContinueShipping.shippingMethod();

    // // 15. Payment Information = Check/Money
    // // 16. Order Review, Click Place Order
    await OrderReview.paymentInfo();
    await OrderReview.verifyOrder();
    // 17. Verify Order is generate. Note the order number

    await new Promise((resolve) => setTimeout(resolve, 10000));
  });
});

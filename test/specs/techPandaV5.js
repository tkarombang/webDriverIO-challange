describe("Verify you can create account in E-commerce site and can share wishlist to other people using email", function () {
  it("1. Account Registration Done & 2. Wishlist Shared Successfully", async () => {
    browser.url("http://live.techpanda.org/");

    // 1. Click on my account link
    await $(".skip-account").click();

    // 2. Click Create Account & fill New User Information except Email ID THEN Click Register
    await $('//a[@title="Register"]').click();
    await $("#firstname").setValue("Muhammad");
    await $("#middlename").setValue("Tuang");
    await $("#lastname").setValue("Karombang");
    await $("#email_address").setValue("tkarombang@gmail.com");
    await $("#password").setValue("tk12345");
    await $("#confirmation").setValue("tk12345");
    await $("#is_subscribed").click();
    await $('//button[@class="button"]//span//span[text()="Register"]').click();

    // 3. Verify Registration is done
    const msgVerify = await $('//li[@class="success-msg"]//ul//li//span');
    const expectedMsgVerify = "Thank you for registering with Main Website Store.";
    const actualMsgVerify = await msgVerify.getText();
    expect(actualMsgVerify).toEqual(expectedMsgVerify);

    // 4. Go to TV Menu
    await $('//ol[@class="nav-primary"]//li[2]').click();

    // 5. Add product in wish list
    await $("ul li:nth-child(1) .product-info .actions ul li:nth-child(1) a").click();

    // 6. Click share Wish List
    await $(".btn-share").click();

    // 7. Enter e-mail & message
    await $("#email_address").setValue("tkarombang@gmail.com");
    await $("#message").setValue("Hey Tcaka!! this LCD TV looks ok, check it out !!.. cheers .. Tkarombang");
    // 8. Click Share WISHLIST
    await $('//button[@class="button"]//span//span[text()="Share Wishlist"]').click();

    // 9. Check WISHLIST IS SHARED
    const checkText = await $('//li[@class="success-msg"]//ul//li//span');
    const expectedCheck = "Your Wishlist has been shared.";
    const actualCheck = await checkText.getText();
    expect(expectedCheck).toEqual(actualCheck);

    await new Promise((resolve) => setTimeout(resolve, 25000));
  });
});

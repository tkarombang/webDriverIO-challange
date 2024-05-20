// const { remote } = require("webdriverio");

describe("Verify that you will able be to save previosly placed order as a pdf file", function () {
  it('1. Previously created order is displayed in "RECENT ORDERS" table and status is Pending | 2. Order is saved as PDF', async () => {
    //  Got to The link
    browser.setWindowSize(360, 800);
    browser.url("http://live.techpanda.org/");

    browser.pause(3000);
    // Click on My Account link
    await $(".skip-account").click();
    //  Login in application using previously created credential
    await $('//a[@title="Log In"]').click();
    await $("#email").setValue("zxc@gmail.com");
    await $("#pass").setValue("123456");
    await $('//div[@class="buttons-set"]//button[@name="send"]').click();
    // Click My Order
    browser.pause(2000);
    await $('//div[@class="block-title"]//strong//span[text()="My Account"]').click();
    await $(".current a strong").click();
    // Click View Order
    browser.pause(2000);
    await $(".a-center .nobr a").click();
    // Verify the previously created order is displayed in "Rec Table and status PENDING"
    browser.pause(2000);
    const statusOrder = await $(".my-account div:nth-child(1) h1").getText();
    const satuKalimat = await statusOrder.split(" ").map((n) => n.split(" "));
    console.log(`RECENT ORDERS ${satuKalimat[1]} table  & Status is ${satuKalimat[3]}`);

    // 7. Click on 'Print Order' link
    await $(".page-title a:nth-child(4)").click();
    //8. Verify Order is saved as PDF
    browser.pause(3000);

    await browser.newWindow("http://live.techpanda.org/index.php/sales/order/print/order_id/22844/");
    // Lakukan Pencetakan
    await browser.execute(() => {
      window.print();
    });
    await browser.switchWindow("http://live.techpanda.org/index.php/sales/order/view/order_id/22844/");

    await browser.pause(5000);
  });
});

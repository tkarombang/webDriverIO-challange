const loginPage = require('../pages/loginPage')
const addProduct = require('../pages/AddProduct')
const checkout = require('../pages/Checkout')


describe('Demo Blaze Test', function () {

  it('My Project Test', async () => {
    browser.url('https://demoblaze.com')

    // LOGIN START
    // Mengambil elemen login
    // await $('[id=login2]').click()

    // menunggu elemen modal tampil secara spesific
    // await $('//*[@id="logInModal"]//div[@class="modal-content"]').waitForDisplayed()

    // membuat variabel element login dan password
    // const loginInput = await $('[id=loginusername]')
    // const passInput = await $('[id=loginpassword]')

    // input nilai user dan pass
    // await loginInput.setValue('aswar')
    // await passInput.setValue('12345')

    // mengambil banyak elemen btn
    // const buttons = await $$('.btn')
    // menyeleksi elemen btn yg dipilih
    // buttons.forEach(async (button) => {
    // mengambil text dari elemen login
    // const btnText = await button.getText()
    // kondisi jika elemen btn didalamnya terdapat LOG IN
    // if (btnText === 'Log in') {
    //   await button.click()
    // }
    // })
    // LOGIN END

    // MEMMILIH PRODUK START
    // Click byName of Product
    // const products = await $$('.hrefch')
    // products.forEach(async (product) => {
    //   const getNameProduct = await product.getText()
    //   if (getNameProduct === 'Iphone 6 32gb') await product.click()
    // })

    // Click byThumbnail of Product
    // const products = await $$('.card-img-top')
    // products.forEach(async (product) => {
    //   const img = await product.getAttribute('src')
    //   if (img === 'imgs/galaxy_s6.jpg') {
    //     await product.click()
    //   }
    // })
    // MEMILIH PRODUCT END

    // MENAMBAH PRODUCT START
    // const btnSuccess = await $('.btn-success')
    // await btnSuccess.click()
    // await new Promise(resolve => setTimeout(resolve, 7000))
    // MENAMBAH PRODUCT END

    // MASUK KEDALAM CART PAGE START
    // const cart = await $('#cartur')
    // await cart.click()
    // MASUK KEDALAM CART PAGE END

    // PLACE ORDER START
    // await btnSuccess.click()
    // Modal Palace Order START
    // await $('#name').setValue('azwar')
    // await $('#country').setValue('Indonesia')
    // await $('#city').setValue('Polewali Mandar')
    // await $('#card').setValue('4433')
    // await $('#month').setValue('Januari')
    // await $('#year').setValue('2024')
    // const btnPrimary = await $$('.btn-primary')
    // btnPrimary.forEach(async (btnPri) => {
    //   const btnPriGetText = await btnPri.getText()

    //   if (btnPriGetText === 'Purchase') {
    //     await btnPri.click();
    //   }
    // })
    // Modal Palace Order END
    // PLACE ORDER END

    // GET TEXT PURCHASE START
    // const h2Text = await $('//h2[contains(text(), "Thank you for your purchase!")]')
    // await expect(h2Text).toBeDisplayed()
    // GET TEXT PURCHASE END


    // LOGIN CLASS MODE 
    await loginPage.loginDemoBlaze('aswar', '12345')
    await new Promise(resolve => setTimeout(resolve, 2000))
    // ADD PRODUCT CLASS MODE
    await addProduct.addProductDemoBlaze('imgs/Lumia_1520.jpg')
    // CARTPAGE CLASS MODE
    await checkout.checkoutPurchase('azwar', 'Indonesia', 'PolMan', '3332244', 'Januari', '2024')
    // CHECKOUT PROCESS SUCCESS
    await checkout.checkMessage('Thank you for your purchase!')


    await new Promise(resolve => setTimeout(resolve, 20000))
    // browser.pause(10000)
  })

})
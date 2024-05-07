class loginPage {

  get navLogin() {
    return $('#login2')
  }
  get modalLogin() {
    return $('//*[@id="logInModal"]//div[@class="modal-content"]').waitForDisplayed()
  }
  get userNameTextFill() {
    return $('#loginusername')
  }
  get userPasswordTextFill() {
    return $('#loginpassword')
  }
  get loginButton() {
    return $$('.btn')
  }

  async loginDemoBlaze(user, pass) {
    await this.navLogin.click()
    await this.userNameTextFill.setValue(user)
    await this.userPasswordTextFill.setValue(pass)
    await this.loginButton.forEach(async (btn) => {
      const btnText = await btn.getText()
      if (btnText === 'Log in') {
        await btn.click()
      }
    })
  }
}
module.exports = new loginPage()
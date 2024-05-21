class LoginV6 {
  get accountLink() {
    return $(".skip-account");
  }
  get loginLink() {
    return $('//a[@title="Log In"]');
  }
  get email() {
    return $("#email");
  }
  get pass() {
    return $("#pass");
  }
  get loginBtn() {
    return $('//div[@class="buttons-set"]//button[@name="send"]');
  }

  async loginTechPandaV6(user, pwd) {
    await this.accountLink.click();
    await this.loginLink.click();
    await this.email.setValue(user);
    await this.pass.setValue(pwd);
    await this.loginBtn.click();
  }
}
module.exports = new LoginV6();

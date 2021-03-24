const I = actor();


module.exports = {

    fieldss:{

        search: '//a[@href="/account/login?signup=true"]',
        mobile: '//span[text()="Enter Mobile number"]/../..',
        bttn: '//span[text()="CONTINUE"]',


    },

    navigateToFlipkartSignUpPage() {
        I.amOnPage("https://www.flipkart.com/");
    },
    clickOnNewAcc(){
      I.waitForVisible(this.fieldss.search, 10);
      I.click(this.fieldss.search);
    },
    enterMobileNo(str){
        I.waitForVisible(this.fieldss.mobile, 10);
        I.fillField(this.fieldss.mobile, str);
    },
    clickOnContinueButton(){
      I.waitForVisible(this.fieldss.bttn, 10);
      I.click(this.fieldss.bttn);
    },

    fillTheSignUpDetails() {
    this.clickOnNewAcc();
    this.enterMobileNo();
    this.clickOnContinueButton();


    },





}
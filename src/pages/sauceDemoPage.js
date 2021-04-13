const I = actor();

module.exports = {

    fields: {
        userName: '//input[@name="user-name"]',
        inputData: (text) => `//input[@id="${text}"]`,
        addProduct: '//button[@id="add-to-cart-sauce-labs-backpack"]',
        verifyCart: '//span[text()="1"]',
        verifyAllDetails: (temp) => `//div[text()="${temp}"]`,
    },
    navigateToSauceDemoPage() {
        I.amOnPage(" https://www.saucedemo.com/");
    },
    enterUserName(str1) {
        I.waitForVisible(this.fields.userName, 40);
        I.fillField(this.fields.userName, str1);
    },
    enterPassword(str2, text) {
        I.waitForVisible(this.fields.inputData(text), 10);
        I.fillField(this.fields.inputData(text), str2);
    },
    clickLogin(text) {
        I.waitForVisible(this.fields.inputData(text), 10);
        I.click(this.fields.inputData(text));
    },
    enterTheUsernameAndPw() {
        this.enterUserName('standard_user');
        this.enterPassword('secret_sauce', 'password');
        this.clickLogin('login-button');
    },
    addToTheCart() {
        I.waitForVisible(this.fields.addProduct, 10);
        I.click(this.fields.addProduct);
    },
    addProductIntoTheCart() {
        this.addToTheCart();
    },
    verifyAddedItems() {
        I.waitForVisible(this.fields.verifyCart, 10);
        I.seeElement(this.fields.verifyCart);
        I.click(this.fields.verifyCart);
    },
    verifyNewItemShouldBeAdded() {
        this.verifyAddedItems();
    },
    checkName(temp) {
        I.waitForVisible(this.fields.verifyAllDetails(temp), 10);
        I.seeElement(this.fields.verifyAllDetails(temp));
    },
    checkData(temp) {
        I.waitForVisible(this.fields.verifyAllDetails(temp), 10);
        I.seeElement(this.fields.verifyAllDetails(temp));
    },
    checkPrice(temp) {
        I.waitForVisible(this.fields.verifyAllDetails(temp), 10);
        I.seeElement(this.fields.verifyAllDetails(temp));
    },
    goToCartAndVerifyTheDetails() {
        this.checkName('Sauce Labs Backpack');
        this.checkData('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        this.checkPrice('29.99');
    }

}
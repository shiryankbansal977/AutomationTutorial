const I = actor();

module.exports = {

    fields: {
        search: '//input[@name="q"]',
        button: '//a[text()="Sunglasses"]',
        menu: '(//span[text()="Men"])[2]',
        image: '//img[@src="https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/SS_S67D6307-1.jpg"]',
        addItem: '//button[@id="S67D6307_0"]',
        verifyBag: '//div[text()="1"]',
        verifyimg: '//img[@src="https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/S67D6307-2.jpg"]',
        verifyPrice: '//span[text()="₹1150"]',
         review: '//h4[text()="Review Order"]',
    },

    navigateToTheGoogle() {
        I.amOnPage("https://www.google.com/");
    },
    enterTheCoolWinksSiteLink(str) {
        I.waitForVisible(this.fields.search, 10);
        I.fillField(this.fields.search, str);
        I.pressKey('Enter');
    },


    navigateToCoolWinksSite() {
        I.amOnPage("https://www.coolwinks.com/");
    },
    clickOnSunglasses() {
        I.waitForVisible(this.fields.button, 10);
        I.moveCursorTo(this.fields.button, 1, 1);
    },
    sunGlassesMenu() {
        I.waitForVisible(this.fields.menu, 10);
        I.click(this.fields.menu);
    },
    clickOnSunglassesAndSelectMen() {
        this.clickOnSunglasses();
        this.sunGlassesMenu();
    },
    selectProductImage() {
        I.waitForVisible(this.fields.image, 10);
        I.click(this.fields.image);
    },
    addProduct() {
        I.waitForVisible(this.fields.addItem, 10);
        I.click(this.fields.addItem);
    },
    addItemToTheCart() {
        this.selectProductImage();
        this.addProduct();
        I.amOnPage('https://www.coolwinks.com/');
    },
    verifyCartNumber() {
        I.waitForVisible(this.fields.verifyBag, 10);
        I.seeElement(this.fields.verifyBag);
        I.click(this.fields.verifyBag);
    },
    verifyImageDetail() {
        I.waitForVisible(this.fields.verifyimg, 10);
        I.seeElement(this.fields.verifyimg);
    },
    verifyPriceData() {
        I.waitForVisible(this.fields.verifyPrice, 30);
        I.seeElement(this.fields.verifyPrice);
    },
    verifyTheDetailOfProductInTheCart() {
        this.verifyCartNumber();
        this.verifyImageDetail();
        this.verifyPriceData();
        I.waitForVisible(this.fields.review, 10);
        I.closeCurrentTab();
    },
}
const I = actor();


module.exports = {

    fields: {
        searchBar: '//input[@name="q"]',
        popUp: '//button[@id="wzrk-cancel"]',
        cursor: '//a[text()="Computer Glasses"]',
        genderSelect: '(//span[text()="men"])[2]',
        price: '(//span[text()="Blu 0 Computer Glasses"])[1]',
        product: '(//img[@title="Vincent Chase Computer Glasses"])[1]',
        select: '//button[text()="SELECT LENSES"]',
        cart: '(//button[text()="Add to Cart"])[2]',
        countItem: '//h4[text()="1"]',
        img: '//img[@alt="Blue Block Phone & Computer Glasses: Blue Transparent Full Rim Square Vincent Chase VAGABOND VC E13306-C1"]',
        label: '//a[@aria-label="proceed to checkout"]',
    },
    navigateToLenskartPage() {
        I.amOnPage("https://www.lenskart.com/");
    },
    cancelPopUp() {
        I.waitForVisible(this.fields.popUp, 10);
        I.click(this.fields.popUp);
    },
    cursorMoving() {
        I.waitForVisible(this.fields.cursor, 10);
        I.moveCursorTo(this.fields.cursor, 1, 1);
    },
    selectGender() {
        I.waitForVisible(this.fields.genderSelect, 10);
        I.moveCursorTo(this.fields.genderSelect);
    },
    selectPrice() {
        I.waitForVisible(this.fields.price, 10);
        I.click(this.fields.price);
    },
    selectProduct() {
        I.waitForVisible(this.fields.product, 10);
        I.moveCursorTo(this.fields.product);
        I.click(this.fields.product);
    },
    clickOnFinalSelection() {
        I.waitForVisible(this.fields.select, 240);
        I.click(this.fields.select);
    },
    selectTheProduct() {
        this.cancelPopUp();
        this.cursorMoving();
        this.selectGender();
        this.selectPrice();
        this.selectProduct();
        this.clickOnFinalSelection();
    },
    cartAdd() {
        I.waitForVisible(this.fields.cart, 10);
        I.click(this.fields.cart);
    },
    addProductOnCart() {
        this.cartAdd();
    },
    countCartItem() {
        I.waitForVisible(this.fields.countItem, 10);
        I.seeNumberOfElements(this.fields.countItem, 1);
    },
    verifyValueAddedInCart() {
        this.countCartItem();
    },
    verifyingImage() {
        I.waitForVisible(this.fields.img, 10);
        I.seeElement(this.fields.img);
    },
    verifyCheckOut() {
        I.waitForVisible(this.fields.label, 10);
        I.seeElement(this.fields.label);
    },
    verifyTheDetailsOfProduct() {
        this.verifyingImage();
        this.verifyCheckOut();
    },

};
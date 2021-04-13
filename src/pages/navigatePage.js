const I = actor();


module.exports = {

    fields: {
     searchBar:'//input[@name="q"]',
     loginPaged:'//a[@href="https://reqres.in/"]',
        finalPoint:'/html/body/div[1]',
    },

    reachedToUrl() {
        I.amOnPage("")
    },

    enterDataInGoogle(str) {
        I.waitForVisible(this.fields.searchBar, 20);
        I.fillField(this.fields.searchBar, str);
        I.pressKey('Enter')
    },

    clickOnFirstLink() {
        I.waitForVisible(this.fields.loginPaged, 20);
        I.click(this.fields.loginPaged);
    },

    userOnResReqPage() {
        I.waitForVisible(this.fields.finalPoint, 20);
        I.seeElement(this.fields.finalPoint);
    }
};






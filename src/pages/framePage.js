const I = actor();


module.exports = {

    fields: {
        change: '//iframe',
        text: '(//input[@type="text"])[1]',
        change1: '//Iframe[@src="MultipleFrames.html"]',
        link: '//a[@href="#Multiple"]',
        text1: '(//input[@type="text"])[1]'

    },

    navigateToFramePage() {
        I.amOnPage(" http://demo.automationtesting.in/Frames.html");
    },

    enterTextInSingleFrame(tx) {
        I.waitForVisible(this.fields.change, 5);
        I.switchTo(this.fields.change);
        I.waitForVisible(this.fields.text, 10);
        I.fillField(this.fields.text, tx);
    },

    clickOnIframeWithInAnIframe() {
        // I.waitForVisible(this.fields.link, 5);
        //  I.switchTo(this.fields.link);
        //  I.waitForVisible(this.fields.change, 10);
        I.switchTo("");
        I.waitForVisible(this.fields.link, 10);
        I.click(this.fields.link);
    },
    // enterTextInIframe(str) {
    //     I.waitForVisible(this.fields.change1, 10);
    //     I.switchTo(this.fields.change1);
    //     I.waitForElement(this.fields.text1, 10);
    //     I.fillField(this.fields.text1, str);
    // }
};


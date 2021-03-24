const I = actor();

module.exports = {
    fields: {
        firstName: (txt) => `//input[@id="${txt}"]`,
        // header: '//div[text()="Practice Form"]',
        // firstName: '//input[@id="firstName"]',
        // lastName: '//input[@id="lastName"]',
        // userEmail: '//input[@id="userEmail"]',
        genderMale: '//label[text()="Male"]',
        // userNumber: '//input[@id="userNumber"]',
        // dateOfBirth: '//input[@id="dateOfBirthInput"]',
        dateOfMonth: '//option[@value="2"]/..',
        dateOfYear: '//option[@value="1998"]/..',
        dateOfDay: '//div[text()="24"]',
        // subjects: '//input[@id="subjectsInput"]',
        sports: '//label[text()="Sports"]',
        attachImage: '//input[@id="uploadPicture"]',
        address: '//textarea[@id="currentAddress"]',
        button: '//button[@id="submit"]',
        verifyHeading: '//div[text()="Thanks for submitting the form"]',
        verifyLabelValues: (labelled) => `//th[text()="${labelled}"]`,
        //verifyValues: '//th[text()="Values"]',
        verifyButton: '//button[@id="closeLargeModal"]',
        detailsData: (text) => `//td[text()="${text}"]`,
    },

    navigateToToolsQA() {
        I.amOnPage(' https://demoqa.com/automation-practice-form');
    },
    dataFill(txt, str) {
        I.waitForVisible(this.fields.firstName(txt), 20);
        I.fillField(this.fields.firstName(txt), str);
    },
    clickField(val) {
        I.waitForVisible(this.fields.firstName(val), 20);
        I.click(this.fields.firstName(val));
    },
    checkGender() {
        I.waitForVisible(this.fields.genderMale, 20);
        I.click(this.fields.genderMale);
    },
    checkMonth(v5) {
        I.waitForVisible(this.fields.dateOfMonth, 20);
        I.selectOption(this.fields.dateOfMonth, v5);
    },
    checkYear(v6) {
        I.waitForVisible(this.fields.dateOfYear, 20);
        I.selectOption(this.fields.dateOfYear, v6);
    },
    checkDay() {
        I.waitForVisible(this.fields.dateOfDay, 20);
        I.click(this.fields.dateOfDay);
    },
    checkSports() {
        I.waitForVisible(this.fields.sports, 20);
        I.click(this.fields.sports);
    },
    addImage(str1) {
        I.waitForVisible(this.fields.attachImage, 180);
        I.attachFile(this.fields.attachImage, str1);
    },

    addAddress(v8) {
        I.waitForVisible(this.fields.address, 20);
        I.fillField(this.fields.address, v8);
    },
    fillTheRequiredDetailsOfForm(v1, v2, v3, v4, v5, v6, v7, str1, v8) {
        this.dataFill("firstName", v1);
        this.dataFill("lastName", v2);
        this.dataFill("userEmail", v3);
        this.checkGender();
        this.dataFill("userNumber", v4);
        this.clickField("dateOfBirthInput");
        this.checkMonth(v5);
        this.checkYear(v6);
        this.checkDay();
        this.dataFill("subjectsInput", v7);
        I.pressKey('Enter');
        //I.waitForVisible(this.fields.sports, 20);
        //  I.switchTo(this.fields.header);
        this.checkSports();
        this.addImage(str1);
        //this.clickField("hobbies-checkbox-1");
        //this.clickField('uploadPicture');
        this.addAddress(v8);
    },

    submitTheForm() {
        I.waitForVisible(this.fields.button, 10);
        I.click(this.fields.button);
    },

    verifyData(text) {
        I.waitForVisible(this.fields.detailsData(text), 120);
        I.seeElement(this.fields.detailsData(text));
    },
    verifyHeadingItems() {
        I.waitForVisible(this.fields.verifyHeading, 120);
        I.seeElement(this.fields.verifyHeading);
    },
    verifyItems(labelled) {
        I.waitForVisible(this.fields.verifyLabelValues(labelled), 120);
        I.seeElement(this.fields.verifyLabelValues(labelled));
    },
    verifySubmit() {
        I.waitForVisible(this.fields.verifyButton, 120);
        I.seeElement(this.fields.verifyButton);
    },
    verifyTheDetailsOfFillingForm() {
        this.verifyHeadingItems();
        this.verifyItems('Label');
        this.verifyItems('Values');
        this.verifySubmit();
        this.verifyData('shiryank bansal');
        this.verifyData('shiryank.bansal@successive.tech');
        this.verifyData('9773857933');
        this.verifyData('24 March,1998');
        this.verifyData('Physics');
        this.verifyData('images.png');
        this.verifyData('Noida');
        I.wait(5);
    }

};
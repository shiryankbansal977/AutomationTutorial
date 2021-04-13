const I = actor();

module.exports = {
    fields: {
        firstName: (txt) => `//input[@id="${txt}"]`,
        // header: '//div[text()="Practice Form"]',
        // firstName: '//input[@id="firstName"]',
        // lastName: '//input[@id="lastName"]',
        // userEmail: '//input[@id="userEmail"]',
        genderSports: (temp) => `//label[text()="${temp}"]`,
       // genderMale: '//label[text()="Male"]',
        // userNumber: '//input[@id="userNumber"]',
        // dateOfBirth: '//input[@id="dateOfBirthInput"]',
        dateOfMonthYear: (val) => `//option[${val}]/..`,
      //  dateOfMonth: '//option[@value="2"]/..',
      //  dateOfYear: '//option[@value="1998"]/..',
        dayHead: (flag) => `//div[text()="${flag}"]`,
      //  dateOfDay: '//div[text()="24"]',
        // subjects: '//input[@id="subjectsInput"]',
      //  sports: '//label[text()="Sports"]',
      //  attachImage: '//input[@id="uploadPicture"]',
        address: '//textarea[@id="currentAddress"]',
        buttonVerify: (p) => `//button[@id="${p}"]`,
     //   button: '//button[@id="submit"]',
      //  verifyHeading: '//div[text()="Thanks for submitting the form"]',
        verifyLabelValues: (labelled) => `//th[text()="${labelled}"]`,
        //verifyValues: '//th[text()="Values"]',
      //  verifyButton: '//button[@id="closeLargeModal"]',
        detailsData: (text) => `//td[text()="${text}"]`,
    },

    navigateToToolsQA() {
        I.amOnPage(' https://demoqa.com/automation-practice-form');
    },
    dataFill(txt, str) {
        I.waitForVisible(this.fields.firstName(txt), 20);
        I.fillField(this.fields.firstName(txt), str);
    },
    clickField(txt) {
        I.waitForVisible(this.fields.firstName(txt), 20);
        I.click(this.fields.firstName(txt));
    },
    checkGender(temp) {
        I.waitForVisible(this.fields.genderSports(temp), 20);
        I.click(this.fields.genderSports(temp));
    },
    checkDatesMonths(val, value){
        I.waitForVisible(this.fields.dateOfMonthYear(val), 20);
        I.selectOption(this.fields.dateOfMonthYear(val), value);
    },
    // checkMonth(v5) {
    //     I.waitForVisible(this.fields.dateOfMonth, 20);
    //     I.selectOption(this.fields.dateOfMonth, v5);
    // },
    // checkYear(v6) {
    //     I.waitForVisible(this.fields.dateOfYear, 20);
    //     I.selectOption(this.fields.dateOfYear, v6);
    // },
    checkDay(flag) {
        I.waitForVisible(this.fields.dayHead(flag), 20);
        I.click(this.fields.dayHead(flag));
    },
    checkSports(temp) {
        I.waitForVisible(this.fields.genderSports(temp), 20);
        I.click(this.fields.genderSports(temp));
    },
    addImage(txt, str1) {
        // I.waitForVisible(this.fields.attachImage, 180);
        // I.attachFile(this.fields.attachImage, str1);
        I.waitForVisible(this.fields.firstName(txt), 180);
        I.attachFile(this.fields.firstName(txt), str1);
    },

    addAddress(v8) {
        I.waitForVisible(this.fields.address, 20);
        I.fillField(this.fields.address, v8);
    },
    fillTheRequiredDetailsOfForm(v1, v2, v3, v4, v5, v6, v7, str1, v8) {
        this.dataFill("firstName", v1);
        this.dataFill("lastName", v2);
        this.dataFill("userEmail", v3);
        this.checkGender("Male");
        this.dataFill("userNumber", v4);
        this.clickField("dateOfBirthInput");
        this.checkDatesMonths("@value=\"2\"", v5);
        this.checkDatesMonths("@value=\"1998\"", v6);
        this.checkDay("24");
        this.dataFill("subjectsInput", v7);
        I.pressKey('Enter');
        //I.waitForVisible(this.fields.sports, 20);
        //  I.switchTo(this.fields.header);
        this.checkSports("Male");
        this.addImage("uploadPicture", str1);
        //this.clickField("hobbies-checkbox-1");
        //this.clickField('uploadPicture');
        this.addAddress(v8);
    },
    submitDetails(p){
        I.waitForVisible(this.fields.buttonVerify(p), 10);
        I.click(this.fields.buttonVerify(p));
    },
    submitTheForm() {
       this.submitDetails("submit");
    },

    verifyData(text) {
        I.waitForVisible(this.fields.detailsData(text), 120);
        I.seeElement(this.fields.detailsData(text));
    },
    verifyHeadingItems(flag) {
        I.waitForVisible(this.fields.dayHead(flag), 120);
        I.seeElement(this.fields.dayHead(flag));
    },
    verifyItems(labelled) {
        I.waitForVisible(this.fields.verifyLabelValues(labelled), 120);
        I.seeElement(this.fields.verifyLabelValues(labelled));
    },
    verifySubmit(p) {
        I.waitForVisible(this.fields.buttonVerify(p), 120);
        I.seeElement(this.fields.buttonVerify(p));
    },
    verifyTheDetailsOfFillingForm() {
        this.verifyHeadingItems("Thanks for submitting the form");
        this.verifyItems('Label');
        this.verifyItems('Values');
        this.verifySubmit("closeLargeModal");
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
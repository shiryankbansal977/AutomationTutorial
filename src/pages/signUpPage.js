const I = actor();


module.exports = {

    fields: {
        create: '//a[text()="Create New Account"]',
        first_name: '//input[@name="firstname"]',
        surname: '//input[@name="lastname"]',
        mail: '//input[@name="reg_email__"]',
        newpass: '//input[@name="reg_passwd__"]',
        birth_day: '//select[@id="day"]',
        birth_month: '//select[@name="birthday_month"]',
        birth_year: '//select[@id="year"]',
        //gender_f: '//input[@value="1"]',
        gender_m: '//input[@value="2"]',
        //gender_cu: '//input[@value="-1"]',
        signUp: '//button[text()="Sign Up"]'
    },

    reachedToHomePage() {
        I.amOnPage("http://www.facebook.com/")
    },

    clickOnCreatNewAccount() {
        I.waitForVisible(this.fields.create, 20);
        I.click(this.fields.create);
    },
    enterFirstName(str) {

        I.waitForVisible(this.fields.first_name, 20);
        I.fillField(this.fields.first_name, str);
    },
    enterSurNameData(str) {
        I.waitForVisible(this.fields.surname, 20);
        I.fillField(this.fields.surname, str);
    },
    enterMailData(str) {
        I.waitForVisible(this.fields.mail, 20);
        I.fillField(this.fields.mail, str);
    },
    enterNewPassData(str) {
        I.waitForVisible(this.fields.newpass, 20);
        I.fillField(this.fields.newpass, str);
    },
    enterBirthDayData(str) {
        I.waitForVisible(this.fields.birth_day, 20);
        I.selectOption(this.fields.birth_day, str);
    },
    enterBirthMonthData(str) {
        I.waitForVisible(this.fields.birth_month, 20);
        I.selectOption(this.fields.birth_month, str);
    },
    enterBirthYearData(str) {
        I.waitForVisible(this.fields.birth_year, 20);
        I.selectOption(this.fields.birth_year, str);
    },
    enterGenderData(str) {
        I.waitForVisible(this.fields.gender_m, 20);
        I.click(this.fields.gender_m);
    },
    // enterGenderFemData(str) {
    //     I.waitForVisible(this.fields.gender_f, 20);
    //     I.fillField(this.fields.gender_f, str);
    // },
    //
    // enterGenderCuData(str) {
    //     I.waitForVisible(this.fields.gender_cu, 20);
    //     I.fillField(this.fields.gender_cu, str);
    // },
    clickOnSignUp() {
        I.waitForVisible(this.fields.signUp, 20);
        I.click(this.fields.signUp);
    },


    enterSignUpData(fi, su, ma, ne, date, mon, yea, gen) {
        this.clickOnCreatNewAccount();
        this.enterFirstName(fi);
        this.enterSurNameData(su);
        this.enterMailData(ma);
        this.enterNewPassData(ne);
        this.enterBirthDayData(date);
        this.enterBirthMonthData(mon);
        this.enterBirthYearData(yea);
        this.enterGenderData(gen);
        // this.enterGenderFemData(gen1);
        // this.enterGenderCuData(gen2);
        this.clickOnSignUp();
        console.log(fi, su, ma, ne, date, mon, yea, gen);
    },

    printErrorMessagesFromAllTheBoxesWhenKeptEmptyOnConsole() {


    }


}
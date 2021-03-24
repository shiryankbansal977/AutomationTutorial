const I = actor();


module.exports = {

    fields: {
        stay_bttn: '//a[@href="https://www.hotel.irctctourism.com/"]',
        city_name: '//input[@placeholder="Enter hotel name or city name"]',
        cty: '//strong',
        in_Date: '//input[@placeholder="Check-in Date"]',
        in_Date1: '((//span[@tabindex="-1"])[2])',
        in_Date2: (texts) => `//span[text()="${texts}"]`,
        // in_Date3: '//span[text()="Mar"]',
        //  in_Date4: '//span[text()="26"]',
        out_Date: '//input[@placeholder="Check-out Date"]',
        rom: '//input[@id="user-data-wrapper-id"]',
        rom1: '//select[@name="hotelRoom"]',
        rom2: '//select[@name="hotelAdult"]',
        rom3: '//select[@name="hotelChild"]',
        done: '(//button[@type="button"])[2]',
        find: '//button[text()="Find Hotel"]',
        verified1: '//b[text()="Hotel Type"]',
        verified2: (text) => `//label[text()="${text}"]`,
        verified5: '//strong[text()="44 Hotels"]',
        verified6: '//h4[text()="Search Location "]',
        verified7: '//p[text()="Showing "]',

    },

    navigateToWindowPage() {
        I.amOnPage(" https://www.air.irctc.co.in/");
    },

    selectAButtonHotelStayAndSwitchToNewTab() {
        I.waitForVisible(this.fields.stay_bttn, 10);
        I.click(this.fields.stay_bttn);
        // I.waitForVisible(this.fields.staybttn, 10);
        // I.switchTo(this.fields.staybttn);
        I.switchToNextTab(1, 5);

    },
    enterCityName(cn) {
        I.waitForVisible(this.fields.city_name, 10);
        I.fillField(this.fields.city_name, cn);
        I.waitForVisible(this.fields.cty, 10);
        I.click(this.fields.cty);
    },
    checkEntryDate() {
        I.waitForVisible(this.fields.in_Date1, 20);
        I.click(this.fields.in_Date1);
    },

    checkDates(texts) {
        I.waitForVisible(this.fields.in_Date2(texts), 20);
        I.click(this.fields.in_Date2(texts));
    },

    enterCheckInDate() {
        I.waitForVisible(this.fields.in_Date, 10);
        I.click(this.fields.in_Date);
        this.checkEntryDate();
        this.checkDates("2021");
        this.checkDates("Mar");
        this.checkDates("26");
    },
    enterOutDate() {
        I.waitForVisible(this.fields.out_Date, 10);
        I.click(this.fields.out_Date);
        this.checkEntryDate();
        this.checkDates("2021");
        this.checkDates("Mar");
        this.checkDates("27");
    },
    // selectRomName(txt, val) {
    //     I.waitForVisible(this.fields.rom1(txt), 260);
    //     I.selectOption(this.fields.rom1(txt), 'val');
    // },
    enterRoomsDetails(v1, v2, v3) {
        I.waitForVisible(this.fields.rom, 50);
        I.click(this.fields.rom);
        // this.selectRomName("hotelRoom", 'v1');
        // this.selectRomName("hotelAdult", 'v2');
        // this.selectRomName("hotelChild", 'v3');
        I.waitForVisible(this.fields.rom1, 10);
        I.selectOption(this.fields.rom1, v1);
        I.waitForVisible(this.fields.rom2, 10);
        I.selectOption(this.fields.rom1, v2);
        I.waitForVisible(this.fields.rom3, 10);
        I.selectOption(this.fields.rom1, v3);

    },
    fillTheRequiredParameters(cn, v1, v2, v3) {
        this.enterCityName(cn);
        this.enterCheckInDate();
        this.enterOutDate();
        this.enterRoomsDetails(v1, v2, v3);
        I.waitForVisible(this.fields.done, 10);
        I.click(this.fields.done);
        I.waitForVisible(this.fields.find, 10);
        I.click(this.fields.find);
    },

    verifyFilterType(text) {
        I.waitForVisible(this.fields.verified2(text), 180);
        I.seeElement(this.fields.verified2(text));
    },

    verifyTheDetails() {
        I.waitForVisible(this.fields.verified1, 180);
        I.seeElement(this.fields.verified1);
        this.verifyFilterType("Ginger")
        this.verifyFilterType("OYO")
        this.verifyFilterType("Park Hotels")
        I.waitForVisible(this.fields.verified5, 180);
        I.seeElement(this.fields.verified5);
        I.waitForVisible(this.fields.verified6, 180);
        I.seeElement(this.fields.verified6);
        I.waitForVisible(this.fields.verified7, 180);
        I.seeElement(this.fields.verified7);


    }

};

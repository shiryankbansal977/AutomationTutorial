const I = actor();

module.exports = {

    fields: {
        search: '//input[@placeholder="Search for products, brands and more"]',
        loginCut: '//button[text()="✕"]',
        verify: (text) => `//span[text()="${text}"]`,
        image: '//img[@src="//static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"]',
        mobileName: '//div[text()="realme C11 (Rich Green, 32 GB)"]',
        mobileCost: '(//div[text()="₹7,499"])[2]',
        countMobiles: '(//span[text()="best realme mobiles under 8000"])[2]/..',
    },
    navigateToFlipkartSignUpPage() {
        I.amOnPage("https://www.flipkart.com/");
    },
    cutLoginPage() {
        I.waitForVisible(this.fields.loginCut, 10);
        I.click(this.fields.loginCut);

    },
    clickSearch(str) {
        I.waitForVisible(this.fields.search, 50);
        I.click(this.fields.search);
        I.waitForVisible(this.fields.search, 20);
        I.fillField(this.fields.search, str);
        I.pressKey('Enter');
        I.wait(2);
    },
    enterDetails(str, str1) {
        this.cutLoginPage();
        this.clickSearch(str);
        //  this.mobileAmount(str1);
    },
    async printTheValue() {
        I.waitForVisible(this.fields.mobileCost, 40);
        //  x = I.grabValueFrom(this.fields.mobileCost);
        const x = await I.grabTextFrom(this.fields.mobileCost);
        //  I.seeElement(this.fields.mobileCost);
        //  console.log(x);
        I.waitForVisible(this.fields.countMobiles, 20);
        let y = await I.grabTextFrom(this.fields.countMobiles);
        //   console.log(y);

        let p = y.split(' ');
        // console.log(p);
        console.log(p[5]);
        // let q = p.split("of");
        // console.log(q);


        //  let z;
        //  let p;
        //console.log(z);
        // let n = y.search("results");
        // let  mat = y.match(/\d/g);
        //   console.log(mat[2]+1);
        //   for(let i=mat[2]; i<=mat[3]; i++){
        //       p=y[i];
        //       p++;
        //   }
        //   console.log(p);
        // return x;
    },

    verifyDetails(text) {
        I.waitForVisible(this.fields.verify(text), 10);
        I.seeElement(this.fields.verify(text));
    },
    verifyImage() {
        I.waitForVisible(this.fields.image, 10);
        I.seeElement(this.fields.image);
    },
    verifyMobile() {
        I.waitForVisible(this.fields.mobileName, 10);
        I.seeElement(this.fields.mobileName);
    },
    verifyTheDetailOfMobiles() {
        this.verifyDetails("Filters");
        this.verifyDetails("CATEGORIES");
        this.verifyImage();
        this.verifyMobile();
        // this.mobileAmount();
    }
}
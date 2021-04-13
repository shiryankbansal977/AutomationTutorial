const  I = actor;
const  signUpPages = require('../../pages/flipkartPage');


Given(/^navigate to flipkartSignUp Page$/, function () {
    signUpPages.navigateToFlipkartSignUpPage();

});
When(/^enter the details$/, function (){

    signUpPages.enterDetails('best realme mobiles under 8000', '6999');

} );
Then (/^print the value$/, function () {

    signUpPages.printTheValue();
});
Then (/^verify the detail of mobiles$/, function (){
   signUpPages.verifyTheDetailOfMobiles();
});
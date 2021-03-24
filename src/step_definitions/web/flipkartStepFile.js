//const  I = actor;
const  signUpPages = require('../../pages/flipkartPage');


// import {Given} from 'cucumber'

Given(/^navigate to flipkartSignUp Page$/, function () {
    signUpPages.navigateToFlipkartSignUpPage();

});
When(/^fill the signUpDetails$/, function (){

    signUpPages.fillTheSignUpDetails();

} );
// Then (/^verify the details$/, function (){
//
// });
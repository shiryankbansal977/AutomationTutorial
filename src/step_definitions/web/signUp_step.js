const signUpPage = require('../../pages/signUpPage')


Given(/^navigate to signUp Page$/, function () {
    signUpPage.reachedToHomePage();
});

Given(/^fill the form$/, function (){
   signUpPage.enterSignUpData("shiryank", "bansal", 'shiryank.b@gmail.com', 'Bansal@123' , '16', 'Apr', '1998', 'Male');
});

Then(/^Print error messages from all the boxes when kept empty on console$/, function (){
   signUpPage.printErrorMessagesFromAllTheBoxesWhenKeptEmptyOnConsole();
});

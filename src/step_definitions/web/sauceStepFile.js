//var {Given} = require('cucumber');
const sauce = require('../../pages/sauceDemoPage');


Given(/^navigate to sauceDemo Page$/, function () {
      sauce.navigateToSauceDemoPage();
});
Given(/^enter the username and pw$/, function () {
      sauce.enterTheUsernameAndPw();
});
Then(/^add product into the cart$/, function () {
      sauce.addProductIntoTheCart();
});
Then(/^verify new item should be added$/, function () {
      sauce.verifyNewItemShouldBeAdded();
});
Then(/^go to cart and verify the details$/, function () {
      sauce.goToCartAndVerifyTheDetails();
});
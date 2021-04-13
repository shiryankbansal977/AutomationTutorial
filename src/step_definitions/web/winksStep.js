const glass = require('../../pages/coolWinksPage');



Given(/^navigate to the google$/, function () {
    glass.navigateToTheGoogle();
});
When(/^enter the coolWinks site link$/, function () {
    glass.enterTheCoolWinksSiteLink('https://www.coolwinks.com/');
});



Then(/^user is on coolWinks site$/, function () {
    glass.navigateToCoolWinksSite();
});
Then(/^click on sunglasses and select men$/, function () {
    glass.clickOnSunglassesAndSelectMen();
});
Then(/^add item to the cart$/, function () {
    glass.addItemToTheCart();
});
Then(/^verify the detail of product in the cart$/, function () {
    glass.verifyTheDetailOfProductInTheCart();
});
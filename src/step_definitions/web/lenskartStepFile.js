const I = actor();
const cart = require('../../pages/lenskartPage');


//var {Given} = require('cucumber');


Given(/^navigate to lenskart Page$/, function () {

    cart.navigateToLenskartPage();

});
Then(/^select the product$/, function () {

    cart.selectTheProduct();

});
Then(/^add product on cart$/, function () {

    cart.addProductOnCart();

});
Then(/^verify value added in cart$/, function () {

    cart.verifyValueAddedInCart();

});
Then(/^verify the details of product$/, function () {

    cart.verifyTheDetailsOfProduct();

});
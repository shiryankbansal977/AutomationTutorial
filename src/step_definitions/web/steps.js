const loginPage = require('../../pages/Login');
const genericFun = require('../../../factories/GenericFuctions')

Given(/^User is on google page$/, () => {
    loginPage.navigateToUrl();
});

When(/^User search codeceptjs and click on first link$/, () => {
    loginPage.enterTextInSearch("codeceptjs");
    loginPage.clickOnfirstLink();
});

Then(/^User is navigated to codecept\.io page$/, function () {
    loginPage.userOncodeceptjsPage()
});
const navigatePage = require('../../pages/navigatePage');

const {userOnResReqPage} = require("../../pages/navigatePage");


Given(/^navigate to google$/, () => {
  navigatePage.reachedToUrl();

});
When(/^search resreq to google$/, function () {
    navigatePage.enterDataInGoogle('resreq');

});
When(/^click on the link of reqres\.in from google$/, function () {
   navigatePage.clickOnFirstLink();
});
Then(/^verify page should be visible of reqres\.in$/, function () {
   navigatePage.userOnResReqPage();
});
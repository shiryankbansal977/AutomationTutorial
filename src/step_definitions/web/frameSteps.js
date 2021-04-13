const frame = require('../../pages/framePage');

//import {Given} from 'cucumber'

Given(/^navigate to frame page$/, function () {
frame.navigateToFramePage();
});
Given(/^enter text in single frame$/, function (){
    frame.enterTextInSingleFrame("Hello World!");
});
Then(/^click on iframe with in an iframe$/, function (){
    frame.clickOnIframeWithInAnIframe();
});
Then(/^enter text in iframe$/, function (){
    frame.enterTextInIframe("Hello World Second");
})
const win = require('../../pages/windowHandlingPage');

//var {Given} = require('cucumber');



Given(/^navigate to window page$/, function () {

     win.navigateToWindowPage();
});
Then(/^select a button hotel stay and switch to new tab$/, function () {

    win.selectAButtonHotelStayAndSwitchToNewTab();
});
Given(/^fill the required parameters$/, function (cn,  v1, v2, v3 ) {

    win.fillTheRequiredParameters( 'Mumbai', '2', '2', '2');
});
Then(/^verify the details$/, function () {

    win.verifyTheDetails();
});
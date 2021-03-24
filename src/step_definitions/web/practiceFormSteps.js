const form = require('../../pages/practiceFormPage');



Given(/^navigate to Tools QA$/, function () {

form.navigateToToolsQA();

});
Given(/^fill the required details of form$/, function () {
    form.fillTheRequiredDetailsOfForm('shiryank', 'bansal', 'shiryank.bansal@successive.tech', '9773857933', 'March', '1998', 'physics', './testData/images.png', 'Noida');
});
Given(/^submit the form$/, function () {
   form.submitTheForm();
});
Then(/^verify the details of filling form$/, function () {
    form.verifyTheDetailsOfFillingForm();
});


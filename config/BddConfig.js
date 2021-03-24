// In this file you have to add path of all the page file over here.
const include = {
    I: './steps_file.js',
};

const gherkin = {
    features: './src/features/*/*/*.feature',
    steps: [
        "./src/step_definitions/web/login_step.js",
        "./src/step_definitions/web/steps.js",
        "./src/step_definitions/web/navigate_step.js",
        "./src/step_definitions/web/signUp_step.js",
        "./src/step_definitions/web/flipkartStepFile.js",
        "./src/step_definitions/web/frameSteps.js",
        "./src/step_definitions/web/windowSteps.js",
        "./src/step_definitions/web/practiceFormSteps.js"

    ],
};

module.exports = {
    include,
    gherkin,
};

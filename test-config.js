exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "Pixel 2 API 30",
        "appium:platformVersion": "11",
        "appium:automationName": "UIAutomator2",
        "appium:app": "C:\\Users\\MSI\\Desktop\\AppuimDownloads\\appium-demo-main\\appium-demo-main\\app\\android\\Android-MyDemoAppRN.1.3.0.build-244.apk",
        "appium:noReset": true
    }],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'], // Chemin vers les fichiers de définitions de pas
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: true,
        tagExpression: '', // Ajoute des tags si nécessaire
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    specs: ['./features/*.feature'], // Chemin vers tes fichiers feature
};

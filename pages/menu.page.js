const wdio = require("webdriverio");

let driver;

class MenuPage {
  // Sélecteurs des éléments
  get menuButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    );
  }

  async launchApp() {
    const opts = {
      path: "/wd/hub",
      port: 4723,
      capabilities: {
        platformName: "Android",
        "appium:deviceName": "Pixel 2 API 30",
        "appium:platformVersion": "11",
        "appium:automationName": "UIAutomator2",
        "appium:app":
          "C:\\Users\\MSI\\Desktop\\AppuimDownloads\\appium-demo-main\\appium-demo-main\\app\\android\\Android-MyDemoAppRN.1.3.0.build-244.apk",
        "appium:noReset": true,
      },
    };

    driver = await wdio.remote(opts);

    console.log("Application lancée");
  }

  async clickMenuButton() {
    const menuButton = await driver.$('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
    await menuButton.click();
  
  }
}

module.exports = new MenuPage();

const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

module.exports = {
  "src_folders": [
    "tests"// Where the tests are located
  ],
  "output_folder": "./output/", // reports from nightwatch
  "selenium": { // selenium config settings
    "start_process": true, // tells nightwatch to manage the selenium process
    "server_path": seleniumServer.path, // path to selenium
    "log_path" : "./output/",
    "host": "127.0.0.1", // host for selenium
    "port": 4444, // port for selenium
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path // pass chromedriver path
    }
  },
  "test_settings": {
    "default": { // default settings (you can override with custom settings)
      "screenshots": {
        "enabled": true, // enables screenshots
        "path": "output/" // output folder for screenshots
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": {
        "browserName": "chrome", // use Chrome as the default browser
        "chromeOptions" : {
         "args" : [ ] // pass custom CLI args to Chrome
       }
      }
    }
  }
}
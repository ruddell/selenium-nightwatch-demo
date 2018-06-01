module.exports = {
    'Demo test DuckDuckGo search' : function (browser) {
      browser
        .url('https://duckduckgo.com/')
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('#search_form_input_homepage', 1000)
        .click('#search_form_input_homepage')
        .keys(`nightwatch js`)
        .waitForElementVisible('#search_button_homepage', 1000)
        .click('#search_button_homepage')
        .assert.containsText('#web_content_wrapper', 'Nightwatch.js')
        .saveScreenshot(`./output/search.png`)
        .end();
    }
};
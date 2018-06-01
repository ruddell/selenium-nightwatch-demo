# Selenium Nightwatch Demo

This demo goes along with the blog post: [https://jruddell.com/blog/selenium-nightwatch](https://jruddell.com/blog/selenium-nightwatch)

## Intro

Selenium is an extremeley useful tool for automating end-to-end tests.  It uses the [W3C WebDriver API](https://www.w3.org/TR/webdriver/) to launch an instance of a browser (such as Chrome, Firefox, or Safari), navigate to a web page, then run assertions that verify the page is appearing/functioning as you expect.  This demo launches a Selenium (using [Nightwatch](http://nightwatchjs.org/)), navigates to the the [DuckDuckGo search engine](https://duckduckgo.com/), makes a simple query, and asserts the results are as expected.

## Setup

Clone the project and install the dependencies

```bash
git clone https://github.com/ruddell/selenium-nightwatch-demo.git
cd selenium-nightwatch-demo && npm install
```

## Running Tests

To run the tests, simply run the following command.  It gets the `test` script from the `package.json` file and runs that command.  Chrome will launch and run the `duck-duck-go.js` test.

```bash
npm run test
```
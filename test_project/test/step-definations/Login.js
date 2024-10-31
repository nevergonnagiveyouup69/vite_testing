/* eslint-disable no-undef */
const { Given, Then } = require('@cucumber/cucumber');

Given('I am in web application', async function () {
    // Write code here that turns the phrase above into concrete actions
    await global.page.goto('http://localhost:3000')
});

Then('I should see the application loaded', async function () {
    // Write code here that turns the phrase above into concrete actions
    await global.page.click('[data-testid="add-tax-btn"]');
   
});

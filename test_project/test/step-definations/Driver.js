const { AfterAll, BeforeAll, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
// const { reset_account } = require('../bdd_api/index')
const { chromium } = require('playwright');

const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const fswithoutPromise = require('fs');
const path = require('path');
const { createCoverageMap } = require('istanbul-lib-coverage');


setDefaultTimeout(20 * 1000);

BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false, //make this has false if you want to visualize the browser while running the testcases.
        timeout: 24000,
        // slowMo: 100,require
    });
    const context = await browser.newContext({
        viewport: { height: 1080, width: 1900 }
    });

    global.page = await context.newPage();
    global.current_process_name = uuidv4()
    console.log("Current process name:", global.current_process_name);
    global.loginPerformed = false;
    try {
        global.__coverage__ = await global.page.evaluate(() => {
            return window.__coverage__;
        });
        // global.__coverage__ = await driver.executeScript("return __coverage__;");
        global.coverageMap = createCoverageMap(__coverage__);
    } catch (error) {
        throw new Error('::: __coverage__ ::: Coverage Mapping Object Not Found :::'+error)
    }
    await global.page.coverage.startJSCoverage();
})

AfterStep(async function () {
    let updatedCoverageData = null
    try {
        updatedCoverageData = await global.page.evaluate(() => {
            return window.__coverage__;
        });
    } catch (error) {
        throw new Error('::: __coverage__ ::: Coverage Mapping Object Not Found :::'+error)
    }
    const updatedCoverageMap = createCoverageMap(updatedCoverageData);
    global.coverageMap.merge(updatedCoverageMap);
});


AfterAll(async function () {
    const coverageDataDir = path.join(__dirname, 'coverageData');
    try {
        await fs.access(coverageDataDir);

    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.mkdir(coverageDataDir, { recursive: true });
        } else {
            console.error('Error accessing or creating directory:', error);
            throw error;
        }
    }

    const coverageDataFile = path.join(coverageDataDir, `coverage_${global.current_process_name || 'default'}.json`);
    const coverageData = global.coverageMap.toJSON();

    try {
        await fs.writeFile(coverageDataFile, JSON.stringify(coverageData, null, 2));
    } catch (error) {
        console.error('Error writing coverage data to file:', error);
        throw error;
    }

    try {
        // await global.browser.close();
    } catch (error) {
        console.error('Error closing the browser:', error);
        throw error;
    }

});

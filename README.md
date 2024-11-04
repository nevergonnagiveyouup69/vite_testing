# Vite Testing and Playwright in React Setup

This repository sets up a testing environment for a React project using Vite and Playwright. This guide will help you install and run the initial setup, run tests, and execute Playwright scripts to automate testing in a fast and efficient environment.

## Prerequisites

- **Node.js** (latest LTS recommended)
- **NPM** or **Yarn**

## Getting Started

### 1. Set Up React and vite

Start by setting up a vite + React project in the current directory using:

```bash
npm create vite@latest
```
### 2. Set Up vitest

After installing vite add vite test to the repository.

```bash
npm install vitest --save-dev
```
 It should look like this after the command is displayed
![alt text](<github_assets/Screenshot from 2024-10-29 12-36-02.png>)


### 3. Changes to the files

Add a file called vi_testing and add the setup js file. Follow this guide: https://vitest.dev/guide/. It should have the setup.js file.

![alt text](<github_assets/Screenshot from 2024-10-29 13-16-15.png>)

After that Update the vit.config.js file to something like this.

![alt text](<github_assets/Screenshot from 2024-10-29 13-18-12.png>)


### 4. Setting up Vitest with React Testing Library, jsdom, and BDD

A comprehensive guide to configure Vitest for React component testing with support for BDD testing patterns.

#### Dependencies Installation

#### Core Testing Libraries
```bash
# Install React Testing Library and Jest DOM
npm install @testing-library/react @testing-library/jest-dom --save-dev

# Install jsdom for browser environment simulation
npm install jsdom --save-dev
```

#### BDD Support (Optional)
If you want to use Behavior Driven Development (BDD):
```bash
npm install @amiceli/vitest-cucumber --save-dev
```

### Project Configuration

#### Update Package.json
Add the test script to your package.json:
```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

#### Project Structure
Create the following directory structure for your tests:
```
vi_testing/
├── features/
│   └── example.feature
├── step_definitions/
│   └── example.jsx
└── setup.js
```

#### Test Setup Configuration
Create a `setup.js` file with the following configuration:

```javascript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import { setVitestCucumberConfiguration } from '@amiceli/vitest-cucumber';

// Extend expect with Testing Library matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
    cleanup();
});

// BDD Configuration Options

// Option 1: Configure language and exclude tags
setVitestCucumberConfiguration({
    language: 'fr',
    excludeTags: ['beta']
});

// Option 2: Configure only exclude tags
setVitestCucumberConfiguration({
    excludeTags: ['beta']
});

// Option 3: Configure only language
setVitestCucumberConfiguration({
    language: 'it'
});

// Option 4: Configure error handling
setVitestCucumberConfiguration({ 
    onStepError ({ step }) {
        console.error(step.details);
        screen.logTestingPlayground();
    }
});
```

The primary purpose of `setup.js` is to facilitate running test cases locally. It ensures that the paths defined in the Vite configuration match those specified in `setup.js`. To achieve this, we are utilizing JSDOM as our local environment for testing.


#### Running Tests
To run your tests, simply execute:
```bash
npm run test
```

## React testing library and mocking

For testing react components we can call its using import and then rendering it.

![alt text](<github_assets/Untitled Diagram.drawio.png>)


---

# Getting Started With Playwright

[Playwright](https://playwright.dev/docs/intro) is used for end to end testing and api testing. We well learn to install run and use playwright to run bdd test cases.
Its get started.

First we add a npm package for installing all playwright dependencies 

```bash
npm init playwright@latest
```
After going thought the steps and removing all the extra files which allow us to run playwright without bdd
To do this with BDD.

Create the following structure for your tests:
```
test/
├── bdd-api/
│   └── token.js
├── bdd-payload/
│   └── index.js
├── intergation-testing/
│   └── example.feature
|   └── cucumber.js
└── step_definitions/
    └── example.js
    └── Driver.js
```

After this add the driver file from the repo: [Driver](https://github.com/nevergonnagiveyouup69/vite_testing/blob/74ce3629a937da1633a195a3b9dff987a29a25cd/test_project/test/step-definations/Driver.js)
Its should look like this.

![alt text](</github_assets/Screenshot from 2024-11-04 10-58-36.png>)

Then you are done.
Happy testing.


---


#### Additional Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [jsdom Package](https://www.npmjs.com/package/jsdom)
- [Vitest Cucumber Documentation](https://vitest-cucumber.miceli.click/install)
- [Playwright Docs](https://playwright.dev/docs/intro)


---
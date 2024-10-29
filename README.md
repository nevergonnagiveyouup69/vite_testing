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


---

The primary purpose of `setup.js` is to facilitate running test cases locally. It ensures that the paths defined in the Vite configuration match those specified in `setup.js`. To achieve this, we are utilizing JSDOM as our local environment for testing.

---

# RoadTrippers Automation Test Suite

This repository contains automated functional tests for the **RoadTrippers** application using **Playwright** and **Node.js**.

---

## 🛠 Tech Stack

- **Node.js**
- **Playwright**
- **JavaScript**
- **npm**

---

## 📋 Prerequisites

Make sure the following are installed on your machine:

- **Node.js** (v18+ recommended)  
  Download: https://nodejs.org/

- **npm** (comes bundled with Node.js)

Verify installation:

```bash
node -v
npm -v
```

## 🚀 Project Setup
1️⃣ Clone the repository

```
git clone <repository-url>
cd RoadTrippers
```

2️⃣ Install dependencies

`npm install`

3️⃣ Install Playwright browsers
`npx playwright install`

▶️ Test Execution

Before starting test execution run save-auth.js file in tests folder and log manually with one of the accounts from test_data file testData.js

`Run Specific Test (Single Worker)`

Linux / macOS

`npm playwright test tests/functional/roadtrippers.test.js --workers=1`

Windows (PowerShell / CMD)

`npm playwright test tests\functional\roadtrippers.test.js --workers=1`

Run All Tests

Linux / macOS

`npx playwright test`

Windows

`npx playwright test`

📊 View Test Report

After execution, open the Playwright HTML report:

`npx playwright show-report`

📂 Project Structure

```
RoadTrippers/
├── tests/
│   └── functional/
│       └── roadtrippers.test.js
├── playwright.config.js
├── package.json
└── README.md
```

⚙ Configuration

Playwright configuration is located in:

playwright.config.js

You can customize:

Browser selection

Headless / headed mode

Timeout values

Test retries

Parallel execution

🐞 Debug Mode (Headed Mode)

To run tests with browser UI:

Linux / macOS

`npx playwright test --headed`

Windows

`npx playwright test --headed`

🔁 CI Friendly Mode

For CI pipelines:

`npx playwright test --workers=1`

🧪 Framework Features

End-to-end functional testing

Parallel execution

HTML reporting

Cross-browser testing (Chromium, Firefox, WebKit)

Headless & headed modes

📌 Notes

Make sure browsers are installed before running tests.

Always run npm install after pulling new changes.

Test Results 
<img width="1128" height="506" alt="image" src="https://github.com/user-attachments/assets/b60eb78c-52c8-46f4-b8dc-893bff1ccd10" />


# 🧪 Playwright Automation Framework (TypeScript)

This project is an end-to-end UI automation framework built using **Playwright + TypeScript**.  
It supports **Smoke and Regression testing**, **Page Object Model**, environment configuration, screenshots/videos on failure, retries, and HTML reporting.

The framework automates sample applications like **SauceDemo**.

---

## 🚀 Tech Stack

- Playwright  
- TypeScript  
- Node.js  
- Page Object Model (POM)  
- Playwright Test Runner  

---

## 📁 Project Structure
```
playwright_with_ts
│
├── env/
│ └── qa.env.ts # Environment URLs
│
├── hooks/
│ └── global.setup.ts # Global setup (login/session)
│
├── pages/
│ └── login.page.ts # Page Objects
│
├── tests/
│ ├── smoke/
│ │ └── login.spec.ts
│ │
│ └── regression/
│ └── dashboard.spec.ts
│
├── playwright.config.ts # Playwright configuration
├── package.json
├── README.md
└── test-results/
```

---

## ✅ Folder Explanation

### 🔹 env/

Contains environment URLs (QA / staging / prod).

Example:

```ts
export const BASE_URL = 'https://www.saucedemo.com';
```
---
🔹 hooks/

Contains global setup logic like login and authentication.

Runs before test execution.
---
🔹 pages/

Page Object Model files.

Each page contains:

Locators

Actions (login, click, etc.)

Keeps tests clean and reusable.
---
🔹 tests/
smoke/

Critical tests like Login.

regression/

Full flow tests like Dashboard navigation.
---
🏷 Test Tags

Tests are grouped using tags:

@smoke

@regression
---

⚙️ Installation
1️⃣ Install Node.js

Download from:

https://nodejs.org

Verify installation:
```
node -v
npm -v
```
2️⃣ Clone Project
```
git clone <copy the repo link>
cd playwright_with_ts
```
3️⃣ Install Dependencies
```
npm install
```
4️⃣ Install Playwright Browsers
```
npx playwright install
```
▶️ Execute Tests
Run ALL tests
```
npx playwright test
```
Run Smoke tests
```
npx playwright test --grep "@smoke"
```

Run Regression tests
```
npx playwright test --grep "@regression"
```
Run in headed mode (see browser)
```
npx playwright test --headed
```

Run on specific browser
```
npx playwright test --project=chromium
```
---
📊 View HTML Report

After execution:
```
npx playwright show-report
```
---
📸 Test Artifacts

On failure framework automatically captures:

✅ Screenshot

✅ Video

✅ Trace

Stored inside:
```
test-results/
```
🔁 Retry Logic

Failed tests are retried automatically (configured in playwright.config.ts).
---
🧠 Features

Page Object Model
Smoke & Regression tagging
Environment config
Auto waits
Screenshots & videos
Trace viewer
HTML reports
Parallel execution
Retry on failure
---

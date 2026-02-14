# 🎭 Playwright Java Automation Framework (Gradle)

This project is a complete **Playwright Automation Framework using Java + Gradle**.

It supports:

✅ UI Automation (Smoke & Regression)  
✅ API Automation (Postman Echo)  
✅ Page Object Model (POM)  
✅ Data Driven Testing (JSON)  
✅ Global Authentication using auth.json  
✅ Cross-browser execution  
✅ Screenshots on execution  
✅ Gradle build tool  
✅ JUnit 5 test runner  

Applications tested:

- UI: https://www.saucedemo.com  
- API: https://postman-echo.com  

---

## 📁 Project Folder Structure

```
playwright_with_java
│
├── build.gradle
├── settings.gradle
├── gradlew
├── gradlew.bat
├── README.md
├── auth.json
│
├── screenshots/
├── reports/
│
├── src
│ ├── main
│ │ └── java
│ │ └── org.example.config
│ │ └── EnvConfig.java
│
│ └── test
│ └── java
│ ├── data
│ │ └── users.json
│ │
│ ├── hooks
│ │ └── GlobalSetup.java
│ │
│ ├── pages
│ │ └── LoginPage.java
│ │
│ ├── tests
│ │ ├── smoke
│ │ │ └── LoginTest.java
│ │ │
│ │ ├── regression
│ │ │ └── DashboardTest.java
│ │ │
│ │ └── api
│ │ └── CrudApiTest.java
│ │
│ └── utils
│ └── JsonUtils.java
```

---

## 🔧 Tech Stack

- Java 21
- Playwright for Java
- Gradle
- JUnit 5
- Gson (JSON handling)

---

## ⚙️ Prerequisites

Install the following:

### 1. Java 21

Verify:

```bash
java --version
```
---
2. Node.js (Required for Playwright browsers)

Download:

https://nodejs.org

Verify:
```
node -v
```
3. Playwright Browsers
Run once:
```
npx playwright install
```
---
📦 Dependency Installation

From project root:
```
gradlew build
```
(or)
```
./gradlew build
```
---
🔐 Global Login (auth.json)

GlobalSetup logs into SauceDemo and saves session into:
```
auth.json
```
This allows tests to reuse authenticated session.
File used automatically by:
```
.setStorageStatePath(Paths.get("auth.json"))
```
▶️ Running Tests

1. Run ALL tests
```
gradlew test
```
2. Run Smoke Tests
```
gradlew test --tests "tests.smoke.*"
```
3. Run Regression Tests
```
gradlew test --tests "tests.regression.*"
```

4. Run API Tests
```
gradlew test --tests "tests.api.*"
```

5. Run Single Test
```
gradlew test --tests "tests.smoke.LoginTest"
```
---
📸 Screenshots

Screenshots are saved in:
```
screenshots/
```
Example:
page.screenshot(...)
---
📊 Reports
JUnit reports generated inside:
```
build/reports/tests/test/index.html
```
Open this file in browser to view results.

📄 Test Data
Stored in:
```
src/test/java/data/users.json
```
Format:
```
[
  {
    "username": "standard_user",
    "password": "secret_sauce"
  }
]
```
Used via JsonUtils.java.
🧱 Page Object Model

UI actions encapsulated inside:
```
pages/LoginPage.java
```
Keeps tests clean and maintainable.
🌐 Environment Configuration
BASE_URL handled via:
```
EnvConfig.java
```
🧪 API Automation
Implemented using Playwright APIRequest:
```
tests/api/CrudApiTest.java
```
## Includes

- Basic Auth  
- Bearer Token  
- Custom Headers  
- GET / POST / PUT  
- Status Assertions  
- JSON Assertions  

## 🎯 Framework Capabilities

✔ UI Automation
✔ API Automation
✔ Data Driven
✔ Auth Reuse
✔ Cross Browser Ready
✔ POM Design
✔ Gradle Build
✔ JUnit Runner

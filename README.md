# CookUnity Small Automation

This project contains automated tests for the [CookUnity](https://www.cookunity.com)
Using playwright to cover one UI test and 2 api tests

---

## 📁 Project Structure

- `pages/` – Page Object Models (POM) used for UI test flows
- `tests/`
  - `/` – Frontend (browser) tests
  - `api/` – Backend API tests (REST)
- `playwright.config.js` – Configuration for base URL, test settings, etc.
- `.gitignore` – Ignores `node_modules`, reports, `.env`, etc.
- `package.json` – NPM scripts and dependencies
- `README.md` – This file

---

## 🚀 Technologies Used

- JavaScript (ES6+)
- [Playwright](https://playwright.dev)
- Page Object Model (POM)
- REST API testing via `request.newContext`

---

## ⚙️ Setup Instructions

### 1. Clone the repository

`git clone https://github.com/rsaccoll/playwright_test_unity.git`

`cd playwright_test_unity`

1. Install dependencies:

`npm install`

2. Install Playwright Browsers:

`npx playwright install`

3. Run UI tests:

`npm run test:ui`

4. Run API tests:
`npm run test:api`

5. Generate and view HTML report:

`npm run show:report`



## Frontend Test Flow
### The UI test automates the full sign-up experience:

- Visit homepage: https://www.cookunity.com
- Enter zip code 10001
- Skip the quiz
- Select 6-meal plan
- Complete sign-up with:
- Dynamic email
- Password: 123123123
- URL contains /en/meal-select

## API Tests
### Test 1: GET Active User
GET /users → Fetch list of users
Filter first with status: "active"
GET /users/:id → Get details
Assert:
HTTP status: 200
user.status === "active"

### Test 2: PATCH User Name
PATCH /users/:id
Body:
``{
  "name": "QA Updated",
  "email": "jana.waters<random>@hotmail.us",
  "status": "active"
}``

Assert:

Updated name

HTTP status 200

**A random string is appended to the email to avoid conflicts

Note: For production or real-world testing, store tokens securely in a .env file.

Considerations:

UI Tests:
It doesn't seem to be working if you run it for testing.
1) The skipAll button appears to have a frame, and over time, it wasn't very feasible to bypass it when pressing it. I tried a workaround, but it didn't work.
2) The option to select the email address doesn't display items for adding first and last names. Perhaps the flow is going in the wrong direction. I left only the email address and password as that's what appeared (even after clearing the cache).

API tests:
Entering the same email address can cause conflicts. I chose to include a string in the email address to avoid conflicts when running the test.

Apparently, the terminal can sometimes return a page for validation. I chose to leave the test as it should be validated, but errors may occur when running it.
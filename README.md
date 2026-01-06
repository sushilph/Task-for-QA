# 🧪 QA Automation Task – Cypress

## 📌 Project Overview
This repository contains an automated test suite built using **Cypress** to demonstrate **QA fundamentals and automation concepts**.  
The tests are written against the public demo application **SauceDemo** and cover core user flows such as login, add to cart, and checkout.

🔗 **Application Under Test:**  
https://www.saucedemo.com/

## 🎯 Objective
- Demonstrate understanding of QA automation concepts
- Create automated test cases for a public website
- Follow clean code structure and best practices
- Execute tests successfully using Cypress

## 🧩 Test Cases Covered

### 1️⃣ Successful Login
- Login with valid credentials
- Verify user is redirected to the Products page

### 2️⃣ Failed Login
- Login with invalid credentials
- Verify error message is displayed

### 3️⃣ Add Product to Cart
- Login with valid user
- Add a product to the cart
- Verify cart badge count is updated

### 4️⃣ Checkout Product
- Login with valid user
- Add product to cart
- Complete checkout flow
- Verify order confirmation message is displayed

## 🛠️ Tech Stack & Tools
- **Automation Framework:** Cypress
- **Programming Language:** JavaScript
- **Test Runner:** Cypress Test Runner
- **Test Data Management:** Cypress Fixtures
- **Selectors Used:** `data-test` attributes

## 📂 Project Structure
```
cypress/
├── e2e/
│ ├── login.cy.js
│ ├── cart.cy.js
│ └── checkout.cy.js
├── fixtures/
│ └── users.json
├── support/
│ ├── commands.js
│ └── e2e.js
cypress.config.js
package.json
README.md
```

## ⚙️ Setup Instructions

1️⃣ Prerequisites
Node.js (v16 or higher recommended)
npm installed

2️⃣ Install Dependencies
npm install

## ▶️ How to Run Tests
Open Cypress Test Runner (Interactive Mode)
npx cypress open

Run Tests in Headless Mode
npx cypress run





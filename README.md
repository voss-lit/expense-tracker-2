# Expense Tracker with Live Currency Conversion

A clean, responsive single-page web application that helps travelers, freelancers, and shoppers log expenses in various foreign currencies and instantly view converted totals using live, real-time exchange rates.

## Live Demo
[View Live Demo on GitHub Pages](https://github.com/voss-lit/expense-tracker-2)

## Features
- **Add Expenses:** Log descriptions, amounts, source currencies, and categories.
- **Live Currency Conversion:** Real-time exchange rates fetched automatically via REST API (`open.er-api.com`).
- **Dynamic Home Currency:** Change your home currency dropdown to instantly convert all totals.
- **Category Filtering:** Filter your expense list by category (Transport, Food, Luxury, Shopping, Others).
- **Automated Summaries:** Real-time tracking of total expenses and transaction counts.

## Tech Stack & Architecture
- **HTML5 & CSS3:** Responsive layout and modern styling.
- **JavaScript (ES6 Modules):** Clean modular separation across `api.js`, `state.js`, `utils.js`, `ui.js`, and `main.js`.
- **REST API:** Client-side `fetch()` with async/await and robust error handling.
- **Jest:** Unit testing suite for pure utility functions.
- **ESLint:** Static code analysis for clean, error-free code.

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/voss-lit/expense-tracker-2.git](https://github.com/voss-lit/expense-tracker-2.git)
   cd expense-tracker-2
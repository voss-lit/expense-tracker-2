// state.js - Holds the central state of our application

export const state = {
  expenses: [],          // Array to store our expense objects
  rates: {},             // Exchange rates fetched from the API
  homeCurrency: 'KES',   // Default home currency
  filterCategory: 'all'  // Default filter view
};

// Adds a new expense to our array using the spread operator
export function addExpense(expense) {
  state.expenses = [...state.expenses, expense];
}

// Updates the home currency setting
export function setHomeCurrency(newCurrency) {
  state.homeCurrency = newCurrency;
}

// Updates the category filter setting
export function setFilterCategory(category) {
  state.filterCategory = category;
}

// Saves the fetched exchange rates
export function setRates(newRates) {
  state.rates = newRates;
}
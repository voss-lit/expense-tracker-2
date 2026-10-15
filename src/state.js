// state.js - This file acts as the memory box (or notebook) for our application. 
// It holds all our current data like expenses, exchange rates, and user settings.

// Create a central 'state' object to store our application data
export const state = {
  expenses: [],          // An empty array (list) where we will store all our added expenses
  rates: {},             // An empty object to hold the exchange rates fetched from the API
  homeCurrency: 'KES',   // The default currency our totals are shown in (Kenya Shillings)
  filterCategory: 'all'  // The current category filter selected by the user (starts as 'all')
};

/**
 * Adds a new expense into our state array without destroying the old data.
 * This uses the spread operator (...) to combine the old list with the new expense.
 */
export function addExpense(expense) {
  // Take everything currently in state.expenses, spread it out, and add the new expense at the end
  state.expenses = [...state.expenses, expense];
}

/**
 * Removes an expense from our state array by checking its unique ID.
 */
export function removeExpense(id) {
  // Keep only the expenses whose ID does NOT match the ID we want to delete
  state.expenses = state.expenses.filter(expense => expense.id !== id);
}

/**
 * Updates the user's chosen home currency (e.g., from KES to USD).
 */
export function setHomeCurrency(newCurrency) {
  state.homeCurrency = newCurrency;
}

/**
 * Updates the active category filter (e.g., only show 'Food' or 'Transport').
 */
export function setFilterCategory(category) {
  state.filterCategory = category;
}

/**
 * Saves the exchange rates fetched from the internet into our state object.
 */
export function setRates(newRates) {
  state.rates = newRates;
}
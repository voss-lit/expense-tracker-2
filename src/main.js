// main.js - The main entry point that inatie all modules and event listeners together

// Import our API function to fetch live exchange rates
import { fetchExchangeRates } from './api.js';

// Import our state variables and functions to manage expenses and settings
import { 
  state, 
  addExpense, 
  setHomeCurrency, 
  setFilterCategory, 
  setRates 
} from './state.js';

// Import our UI rendering function to update the webpage
import { renderApp } from './ui.js';

// 1. Grab all the HTML form elements and inputs we need to interact with
const formButton = document.querySelector('.btn');       
const descInput = document.getElementById('desc');          
const amountInput = document.getElementById('amount');      
const currencySelect = document.getElementById('currency'); 
const categorySelect = document.getElementById('category'); 
const homeCurrencySelect = document.getElementById('Homecurrency'); 
const filterSelect = document.getElementById('filter');     

/*
  2. An asynchronous initialization function that runs when the website first loads (app ikuwe ready juu huwa inachelewa)
 */
async function init() {
  try {
    // Step A: Fetch live exchange rates from the internet using api.js
    const rates = await fetchExchangeRates();
    
    // Step B: Save the fetched rates into our global application state
    setRates(rates);
    
  } catch (error) {
    console.error('Could not load live exchange rates:', error);
    alert('Could not load live exchange rates. Defaulting to 1:1 rates.');
    setRates({ KES: 1, USD: 1, EUR: 1, GBP: 1, JPY: 1 });
}

  // Step C: Draw the app for the very first time (it will show "No expenses found")
  renderApp(state);

  // 3. Listen for when the user clicks the "+ Add Expense" button
  formButton.addEventListener('click', (e) => {
    // Prevent the web page from refreshing (which is the default form behavior)
    e.preventDefault();

    // Get the values typed by the user and remove empty spaces
    const description = descInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;
    const category = categorySelect.value;

    // Validate inputs: make sure the description si empty and the amount is a valid number greater than 0
    if (!description || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid description and a positive amount.');
      return; // Stop right here if validation fails
    }

    // Create a new expense object containing all the details
    const newExpense = {
      id: Date.now().toString(), // Create a unique ID using the current timestamp in milliseconds
      description,
      amount,
      currency,
      category
    };

    // Add the new expense into our state array
    addExpense(newExpense);

    // Refresh the webpage display to show the new expense and updated totals
    renderApp(state);

    // Clear out the input boxes so the user can type a new expense easily
    descInput.value = '';
    amountInput.value = '';
  });

  // 4. Listen for when the user changes their selected "Home currency" dropdown
  homeCurrencySelect.addEventListener('change', (e) => {
    // Update the home currency in our state
    setHomeCurrency(e.target.value);
    
    // Redraw the app so all amounts instantly convert to the new home currency
    renderApp(state);
  });

  // 5. Listen for when the user changes the category filter dropdown
  filterSelect.addEventListener('change', (e) => {
    // Update the active filter category in our state
    setFilterCategory(e.target.value);
    
    // Redraw the app to show only expenses matching that category
    renderApp(state);
  });
}

// 6. Tell the browser to run our 'init' function as soon as the HTML content is fully loaded
window.addEventListener('DOMContentLoaded', init);
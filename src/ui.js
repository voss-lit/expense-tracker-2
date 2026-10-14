// This file inahandle kupdate the webpage (DOM) to show our expenses, counts, and totals

// Import helper functions from utils.js that we need for math and filtering
import { convertCurrency, calculateTotal, filterExpenses } from './utils.js';

// Function to draw or update everything on the screen when data changes
export function renderApp(state, onDeleteCallback) {
  
  // Kufind the HTML box where the list of expenses will be shown
  const expenseListContainer = document.getElementById('expenseList');
  
  // Kufind the HTML box that displays the total money spent
  const totalExpenseDisplay = document.getElementById('totalExpenseDisplay');
  
  // Kufind the HTML box that displays how many transactions have been added
  const totalTransactionsCount = document.getElementById('totalTransactionsCount');

  // Filter the list ya expenses based on what category option the user selected
  const visibleExpenses = filterExpenses(state.expenses, state.filterCategory);

  // Calculate the ganji yote spent, converted into the user's chosen home currency
  const total = calculateTotal(state.expenses, state.homeCurrency, state.rates);

  // Update the total expense text on the screen with the home currency symbol and rounded total
  totalExpenseDisplay.textContent = `${state.homeCurrency} ${total.toFixed(2)}`;
  
  // Update the transaction count card with the total number of items in our array
  totalTransactionsCount.textContent = state.expenses.length;

  // If hakuna expenses to show, display a friendly message inside the box and stop here
  if (visibleExpenses.length === 0) {
    expenseListContainer.innerHTML = `<p>No expenses found</p>`;
    return; // Exit the function early
  }

  // Clear the expense list box before redrawing so we don't duplicate items
  expenseListContainer.innerHTML = '';

  // Loop through each individual expense in our filtered list to create HTML for it
  visibleExpenses.forEach(expense => {
    
    // Convert this specific expense amount into the user's home currency for display
    const convertedAmount = convertCurrency(
      expense.amount, 
      expense.currency, 
      state.homeCurrency, 
      state.rates
    );

    // Create a new <div> element in memory for this single expense item
    const expenseItem = document.createElement('div');
    
    // Fill the <div> with HTML showing description, category, original amount, na converted amount
    expenseItem.innerHTML = `
      <div>
        <strong>${expense.description}</strong> (${expense.category})<br>
        <small>${expense.currency} ${expense.amount.toFixed(2)} ➔ ${state.homeCurrency} ${convertedAmount.toFixed(2)}</small>
      </div>
      <button data-id="${expense.id}" class="delete-btn">Delete</button>
    `;

    // Find the delete button we just created inside this specific expense item
    const deleteBtn = expenseItem.querySelector('.delete-btn');
    
    // Add a click listener to the delete button so it calls our delete function when clicked
    deleteBtn.addEventListener('click', () => {
      onDeleteCallback(expense.id);
    });

    // Finally, add this completed expense item into the main expense list box on the webpage
    expenseListContainer.appendChild(expenseItem);
  });
}
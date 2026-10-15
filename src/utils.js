// utils.js - This file holds pure math and logic functions. 
// "Pure" means they take inputs, do calculations, and return results without changing anything outside.

/*
  Converts an amount from one currency to another using the live exchange rates.
 */
export function convertCurrency(amount, fromCurrency, toCurrency, rates) {
  // If rates haven't loaded yet or currencies are missing, just return the original amount safely
  if (!rates || !rates[fromCurrency] || !rates[toCurrency]) {
    return amount; 
  }
  
  // Step 1: Convert the expense amount into US Dollars (USD) first, because our API rates are USD-based
  const amountInUSD = amount / rates[fromCurrency];
  
  // Step 2: Convert that USD amount into the target currency (like KES, EUR, GBP)
  const convertedAmount = amountInUSD * rates[toCurrency];
  
  // Return the converted amount rounded neatly to 2 decimal places as a number
  return Number(convertedAmount.toFixed(2));
}

/*
  Calculates the total sum of all expenses combined, converted into the user's home currency.
 */
export function calculateTotal(expenses, homeCurrency, rates) {
  // Use the .reduce() array method to loop through all expenses and add up their converted values
  return expenses.reduce((sum, expense) => {
    // Convert this individual expense to the home currency
    const converted = convertCurrency(expense.amount, expense.currency, homeCurrency, rates);
    // Add it to our running total sum
    return sum + converted;
  }, 0); // Start the running sum at 0
}

/*
  Filters the list of expenses so the user only sees items matching their selected category.
 */
export function filterExpenses(expenses, category) {
  // If the user selected 'all' or didn't pick a category, return the full list of expenses
  if (!category || category === 'all') {
    return expenses;
  }
  
  // Otherwise, use .filter() to keep only the expenses that match the selected category
  return expenses.filter(expense => expense.category === category);
}
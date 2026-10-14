// This file inahandle kuongea na the internet (API) to get live exchange rates

// inastore the API web address in a constant variable so we can use it easily
const API_URL = 'https://open.er-api.com/v6/latest/USD';

// Tumecreate function to fetch the rates 
// ('async' means inawait patiently for the internet response)
export async function fetchExchangeRates() {
  try {
    // Send a request to the API web address and wait for the response kurudi
    const response = await fetch(API_URL);
    
    // Check ka response from the server was successful (status code 200-299)
    if (!response.ok) {
      // iki fail, stop right here and throw an error message
      throw new Error('Failed to fetch exchange rates');
    }

    // Convert the raw response data into a JavaScript object (JSON format)
    const data = await response.json();
    
    // Return only the 'rates' part of the data (which contains USD, KES, EUR, GBP values)
    return data.rates;
    
  } catch (error) {
    // Ka hakuna mneti or the server is down, show the error in the browser console
    console.error('Error fetching exchange rates:', error);
    
    // Throw the error so the main file knows nikubaya  na ita handle it
    throw error;
  }
}
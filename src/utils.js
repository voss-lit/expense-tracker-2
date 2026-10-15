export function convertCurrency(amount, fromCurrency, toCurrency, rates){
const amountInUSD = amount / rates[fromCurrency]

return amountInUSD * rates[toCurrency]
}
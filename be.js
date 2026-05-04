const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  VND: 26371.31,
  AUD: 1.39,
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (amount < 0) {
    return 'Error: Amount cannot be negative';
  }
  
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    return 'Error: Invalid currency code';
  }
  
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];
  
  return parseFloat(convertedAmount.toFixed(2));
}

function getAvailableCurrencies() {
  return Object.keys(exchangeRates);
}

function getExchangeRate(fromCurrency, toCurrency) {
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    return 'Error: Invalid currency code';
  }
  
  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  return parseFloat(rate.toFixed(4));
}

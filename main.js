const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const showCurrency = (value) => {
  document.getElementById('result').innerHTML = currencyFormat.format(value);
}
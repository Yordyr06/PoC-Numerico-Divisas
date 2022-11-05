const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  var value = 10000

  console.log(formatter.format(value)) // "$10,000
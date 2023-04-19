function convert() {
  const inputEuro = document.getElementById('value-input').value;
  fetch('https://api.exchangerate-api.com/v4/latest/EUR')
  .then(response => response.json())
  .then(data => { 
    const rate = data.rates.BRL;
    const resultConversion = inputEuro * rate ;
    document.getElementById('result').innerHTML = `${inputEuro} Euro(s) = ${resultConversion.toFixed('2')} Real(is)`;
  })
  .catch(error => console.error(error));
}
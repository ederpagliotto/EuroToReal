function convert() {
    const euroInput = document.getElementById('value-input').value;
    fetch('https://api.exchangerate-api.com/v4/latest/EUR')
      .then(response => response.json())
      .then(data => {
        const rate = data.rates.BRL;
        const realValue = euroInput * rate;
        document.getElementById('result').innerHTML = `${euroInput} Euro = ${realValue.toFixed(2)} Real`;
      })
      .catch(error => console.error(error));
  }
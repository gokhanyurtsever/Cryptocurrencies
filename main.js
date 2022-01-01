fetch('https://api.cryptonator.com/api/ticker/btc-usd')
 .then(response => response.json())
 .then(data => {
    var tbody = document.querySelector('#tbody');
   tbody.innerHTML = `
   <tr>
<td>${data.ticker.base}</td>
<td>${data.ticker.target}</td>
<td>${data.ticker.price}</td>
<td>${data.ticker.volume}</td>
<td>${data.ticker.change}</td>
   </tr>
`

  }
)
 .catch(err => console.log(err))


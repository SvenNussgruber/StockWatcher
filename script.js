fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=msft,aapl,googl,fb,tsla,crm&types=quote,logo`).then(function(result){
    return result.json();
}).then(function(result){
    return techInit(result);
})

function techInit(resultFromServer){
    console.log(resultFromServer);

    let tech1Header = document.getElementById('tech1Header');
    let tech1CompanyTitle = document.getElementById('tech1CompanyTitle');
    let tech1Logo = document.getElementById('tech1Logo');

    tech1Header.innerHTML = resultFromServer.AAPL.quote.symbol + '&nbsp &nbsp &nbsp &nbsp$' + resultFromServer.AAPL.quote.latestPrice;
    tech1CompanyTitle.innerHTML = resultFromServer.AAPL.quote.companyName;

    tech1Logo.src = resultFromServer.AAPL.logo.url;
    


}
fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft,googl,tsla&types=quote,logo`).then(function(result){
    return result.json();
}).then(function(result){
    return techInit(result);
})

function round(x){
    return Number.parseFloat(x).toFixed(2);
}

function techInit(resultFromServer){
    console.log(resultFromServer);

    //Assign and populate Tech1 (AAPL) Card
    let aaplCard = document.getElementById('aaplCard');
    let tech1LatestPrice = document.getElementById('tech1LatestPrice');
    let tech1CompanyTitle = document.getElementById('tech1CompanyTitle');
    let tech1OpenPrice = document.getElementById('tech1OpenPrice');
    let tech1High52 = document.getElementById('tech1High52');
    let tech1Low52 = document.getElementById('tech1Low52');
    let tech1PERatio = document.getElementById('tech1PERatio');

    if(Number.parseFloat(resultFromServer.AAPL.quote.change) < 0){
        aaplCard.classList.remove('bg-success');
        aaplCard.classList.add('bg-danger');
    }

    tech1LatestPrice.innerHTML = `$${round(resultFromServer.AAPL.quote.latestPrice)}`;
    tech1CompanyTitle.innerHTML += `&nbsp(${round(resultFromServer.AAPL.quote.change)}%)`;
    tech1OpenPrice.innerHTML = `Open Price: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${round(resultFromServer.AAPL.quote.open)}`;
    tech1High52.innerHTML = `52 Week High: &nbsp $${round(resultFromServer.AAPL.quote.week52High)}`;
    tech1Low52.innerHTML = `52 Week Low: &nbsp&nbsp $${round(resultFromServer.AAPL.quote.week52Low)}`;
    tech1PERatio.innerHTML = `P/E Ratio: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${resultFromServer.AAPL.quote.peRatio}`;

    //Assign and populate Tech2 (MSFT) Card
    let msftCard = document.getElementById('msftCard');
    let tech2LatestPrice = document.getElementById('tech2LatestPrice');
    let tech2CompanyTitle = document.getElementById('tech2CompanyTitle');
    let tech2OpenPrice = document.getElementById('tech2OpenPrice');
    let tech2High52 = document.getElementById('tech2High52');
    let tech2Low52 = document.getElementById('tech2Low52');
    let tech2PERatio = document.getElementById('tech2PERatio');

    if(Number.parseFloat(resultFromServer.MSFT.quote.change) < 0){
        msftCard.classList.remove('bg-success');
        msftCard.classList.add('bg-danger');
    }
    
    tech2LatestPrice.innerHTML = `$${round(resultFromServer.MSFT.quote.latestPrice)}`;
    tech2CompanyTitle.innerHTML += `&nbsp(${round(resultFromServer.MSFT.quote.change)}%)`;
    tech2OpenPrice.innerHTML = `Open Price: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${round(resultFromServer.MSFT.quote.open)}`;
    tech2High52.innerHTML = `52 Week High: &nbsp $${round(resultFromServer.MSFT.quote.week52High)}`;
    tech2Low52.innerHTML = `52 Week Low: &nbsp&nbsp $${round(resultFromServer.MSFT.quote.week52Low)}`;
    tech2PERatio.innerHTML = `P/E Ratio: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${resultFromServer.MSFT.quote.peRatio}`;

    //Assign and populate Tech3 (GOOGL) Card
    let googlCard = document.getElementById('googlCard');
    let tech3LatestPrice = document.getElementById('tech3LatestPrice');
    let tech3CompanyTitle = document.getElementById('tech3CompanyTitle');
    let tech3OpenPrice = document.getElementById('tech3OpenPrice');
    let tech3High52 = document.getElementById('tech3High52');
    let tech3Low52 = document.getElementById('tech3Low52');
    let tech3PERatio = document.getElementById('tech3PERatio');

    if(Number.parseFloat(resultFromServer.GOOGL.quote.change) < 0){
        googlCard.classList.remove('bg-success');
        googlCard.classList.add('bg-danger');
    }
    
    tech3LatestPrice.innerHTML = `$${round(resultFromServer.GOOGL.quote.latestPrice)}`;
    tech3CompanyTitle.innerHTML += `&nbsp(${round(resultFromServer.GOOGL.quote.change)}%)`;
    tech3OpenPrice.innerHTML = `Open Price: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${round(resultFromServer.GOOGL.quote.open)}`;
    tech3High52.innerHTML = `52 Week High: &nbsp $${round(resultFromServer.GOOGL.quote.week52High)}`;
    tech3Low52.innerHTML = `52 Week Low: &nbsp&nbsp $${round(resultFromServer.GOOGL.quote.week52Low)}`;
    tech3PERatio.innerHTML = `P/E Ratio: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${resultFromServer.GOOGL.quote.peRatio}`;

    //Assign and populate Tech4 (TSLA) Card
    let tslaCard = document.getElementById('tslaCard');
    let tech4LatestPrice = document.getElementById('tech4LatestPrice');
    let tech4CompanyTitle = document.getElementById('tech4CompanyTitle');
    let tech4OpenPrice = document.getElementById('tech4OpenPrice');
    let tech4High52 = document.getElementById('tech4High52');
    let tech4Low52 = document.getElementById('tech4Low52');
    let tech4PERatio = document.getElementById('tech4PERatio');

    if(Number.parseFloat(resultFromServer.TSLA.quote.change) < 0){
        tslaCard.classList.remove('bg-success');
        tslaCard.classList.add('bg-danger');
    }
    
    tech4LatestPrice.innerHTML = `$${round(resultFromServer.TSLA.quote.latestPrice)}`;
    tech4CompanyTitle.innerHTML += `&nbsp(${round(resultFromServer.TSLA.quote.change)}%)`;
    tech4OpenPrice.innerHTML = `Open Price: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${round(resultFromServer.TSLA.quote.open)}`;
    tech4High52.innerHTML = `52 Week High: &nbsp $${round(resultFromServer.TSLA.quote.week52High)}`;
    tech4Low52.innerHTML = `52 Week Low: &nbsp&nbsp $${round(resultFromServer.TSLA.quote.week52Low)}`;
    tech4PERatio.innerHTML = `P/E Ratio: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${resultFromServer.TSLA.quote.peRatio}`;
}
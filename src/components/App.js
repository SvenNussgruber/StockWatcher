import React, { Component } from 'react';
import '../css/App.css';
import StockCard from './StockCard';

class App extends Component {
    render() {
        return (
            <main className="page bg-white pb-3 ">
                <div className="container">
                    <div className="row pt-3">
                        <h2 className="pl-3">Top Tech Stocks</h2>
                    </div>
                    <div className="tech-row pt-3 d-flex">
                        <div className="col-sm-3">
                            <StockCard url="https://api.iextrading.com/1.0/stock/aapl/quote"/>
                        </div>
                        <div className="col-sm-3">
                            <StockCard url="https://api.iextrading.com/1.0/stock/msft/quote"/>
                        </div>
                        <div className="col-sm-3">
                            <StockCard url="https://api.iextrading.com/1.0/stock/googl/quote"/>
                        </div>
                        <div className="col-sm-3">
                            <StockCard url="https://api.iextrading.com/1.0/stock/tsla/quote"/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;

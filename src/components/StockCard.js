import React, { Component } from 'react';

class StockCard extends Component{
    constructor(){
        super();
        this.state={
            companyName: '',
            latestPrice: '',
            companySymbol: '',
            change: '',
            openPrice: '',
            week52High: '',
            week52Low: '',
            peRatio: '',
            changeClass: '',
        }
    }

    componentDidMount(){
        function round(x){
            return Number.parseFloat(x).toFixed(2);
        }

        fetch(this.props.url)
            .then(response => response.json())
            .then(result => {

                const latestPriceRounded = round(result.latestPrice);
                const openRounded = round(result.open);
                const week52HighRounded = round(result.week52High);
                const week52LowRounded = round(result.week52Low);

                this.setState({
                    companyName: result.companyName,
                    latestPrice: latestPriceRounded,
                    companySymbol: result.symbol,
                    change: result.change,
                    openPrice: openRounded,
                    week52High: week52HighRounded,
                    week52Low: week52LowRounded,
                    peRatio: result.peRatio,
                });

                if(Number.parseFloat(result.change) > 0){
                    this.setState({
                        changeClass: 'bg-success',
                    })
                }else if(Number.parseFloat(result.change) < 0){
                    this.setState({
                        changeClass: 'bg-danger',
                    })
                }
            })
    }
    

    render(){
        return(
            <div className={"card text-white mb-3 " + this.state.changeClass}>
                <div className="card-header d-flex">
                    <div className="font-weight-bold text-truncate">{this.state.companyName}</div>
                    <div className="ml-auto pl-1 font-weight-bold">${this.state.latestPrice}</div>
                </div>
                <div className="card-body pt-2 pb-2">
                    <div><u>{this.state.companySymbol}</u> (${this.state.change})</div>
                    <div className="d-flex flex-column pt-2">
                        <div className="d-flex">Open Price: <span className="ml-auto">${this.state.openPrice}</span></div>
                        <div className="d-flex">52 Week High: <span className="ml-auto">${this.state.week52High}</span></div>
                        <div className="d-flex">52 Week Low: <span className="ml-auto">${this.state.week52Low}</span></div>
                        <div className="d-flex">P/E Ratio: <span className="ml-auto">{this.state.peRatio}</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StockCard;
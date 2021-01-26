import { Component } from 'react';
import { Chart } from '../../cmps/Chart/Chart';
import { bitcoinService } from '../../services/bitcoinService';
import './ChartList.scss'

export class ChartList extends Component {
    state = {
        marketPriceData: null,
        confirmedTransactionsData: null
    }

    componentDidMount(){
        this.marketPrice();
        this.confirmedTransactions();
    }

    async marketPrice(){
        const marketPriceData = await bitcoinService.getMarketPrice()
        this.setState({marketPriceData})
    }

    async confirmedTransactions() {
        const confirmedTransactionsData = await bitcoinService.getConfirmedTransactions();
        this.setState({ confirmedTransactionsData })
    }

    render() {
        const { marketPriceData, confirmedTransactionsData } = this.state;
        return (
            <div>
                <div className="chart-box">
                    <h2>Market Price</h2>
                    <h3>Average USD market price across major bitcoin exchanges.</h3>
                    { marketPriceData && <Chart data={ marketPriceData } /> }
                </div>

                <div className="chart-box">
                    <h2>Confirmed Transactions Over The Last 5 Months</h2>
                    <h3>The number of daily confirmed Bitcoin transactions.</h3>
                    { confirmedTransactionsData && <Chart data={ confirmedTransactionsData } /> }
                </div>
            </div>
        )
    }
}

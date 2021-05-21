
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartList } from '../../cmps/ChartList/ChartList';
import { userService } from '../../services/userServices';
import { bitcoinService } from '../../services/bitcoinService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import './MisterBitCoinApp.scss';
import { Hero } from '../../cmps/Hero/Hero';

export default class  MisterBitCoinApp extends React.Component {
    state = {
        user: userService.getUser(),
        rate: null,
        marketPrice: null
    }

    componentDidMount(){
        this.loadRate()
        this.marketPrice()
    }

    async loadRate(){
        const rate = await bitcoinService.getRate()
        this.setState({rate})
    }

    async marketPrice(){
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({marketPrice})
    }

    render() {
        const {user, rate} = this.state
        return (
            <>
                <Hero />
                <div className="container mister-bitcoin-app">
                    <h2>Hi {user.name}</h2> 
                    <p><span className="mister-bitcoin-app-icon mister-bitcoin-app-icon-btc">
                        <FontAwesomeIcon icon={faBitcoin} size="2x" /></span> Coins: {user.coins}
                    </p> 
                    <p><span className="mister-bitcoin-app-icon mister-bitcoin-app-icon-btc">
                        <FontAwesomeIcon icon={faCoins} size="2x" /></span> BTC: {rate}
                    </p>        
                    <ChartList />
                    <Link to="/contact/edit/:id">Add Contact</Link>
                </div>
            </>
        );
    }
}



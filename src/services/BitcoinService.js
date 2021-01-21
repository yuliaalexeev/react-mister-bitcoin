import { storageService } from './storageService.js';
import axios from 'axios';

async function getRate() {
    try {
        const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
        return res.data;
    } catch (err) {
        console.log('Cannot get rate', err);
    }
}

const STORAGE_MARKET_PRICE_KEY = 'BitCoins_MarketPrice';
const STORAGE_CONFIRNED_TRANSACTIONS_KEY = 'BitCoins_ConfirmedTransactions';

async function getMarketPrice() {
    try {
        const marketFromStorage = storageService.load(STORAGE_MARKET_PRICE_KEY);
        
        if (marketFromStorage || !navigator.onLine) {
            const data = marketFromStorage.map(val => val.y);
            return data;
        }
        
        const marketPriceRes = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
        storageService.store(STORAGE_MARKET_PRICE_KEY, marketPriceRes.data.values);
        return marketFromStorage.data.values;

    } catch (err) {
        console.log('Cannot get market price', err);
    }
}

async function getConfirmedTransactions() {
    try {
        const confirmedFromStorage = storageService.load(STORAGE_CONFIRNED_TRANSACTIONS_KEY);
        
        if (confirmedFromStorage) {
            const data = confirmedFromStorage.map(val => val.y);
            return data;
        }
        
        const confirmedTransactionsRes = await axios.get('https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true');
        storageService.store(STORAGE_CONFIRNED_TRANSACTIONS_KEY, confirmedTransactionsRes.data.values);
        return confirmedFromStorage.data.values;

    } catch (err) {
        console.log('Cannot get confirmed transactions', err);
    }
}

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}
import axios from 'axios';

export const getStockQuote = symbol => axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`);

export const getStockEarnings = symbol => axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/earnings`);

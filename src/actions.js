import * as Constants from './constants';

export const getStock = symbol => ({
  type: Constants.GET_STOCK_DATA,
  symbol,
});


export const getStockFailure = () => ({
  type: Constants.GET_STOCK_DATA_FAILURE,
});


export const getStockSuccess = (symbol, data) => ({
  type: Constants.GET_STOCK_DATA_SUCCESS,
  symbol,
  data,
});

export const removeStock = symbol => ({
  type: Constants.REMOVE_STOCK,
  symbol,
});

export const removeAllStocks = () => ({
  type: Constants.REMOVE_ALL_STOCKS,
});

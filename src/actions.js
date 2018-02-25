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

export const removeStock = () => ({
  type: Constants.REMOVE_TOGGLED_STOCKS,
});

export const removeAllStocks = () => ({
  type: Constants.REMOVE_ALL_STOCKS,
});

export const toggleStock = symbol => ({
  type: Constants.TOGGLE_STOCK,
  symbol,
});

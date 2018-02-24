import { combineReducers } from 'redux';
import * as Constants from './constants';

const initialGlobalState = {

};

const initialStockDataState = {

};

const global = (state = initialGlobalState, action) => {
  switch (action.type) {
    case '1':
      return state;
    default:
      return state;
  }
};


const stockData = (state = initialStockDataState, action) => {
  switch (action.type) {
    case Constants.GET_STOCK_DATA_SUCCESS:
      return { ...state, [action.symbol]: action.data };
    case Constants.REMOVE_STOCK: {
      const newState = { ...state };
      delete newState[action.symbol];
      return newState;
    }
    case Constants.REMOVE_ALL_STOCKS:
      return initialStockDataState;
    default:
      return state;
  }
};

const reducers = combineReducers({
  global,
  stockData,
});

export default reducers;

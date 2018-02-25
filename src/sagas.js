import { put, takeLatest, all, call } from 'redux-saga/effects';
import * as Constants from './constants';
import * as API from './utils/';
import * as Actions from './actions';

function* getStockData({ symbol }) {
  try {
    const stockQuote = yield call(API.getStockQuote, symbol);
    console.log(JSON.stringify(stockQuote));

    yield put(Actions.getStockSuccess(stockQuote.data.symbol, stockQuote.data));
  } catch (e) {
    yield put(Actions.getStockFailure());
  }
}

function* rootSaga() {
  yield all([
    takeLatest(Constants.GET_STOCK_DATA, getStockData),
  ]);
}

export default rootSaga;

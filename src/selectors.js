import { createSelector } from 'reselect';

const globalSelector = state => state;
const stockDataSelector = state => state.stockData;

export const makeSelectGlobalSelector = () => createSelector(
  globalSelector,
  global => global,
);

export const makeSelectStockDataSelector = () => createSelector(
  stockDataSelector,
  global => global,
);

export const makeSelectStockDataAsListSelector = () => createSelector(
  stockDataSelector,
  global => Object.values(global),
);

export const makeSelectToggledStockDataAsListSelector = () => createSelector(
  makeSelectStockDataAsListSelector(),
  global => global.filter(stock => stock.toggled),
);

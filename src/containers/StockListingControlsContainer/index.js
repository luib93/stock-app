import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StockListingControls from '../../components/StockListingControls';
import { makeSelectToggledStockDataAsListSelector, makeSelectStockDataAsListSelector } from '../../selectors';
import { getStock, removeStock, removeAllStocks } from '../../actions';

export const StockListingControlsContainer = props => (
  <StockListingControls
    onAdd={props.getStock}
    onRemove={props.removeStock}
    onRemoveAll={props.removeAllStocks}
    numToggledItems={props.toggledStocks.length}
    numAllItems={props.allStocks.length}
  />
);

StockListingControlsContainer.propTypes = {
  getStock: PropTypes.func.isRequired,
  removeStock: PropTypes.func.isRequired,
  removeAllStocks: PropTypes.func.isRequired,
  toggledStocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  allStocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  toggledStocks: makeSelectToggledStockDataAsListSelector(),
  allStocks: makeSelectStockDataAsListSelector(),
});

export default connect(
  mapStateToProps,
  { getStock, removeStock, removeAllStocks },
)(StockListingControlsContainer);

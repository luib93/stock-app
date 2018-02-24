import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StockListingControls from '../../components/StockListingControls';
import { getStock, removeStock, removeAllStocks } from '../../actions';

export const StockListingControlsContainer = props => (
  <StockListingControls
    onAdd={props.getStock}
    onRemove={props.removeStock}
    onRemoveAll={props.removeAllStocks}
  />
);

StockListingControlsContainer.propTypes = {
  getStock: PropTypes.func.isRequired,
  removeStock: PropTypes.func.isRequired,
  removeAllStocks: PropTypes.func.isRequired,
};

export default connect(
  null,
  { getStock, removeStock, removeAllStocks },
)(StockListingControlsContainer);

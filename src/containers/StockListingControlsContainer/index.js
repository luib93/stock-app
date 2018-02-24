import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StockListingControls from '../../components/StockListingControls';
import { getStock } from '../../actions';

export const StockListingControlsContainer = props => (
  <StockListingControls onAdd={props.getStock} />
);

StockListingControlsContainer.propTypes = {
  getStock: PropTypes.func.isRequired,
};

export default connect(null, { getStock })(StockListingControlsContainer);

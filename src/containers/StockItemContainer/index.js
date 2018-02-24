import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import StockItem from '../../components/StockItem';
import { makeSelectStockDataAsListSelector } from '../../selectors';

/* eslint-disable react/prefer-stateless-function */
export class StockItemContainer extends Component {
  componentDidMount() {

  }

  renderAllStocks = () => this.props.stocks.map(stock => (<StockItem
    key={stock.symbol}
    symbol={stock.symbol}
    price={stock.latestPrice}
    open={stock.open}
    high={stock.high}
    low={stock.low}
    volume={stock.latestVolume}
  />))

  render() {
    return (
      <React.Fragment>
        {this.renderAllStocks()}
      </React.Fragment>
    );
  }
}

// <StockItem symbol="MSFT" price="$100" open="$100" low="$100" high="$100" volume="1.10M" />
StockItemContainer.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  stocks: makeSelectStockDataAsListSelector(),
});

export default connect(mapStateToProps)(StockItemContainer);

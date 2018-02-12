import React from 'react';
import PropType from 'prop-types';
import { Checkbox, Table } from 'semantic-ui-react';

const StockItem = ({
  symbol, price, open, high, low, volume,
}) => (
  <Table.Row>
    <Table.Cell collapsing>
      <Checkbox />
    </Table.Cell>
    <Table.Cell>{symbol}</Table.Cell>
    <Table.Cell>{price}</Table.Cell>
    <Table.Cell>{open}</Table.Cell>
    <Table.Cell>{high}</Table.Cell>
    <Table.Cell>{low}</Table.Cell>
    <Table.Cell>{volume}</Table.Cell>
  </Table.Row>
);

StockItem.propTypes = {
  symbol: PropType.string,
  price: PropType.string,
  open: PropType.string,
  high: PropType.string,
  low: PropType.string,
  volume: PropType.string,
};

StockItem.defaultProps = {
  symbol: '',
  price: '',
  open: '',
  high: '',
  low: '',
  volume: '',
};

export default StockItem;
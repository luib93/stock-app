import React from 'react';
import PropType from 'prop-types';
import { Checkbox, Table } from 'semantic-ui-react';

const StockItem = ({
  symbol, price, open, high, low, volume, onToggle,
}) => {
  const handleChange = () => {
    onToggle(symbol);
  };

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox onChange={handleChange} disabled={!onToggle} />
      </Table.Cell>
      <Table.Cell>{symbol}</Table.Cell>
      <Table.Cell>{price ? `$${price}` : ''}</Table.Cell>
      <Table.Cell>{open ? `$${open}` : ''}</Table.Cell>
      <Table.Cell>{high ? `$${high}` : ''}</Table.Cell>
      <Table.Cell>{low ? `$${low}` : ''}</Table.Cell>
      <Table.Cell>{volume}</Table.Cell>
    </Table.Row>
  );
};

StockItem.propTypes = {
  symbol: PropType.string,
  price: PropType.number,
  open: PropType.number,
  high: PropType.number,
  low: PropType.number,
  volume: PropType.number,
  onToggle: PropType.func,
};

StockItem.defaultProps = {
  symbol: '',
  price: '',
  open: '',
  high: '',
  low: '',
  volume: '',
  onToggle: undefined,
};

export default StockItem;

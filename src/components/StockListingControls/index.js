import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'semantic-ui-react';

class StockListingControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.input || this.state.input.length === 0) {
      return;
    }

    this.props.onAdd(this.state.input);

    this.setState({
      input: '',
    });
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input value={this.state.input} onChange={this.handleInputChange} style={{ float: 'right' }} action="Add" placeholder="Symbol" />
        <Button type="button" disabled={this.props.numToggledItems === 0} onClick={this.props.onRemove} size="small">Remove</Button>
        <Button type="button" disabled={this.props.numAllItems === 0} onClick={this.props.onRemoveAll} size="small">Remove All</Button>
      </form>
    );
  }
}

StockListingControls.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRemoveAll: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  numToggledItems: PropTypes.number.isRequired,
  numAllItems: PropTypes.number.isRequired,
};

export default StockListingControls;

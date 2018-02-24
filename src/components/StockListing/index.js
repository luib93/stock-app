import React from 'react';
import { Icon, Table, Container, Header } from 'semantic-ui-react';
import StockItem from '../../containers/StockItemContainer';
import StockListingControls from '../../containers/StockListingControlsContainer';

const StockListing = () => (
  <Container>
    <Header as="h2" style={{ marginBottom: '30px' }}>
      <Icon name="money" />
      <Header.Content>
      Watched Stocks
        <Header.Subheader>
        Manage your stocks
        </Header.Subheader>
      </Header.Content>
    </Header>
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Symbol</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Open</Table.HeaderCell>
          <Table.HeaderCell>High</Table.HeaderCell>
          <Table.HeaderCell>Low</Table.HeaderCell>
          <Table.HeaderCell>Volume</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <StockItem />
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="7">
            <StockListingControls />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </Container>
);

export default StockListing;


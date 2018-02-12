import React from 'react';
import { Button, Icon, Table, Container, Header } from 'semantic-ui-react';
import StockItem from '../StockItem';

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
        <StockItem symbol="MSFT" price="$100" open="$100" low="$100" high="$100" volume="1.10M" />
        <StockItem symbol="GOOGL" price="$100" open="$100" low="$100" high="$100" volume="1.10M" />
        <StockItem symbol="AAPL" price="$100" open="$100" low="$100" high="$100" volume="1.10M" />
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="7">
            <Button floated="right" icon labelPosition="left" primary size="small">
              <Icon name="bar chart" /> Add Symbol
            </Button>
            <Button size="small">Remove</Button>
            <Button disabled size="small">Remove All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </Container>
);

export default StockListing;


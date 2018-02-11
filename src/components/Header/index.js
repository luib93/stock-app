import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu fixed="top" inverted style={{ backgroundColor: '#006400' }}>
    <Container>
      <Menu.Item as={Link} to="/" header>
        StockSearch
      </Menu.Item>
      <Menu.Item as={Link} to="/stocks" header>
        Stocks
      </Menu.Item>
      <Menu.Item as={Link} to="/commodities" header>
        Commodities
      </Menu.Item>
      <Menu.Item as={Link} to="/bonds" header>
        Bonds
      </Menu.Item>
      <Menu.Item as={Link} position="right" to="/login">My Account</Menu.Item>
    </Container>
  </Menu>
);

export default Header;

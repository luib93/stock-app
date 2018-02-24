import React from 'react';
import { Container, Divider, List, Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment
    inverted
    vertical
    fixed="bottom"
    style={{
 margin: '5em 0em 0em', padding: '5em 0em', width: '100%', backgroundColor: '#006400',
}}
  >
    <Container textAlign="center">
      <List horizontal inverted divided link>
        <List.Item as="a" href="#">Site Map</List.Item>
        <List.Item as="a" href="#">Contact Us</List.Item>
        <List.Item as="a" href="#">Terms and Conditions</List.Item>
        <List.Item as="a" href="#">Privacy Policy</List.Item>
      </List>
      <Divider />
            By Brian Lui
    </Container>
  </Segment>
);

export default Footer;

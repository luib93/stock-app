import React from 'react';
import { Image, Header, Grid, Button } from 'semantic-ui-react';
import MoneyImage from '../../images/money-image.png';

const WelcomePanel = () => (
  <Grid container stackable verticalAlign="middle">
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as="h3" style={{ fontSize: '2em' }}>Stocks in one place</Header>
        <p style={{ fontSize: '1.33em' }}>
              All the information you need to make informed trades.
        </p>
        <Header as="h3" style={{ fontSize: '2em' }}>Personalized for you</Header>
        <p style={{ fontSize: '1.33em' }}>
              Keep track of stocks that matter most to you and nothing else.
        </p>
      </Grid.Column>
      <Grid.Column floated="right" width={6}>
        <Image
          bordered
          rounded
          size="large"
          src={MoneyImage}
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Button size="huge">Try it out now</Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WelcomePanel;

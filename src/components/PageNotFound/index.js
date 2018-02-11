import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const PageNotFound = () => (
  <Container text>
    <Header
      as="h1"
      content="Page not found!"
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
  </Container>
);

export default PageNotFound;

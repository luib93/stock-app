import React from 'react';
import { Button, Checkbox, Form, Segment, Container, Header, Icon } from 'semantic-ui-react';

const RegisterForm = () => (
  <Container text>
    <Header as="h2" style={{ marginBottom: '30px' }}>
      <Icon name="user" />
      <Header.Content>
        User Registration
        <Header.Subheader>
        Make a new account
        </Header.Subheader>
      </Header.Content>
    </Header>
    <Segment.Group stacked>
      <Segment>
        <Form>
          <Form.Input label="First Name" type="text" />
          <Form.Input label="Last Name" type="text" />
          <Form.Input label="Username" type="text" />
          <Form.Input label="Password" type="password" />
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </Segment.Group>
  </Container>
);

export default RegisterForm;

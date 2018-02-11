import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Footer from './components/Footer';
import AppHeader from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WelcomePanel from './components/WelcomePanel';
import PageNotFound from './components/PageNotFound';
import StockListing from './components/StockListing';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />

        <Segment basic style={{ padding: '8em 0em' }} vertical>
          <Switch>
            <Route exact path="/" component={WelcomePanel} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/stocks" component={StockListing} />
            <Route component={PageNotFound} />
          </Switch>
        </Segment>

        <Footer />
      </div>
    );
  }
}

export default App;

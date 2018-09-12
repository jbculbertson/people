import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/login';
import LoggedInContainer from './components/logged_in_container';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/people" component={LoggedInContainer} />
      </Switch>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/register';
import Login from './components/login';
import LoggedInContainer from './components/logged_in_container';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/people" component={LoggedInContainer} />
      </Switch>
    );
  }
}

export default App;

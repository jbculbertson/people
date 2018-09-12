import React, { Component } from 'react';
import { Form, Segment, Grid, Header } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    };
  }

  handleSubmit(event) {
    // event.preventDefault();
    // const user = {
    //   username: this.state.username,
    //   password: this.state.password,
    // };
    // const that = this;
    // panda.authenticate(user)
    //   .then(data => {
    //     if (data) {
    //       localStorage.setItem('access_token', data);
    //       that.setState({ redirectToReferrer: true });
    //     }
    //   });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }


  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      // <Redirect to="/sponsors" />
      return (
        <div>ABC</div>
      );
    }

    return (
      <div className="login-form">
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Login to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                />
                <Form.Button type="submit" color="teal" fluid size="large">Submit</Form.Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;

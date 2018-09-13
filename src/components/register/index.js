import React, { Component } from 'react';
import { Form, Segment, Grid, Header, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../actions/index.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      username: '',
      password: '',
      redirectToLogin: false,
    };
  }

  toLogin() {
    this.setState({ redirectToLogin: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.register(user);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }


  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { redirectToLogin } = this.state;
    const { currentUser } = this.props;
    if (currentUser && currentUser._id) {
      return (
        <Redirect to="/people" />
      );
    }

    if (redirectToLogin) {
      return (
        <Redirect to="/login" />
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
              Register for an account
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
              <Message>
                Already have an account? <a onClick={() => this.toLogin()}>Sign In</a>
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  register,
}, dispatch);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignupForm from '../Components/SignupForm/SignupForm';
import { createUser } from '../services/userAPI';
import Loading from '../Components/Loading/Loading';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      loading: false,
      redirect: false,
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    this.setState({ loading: true }, async () => {
      await createUser({ name });
      this.setState({ loading: false, redirect: true });
    });
  }

  render() {
    const { name, loading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        {loading ? (
          <Loading />
        ) : (
          <SignupForm
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            name={ name }
          />
        )}
        {redirect ? <Redirect to="/search" /> : null}
      </div>
    );
  }
}

export default Login;

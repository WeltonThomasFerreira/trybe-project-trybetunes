import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import SignupForm from '../Components/SignupForm/SignupForm';
import Loading from '../Components/Loading/Loading';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRender = this.handleRender.bind(this);
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

  // Não parece ser um nome muito bom
  handleRender() {
    const { name, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <SignupForm
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
        name={ name }
      />
    );
  }

  render() {
    const { redirect } = this.state;
    return (
      <div data-testid="page-login">
        {this.handleRender()}
        {redirect ? <Redirect to="/search" /> : null}
      </div>
    );
  }
}

export default Login;

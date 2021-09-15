import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from '../SubmitButton/SubmitButton';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.validade = this.validate.bind(this);
  }

  validate() {
    const { name } = this.props;
    const MINIMUN = 3;
    return name.length < MINIMUN;
  }

  render() {
    const { handleChange, handleSubmit, name } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
            onChange={ handleChange }
            value={ name }
            data-testid="login-name-input"
          />
        </label>
        <SubmitButton testId="login-submit-button" disabled={ this.validate() } />
      </form>
    );
  }
}

SignupForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;

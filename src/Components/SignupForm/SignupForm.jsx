import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from '../SubmitButton/SubmitButton';

function SignupForm(props) {
  const { handleChange, handleSubmit, name } = props;

  function validate() {
    const MINIMUN = 3;
    return name.length < MINIMUN;
  }

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
      <SubmitButton testId="login-submit-button" disabled={ validate() } />
    </form>
  );
}

SignupForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;

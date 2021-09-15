import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitButton extends Component {
  render() {
    const { testId, disabled } = this.props;
    return (
      <button disabled={ disabled } type="submit" data-testid={ testId }>
        Entrar
      </button>
    );
  }
}

SubmitButton.propTypes = {
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SubmitButton;

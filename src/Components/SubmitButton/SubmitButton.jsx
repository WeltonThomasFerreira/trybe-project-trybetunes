import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitButton extends Component {
  render() {
    const { testId, disabled, text } = this.props;
    return (
      <button disabled={ disabled } type="submit" data-testid={ testId }>
        {text}
      </button>
    );
  }
}

SubmitButton.propTypes = {
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;

import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton(props) {
  const { testId, disabled } = props;
  return (
    <button disabled={ disabled } type="submit" data-testid={ testId }>
      Entrar
    </button>
  );
}

SubmitButton.propTypes = {
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SubmitButton;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from '../SubmitButton/SubmitButton';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.validade = this.validate.bind(this);
  }

  validate() {
    const { name } = this.props;
    const MINIMUN = 2;
    return name.length < MINIMUN;
  }

  render() {
    const { handleChange, handleSubmit, name } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <input
          placeholder="Artist name"
          id="artistName"
          name="artistName"
          type="text"
          onChange={ handleChange }
          value={ name }
          data-testid="search-artist-input"
        />
        <SubmitButton
          testId="search-artist-button"
          disabled={ this.validate() }
          text="Pesquisar"
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

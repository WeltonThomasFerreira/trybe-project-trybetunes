import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import SearchForm from '../Components/SearchForm/SearchForm';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <SearchForm
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
          name={ name }
        />
      </div>
    );
  }
}

export default Search;

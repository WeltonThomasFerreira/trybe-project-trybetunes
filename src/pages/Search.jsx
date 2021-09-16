import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import SearchForm from '../Components/SearchForm/SearchForm';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';
import Album from '../Components/Album/Album';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.state = {
      name: '',
      loading: false,
      albumsFromAPI: null,
      lastSearch: '',
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    this.setState({ loading: true, lastSearch: name }, async () => {
      const response = await searchAlbumsAPIs(name);
      this.setState({ loading: false, name: '', albumsFromAPI: response });
    });
  }

  handleRender() {}

  render() {
    const { name, loading, albumsFromAPI, lastSearch } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <SearchForm
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
          name={ name }
          loading={ loading }
        />
        <Album albumsFromAPI={ albumsFromAPI } search={ lastSearch } />
      </div>
    );
  }
}

export default Search;

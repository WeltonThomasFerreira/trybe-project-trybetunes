import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header/Header';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);
    this.fetchMusics = this.fetchMusics.bind(this);
    this.state = {
      musics: [],
      artistName: '',
      collectionName: '',
      artworkUrl100: '',
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.fetchMusics(id);
  }

  async fetchMusics(id) {
    const musics = await getMusics(id);
    this.setState({
      musics,
      artistName: musics[0].artistName,
      collectionName: musics[0].collectionName,
      artworkUrl100: musics[0].artworkUrl100,
    });
  }

  render() {
    const { artistName, collectionName, artworkUrl100: cover } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <img src={ cover } alt="" />
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{collectionName}</h3>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};

export default Album;

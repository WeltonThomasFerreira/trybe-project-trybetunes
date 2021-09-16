import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCard extends Component {
  render() {
    const {
      album: {
        artworkUrl100: cover,
        collectionName: albumName,
        artistName,
        collectionId: id,
      },
    } = this.props;
    return (
      <div>
        <Link to={ `/album/${id}` } data-testid={ `link-to-album-${id}` }>
          <img src={ cover } alt="" />
        </Link>
        <p>{albumName}</p>
        <p>{artistName}</p>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  }).isRequired,
};

export default AlbumCard;

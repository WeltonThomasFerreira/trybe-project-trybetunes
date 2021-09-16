import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../AlbumCard/AlbumCard';

class Album extends Component {
  render() {
    const { albumsFromAPI, search } = this.props;
    let response;
    if (albumsFromAPI === null) {
      return null;
    }
    if (albumsFromAPI.length === 0) {
      response = <h3>Nenhum álbum foi encontrado</h3>;
    }
    if (albumsFromAPI.length > 0) {
      const albums = albumsFromAPI.map((album) => (
        <AlbumCard key={ album.collectionId } album={ album } />
      ));
      response = (
        <>
          <h3>{`Resultado de álbuns de: ${search}`}</h3>
          {albums}
        </>
      );
    }
    return <div>{response}</div>;
  }
}

Album.propTypes = {
  albumsFromAPI: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(),
  ]),
  search: PropTypes.string.isRequired,
};

// src: https://stackoverflow.com/a/50089401
Album.defaultProps = {
  albumsFromAPI: null,
};

export default Album;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  async handleFavorite(event) {
    const { music } = this.props;
    const action = event.target.checked ? addSong : removeSong;
    await action(music);
  }

  render() {
    const {
      music: { trackName, previewUrl, trackId },
    } = this.props;
    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            id={ trackId }
            type="checkbox"
            onChange={ (event) => {
              this.handleFavorite(event);
            } }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
  }).isRequired,
};

export default MusicCard;

// Desenvolvido com a ajuda do Matheus Laurindo
// PR: https://github.com/tryber/sd-014-b-project-trybetunes/pull/52
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../../services/favoriteSongsAPI';
import Loading from '../Loading/Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.recoverFavoriteSongs = this.recoverFavoriteSongs.bind(this);
    this.state = {
      checked: false,
      display: 'inline',
    };
  }

  componentDidMount() {
    this.recoverFavoriteSongs();
  }

  async handleFavorite(event) {
    const { checked } = event.target;
    const { music } = this.props;
    this.setState({ checked, display: 'none' });
    if (checked) {
      await addSong(music);
    } else {
      await removeSong(music);
    }
    this.setState({ display: 'inline' });
  }

  async recoverFavoriteSongs() {
    const {
      music: { trackId },
    } = this.props;
    const favoriteSongs = await getFavoriteSongs();
    const checkFavoriteSong = favoriteSongs.some(
      (music) => trackId === music.trackId,
    );
    if (checkFavoriteSong) {
      this.setState({ checked: true });
    }
  }

  render() {
    const {
      music: { trackName, trackId, previewUrl },
    } = this.props;

    const { checked, display } = this.state;

    if (trackName === undefined) {
      return null;
    }

    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ `${trackId}` } data-testid={ `checkbox-music-${trackId}` }>
          <input
            type="checkbox"
            id={ `${trackId}` }
            name="checked"
            checked={ checked }
            onChange={ this.handleFavorite }
            style={ { display } }
          />
          {display === 'none' ? <Loading /> : null}
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string,
    trackId: PropTypes.number,
    previewUrl: PropTypes.string,
  }).isRequired,
};

export default MusicCard;

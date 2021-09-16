import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header/Header';

class Album extends Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div data-testid="page-album">
        <Header />
        {console.log(id)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};

export default Album;

import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navigator extends Component {
  render() {
    return (
      <nav>
        <Router>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </Router>
      </nav>
    );
  }
}

export default Navigator;

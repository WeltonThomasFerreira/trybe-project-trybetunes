import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Router basename="/trybe-project-trybetunes">
          <Switch>
            <Route path="/Profile/edit" component={ ProfileEdit } />
            <Route path="/Profile" component={ Profile } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/search" component={ Search } />
            <Route exact path="/" component={ Login } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

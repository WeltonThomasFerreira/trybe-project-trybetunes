import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Loading from '../Components/Loading/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.fetchUser = this.fetchUser.bind(this);
    this.state = {
      load: false,
      user: {},
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    this.setState((prevState) => ({ load: !prevState }));
    const user = await getUser();
    this.setState((prevState) => ({ load: !prevState, user }));
  }

  render() {
    const {
      load,
      user: { name, email, image, description },
    } = this.state;
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="page-profile">
        <Header />
        <img
          src={ image }
          alt="perfil"
          data-testid="profile-image"
        />
        <p>{name}</p>
        <p>{email}</p>
        <p>{description}</p>
        <Link to="/profile/edit">Editar perfil</Link>
      </div>
    );
  }
}

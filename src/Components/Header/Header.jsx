import React, { Component } from 'react';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';

class Header extends Component {
  constructor(props) {
    super(props);
    this.fetchUser = this.fetchUser.bind(this);
    this.state = {
      name: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({ loading: false, name: user.name });
    });
  }

  render() {
    const { loading, name } = this.state;
    const userName = <h1 data-testid="header-user-name">{name}</h1>;
    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        {loading ? <Loading /> : userName}
      </header>
    );
  }
}

export default Header;

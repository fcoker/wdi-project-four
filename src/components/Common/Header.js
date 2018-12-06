import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken } from '../../lib/auth';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }
  render() {
    return (
      <nav className="navbar is-danger">
        <div className="navbar-start">
          <Link className="navbar-item" to={'/'}>P&W Products</Link>
          <Link className="navbar-item" to='product/new'>Add a Product</Link>
        </div>
        <div className="navbar-end">
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item" to='/logout'>Log Out</a>}
          {!isAuthenticated() && <a className="navbar-item" onClick={this.props.handleLoginClick}>Log In</a>}
          {!isAuthenticated() && <a className="navbar-item" onClick={this.props.handleRegisterClick}>Register</a>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

// this.props.showLogin

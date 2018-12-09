import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getBasketCount } from '../../lib/basket';
import { isAuthenticated, deleteToken, decodeToken, isAdmin } from '../../lib/auth';


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
      <nav id="bar" className="navbar is-danger">
        <div className="navbar-start">
          <Link className="navbar-item" to={'/'}>P&W Products</Link>
          {isAdmin() && <Link className="navbar-item" to='/product/new'>Add a Product</Link>}
          {isAdmin() && <Link className="navbar-item" to='/stats'>Statistics</Link>}
          {isAuthenticated() && <Link className="navbar-item" to='/basket'>🛒({getBasketCount()})</Link>}
          {isAuthenticated() && <Link className="navbar-item" to={`/users/${decodeToken().sub}`}>Profile</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item" to='/logout'>Log Out</a>}
          {!isAuthenticated() && <a className="navbar-item" onClick={this.props.handleLoginClick}>Log In</a>}
          {!isAuthenticated() && <a className="navbar-item" onClick={this.props.handleRegisterClick}>Register</a>}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field">
              <div id="wrap">
                <form action="" autoComplete="on">
                  <input id="search" name="search" type="text" placeholder="What're you looking for ?"/><input id="search_submit" value="Rechercher" type="submit"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default withRouter(Header);

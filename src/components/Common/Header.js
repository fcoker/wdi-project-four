import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, deleteToken } from '../../lib/auth';
import { getBasketCount } from '../../lib/basket';


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
          {isAuthenticated() && <Link className="navbar-item" to='/basket'>🛒({getBasketCount()})</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item" to='/logout'>Log Out</a>}
          {!isAuthenticated() && <Link className="navbar-item" to='/register'>Resgister</Link>}
          {!isAuthenticated() && <Link className="navbar-item" to='/login'>Log In</Link>}
        </div>
      </nav>
    );
  }
}

export default Header;

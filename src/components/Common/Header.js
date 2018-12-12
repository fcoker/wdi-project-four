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
      <nav className="navbar-main">
        <div className="placeholder">
          <div className="navbar-start">
            <Link to='/'>
              <img id="logote" src="https://prospectwire.com/pw/images/pwmemberpass.png" alt="Logo"/>
            </Link>
            {isAdmin() && <Link className="navbar-item" to='/product/new'>Add a Product</Link>}
            {isAdmin() && <Link className="navbar-item" to='/stats'>Statistics</Link>}
            {isAuthenticated() && <Link className="navbar-item" to='/basket'><i className='fas fa-shopping-basket'></i>({getBasketCount()})</Link>}
            {isAuthenticated() && <Link className="navbar-item" to={`/users/${decodeToken().sub}`}>Profile</Link>}
            {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item" to='/logout'>Log Out</a>}
            {!isAuthenticated() && <a className="navbar-item" onClick={this.props.handleLoginClick}>Log In</a>}
            {!isAuthenticated() && <a className="navbar-item" onClick={this.props.handleRegisterClick}>Register</a>}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field">

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default withRouter(Header);

import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <nav className="navbar is-link">
        <div className="navbar-start">
          <Link className="navbar-item" to={'/'}>P&W Products</Link>
        </div>
      </nav>
    );
  }
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <h1 className='logo'>CAMP</h1>
        <div className='session-selection'>
          <Link className='signup-btn' to={'/signup'}>Sign Up</Link>
          <Link className='login-btn' to={'/login'}>Login</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
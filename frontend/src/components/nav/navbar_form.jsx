import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks(loggedIn) {
    if (loggedIn) {
      return (
        <div className='member-navbar'>
          <Link to={'/dashboard'}>Profile</Link>
          <Link to={'/schedules'}>Schedule</Link>
          <Link to={'/lessons'}>Lessons</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='session-selection'>
          <Link className='signup-btn' to={'/signup'}>Sign Up</Link>
          <Link className='login-btn' to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='navbar'>
        <h1 className='logo'>CAMP</h1>
        {this.getLinks(this.props.loggedIn)}
      </div>
    );
  }
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/camp_logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    debugger
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
          <Link className='login-btn' to={'/login'}>Login</Link>
          <Link className='signup-btn' to={'/signup'}>Sign Up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='navbar'>
        {/* <img src={logo} className='logo' /> */}
        <h1 className='logo'>CAMP</h1>
        {this.getLinks(this.props.loggedIn)}
      </div>
    );
  }
}

export default NavBar;
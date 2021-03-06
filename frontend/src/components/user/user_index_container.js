import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/user_actions";
import { logout } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import "./users.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


export class UserIndex extends Component {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  showUser(user, idx) {
    if (user.accountType === "teacher")
      return (
        <ul className="teacher-list">
          <li>{user.email}</li>
          <li> {user.fname}</li>
          <li> {user.lname}</li>
          <Link key={idx} id="teacher-link" to={`/users/${user._id}`}>
            {" "}
            Profile{" "}
          </Link>
        </ul>
      );
  }

  render() {
    const { users } = this.props;
    const allUsers = Object.values(users);
    if (allUsers.length) {
      return (
        <div className="teachers-index-container">
          <div className="index-header">
            <h1 className="index-title"> CAMP Teachers </h1>
            <div className="nav-btns">
              <Link className="dash-btn" to="/dashboard">
                Dashboard
              </Link>
              <button className="logout-btn" onClick={this.props.logout}>
                Log out
              </button>
            </div>
          </div>
          <h2 className="mission">
            <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
            Our mission is to foster our students to learn English as a tool,
            not as a goal, and to become individuals with creative and critical
            thinking skills.
            <FontAwesomeIcon className="quote-icon" icon={faQuoteRight} />
          </h2>
          <div className="teacher-index-inner">
            {allUsers.map((user, idx) => this.showUser(user, idx))}
          </div>
        </div>
      );
    } else {
      return <> </>;
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.entities.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);

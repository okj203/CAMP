import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/user_actions";
import { logout } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import "./users.scss";

export class UserIndex extends Component {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  showUser(user, idx) {
    if (user.accountType === "student")
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
            <div className="index-navbar">
              <Link className="dash-btn" to="/dashboard">
                Dashboard
              </Link>
              <button className="logout-btn" onClick={this.props.logout}>
                Log out
              </button>
            </div>

            <h1 className="index-title"> CAMP Students </h1>
            <h2 className="mission">
              Our mission is to foster our students to learn English as a tool,
              not as a goal, and to become individuals with creative and
              critical thinking skills.
            </h2>
          </div>
          <div className="teacher-index-inner">
            {allUsers.map((user, idx) => this.showUser(user, idx))}
          </div>
        </div>
      );
    } else {
      return <h1>ELSE</h1>;
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/user_actions";
import { Link } from "react-router-dom";
import "./users.scss";
// import teacherBanner from '../../images/teacher-banner.jpg';
// import image from "../../images/jess-bailey-l3N9Q27zULw-unsplash.jpg"

export class UserIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  showUser(user, idx) {
    if (user.accountType === "teacher")
      return (
        <ul className="teacher-list">
          <li>{user.email}</li>
          <li> {`${user.fname} ${user.lname}`} </li>
          <Link to={`/users/${user._id}`}> View Teacher Profile </Link>
        </ul>
      );
  }

  render() {
    const { users } = this.props;
    const allUsers = Object.values(users)
    if (allUsers.length) {
      return (
        <div className="teachers-index-container">
          <div className="index-header">
            <h1 className="index-title"> CAMP Teachers </h1>
            <h2 className="mission">
              Our mission is to foster our students to learn the English
              language as a tool, not as a goal, and to become individuals with
              creative and critical thinking skills.
            </h2>
          </div>
          <div className="teacher-index-inner">
            {allUsers.map((user, idx) => (
              <div className="teacers-index-list">
                {this.showUser(user, idx)}
              </div>
            ))}
          </div>
        </div>
      );
    }
    else {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);

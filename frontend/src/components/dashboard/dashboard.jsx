import React from "react";
import StudentDash from "./student_dashboard";
import TeacherDash from "./teacher_dashboard";
import { Link } from "react-router-dom";
import '../user/users.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserEvents(this.props.user.id);
  }

  currentLink() {
    if (this.props.user.accountType === "student") {
      return (
        <Link className="dash-btn" to="/teachers">
          Teachers
        </Link>
      )
    } else {
      return (
        <Link className="dash-btn" to="/students">
          Students
        </Link>
      )
    }
  }

  render() {
    const navBtns = (
      <div className="teachers-index-container">
        <div className="index-header">
          <div className="index-navbar">
            {this.currentLink()}
            <button className="logout-btn" onClick={this.props.logout}>
              Log out
            </button>
          </div>

          <h1 className="index-title"> Camper's Page </h1>
        </div>
      </div>
    );

    const { user, events } = this.props;
    if (this.props.user.accountType === "student") {
      return (
        <div>
          {navBtns}
          <StudentDash user={user} events={events} defaultView={"week"} />
        </div>
      );
    } else {
      return (
        <div>
          {navBtns}
          <TeacherDash user={user} events={events} defaultView={"week"} />
        </div>
      );
    }
  }
}

export default Dashboard;

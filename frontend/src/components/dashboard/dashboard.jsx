import React from "react";
import StudentDash from "./student_dashboard";
import TeacherDash from "./teacher_dashboard";
import { Link } from "react-router-dom";
import watercolor from "../../images/watercolor.png";
import '../user/users.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserEvents(this.props.user.id);
  }

  render() {
    const navBtns = (
      <div className="teachers-index-container">
        <img alt="watercolor" className="watercolor" src={watercolor} />
        <div className="index-header">
          <div className="index-navbar">
            <Link className="dash-btn" to="/teachers">
              Teachers
            </Link>
            <button className="logout-btn" onClick={this.props.logout}>
              Log out
            </button>
          </div>

          <h1 className="index-title"> Camper's Page </h1>
          {/* <h2 className="mission">
            Our mission is to foster our students to learn the English language
            as a tool, not as a goal, and to become individuals with creative
            and critical thinking skills.
          </h2> */}
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

import React from "react";
import TeacherReviews from "./teacher_reviews";
import ReviewForm from "./review_form";
import TeacherDash from "../dashboard/teacher_dashboard";
import ScheduleForm from "../calendar/schedule_form";
import { Link } from "react-router-dom";
import watercolor from "../../images/watercolor.png";
import "./users.scss";

class User extends React.Component {

  componentDidMount() {
    const { teacherId } = this.props;
    this.props.fetchAllUsers();
    this.props.fetchUserInfo(teacherId);
    this.props.fetchUserReviews(teacherId);
    this.props.fetchUserEvents(teacherId);
  }

  // componentDidUpdate() {
  //   const { teacherId } = this.props;
  //   this.props.fetchUserInfo(teacherId);
  //   this.props.fetchUserReviews(teacherId);
  // }

  showHeader() {
    const { teacher } = this.props;
    return (
      <div className="show-info-header">
        <h1>
          {teacher.fname} {teacher.lname}
        </h1>
        <p>{teacher.email}</p>
      </div>
    );
  }
  render() {
    const {
      reviews,
      teacher,
      teacherId,
      reviewerId,
      events,
      currentUser,
      fetchNewEvent,
    } = this.props;
    const reviewsLength = reviews.length;
    const teacherInfo = teacher[teacherId];
    return (
      <div>
        <div className="teachers-index-container">
          <img alt="watercolor" className="watercolor" src={watercolor} />
          <div className="index-header">
            <div className="index-navbar">
              <Link className="dash-btn" to="/dashboard">
                Dashboard
              </Link>
              <button className="logout-btn" onClick={this.props.logout}>
                Log out
              </button>
            </div>

            <h1 className="index-title"> CAMP Teacher </h1>
            <h2 className="mission">
              Our mission is to foster our students to learn English as a tool,
              not as a goal, and to become individuals with creative and
              critical thinking skills.
            </h2>
          </div>
        </div>

        <TeacherDash user={teacher} events={events} defaultView={"month"} />
        <ScheduleForm
          teacherId={this.props.match.params.teacher_id}
          events={events}
          currentUser={currentUser}
          fetchNewEvent={fetchNewEvent}
          match={this.props.match.params.teacherId}
        />
        <TeacherReviews
          reviews={reviews}
          teacherId={teacherId}
          teacher={teacher}
        />
        <ReviewForm
          composeReview={this.props.composeReview}
          reviews={reviews}
          teacherId={teacherId}
          teacher={teacher}
          reviewerId={reviewerId}
        />
      </div>
    );
  }
}

export default User;

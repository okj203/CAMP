import React from "react";
// import UserInfo from './user_info';
import './users.scss'
import TeacherReviews from './teacher_reviews'
import ReviewForm from './review_form'
import TeacherDash from "../dashboard/teacher_dashboard"
import ScheduleForm from "../calendar/schedule_form"

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { teacherId } = this.props;
    this.props.fetchUserInfo(teacherId);
    this.props.fetchUserReviews(teacherId);
    this.props.fetchUserEvents(teacherId)
  }

  showHeader() {
    const { teacher } = this.props;
    return (
      <div className="show-info-header">
        <h1>{teacher.fname} {teacher.lname}</h1>
        <p>{teacher.email}</p>
      </div>
    )
  }
  render() {
    const { reviews, teacher, teacherId, reviewerId, events, currentUser, fetchNewEvent } = this.props;
    const reviewsLength = reviews.length
    const teacherInfo = teacher[teacherId]
    return (
      <div>
        <TeacherDash user={teacher} events={events} defaultView={"month"} />
        <ScheduleForm teacherId={this.props.match.params.teacher_id} events={events} currentUser={currentUser} fetchNewEvent={fetchNewEvent} match={this.props.match.params.teacherId} />
        <TeacherReviews reviews={reviews} teacherId={teacherId} teacher={teacher} />
        <ReviewForm composeReview={this.props.composeReview} reviews={reviews} teacherId={teacherId} teacher={teacher} reviewerId={reviewerId} />
      </div>
    )
  }
}

export default User;

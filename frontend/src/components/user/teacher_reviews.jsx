import React from "react";
import "./users.scss";

class User extends React.Component {

  componentDidUpdate() {
    this.props.fetchUserReviews(this.props.teacherId)
  }

  showReviews() {
    const { reviews, teacher, teacherId } = this.props;
    const reviewsLength = reviews.length;
    const teacherInfo = teacher[teacherId];
    if (
      typeof reviewsLength == "undefined" ||
      Object.values(teacher).length < 2
    ) {
      return null;
    } else if (reviewsLength || Object.values(teacher).length < 2) {
      return (
        <div className="reviews-index">
          <h1>
            {teacherInfo.fname} {teacherInfo.lname}'s reviews!
          </h1>
          <div className="each-review">
            {reviews.map((review, idx) => (
              <li className="single-review" key={idx}>
                <p>{review.rating} Stars</p>
                <p>{review.description}</p>
                <p>{`${teacher[review.reviewer_id].fname} ${
                  teacher[review.reviewer_id].lname
                }`}</p>
              </li>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="no-reviews">
            <h2>There are no reviews for this teacher</h2>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.showReviews();
  }
}

export default User;

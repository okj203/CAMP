import React from "react";
import UserInfo from './user_info';
import './users.scss'
// import { UserIndex } from './user_index_container';

class User extends React.Component {

  showReviews() {
    const { reviews, teacher, teacherId } = this.props;
    // const { fname, lname } = teacher ? teacher : null
    const reviewsLength = reviews.length
    // console.log(Object.values(teacher).length)
    const teacherInfo = teacher[teacherId]
    if (typeof reviewsLength == "undefined" || Object.values(teacher).length < 2) {
      return (
        null
      );
    } else 
      if (reviewsLength || Object.values(teacher).length < 2) {
      return (
        <div className="reviews-index">
          <h1>{teacherInfo.fname} {teacherInfo.lname}'s reviews!</h1>
          <div className="each-review">
            {reviews.map((review, idx) => (
              <li key={idx}>
                <p>{review.rating} Stars</p>
                <p>{review.description}</p>
                <p>{teacher[review.reviewer_id].username}</p>
                <p>{teacher[review.reviewer_id].username}</p>
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
  };

  render() {
    return this.showReviews();
  }
}

export default User;
import React from "react";
import UserInfo from './user_info';
import './users.scss'
// import { UserIndex } from './user_index_container';

class User extends React.Component {

  // showHeader() {
  //   const { teacher } = this.props;
  //   return (
  //     <div className="show-info-header">
  //       <h1>{teacher.fname} {teacher.lname}</h1>
  //       <p>{teacher.email}</p>
  //     </div>
  //   )
  // }

  mapReviews() {
    const { reviews, teacher, teacherId } = this.props;
    // if (teacher) {
    // return (
    //   reviews.map((review, idx) => (
    //     console.log(teacher[review.reviewer_id]),
    //     console.log(review.reviewer_id),
    //     <li key={idx}>
    //       <p>{review.rating} Stars</p>
    //       <p>{review.description}</p>
    //       <p>{teacher[review.reviewer_id]}</p>
    //     </li>
    //   ))
    // );
  }

  showReviews() {
    const { reviews, teacher, teacherId } = this.props;
    // const { fname, lname } = teacher ? teacher : null
    const reviewsLength = reviews.length
    const teacherInfo = teacher[teacherId]
    if (typeof reviewsLength == "undefined" || reviews.length === 0) {
      return (
        <div>
          <div className="no-reviews">
            <h2>There are no reviews</h2>
          </div>
          {/* <h1>{teacherInfo.fname} {teacherInfo.lname}'s reviews!</h1> */}
        </div>
      );
    } else if (reviews) {
      // console.log(reviews.map(review => (
      //   teacher[review.reviewer_id].accountType
      // )))
      const id = reviews[0].reviewer_id
      // console.log(teacher[id].username)
      return (
        <div className="reviews-index">
          {/* <h1>{this.showHeader()}</h1> */}
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
            {this.mapReviews()}
          </div>
        </div>
      );
    }
  };

  render() {
    return this.showReviews();
    // const { reviews, teacher, teacherId } = this.props;
    // // const { fname, lname } = teacher ? teacher : null
    // const reviewsLength = reviews.length
    // const teacherInfo = teacher[teacherId]
    // // console.log(teacherInfo)
    // // console.log(teacher)
    // if (typeof reviewsLength == "undefined" || reviews.length === 0) {
    //   return (
    //     <div>
    //       <div className="no-reviews">
    //         <h2>There are no reviews</h2>
    //       </div>
    //       {/* <h1>{teacherInfo.fname} {teacherInfo.lname}'s reviews!</h1> */}
    //     </div>
    //   );
    // } else if (reviews) {
    //   // console.log(reviews.map(review => (
    //   //   teacher[review.reviewer_id].accountType
    //   // )))
    //   const id = reviews[0].reviewer_id
    //   console.log(teacher[id].username)
    //   return (
    //     <div className="reviews-index">
    //       {/* <h1>{this.showHeader()}</h1> */}
    //       <h1>{teacherInfo.fname} {teacherInfo.lname}'s reviews!</h1>
    //       <div className="each-review">
    //         {reviews.map((review, idx) => (
    //             <li key={idx}>
    //               <p>{review.rating} Stars</p>
    //               <p>{review.description}</p>
    //             </li>
    //         ))}
    //       </div>
    //     </div>
    //   );
    // }
  }
}

export default User;
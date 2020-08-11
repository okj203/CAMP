import React from "react";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.reviews
  }

  componentDidMount() {
    const { teacher_id } = this.props;
    this.props.fetchUserReviews(teacher_id);
  }

  render() {
    const reviews = this.props.reviews;

    // const description = reviews ? reviews.map(review => review.description)
   
    if (this.props.reviews.length === 0) {
      return (
          <>
          <h2>There are no reviews</h2>
          {/* <ReviewFormContainer /> */}
          </>
          )
          

    } else {
      return (
        <div className="reviews-index">
          <h2 className="reviews-header">Student reviews on the teacher</h2>
          {/* <ul className="each-review">
            {reviews.map((review, idx) => (
              <li key={idx}>{review.description}</li>
            ))}
          </ul>  */}

          <ReviewForm />
          
        </div>
      );
    } 
    // else {
    //     return <div></div>
    // }
  }
}

export default Reviews;


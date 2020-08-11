import React from "react";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.reviews
    this.handleSubmit = this.handleSubmit.bind(this);
    const { teacher_id } = this.props;
    this.state = {
        rating: '',
        description: '',
        teacher_id: {teacher_id}
    }
  }

  componentDidMount() {
    const { teacher_id } = this.props;
    this.props.fetchUserReviews(teacher_id);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.composeReview(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
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

          <div>
        <h3>Tell us about your teacher!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Rating
            <input
              type="text"
              value={this.state.rating}
              onChange={this.update("rating")}
            />
          </label>
          <br />
          <label>
            Description
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
            ></textarea>
          </label>
          <label>
            Submit
            <input type="submit" />
          </label>
          {/* <button type="submit" value={}>
            Submit
          </button> */}
        </form>
      </div>
          
        </div>
      );
    } 
    // else {
    //     return <div></div>
    // }
  }
}

export default Reviews;


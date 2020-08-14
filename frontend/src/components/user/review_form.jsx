import React from "react";
import './users.scss'
// import { UserIndex } from './user_index_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    const { teacherId, reviewerId } = this.props;
    this.state = {
      rating: "",
      description: "",
      teacher_id: teacherId,
      reviewer_id: reviewerId
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.composeReview(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  reviewForm() {
    return (
      <div >
        <form className="teacher-review-form" onSubmit={this.handleSubmit}>
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
            <input type="submit" />
          </label>
        </form>
      </div>
    )
  };

  render() {
    const { reviews, teacher, teacherId } = this.props;
    const reviewsLength = reviews.length
    const teacherInfo = teacher[teacherId]
    // console.log(reviews)
    if (typeof reviewsLength == "undefined" || Object.values(teacher).length < 2) {
      return null
    } else {
      return (
        <div className="reviews-index">
          <h3>Would you like to leave a review for {teacherInfo.fname} {teacherInfo.lname}?</h3>
          {this.reviewForm()}
        </div>
      )
    };

  }
}

export default ReviewForm;
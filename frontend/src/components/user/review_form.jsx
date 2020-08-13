import React from "react";
import './users.scss'
// import { UserIndex } from './user_index_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    const { teacher_id } = this.props;
    const { reviewer_id } = this.props;
    const { teacher } = this.props;
    this.state = {
      rating: "",
      description: "",
      teacher_id: { teacher_id },
      reviewer_id: { reviewer_id }
    };
  }

  // componentDidMount() {
  //   const { teacher_id } = this.props;
  //   // console.log(teacher_id)
  //   this.props.fetchUserInfo(teacher_id);
  //   this.props.fetchUserReviews(teacher_id);
  //   // this.props.fetchAllUsers();
  //   // this.props.fetchUserInfo('5f2f097e684d9f947b0ca6ff');
  // }

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
        {/* <h3>Tell us about your teacher!</h3> */}
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
    const { reviews } = this.props;
    const reviewsLength = reviews.length
    const { teacher } = this.props;
    const { teacher_id } = this.props;
    const teacherInfo = teacher[teacher_id]
    console.log(reviews)
    if (typeof reviewsLength == "undefined" || reviews.length === 0) {
      return null
    } else {
    return (
      <div className="reviews-index">
        <h3>Would you like to leave a review for {teacherInfo.fname} {teacherInfo.lname}?</h3>
        {this.reviewForm()}
      </div>
    )};
    
  }
}

export default ReviewForm;
import React from "react";
import UserInfo from './user_info';
import './users.scss'
// import { UserIndex } from './user_index_container';

class User extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.reviews
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

  componentDidMount() {
    const { teacher_id } = this.props;
    // console.log(teacher_id)
    this.props.fetchUserInfo(teacher_id);
    this.props.fetchUserReviews(teacher_id);
    // this.props.fetchAllUsers();
    // this.props.fetchUserInfo('5f2f097e684d9f947b0ca6ff');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.composeReview(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
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

    // const test = info ? info : null
    const reviewForm = (
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
    // console.log(reviews.length)
    const reviewsLength = reviews.length

    const { teacher } = this.props;
    const { teacher_id } = this.props;
    const teacherInfo = teacher[teacher_id]
    console.log(teacherInfo)
    if (typeof reviewsLength == "undefined" || reviews.length === 0) {
      return (
        <div>
          <div className="no-reviews">
            <h2>There are no reviews</h2>
          </div>
          <h1>{teacher.fname} {teacher.lname}'s reviews!</h1>
          {reviewForm}
        </div>
      );
    } else if (reviews) {
      return (
        <div className="reviews-index">
          <h1>{this.showHeader()}</h1>
          <h1>{teacherInfo.fname} {teacherInfo.lname}'s reviews!</h1>
          <div className="each-review">
            {reviews.map((review, idx) => (
              <div className="each-review-info">
                <p key={review.id}>{review.rating} Stars</p>
                <p key={review.id}>{review.description}</p>
              </div>
            ))}
          </div>
          <h3>Would you like to leave a review for {teacherInfo.fname} {teacherInfo.lname}?</h3>
          {this.reviewForm}
        </div>
      );
    }
  }
}

export default User;
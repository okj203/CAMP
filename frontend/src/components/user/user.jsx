import React from "react";
import UserInfo from './user_info';

class User extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.reviews
    this.handleSubmit = this.handleSubmit.bind(this);
    const { teacher_id } = this.props;
    this.state = {
      rating: "",
      description: "",
      teacher_id: { teacher_id },
    };
    // this.state = this.props.teacher_id
  }

  componentDidMount() {
    const { teacher_id } = this.props;
    this.props.fetchUserReviews(teacher_id);
    this.props.fetchUserInfo(teacher_id);
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

  render() {
    const { reviews, info } = this.props;
    const test = info ? info : null
    const reviewForm = (
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
            </form>
        </div>
    )

    if (typeof reviews == "undefined" || reviews.length === 0) {
      return (
        <div>
          <UserInfo />
          <div className="no-reviews">
            <h2>There are no reviews</h2>
          </div>
          {reviewForm}
        </div>
      );
    } else if (reviews) {
      return (
        <div className="reviews-index">
          <UserInfo />
          <h2 className="reviews-header">Student reviews on the teacher</h2>
          <ul className="each-review">
            {reviews.map((review, idx) => (
              <div className="each-review-info">
                <li key={review.id}>{review.rating}</li>
                <li key={review.id}>{review.description}</li>
              </div>
            ))}
          </ul>

          {reviewForm}
        </div>
      );
    }
  }
}

export default User;

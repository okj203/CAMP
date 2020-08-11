import React from "react";

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
    const { reviews } = this.props;
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

    if (reviews.length === 0 || typeof reviews == 'undefined') {
      return (
        <div>
          <div className="no-reviews">
            <h2>There are no reviews</h2>
          </div>
          {reviewForm}
        </div>
      );
    } else {
      return (
        <div className="reviews-index">
          <h2 className="reviews-header">Student reviews on the teacher</h2>
          <ul className="each-review">
            {reviews.map((review, idx) => (
              <div className="each-review-info">
                {/* <li key={idx}>{review.description}</li> */}
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

import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.composeReview(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
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
    );
  }
}

export default ReviewForm;

import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.composeReview(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const errors  = this.props.errors.description
    console.log(this.props.errors.description)
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
          {/* <button type="submit" value={}> */}
            {/* Submit */}
          {/* </button> */}
        </form>
        <p className="session-errors">{errors}</p>
      </div>
    );
  }
}

export default ReviewForm;

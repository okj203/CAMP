import { connect } from "react-redux";
import { fetchUserReviews } from "../../actions/review_actions";
import Reviews from "./reviews";

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.reviews.all),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(fetchUserReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

import { connect } from "react-redux";
import { fetchUserReviews } from "../../actions/review_actions";
import Reviews from "./reviews";

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    teacher_id: ownProps.match.params.teacher_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReviews: (teacher_id) => dispatch(fetchUserReviews(teacher_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

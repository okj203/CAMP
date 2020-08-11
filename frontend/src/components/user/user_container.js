import { connect } from "react-redux";
import { fetchUserReviews, composeReview } from "../../actions/review_actions";
import User from "./user";


const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.users.reviews)
  return {
    reviews: state.entities.users.reviews,
    teacher_id: ownProps.match.params.teacher_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReviews: (teacher_id) => dispatch(fetchUserReviews(teacher_id)),
    composeReview: review => dispatch(composeReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

import { connect } from "react-redux";
import { fetchUserReviews } from "../../actions/review_actions";
import Reviews from "./reviews";
import { composeReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.reviews)
  return {
    reviews: Object.values(state.entities.reviews),
    teacher_id: ownProps.match.params.teacher_id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReviews: (teacher_id) => dispatch(fetchUserReviews(teacher_id)),
    composeReview: review => dispatch(composeReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

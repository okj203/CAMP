import { connect } from "react-redux";
import { fetchUserReviews, composeReview } from "../../actions/review_actions";
import User from "./user";
import { fetchUserInfo, fetchAllUsers } from "../../actions/user_actions";


const mapStateToProps = (state, ownProps) => {
  // console.log(state.entities.users.reviews)
  // debugger
  return {
    reviews: state.entities.users.reviews,
    teacher_id: ownProps.match.params.teacher_id,
    info: state.entities.users.info
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReviews: teacher_id => dispatch(fetchUserReviews(teacher_id)),
    composeReview: review => dispatch(composeReview(review)),
    fetchUserInfo: teacher_id => dispatch(fetchUserInfo(teacher_id)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

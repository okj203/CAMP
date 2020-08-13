import { connect } from "react-redux";
import { fetchUserReviews, composeReview } from "../../actions/review_actions";
import User from "./user";
import { fetchUserInfo, fetchAllUsers } from "../../actions/user_actions";
import { fetchUserEvents, fetchNewEvent } from "../../actions/event_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.entities.reviews,
    teacher_id: ownProps.match.params.teacher_id,
    teacher: state.entities.users,
    reviewer_id: state.session.user.id,
    events: Object.values(state.entities.events)
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserReviews: teacher_id => dispatch(fetchUserReviews(teacher_id)),
    composeReview: review => dispatch(composeReview(review)),
    fetchUserInfo: teacher_id => dispatch(fetchUserInfo(teacher_id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUserEvents: teacher_id => dispatch(fetchUserEvents(teacher_id)),
    fetchNewEvent: event => dispatch(fetchNewEvent(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

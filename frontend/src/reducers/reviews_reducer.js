import {
  RECEIVE_USER_REVIEWS,
  RECEIVE_NEW_REVIEW,
} from "../actions/review_actions";

// import { RECEIVE_ALL_USERS, RECEIVE_USER_INFO } from "../actions/user_actions";

const ReviewsReducer = (
  state = { user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_REVIEWS:
      return action.reviews.data;
    case RECEIVE_NEW_REVIEW:
      // newState.new = action.review.data;
      return Object.assign(newState, { [action.review.data._id]: action.review.data});
    // case RECEIVE_ALL_USERS:
    //   return action.users.data
    // case RECEIVE_USER_INFO:
    //   return action.info.data
    default:
      return state;
  }
};

export default ReviewsReducer;
import {
  RECEIVE_USER_REVIEWS,
  RECEIVE_NEW_REVIEW,
} from "../actions/review_actions";

const ReviewsReducer = (
  state = { user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_REVIEWS:
      newState.user = action.reviews;
      return newState;
    case RECEIVE_NEW_REVIEW:
      newState.new = action.review;
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;

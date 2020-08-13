// import {
//   RECEIVE_ALL_USERS,
//   RECEIVE_USER_INFO,
// } from "../actions/user_actions";

import { RECEIVE_ALL_USERS, RECEIVE_USER_INFO } from "../actions/user_actions";

const ReviewsReducer = (
  state = { user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users.data
    case RECEIVE_USER_INFO:
      // debugger
      return action.info.data
    default:
      return state;
  }
};

export default ReviewsReducer;
// import {
//   RECEIVE_ALL_USERS,
//   RECEIVE_USER_INFO,
// } from "../actions/user_actions";

import { RECEIVE_ALL_USERS, RECEIVE_USER_INFO } from "../actions/user_actions";

const UsersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users.data
    case RECEIVE_USER_INFO:
      return Object.assign(newState, { [action.info.data._id]: action.info.data })

      // return action.info.data
    default:
      return state;
  }
};

export default UsersReducer;
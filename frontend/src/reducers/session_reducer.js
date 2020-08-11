import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
} from '../actions/session_actions';

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser });
    case RECEIVE_USER_LOGOUT:
      return _nullSession;
    default:
      return state;
  }
}
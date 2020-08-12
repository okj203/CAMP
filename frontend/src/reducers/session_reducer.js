import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const _nullSession = {
  isAuthenticated: false,
    user: {}
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return _nullSession;
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}
import * as SessionUtil from '../util/session_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});



export const signup = (user) => (dispatch) => {
  return SessionUtil.signup(user).then(
    () => dispatch(login(user)),
    error => {
      dispatch(receiveErrors(error.response.data));
    });
}

export const login = user => dispatch => (
  SessionUtil.login(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    SessionUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded))
  })
    .catch(error => {
      dispatch(receiveErrors(error.response.data));
    })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  SessionUtil.setAuthToken(false)
  dispatch(logoutUser())
};

import { getUserInfo } from "../util/user_api_util";

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

export const receiveUserInfo = (info) => ({
  type: RECEIVE_USER_INFO,
  info,
});

export const fetchUserInfo = (user_id) => (dispatch) =>
  getUserInfo(user_id)
    .then((info) => dispatch(receiveUserInfo(info)))
    .catch((err) => console.log(err));


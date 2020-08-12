import { getAllUsers, getUserInfo } from "../util/user_api_util";

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";
export const RECEIVE_ALL_USERS = "REVEIVE_ALL_USERS";

export const receiveUserInfo = (info) => ({
  type: RECEIVE_USER_INFO,
  info,
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});

export const fetchUserInfo = (teacher_id) => (dispatch) =>
  getUserInfo(teacher_id)
    .then((info) => dispatch(receiveUserInfo(info)))
    .catch((err) => console.log(err));

export const fetchAllUsers = () => (dispatch) =>
  getAllUsers()
    .then((users) => dispatch(receiveAllUsers(users)))
    .catch((err) => console.log(err));
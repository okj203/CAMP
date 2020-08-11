import axios from "axios";

export const getUserInfo = (user_id) => {
  const userInfo = axios.get(`/api/users/${user_id}`);
  return userInfo;
};

import axios from "axios";

export const getAllUsers = () => {
  const allUsers = axios.get(`/api/users`);
  return allUsers;
};

export const getUserInfo = (teacher_id) => {
  const userInfo = axios
    .get(`/api/users/${teacher_id}`)
    .then((user) => user)
    .catch((err) => err);

  //   console.log("user info", userInfo)
  return userInfo;
};

import axios from "axios";

export const getUserReviews = (id) => {
  return axios.get(`/api/reviews/user/${id}`);
};

export const writeReview = (id) => {
  return axios.post(`/api/reviews/user/${id}`);
};

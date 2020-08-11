import axios from "axios";

export const getUserReviews = (teacher_id) => {
  return axios.get(`/api/reviews/${teacher_id}`);
};

export const writeReview = (teacher_id) => {
  return axios.post(`/api/reviews/${teacher_id}`);
};

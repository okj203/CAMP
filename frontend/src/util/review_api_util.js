import axios from "axios";

export const getUserReviews = (teacher_id) => {
  const reviews = axios.get(`/api/reviews/${teacher_id}`);
  // console.log(reviews)
  return reviews
};

export const writeReview = (teacher_id) => {
  return axios.post(`/api/reviews/${teacher_id}`);
};

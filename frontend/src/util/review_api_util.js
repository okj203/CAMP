import axios from "axios";

export const getUserReviews = (teacher_id) => {
  const reviews = axios.get(`/api/reviews/${teacher_id}`);
  // console.log(reviews)
  return reviews
};

export const writeReview = (data) => {
  console.log(data)
  console.log(data.teacher_id)
  console.log(data.teacher_id.teacherId)
  return axios.post(`/api/reviews/${data.teacher_id}`, data);
};

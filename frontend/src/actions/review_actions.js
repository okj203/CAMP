import { getUserReviews, writeReview } from "../util/review_api_util";

export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";

export const receiveUserReviews = (reviews) => ({
  type: RECEIVE_USER_REVIEWS,
  reviews,
});

export const receiveNewReview = (review) => ({
  type: RECEIVE_NEW_REVIEW,
  review,
});

export const fetchUserReviews = (teacher_id) => (dispatch) =>
  getUserReviews(teacher_id)
    .then((reviews) => dispatch(receiveUserReviews(reviews)))
    .catch((err) => console.log(err));

export const composeReview = (data) => (dispatch) =>
  writeReview(data)
    .then((review) => dispatch(receiveNewReview(review)))
    .catch((err) => console.log(err));

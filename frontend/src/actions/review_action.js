import { getUserReviews, writeReview } from "../util/Review_api_util";

export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";

export const receiveUserReviews = (Reviews) => ({
  type: RECEIVE_USER_REVIEWS,
  Reviews,
});

export const receiveNewReview = (Review) => ({
  type: RECEIVE_NEW_REVIEW,
  Review,
});


export const fetchUserReviews = (id) => (dispatch) =>
  getUserReviews(id)
    .then((Reviews) => dispatch(receiveUserReviews(Reviews)))
    .catch((err) => console.log(err));

export const composeReview = (data) => (dispatch) =>
  writeReview(data)
    .then((Review) => dispatch(receiveNewReview(Review)))
    .catch((err) => console.log(err));

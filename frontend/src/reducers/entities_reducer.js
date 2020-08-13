import { combineReducers } from 'redux';
import ReviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    reviews: ReviewsReducer
})

export default entitiesReducer;
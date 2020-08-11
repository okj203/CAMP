import { combineReducers } from 'redux';
import ReviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    reviews: ReviewsReducer
})

export default entitiesReducer;
import { combineReducers } from 'redux';
import ReviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: ReviewsReducer
})

export default entitiesReducer;
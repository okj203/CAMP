import { combineReducers } from 'redux';
import ReviewsReducer from './reviews_reducer';
import EventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
    reviews: ReviewsReducer,
    events: EventsReducer
})

export default entitiesReducer;
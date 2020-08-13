import { combineReducers } from 'redux';
import ReviewsReducer from './reviews_reducer';
import EventsReducer from './events_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    reviews: ReviewsReducer,
    events: EventsReducer,
    users: usersReducer,

})

export default entitiesReducer;
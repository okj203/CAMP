import {RECEIVE_USER_EVENTS, RECEIVE_NEW_EVENT} from "../actions/event_actions";

const EventsReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER_EVENTS:
      debugger;
      return Object.assign({}, action.events.data)
    case RECEIVE_NEW_EVENT:
      debugger;
      return Object.assign(newState, { [action.event.data._id]: action.event.data})
    default:
      return state;
  }
};

export default EventsReducer;
import * as EventUtil from '../util/event_api_util'

export const RECEIVE_USER_EVENTS = "RECIEVE_USER_EVENTS"
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT"


const receiveUserEvents = (events) => ({
    type: RECEIVE_USER_EVENTS,
    events
})

const receiveNewEvent = (event) => ({
    type: RECEIVE_NEW_EVENT,
    event
})

export const fetchUserEvents = (userId) => dispatch => (
    EventUtil.fetchUserEvents(userId)
        .then((events) => dispatch(receiveUserEvents(events)))
)

export const fetchTeacherEvents = (teacherId) => dispatch => (
    EventUtil.fetchTeacherEvents(teacherId)
    .then((events) => dispatch(receiveUserEvents(events)))
)

export const fetchNewEvent = (event) => dispatch => (
    EventUtil.fetchNewEvent(event)
        .then((event) => dispatch(receiveNewEvent(event)))
)
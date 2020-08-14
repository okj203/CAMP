import axios from "axios"

export const fetchUserEvents = (userId) => (
    axios.get(`/api/events/${userId}`)
);

export const fetchNewEvent = (event) => {
    return axios.post(`/api/events/${event.teacher_id}`, event)
}


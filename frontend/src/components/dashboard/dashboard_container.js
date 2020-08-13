// import React from "react"
import {connect} from "react-redux"
import Dashboard from "./dashboard"
import {fetchUserEvents} from "../../actions/event_actions"

const msp = (state) => ({
    user: state.session.user,
    events: Object.values(state.entities.events)
})

const mdp = (dispatch) => ({
    fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
})

export default connect(msp, mdp)(Dashboard)
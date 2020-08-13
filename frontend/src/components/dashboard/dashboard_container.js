import React from "react"
import {connect} from "react-redux"
import Dashboard from "./dashboard"

const msp = (state) => ({
    user: state.session.user
})

const mdp = (dispatch) => ({
    
})

export default connect(msp, mdp)(Dashboard)
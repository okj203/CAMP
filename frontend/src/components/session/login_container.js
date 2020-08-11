import React from "react"
import SessionForm from "./session_form";
import {connect} from "react-redux";
import {receiveUserSignIn} from "../../actions/session_actions";



const msp = (state, oP) => ({
    errors: state.errors.session,
    formType: "Login",
});

const mdp = (dispatch) => ({
    processForm: (currentUser) => dispatch(receiveUserSignIn(currentUser)),
});

export default connect(msp, mdp)(SessionForm);




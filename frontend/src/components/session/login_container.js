import SessionForm from "./session_form";
import {connect} from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";


const msp = (state) => ({
    errors: state.errors.session,
    formType: "Login",
    
});

const mdp = (dispatch) => ({
    processForm: (currentUser) => dispatch(login(currentUser)),
    login: (currentUser) => dispatch(login(currentUser)), 
    clearErrors:  () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);




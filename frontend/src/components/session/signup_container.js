import { connect } from 'react-redux';
import {signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = state => ({
  formType: 'Sign Up',
  signup: true,
  errors: state.errors.session
});

const mdtp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
  // clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SessionForm);


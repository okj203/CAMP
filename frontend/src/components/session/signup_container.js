import { connect } from 'react-redux';
import {signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = state => ({
  formType: 'Sign Up',
  signup: true,
  errors: state.errors.session,
});

const mdtp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  // clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SessionForm);


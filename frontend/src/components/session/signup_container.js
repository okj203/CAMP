import { connect } from 'react-redux';
<<<<<<< HEAD
import { signup, login } from '../../actions/session_actions';
=======
import {signup, login, clearErrors } from '../../actions/session_actions';
>>>>>>> 79066c88cce4526700abc5f19563535b9d8e0343
import SessionForm from './session_form';

const mstp = state => ({
  formType: 'Sign Up',
  signup: true,
  errors: state.errors.session
});

const mdtp = dispatch => ({
  processForm: user => dispatch(signup(user)),
<<<<<<< HEAD
  login: user => dispatch(login(user))
=======
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())

>>>>>>> 79066c88cce4526700abc5f19563535b9d8e0343
});

export default connect(mstp, mdtp)(SessionForm);


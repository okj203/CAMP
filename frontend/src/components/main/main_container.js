import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions'
import MainForm from './main_page';

const mstp = state => ({
  form: {
    username: '',
    email: '',
    password: '',
    accountType: ''
  }
});

const mdtp = dispatch => ({
  signup: user => dispatch(signup(user)),
  // clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(MainForm)
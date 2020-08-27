import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { composeReview } from '../../actions/review_actions'
import { clearErrors } from '../../actions/session_actions';

const mapState = state => {
    return {
        review: {
            rating: '',
            body: ''
        },
        errors: state.errors.session
    }
}

const mapDispatch = dispatch => {
    return {
        composeReview: review => dispatch(composeReview(review)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapState, mapDispatch)(ReviewForm);
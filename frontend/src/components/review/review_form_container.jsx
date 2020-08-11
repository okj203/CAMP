import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { composeReview } from '../../actions/review_actions';

const mapState = state => {
    return {
        review: {
            rating: '',
            description: ''
        }
    }
}

const mapDispatch = dispatch => {
    return {
        composeReview: review => dispatch(composeReview(review))
    }
}

export default connect(mapState, mapDispatch)(ReviewForm);
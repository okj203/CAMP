import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mapState = state => {
    return {
        review: {
            rating: '',
            body: ''
        }
    }
}

const mapDispatch = dispatch => {
    return {
        composeReview: review => dispatch(composeReview(review))
    }
}

export default connect(mapState, mapDispatch)(ReviewForm);
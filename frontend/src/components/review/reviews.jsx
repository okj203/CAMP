import React from "react";
import { withRouter } from "react-router-dom";

class Reviews extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews();
    }

    render(){
       if(this.state.reviews.length === 0){
           return (
               <div>There are no reviews</div>
           )
       } else {
        return (
          <div className="reviews-index">
            <h2 className="reviews-header">Student reviews on the teacher</h2>
            {this.state.reviews.map((review, idx) => (
              <ul className="each-review">
                <div key={idx} text={review.description}></div>
              </ul>
            ))}
            <ReviewFormContainer />
          </div>
        );
       }
    }
}

export default Reviews;
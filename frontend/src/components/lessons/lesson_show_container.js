import { connect } from "react-redux";
// import { logout } from "../../actions/session_actions";

import Lesson from "./lesson_show";

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    lessonId: ownProps.match.params.lesson_id,
  };
};

export default connect(mapStateToProps)(Lesson);

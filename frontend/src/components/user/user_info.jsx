import React from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../../actions/user_actions";
// import { logout } from "../../actions/session_actions";
// import { Link } from "react-router-dom";
// import watercolor from "../../images/watercolor.png";
// import "./users.scss";

export class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { teacher_id } = this.props;
    this.props.fetchUserInfo(teacher_id);
  }

  render() {
    // console.log("user info", props)
    // const id = props ? props.id : null;
    return (
      <div>
        <h2>User Info</h2>
      </div>
    );
  }
}

{
  /* <div className="teachers-index-container">
  <img alt="watercolor" className='watercolor' src={watercolor} />
  <div className="index-header">
    <div className="index-navbar">
      <Link className="dash-btn" to="/dashboard">
        Dashboard
              </Link>
      <button className="logout-btn" onClick={this.props.logout}>
        Log out
      </button>
    </div>
  </div>
</div> */
}

const mapStateToProps = (state, ownProps) => ({
  info: state.entities.users.info,
  // teacher_id: ownProps.match.params.teacher_id
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (teacher_id) => dispatch(fetchUserInfo(teacher_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

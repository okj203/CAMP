import React from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../../actions/user_actions";

export class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { teacher_id } = this.props;
    this.props.fetchUserInfo(teacher_id);
  }

  render() {
    return (
      <div>
        <h2>User Info</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.entities.users.info
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (teacher_id) => dispatch(fetchUserInfo(teacher_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

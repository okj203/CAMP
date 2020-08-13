import React from 'react'
import { connect } from 'react-redux'
import { fetchUserInfo } from '../../actions/user_actions'

export class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { teacher_id } = this.props;
    this.props.fetchUserInfo(teacher_id)
  }

  render() {
    // console.log("user info", props)
    // const id = props ? props.id : null;
    return (
      <div>
        <h2>User Info</h2>
        {/* <h2>{id}</h2> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  info: state.entities.users.info,
  // teacher_id: ownProps.match.params.teacher_id
})

const mapDispatchToProps = dispatch => {
  return {
    fetchUserInfo: teacher_id => dispatch(fetchUserInfo(teacher_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
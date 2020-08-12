import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../../actions/user_actions';

export class UserIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    // console.log("user info", props)
    const { users } = this.props
    return (
      <div>
        <ul>
          {/* {users.map(user => (
                        user.username
                    ))} */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.entities.reviews
})

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)
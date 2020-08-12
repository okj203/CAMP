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
    console.log(users)
    if(users) {
    return (
      <div>
        <ul>
          <h1> HELLOO </h1>
          {/* {users.map(user => (
                        user.email
                    ))} */}
        </ul>
      </div>
    )}
  }
}

const mapStateToProps = (state) => ({
  users: state.entities.users
})

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)
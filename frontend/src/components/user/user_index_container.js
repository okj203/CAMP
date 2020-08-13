import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../../actions/user_actions';
import { Link } from 'react-router-dom';
import './users.scss'
// import image from "../../images/jess-bailey-l3N9Q27zULw-unsplash.jpg"

export class UserIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  showUser(user, idx) {
    if (user.accountType === "teacher")
    return(
      <ul>
        <li>{user.email}</li>
        <li>{user.fname}</li>
        <li>{user.lname}</li>
        <Link to={`/users/${user._id}`}> View Teacher Profile </Link>
      </ul>
    )
  }

  render() {
    // console.log("user info", props)
    const { users } = this.props
    console.log(users)
    if(users.length) {
      return (
        <div className="teachers-index-outter">
          <div className="index-header">
            <h1 className="index-title"> CAMP Teachers </h1>
            {/* <img className="index-header-image" src={image}/> */}
          </div>
          <div className="teacher-index-inner">
              {users.map((user, idx)=> (
                <div className="teacers-index-list">
                  {this.showUser(user, idx)}
                </div>))}
          </div>
        </div>
      )} else {
        return <h1>ELSE</h1>
      }
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
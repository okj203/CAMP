import React from 'react';
import './session.scss';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      password2: "",
      fname: "",
      lname: "",
      accountType: "student"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@gmail.com',
      password: '123456'
    }
    return this.props.login(demoUser)
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  signUp() {
    const {password2, fname, lname} = this.props.errors
    return (
      <>
          <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password"/>
          <p className="session-errors">{password2}</p>
          <input type="text" value={this.state.fname} onChange={this.update("fname")} placeholder="First Name"/>
          <p className="session-errors">{fname}</p>
          <input type="text" value={this.state.lname} onChange={this.update("lname")} placeholder="Last Name"/>
          <p className="session-errors">{lname}</p>
        <label className="account-label">Account Type:
          <select className="select-label" onChange={this.update("accountType")} value={this.state.accountType}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            {/* <option value="parent">Parent</option> */}
          </select>
        </label>
      </>
    )
  }



  render() {
    const loginTag = (
      <a className='tag' href="#/login">Login now</a>
    );

    const signupTag = (
      <a className='tag' href="#/signup">Sign up now</a>
    );

    const {email, password} = this.props.errors

    return (
      <div className="new-session-form">
        <div className="session-header">
          <a href="#/">
            <h1 className='logo-text'>CAMP</h1>
          </a>
        </div>
        <div className="container">
          <form className="session-form" onSubmit={this.handleSubmit}>
              <p className="session-type">{this.props.formType}</p>
              <input type="text" value={this.state.email} onChange={this.update("email")} placeholder='Email' />
              <p className="session-errors">{email}</p>
              <input type="password" value={this.state.password} onChange={this.update("password")} placeholder='Password' />
              <p className="session-errors">{password}</p>
            {this.props.signup ? this.signUp() : null}
            <div className="session-btn">
              <button>{this.props.formType}</button>
              <button onClick={this.handleDemo}>Demo User</button>
            </div>
            <div className='toggle-session'>
              <div className='toggle-text'>{this.props.formType === 'Sign Up' ? 'Already a camper?' : 'Become part of the CAMP Family?'}</div>
              {this.props.formType === 'Sign Up' ? loginTag : signupTag}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
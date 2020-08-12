import React from 'react';

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
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  signUp() {
    return (
      <div>
        <label>Confirm Password:
          <input type="password" value={this.state.password2} onChange={this.update("password2")} />
        </label>
        <label>First Name:
          <input type="text" value={this.state.fname} onChange={this.update("fname")} />
        </label>
        <label>Last Name:
          <input type="text" value={this.state.lname} onChange={this.update("lname")} />
        </label>
        <label>Account Type:
          <select onChange={this.update("accountType")} value={this.state.accountType}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
          </select>
        </label>
      </div>
    )
  }



  render() {
    return (
      <div className="New Session Form">
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          {this.props.signup ? this.signUp() : null}

          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
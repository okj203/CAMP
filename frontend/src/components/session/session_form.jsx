import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      accountType: "student"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    //.then(this.props.history.push("/"));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  // signUp() {
  //   return(
  //     <div>
  //       <label>Confirm Password:
  //         <input type="text" value={this.state.password2} onChange={this.update("password2")} />
  //       </label>
  //       <label>Username:
  //         <input type="text" value={this.state.username} onChange={this.update("username")}/>
  //       </label>
  //       <label>Account Type:
  //         <select onChange={this.update("accountType")} value={this.state.accountType}>
  //           <option value="student">Student</option>
  //           <option value="teacher">Teacher</option>
  //           <option value="parent">Parent</option>
  //         </select>        
  //       </label>
  //     </div>
  //   )
  // }



  render() {
    // debugger
    return(
      <div className="New Session Form">
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")}/>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <div>
            <label>Confirm Password:
          <input type="text" value={this.state.password2} onChange={this.update("password2")} />
            </label>
            <label>Username:
          <input type="text" value={this.state.username} onChange={this.update("username")} />
            </label>
            <label>Account Type:
          <select onChange={this.update("accountType")} value={this.state.accountType}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </label>
          </div>

          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
import React from 'react';
import Navbar from '../nav/navbar_form.jsx';
import splash_img from '../../images/splash_image.jpg';
import './main.scss';

class MainPage extends React.Component {
  constructor(props){
    super(props)

    this.handleInput = this.handleInput.bind(this);
    this.state = this.props.form;

  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  // componentDidMount() {
  //   this.props.clearErrors()
  // }


  render() {
    // const signup = (
    //   <div>
    //     <label>Confirm Password:
    //       <input type="text" value={this.state.password2} onChange={this.update("password2")} />
    //     </label>
    //     <label>Username:
    //       <input type="text" value={this.state.username} onChange={this.update("username")} />
    //     </label>
    //     <label>Account Type:
    //       <select onChange={this.update("accountType")} value={this.state.accountType}>
    //         <option value="student">Student</option>
    //         <option value="teacher">Teacher</option>
    //         <option value="parent">Parent</option>
    //       </select>
    //     </label>
    //   </div>
    // )

    return (
      <div className='main-page-container'>
        <Navbar className='navbar' />
        <div className='splash-container'>
          <img className='splash-img' src={splash_img} />
        </div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          {this.props.signup ? this.signUp() : null}

          <button>{this.props.formType}</button>
        </form> */}
        <footer>Copyright &copy; 2020 CAMP</footer>
      </div>
    );
  }
}

export default MainPage;

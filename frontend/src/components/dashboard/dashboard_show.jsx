import React from "react";
import Navbar from "../nav/navbar_form.jsx";
import splash_img from "../../images/splash_image.jpg";
import "./dashboard.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this);
    this.state = this.props.form;

  }

  // handleInput(type) {
  //   return (e) => {
  //     this.setState({ [type]: e.currentTarget.value });
  //   };
  // }

  // update(field) {
  //   return e => this.setState({ [field]: e.target.value });
  // }

  render() {
    return (
      <div className='main-page-container'>
        {/* <Navbar className='navbar' /> */}
        <div className='splash-container'>
          <img className='splash-img' src={splash_img} />
        </div>
        <h1>HELLOOOO</h1>
        <footer>Copyright &copy; 2020 CAMP</footer>
      </div>
    );
  }
}

export default Dashboard;

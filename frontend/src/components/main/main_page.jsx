import React from "react";
import Navbar from "../nav/navbar_container";
import splash_img from "../../images/splash_image.jpg";
import "./main.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className='main-page-container'>
        <Navbar className='navbar' />
        <div className='splash-container'>
          <img className='splash-img' src={splash_img} />
        </div>
        <footer>Copyright &copy; 2020 CAMP</footer>
      </div>
    );
  }
}

export default MainPage;

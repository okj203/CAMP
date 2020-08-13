import React from "react";
import Navbar from "../nav/navbar_container";
import splash_img from "../../images/splash_image4.jpg";
import "./main.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className='main-page-container'>
        <Navbar className='navbar' />
        <div className='splash-container'>
          <img className='splash-img' src={splash_img} />
            <h1 className='motto'>CAMP creates a connection between
            children and the world by
providing a global learning experience.</h1>
        </div>
        <footer>Copyright &copy; 2020 CAMP</footer>
      </div>
    );
  }
}

export default MainPage;

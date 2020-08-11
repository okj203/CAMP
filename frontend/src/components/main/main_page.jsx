import React from "react";
import Navbar from "../nav/navbar_form.jsx";
import splash_img from "../../images/splash_image.jpg";
import "./main.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className="test">
        <Navbar className="navbar" />
        <div className="splash-container">
          <img src={splash_img} alt="spash_img"/>
        </div>
        <footer>Copyright &copy; 2020 CAMP</footer>
      </div>
    );
  }
}

export default MainPage;

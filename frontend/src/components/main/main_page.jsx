import React from "react";
import Navbar from "../nav/navbar_form";
import splash_img from "../../images/splash_image4.jpg";
import "./main.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import profile_1 from "../../images/profile_1.png";
import profile_2 from "../../images/profile_2.png";
import profile_3 from "../../images/profile_3.png";
import profile_4 from "../../images/profile_4.png";

import book from "../../images/book.png";
import calendar from "../../images/calendar.png";
import certificate from "../../images/certificate.png";
import children from "../../images/children.png";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-container">
        <Navbar className="navbar" />
        <div className="splash-container">
          <img alt="splash_img" className="splash-img" src={splash_img} />
          <h1 className="motto">
            CAMP creates a connection between children and the world by
            providing a global learning experience.
          </h1>
        </div>

        <div className="add-container">
          <div className="add-inner">
            <img src={book} className="add" alt="book" />
            <h3>Global Learning</h3>
            <p>Broaden your horizon!</p>
          </div>

          <div className="add-inner">
            <img src={calendar} className="add" alt="calendar" />
            <h3>Flexible Schedule</h3>
            <p>
              Be your own boss <br />
              and set your <br />
              own schedule!
            </p>
          </div>

          <div className="add-inner">
            <img src={certificate} className="add" alt="certificate" />
            <h3>Easy Preparation</h3>
            <p>
              We provide your <br />
              lesson materials!
            </p>
          </div>
        </div>

        <div className="children-container">
          <img className="children" src={children} alt="children" />

          <div className="card-container">
            <div className="card">
              <div className="card-front">Who We Are</div>
              <div className="card-back">We are four software engineers, who utilize EdTech to improve remote learning experience during the COVID-19 pandemic.</div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-front">What We Believe</div>
              <div className="card-back">We believe in multi-senses education theory to provide students a learning environment with maximized langauge exposure.</div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-front">What We Do</div>
              <div className="card-back">We provide authentic language learning experience. Students will be introduced to our teachers across the world.</div>
            </div>
          </div>
        </div>

        <div className="team-intro">TEAM CAMP</div>

        <div className="profile-container">
          <div className="profile-person">
            <img src={profile_1} className="profile" alt="cathy" />
            <p className="name">Ock Kyung / Cathy Jung</p>
            <div className="icon-container">
              <a href="https://okj203.github.io/">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
              </a>
              <a href="https://www.linkedin.com/in/ock-kyung-cathy-jung-18a66296/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
              <a href="https://github.com/okj203">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://angel.co/u/ock-kyung-jung">
                <FontAwesomeIcon className="icon" icon={faAngellist} />
              </a>
            </div>
          </div>
          <div className="profile-person">
            <img src={profile_2} className="profile" alt="anthony" />
            <p className="name">Anthony Cruz</p>
            <div className="icon-container">
              <a href="https://anthonyecruz.com/">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
              </a>
              <a href="https://www.linkedin.com/in/anthonyecruz/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
              <a href="https://github.com/Anthony-E-Cruz">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://angel.co/u/anthony-cruz-13">
                <FontAwesomeIcon className="icon" icon={faAngellist} />
              </a>
            </div>
          </div>
          <div className="profile-person">
            <img src={profile_3} className="profile" alt="mac" />
            <p className="name">Mackenzie Young</p>
            <div className="icon-container">
              <a href="https://mac9330.github.io/">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
              </a>
              <a href="https://www.linkedin.com/post-inspector/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
              <a href="https://github.com/mac9330/">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://angel.co/u/mac-young-1">
                <FontAwesomeIcon className="icon" icon={faAngellist} />
              </a>
            </div>
          </div>
          <div className="profile-person">
            <img src={profile_4} className="profile" alt="paul" />
            <p className="name">Paul Gonzalez</p>
            <div className="icon-container">
              <a href="https://paulg21.github.io/">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
              </a>
              <a href=" https://www.linkedin.com/in/paul-gonzalez-a17631192/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
              <a href="https://github.com/PaulG21">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://angel.co/u/paul-gonzalez-8">
                <FontAwesomeIcon className="icon" icon={faAngellist} />
              </a>
            </div>
          </div>
        </div>
        <footer>Copyright &copy; 2020 CAMP</footer>
      </div>
    );
  }
}

export default MainPage;

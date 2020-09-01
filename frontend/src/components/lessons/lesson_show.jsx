import React from "react";
import ReactPlayer from "react-player";
import "./lessons.scss";
import { Link } from "react-router-dom";
import "../user/users.scss";

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcard1: "",
      flashcard2: "",
      flashcard3: "",
      flashcard4: "",
      flashcard5: "",
      worksheet: "",
      url: "",
    };
  }

  choseContent() {
    const { lessonId } = this.props;
    // console.log(lessonId);
    if (parseInt(lessonId) === 1) {
      this.links = ({url: "https://www.youtube.com/watch?v=EgzHCuzVKb8",
      flashcard1: "https://camp-mern.s3.amazonaws.com/A.png",
      flashcard2: "https://camp-mern.s3.amazonaws.com/B.png",
      flashcard3: "https://camp-mern.s3.amazonaws.com/C.png",
      flashcard4: "https://camp-mern.s3.amazonaws.com/D.png",
      flashcard5: "https://camp-mern.s3.amazonaws.com/E.png",
      worksheet: "https://camp-mern.s3.amazonaws.com/worksheet.png"});
    } else if (parseInt(lessonId) === 2) {
      this.links = ({url: "https://www.youtube.com/watch?v=QcqPN727NZA",
      flashcard1: "https://camp-mern.s3.amazonaws.com/lesson2/1.png",
      flashcard2: "https://camp-mern.s3.amazonaws.com/lesson2/2.png",
      flashcard3: "https://camp-mern.s3.amazonaws.com/lesson2/3.png",
      flashcard4: "https://camp-mern.s3.amazonaws.com/lesson2/4.png",
      flashcard5: "https://camp-mern.s3.amazonaws.com/E.png",
      worksheet: "https://camp-mern.s3.amazonaws.com/lesson2/worksheet2.png"});
    } else if (parseInt(lessonId) === 3) {
      this.links = ({url: "www.youtube.com/watch?v=7k4uBAiJsMM",
      flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson3/1.png",
      flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson3/2.png",
      flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson3/3.png",
      flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson3/4.png",
      flashcard5:
        "https://camp-mern.s3.amazonaws.com/lesson3/5.png",
      worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson3/worksheet3.png"});
    } else if (parseInt(lessonId) === 4) {
      this.links = ({url: "www.youtube.com/watch?v=ybt2jhCQ3lA",
      flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson4/1.png",
      flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson4/2.png",
      flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson4/3.png",
      flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson4/4.png",
      flashcard5:
        "https://camp-mern.s3.amazonaws.com/lesson4/5.png",
      worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson4/worksheet4.png"});
    } else if (parseInt(lessonId) === 5) {
      this.links = ({url: "www.youtube.com/watch?v=CXKj7bm4Ops",
      flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson5/1.png",
      flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson5/2.png",
      flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson5/3.png",
      flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson5/4.png",
      flashcard5:
        "https://camp-mern.s3.amazonaws.com/lesson5/5.png",
      worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson5/worksheet5.png"});
    }
    return (
      <div className="lessons-container">
        <div className="video-container">
          <h1 className="lesson-title-main">Lesson {lessonId}</h1>
          <div>
            <ReactPlayer url={this.links.url} />
          </div>
        </div>

        <div className="flash-lesson">
          <div className="flashcard-box">
            <h2 className="lesson-title">Flashcards</h2>
            <div className="flashcard-container">
              <img
                alt="lesson"
                src={this.links.flashcard1}
                className="flashcard"
              />
              <img
                alt="lesson"
                src={this.links.flashcard2}
                className="flashcard"
              />
              <img
                alt="lesson"
                src={this.links.flashcard3}
                className="flashcard"
              />
              <img
                alt="lesson"
                src={this.links.flashcard4}
                className="flashcard"
              />
              <img
                alt="lesson"
                src={this.links.flashcard5}
                className="flashcard"
              />
            </div>
          </div>
          <div className="lesson-box">
            <h2 className="worksheet-title">Worksheet</h2>
            <img
              alt="lesson"
              src={this.links.worksheet}
              className="worksheet"
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
        const navBtns = (
          <div className="teachers-index-container">
            <div className="index-header">
              <div className="index-navbar">
                <Link className="dash-btn" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="dash-btn" to="/teachers">
                  Teachers
                </Link>
                <button className="logout-btn" onClick={this.props.logout}>
                  Log out
                </button>
              </div>

              <h1 className="index-title"> Camper's Lesson </h1>
            </div>
          </div>
        );

    return (
      <div>
        {navBtns}
        <div className="lesson">{this.choseContent()}</div>
        <div className="download-btn-outer">
          <a className="download-btn" href="https://www.eslkidstuff.com/">
            Download
          </a>
        </div>
      </div>
    );
  }
}

export default Lesson;

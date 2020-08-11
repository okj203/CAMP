import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/camp_logo.png";
import '/lessons.css'

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
    };
  }

  choseContent() {
    const { lessonId } = this.props;
    console.log(lessonId);
    if (parseInt(lessonId) === 1) {
      this.state.flashcard1 = "https://camp-mern.s3.amazonaws.com/A.png";
      this.state.flashcard2 = "https://camp-mern.s3.amazonaws.com/B.png";
      this.state.flashcard3 = "https://camp-mern.s3.amazonaws.com/C.png";
      this.state.flashcard4 = "https://camp-mern.s3.amazonaws.com/D.png";
      this.state.flashcard5 = "https://camp-mern.s3.amazonaws.com/E.png";
      this.state.worksheet = "https://camp-mern.s3.amazonaws.com/worksheet.png";
    } else if (parseInt(lessonId) === 2) {
      this.state.flashcard1 =
        "https://camp-mern.s3.amazonaws.com/lesson2/1.png";
      this.state.flashcard2 =
        "https://camp-mern.s3.amazonaws.com/lesson2/2.png";
      this.state.flashcard3 =
        "https://camp-mern.s3.amazonaws.com/lesson2/3.png";
      this.state.flashcard4 =
        "https://camp-mern.s3.amazonaws.com/lesson2/4.png";
      this.state.flashcard5 = "https://camp-mern.s3.amazonaws.com/E.png";
      this.state.worksheet =
        "https://camp-mern.s3.amazonaws.com/lesson2/worksheet2.png";
    } else if (parseInt(lessonId) === 3) {
      this.state.flashcard1 =
        "https://camp-mern.s3.amazonaws.com/lesson3/1.png";
      this.state.flashcard2 =
        "https://camp-mern.s3.amazonaws.com/lesson3/2.png";
      this.state.flashcard3 =
        "https://camp-mern.s3.amazonaws.com/lesson3/3.png";
      this.state.flashcard4 =
        "https://camp-mern.s3.amazonaws.com/lesson3/4.png";
      this.state.flashcard5 =
        "https://camp-mern.s3.amazonaws.com/lesson3/5.png";
      this.state.worksheet =
        "https://camp-mern.s3.amazonaws.com/lesson3/worksheet3.png";
    } else if (parseInt(lessonId) === 4) {
      this.state.flashcard1 =
        "https://camp-mern.s3.amazonaws.com/lesson4/1.png";
      this.state.flashcard2 =
        "https://camp-mern.s3.amazonaws.com/lesson4/2.png";
      this.state.flashcard3 =
        "https://camp-mern.s3.amazonaws.com/lesson4/3.png";
      this.state.flashcard4 =
        "https://camp-mern.s3.amazonaws.com/lesson4/4.png";
      this.state.flashcard5 =
        "https://camp-mern.s3.amazonaws.com/lesson4/5.png";
      this.state.worksheet =
        "https://camp-mern.s3.amazonaws.com/lesson4/worksheet4.png";
    } else if (parseInt(lessonId) === 5) {
      this.state.flashcard1 =
        "https://camp-mern.s3.amazonaws.com/lesson5/1.png";
      this.state.flashcard2 =
        "https://camp-mern.s3.amazonaws.com/lesson5/2.png";
      this.state.flashcard3 =
        "https://camp-mern.s3.amazonaws.com/lesson5/3.png";
      this.state.flashcard4 =
        "https://camp-mern.s3.amazonaws.com/lesson5/4.png";
      this.state.flashcard5 =
        "https://camp-mern.s3.amazonaws.com/lesson5/5.png";
      this.state.worksheet =
        "https://camp-mern.s3.amazonaws.com/lesson5/worksheet5.png";
    }
    return (
      <div>
        <img src={this.state.worksheet} className="worksheet" />
        <img src={this.state.flashcard1} className="flashcard" />
        <img src={this.state.flashcard2} className="flashcard" />
        <img src={this.state.flashcard3} className="flashcard" />
        <img src={this.state.flashcard4} className="flashcard" />
        <img src={this.state.flashcard5} className="flashcard" />
      </div>
    );
  }

  render() {
    return <div className="lesson">{this.choseContent()}</div>;
  }
}

export default Lesson;

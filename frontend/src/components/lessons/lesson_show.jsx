import React from "react";
import ReactPlayer from "react-player";
import "./lessons.scss";

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
      this.setState({url: "https://www.youtube.com/watch?v=EgzHCuzVKb8"});
      this.setState({flashcard1: "https://camp-mern.s3.amazonaws.com/A.png"});
      this.setState({flashcard2: "https://camp-mern.s3.amazonaws.com/B.png"});
      this.setState({flashcard3: "https://camp-mern.s3.amazonaws.com/C.png"});
      this.setState({flashcard4: "https://camp-mern.s3.amazonaws.com/D.png"});
      this.setState({flashcard5: "https://camp-mern.s3.amazonaws.com/E.png"});
      this.setState({worksheet: "https://camp-mern.s3.amazonaws.com/worksheet.png"});
    } else if (parseInt(lessonId) === 2) {
      this.setState({url: "https://www.youtube.com/watch?v=QcqPN727NZA"});
      this.setState({flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson2/1.png"});
      this.setState({flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson2/2.png"});
      this.setState({flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson2/3.png"});
      this.setState({flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson2/4.png"});
      this.setState({flashcard5: "https://camp-mern.s3.amazonaws.com/E.png"});
      this.setState({worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson2/worksheet2.png"});
    } else if (parseInt(lessonId) === 3) {
      this.setState({url: "www.youtube.com/watch?v=7k4uBAiJsMM"});
      this.setState({flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson3/1.png"});
      this.setState({flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson3/2.png"});
      this.setState({flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson3/3.png"});
      this.setState({flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson3/4.png"});
      this.setState({flashcard5:
        "https://camp-mern.s3.amazonaws.com/lesson3/5.png"});
      this.setState({worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson3/worksheet3.png"});
    } else if (parseInt(lessonId) === 4) {
      this.setState({url: "www.youtube.com/watch?v=ybt2jhCQ3lA"});
      this.setState({flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson4/1.png"});
      this.setState({flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson4/2.png"});
      this.setState({flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson4/3.png"});
      this.setState({flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson4/4.png"});
      this.setState({flashcard5:
        "https://camp-mern.s3.amazonaws.com/lesson4/5.png"});
      this.setState({worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson4/worksheet4.png"});
    } else if (parseInt(lessonId) === 5) {
      this.setState({url: "www.youtube.com/watch?v=CXKj7bm4Ops"});
      this.setState({flashcard1:
        "https://camp-mern.s3.amazonaws.com/lesson5/1.png"});
      this.setState({flashcard2:
        "https://camp-mern.s3.amazonaws.com/lesson5/2.png"});
      this.setState({flashcard3:
        "https://camp-mern.s3.amazonaws.com/lesson5/3.png"});
      this.setState({flashcard4:
        "https://camp-mern.s3.amazonaws.com/lesson5/4.png"});
      this.setState({flashcard5:
        "https://camp-mern.s3.amazonaws.com/lesson5/5.png"});
      this.setState({worksheet:
        "https://camp-mern.s3.amazonaws.com/lesson5/worksheet5.png"});
    }
    return (
      <div className="lessons-container">
        <h1 className="lesson-title-main">Lesson {lessonId}</h1>
        <div>
          <ReactPlayer url={this.state.url} />
        </div>
        <h2 className="lesson-title">flashcards</h2>
        <div className="flashcard-container">
          <img alt="lesson" src={this.state.flashcard1} className="flashcard" />
          <img alt="lesson" src={this.state.flashcard2} className="flashcard" />
          <img alt="lesson" src={this.state.flashcard3} className="flashcard" />
          <img alt="lesson" src={this.state.flashcard4} className="flashcard" />
          <img alt="lesson" src={this.state.flashcard5} className="flashcard" />
        </div>
        <h2 className="lesson-title">Worksheet</h2>
        <img alt="lesson" src={this.state.worksheet} className="worksheet" />
      </div>
    );
  }

  render() {
    return <div className="lesson">{this.choseContent()}</div>;
  }
}

export default Lesson;

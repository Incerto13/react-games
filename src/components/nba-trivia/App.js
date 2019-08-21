import React, { Component } from "react";
import "./nbaTrivia.css";
import left_logo from "./images/nba-logo-left.jpeg";
import right_logo from "./images/nba-logo-right.jpeg";
import Quiz from "./Quiz";

class App extends Component {
  constructor() {
    super();

    this.state = {
      displayQuiz: false, // should only be true for initial mount
      quizSubmitted: false,
      lastQuizScore: "",
      resultMessage: ""
    };
  }

  handleClick = () => {
    if (this.state.quizSubmitted) {
      this.setState(
        {
          displayQuiz: false
        },
        () => {
          console.log(
            `displayQuiz has been changed to: ${this.state.displayQuiz}`
          );
        }
      );
    }
    this.startNewQuiz();
  };

  // display quiz after start button clicked
  startNewQuiz = () => {
    this.setState({
      displayQuiz: true,
      // if quiz was just completed, reset quizSubmitted to false
      quizSubmitted: false
    });
  };

  submitQuiz = score => {
    this.setState(
      {
        quizSubmitted: true,
        lastQuizScore: score
      },
      () => {
        this.resultMessage();
      }
    );
  };

  resultMessage = () => {
    const poor = `Hmmm... study harder next time, you got ${
      this.state.lastQuizScore
    } / 5 questions on that last quiz correct. `;
    const good = `Pretty good, you got ${
      this.state.lastQuizScore
    } / 5 questions on that last quiz correct.`;
    const great = `Congradulations, you got ${
      this.state.lastQuizScore
    } / 5 on that last quiz correct!`;
    let resultMessage = "";
    if (this.state.lastQuizScore <= 2) {
      resultMessage = poor;
    } else if (this.state.lastQuizScore === 3) {
      resultMessage = good;
    } else {
      resultMessage = great;
    }
    this.setState({
      resultMessage: resultMessage
    });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="column img-wrapper">
            <img id="theImage" alt="nba-logos" src={left_logo} />
          </div>
          <div className="column">
            <p id="header">NBA Trivia</p>
          </div>
          <div className="column img-wrapper">
            <img id="theImage" alt="nba-logos" src={right_logo} />
          </div>
        </div>

        <div className="body">
          {/* conditional rendering of start button
          Will display initially when displayQuiz is false and also 
          displayQuiz is still true but the quiz has been taken and then submitted 
          and the results are showing and quizSubmitted is true
        */}
          {(!this.state.displayQuiz || this.state.quizSubmitted) && (
            <button className="btn btn-primary" onClick={this.handleClick}>
              Start New Quiz
            </button>
          )}

          {/* conditional rendering of quiz result message only after quiz has been submitted */}
          {this.state.quizSubmitted && (
            <div>
              <br />
              {this.state.resultMessage}
            </div>
          )}

          {/* Quiz component which has each Question as its children */}
          {/* pass quizSubmitted prop to Quiz so that 
          QuizResults (within Quiz component) will only render when this is true */}
          {this.state.displayQuiz && (
            <Quiz
              submitQuiz={this.submitQuiz}
              quizSubmitted={this.state.quizSubmitted}
            />
          )}
          <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;

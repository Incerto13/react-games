import React, { Component } from "react";

class QuizResults extends Component {
  render() {
    return (
      <>
        <hr />
        <h4>Quiz Results</h4>
        <br />
        <div className="results-container">
          <div className="one-row flex">
            <div className="col-lg-4 col-sm-6">
              {/* Reduces size down to standard regardless of actual size if img */}
              <div className="thumbnail">
                <img alt="whatever" src={this.props.questionImages[0]} />
              </div>
            </div>

            <div className="col-lg-8 col-sm-12 resultText">
              <h6>Question 1</h6>
              <strong>Question: </strong>
              {this.props.questionPrompts[0]}
              <br />
              <strong>Your Answer: </strong>
              {this.props.answerChoices[0]}
              <br />
              <strong>Correct Answer: </strong>
              {this.props.correctAnswers[0]}
              <br />
              <strong>More Info: </strong>
              {this.props.questionFunFacts[0]}
              <br />
            </div>
          </div>
          <div className="one-row flex">
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <img alt="whatever" src={this.props.questionImages[1]} />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 resultText">
              <h6>Question 2</h6>
              <strong>Question: </strong>
              {this.props.questionPrompts[1]}
              <br />
              <strong>Your Answer: </strong>
              {this.props.answerChoices[1]}
              <br />
              <strong>Correct Answer: </strong>
              {this.props.correctAnswers[1]}
              <br />
              <strong>More Info: </strong>
              {this.props.questionFunFacts[1]}
              <br />
            </div>
          </div>
          <div className="one-row flex">
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <img alt="whatever" src={this.props.questionImages[2]} />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 resultText">
              <h6>Question 3</h6>
              <strong>Question: </strong>
              {this.props.questionPrompts[2]}
              <br />
              <strong>Your Answer: </strong>
              {this.props.answerChoices[2]}
              <br />
              <strong>Correct Answer: </strong>
              {this.props.correctAnswers[2]}
              <br />
              <strong>More Info: </strong>
              {this.props.questionFunFacts[2]}
              <br />
            </div>
          </div>

          <div className="one-row flex">
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <img alt="whatever" src={this.props.questionImages[3]} />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 resultText">
              <h6>Question 4</h6>
              <strong>Question: </strong>
              {this.props.questionPrompts[3]}
              <br />
              <strong>Your Answer: </strong>
              {this.props.answerChoices[3]}
              <br />
              <strong>Correct Answer: </strong>
              {this.props.correctAnswers[3]}
              <br />
              <strong>More Info: </strong>
              {this.props.questionFunFacts[3]}
              <br />
            </div>
          </div>

          <div className="one-row flex">
            <div className="col-lg-4 col-sm-6">
              <div className="thumbnail">
                <img alt="whatever" src={this.props.questionImages[4]} />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 resultText">
              <h6>Question 5</h6>
              <strong>Question: </strong>
              {this.props.questionPrompts[4]}
              <br />
              <strong>Your Answer: </strong>
              {this.props.answerChoices[4]}
              <br />
              <strong>Correct Answer: </strong>
              {this.props.correctAnswers[4]}
              <br />
              <strong>More Info: </strong>
              {this.props.questionFunFacts[4]}
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QuizResults;

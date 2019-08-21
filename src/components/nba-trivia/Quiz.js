import React, { Component } from "react";
import "../App.css";
import Question from "./Question";
import QuizResults from "./QuizResults";
import { questions } from "./tools/questions";
import { randomQuestionSet } from "./tools/randomQuestionSet";

let random = randomQuestionSet();

class Quiz extends Component {
  constructor(props) {
    super(props);
    let random = randomQuestionSet();

    this.state = {
      questions,
      answerChoices: ["", "", "", "", ""],
      score: 0,
      displayQuestions: true,
      quizSubmitted: false,
      correctAnswers: [
        questions[random[0]].correct,
        questions[random[1]].correct,
        questions[random[2]].correct,
        questions[random[3]].correct,
        questions[random[4]].correct
      ],
      questionPrompts: [
        questions[random[0]].prompt,
        questions[random[1]].prompt,
        questions[random[2]].prompt,
        questions[random[3]].prompt,
        questions[random[4]].prompt
      ],
      // just to clean up prop passing to children
      Q1Choices: questions[random[0]].choices,
      Q2Choices: questions[random[1]].choices,
      Q3Choices: questions[random[2]].choices,
      Q4Choices: questions[random[3]].choices,
      Q5Choices: questions[random[4]].choices,
      questionImages: [
        questions[random[0]].imageUrl,
        questions[random[1]].imageUrl,
        questions[random[2]].imageUrl,
        questions[random[3]].imageUrl,
        questions[random[4]].imageUrl
      ],
      questionFunFacts: [
        questions[random[0]].funFact,
        questions[random[1]].funFact,
        questions[random[2]].funFact,
        questions[random[3]].funFact,
        questions[random[4]].funFact
      ]
    };
  }

  refreshQuestions() {
    // refresh questions for each new quiz
    random = randomQuestionSet();
    this.setState(
      {
        answerChoices: ["", "", "", "", ""],
        score: 0,
        displayQuestions: true,
        quizSubmitted: false,
        correctAnswers: [
          questions[random[0]].correct,
          questions[random[1]].correct,
          questions[random[2]].correct,
          questions[random[3]].correct,
          questions[random[4]].correct
        ],
        questionPrompts: [
          questions[random[0]].prompt,
          questions[random[1]].prompt,
          questions[random[2]].prompt,
          questions[random[3]].prompt,
          questions[random[4]].prompt
        ],
        Q1Choices: questions[random[0]].choices,
        Q2Choices: questions[random[1]].choices,
        Q3Choices: questions[random[2]].choices,
        Q4Choices: questions[random[3]].choices,
        Q5Choices: questions[random[4]].choices,
        questionImages: [
          questions[random[0]].imageUrl,
          questions[random[1]].imageUrl,
          questions[random[2]].imageUrl,
          questions[random[3]].imageUrl,
          questions[random[4]].imageUrl
        ],
        questionFunFacts: [
          questions[random[0]].funFact,
          questions[random[1]].funFact,
          questions[random[2]].funFact,
          questions[random[3]].funFact,
          questions[random[4]].funFact
        ]
      },
      () => {
        this.shuffleAnswerChoices();
      }
    );
  }

  shuffleAnswerChoices = () => {
    this.setState({
      // random shuffle for small arrays so that question answers appear in random order
      Q1Choices: this.state.Q1Choices.sort(() => Math.random() - 0.5),
      Q2Choices: this.state.Q2Choices.sort(() => Math.random() - 0.5),
      Q3Choices: this.state.Q3Choices.sort(() => Math.random() - 0.5),
      Q4Choices: this.state.Q4Choices.sort(() => Math.random() - 0.5),
      Q5Choices: this.state.Q5Choices.sort(() => Math.random() - 0.5)
    });
  };

  componentDidMount() {
    this.shuffleAnswerChoices();
  }

  // updates 'answer sheet' each time a radio button is changed
  updateAnswers = (questNum, ans) => {
    // can't mutate state directly, must copy and edit
    const newAnswers = this.state.answerChoices;
    newAnswers[questNum] = ans;
    this.setState(({ answerChoices: newAnswers }) => {
      // console.log(this.state.answerChoices);
    });
  };

  gradeQuiz = () => {
    let newScore = 0;

    for (let i = 0; i < random.length; i++) {
      // console.log(
      //   `Answer choice for question ${i} is: ${this.state.answerChoices[i]}`
      // );
      // console.log(
      //   `Correct answer for question ${i} is: ${this.state.correctAnswers[i]}`
      // );

      if (this.state.answerChoices[i] === this.state.correctAnswers[i]) {
        newScore += 1;
      }
    }
    this.setState(
      {
        score: newScore,
        displayQuestions: false,
        displayQuizResults: true
      },
      () => {
        // only submit after score is updated
        this.props.submitQuiz(this.state.score);
      }
    );
  };

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        quizSubmitted: nextProps.quizSubmitted
      },
      () => {
        if (!this.state.quizSubmitted) {
          this.refreshQuestions();
        }
      }
    );
  }

  handleSubmit = event => {
    // confirmation box if there are unanswered questions
    if (this.state.answerChoices.includes("")) {
      // eslint-disable-next-line no-restricted-globals
      const submitIncomplete = confirm(
        "Are you sure you want to submit the quiz with unanswered questions?"
      );
      if (submitIncomplete) {
        this.gradeQuiz();
      } else {
        // don't submit
      }
    } else {
      this.gradeQuiz();
    }
  };

  render() {
    // console.log(`The answer choices were: ${this.state.answerChoices}`);
    // console.log(`The correct answers were: ${this.state.correctAnswers}`);
    // console.log(`The Score for that quiz was: ${this.state.score}`);
    console.log(`quizSubmitted: ${this.props.quizSubmitted}`);

    return (
      <>
        {!this.props.quizSubmitted && (
          <div>
            <h6>Question 1</h6>
            <Question
              questNum="0"
              prompt={this.state.questionPrompts[0]}
              choices={this.state.Q1Choices}
              updateAnswers={this.updateAnswers}
            />
            <hr />
            <h6>Question 2</h6>
            <Question
              questNum="1"
              prompt={this.state.questionPrompts[1]}
              choices={this.state.Q2Choices}
              updateAnswers={this.updateAnswers}
            />
            <hr />
            <h6>Question 3</h6>
            <Question
              questNum="2"
              prompt={this.state.questionPrompts[2]}
              choices={this.state.Q3Choices}
              updateAnswers={this.updateAnswers}
            />
            <hr />
            <h6>Question 4</h6>
            <Question
              questNum="3"
              prompt={this.state.questionPrompts[3]}
              choices={this.state.Q4Choices}
              updateAnswers={this.updateAnswers}
            />
            <hr />
            <h6>Question 5</h6>
            <Question
              questNum="4"
              prompt={this.state.questionPrompts[4]}
              choices={this.state.Q5Choices}
              updateAnswers={this.updateAnswers}
            />
            <button
              className="btn btn-primary submit"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <br />
          </div>
        )}
        {/* conditional display of quiz results */}
        {this.state.quizSubmitted && (
          <div className="quizResults">
            <QuizResults
              questionPrompts={this.state.questionPrompts}
              answerChoices={this.state.answerChoices}
              correctAnswers={this.state.correctAnswers}
              questionImages={this.state.questionImages}
              questionFunFacts={this.state.questionFunFacts}
            />
          </div>
        )}
      </>
    );
  }
}

export default Quiz;

import React, { Component } from "react";
import "../App.css";

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: ""
    };
  }

  handleChange = event => {
    this.setState({
      answer: event.target.value
    });
  };

  // this ensures that updateAnswers isn't called until local state has been updated
  componentDidUpdate(prevState) {
    // prevent firing upon mount
    if (this.state.answer !== "" && this.state.answer !== prevState.answer) {
      this.props.updateAnswers(this.props.questNum, this.state.answer);
    }
  }


  render() {
    return (
      <>
        <strong className="question">{this.props.prompt}</strong>
        <div className="radioLeft">
          <form>
            <label>
              <br />
              <input
                type="radio"
                className="radio-input"
                value={this.props.choices[0]}
                checked={this.state.answer === this.props.choices[0]}
                onChange={this.handleChange}
              />
              {this.props.choices[0]}
            </label>
            <br />

            <label>
              <input
                type="radio"
                className="radio-input"
                value={this.props.choices[1]}
                checked={this.state.answer === this.props.choices[1]}
                onChange={this.handleChange}
              />
              {this.props.choices[1]}
            </label>
            <br />

            <label>
              <input
                type="radio"
                className="radio-input"
                value={this.props.choices[2]}
                checked={this.state.answer === this.props.choices[2]}
                onChange={this.handleChange}
              />
              {this.props.choices[2]}
            </label>
            <br />

            <label>
              <input
                type="radio"
                className="radio-input"
                value={this.props.choices[3]}
                checked={this.state.answer === this.props.choices[3]}
                onChange={this.handleChange}
              />
              {this.props.choices[3]}
            </label>
            <br />
          </form>
        </div>
      </>
    );
  }
}

export default Question;

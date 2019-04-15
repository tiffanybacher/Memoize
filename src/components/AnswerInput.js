import React, { Component } from 'react';

class AnswerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.innerText
    });
  }

  handleClick = () => {
    this.props.findAnswer();
    this.props.getUserAnswer(this.state.userInput);
    this.props.getNextQuestion();
  }

  render() {
    return (
      <article className="AnswerInput">
        <h3>Answer:</h3>
        <div className="flex-container">
          <div 
            role="textbox"
            className="input"
            contentEditable="true"
            onInput={this.handleInput}
          >
          </div>
        </div>
          <div
            role="button"
            className="submit-btn"
            onClick={this.handleClick}>
            Submit 
          </div>
      </article>
    );
  }
}

export default AnswerInput;
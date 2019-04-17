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
    this.props.showAnswer();
    this.props.getUserAnswer(this.state.userInput);
  }

  render() {
    return (
      <article className="AnswerInput">
        <h3>What's your guess?</h3>
        <div className="flex-container">
          <div 
            role="textbox"
            className="input"
            contentEditable="true"
            onInput={this.handleInput}
          >
          </div>
        </div>
          <button
            role="button"
            className="submit-btn"
            onClick={this.handleClick}>
            Submit 
          </button>
      </article>
    );
  }
}

export default AnswerInput;